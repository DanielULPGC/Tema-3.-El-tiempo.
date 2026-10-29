/*
 * Cronos y Kairós · escena 3D (Three.js 0.160.0)
 * Taller circular: esfera de reloj en el suelo, esfera armilar central con siete gemas
 * (una por estación, se encienden al completarla) y siete pedestales con objetos propios.
 * Todo el modelado es procedimental.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const RADIO = 10;
const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || "#888";

export function crearEscena(contenedor, opciones) {
  const { estaciones, onSeleccion, onHover } = opciones;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pausa = reducido;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(renderer.domElement);
  // calidad: sin sombras ni alta densidad en equipos con render por software
  try {
    const gl = renderer.getContext(), ext = gl.getExtension("WEBGL_debug_renderer_info");
    const nombre = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    if (/swiftshader|llvmpipe|software/i.test(nombre)) { renderer.shadowMap.enabled = false; renderer.setPixelRatio(1); }
  } catch (e) { /* sin información */ }

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  camara.position.set(0, 21, 31);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.minDistance = 5;
  controles.maxDistance = 42;
  controles.maxPolarAngle = Math.PI * 0.47;
  controles.target.set(0, 1.4, 0);

  /* ---------- luz ---------- */
  const hemi = new THREE.HemisphereLight(0xffffff, 0x445566, 1.1);
  escena.add(hemi);
  const relleno = new THREE.DirectionalLight(0xdde8ff, 0.7);
  relleno.position.set(-10, 8, -12);
  escena.add(relleno);
  const sol = new THREE.DirectionalLight(0xfff3dd, 1.6);
  sol.position.set(8, 18, 10);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 50 });
  sol.shadow.bias = -0.0005;
  escena.add(sol);

  /* ---------- materiales dependientes del tema ---------- */
  const mat = {
    suelo: new THREE.MeshStandardMaterial({ roughness: 0.92 }),
    piedra: new THREE.MeshStandardMaterial({ roughness: 0.7 }),
    laton: new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.32 }),
    tinta: new THREE.MeshStandardMaterial({ roughness: 0.6 }),
    mar: new THREE.MeshStandardMaterial({ roughness: 0.25, metalness: 0.1, transparent: true, opacity: 0.85 }),
    vidrio: new THREE.MeshPhysicalMaterial({ roughness: 0.05, transmission: 0.6, transparent: true, opacity: 0.25, thickness: 0.2 })
  };

  /* ---------- suelo: esfera de reloj ---------- */
  function texturaDial() {
    const c = document.createElement("canvas"); c.width = c.height = 2048;
    const g = c.getContext("2d");
    const cx = 1024, tinta = css("--sc-tinta"), dial = css("--sc-dial"), laton = css("--sc-laton");
    g.fillStyle = css("--sc-suelo"); g.fillRect(0, 0, 2048, 2048);
    g.strokeStyle = dial; g.lineWidth = 6;
    [1000, 930, 640, 300].forEach((r) => { g.beginPath(); g.arc(cx, cx, r, 0, Math.PI * 2); g.stroke(); });
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2, larga = i % 5 === 0;
      const r1 = larga ? 900 : 925, r2 = 990;
      g.lineWidth = larga ? 10 : 4; g.strokeStyle = larga ? tinta : dial;
      g.beginPath(); g.moveTo(cx + Math.sin(a) * r1, cx - Math.cos(a) * r1); g.lineTo(cx + Math.sin(a) * r2, cx - Math.cos(a) * r2); g.stroke();
    }
    const romanos = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
    g.fillStyle = tinta; g.font = "600 92px Cinzel, 'Times New Roman', serif"; g.textAlign = "center"; g.textBaseline = "middle";
    romanos.forEach((t, i) => {
      const a = (i / 12) * Math.PI * 2;
      g.save(); g.translate(cx + Math.sin(a) * 820, cx - Math.cos(a) * 820); g.rotate(a); g.fillText(t, 0, 0); g.restore();
    });
    // siete radios hacia los pedestales
    g.strokeStyle = laton; g.lineWidth = 5; g.setLineDash([18, 22]);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      g.beginPath(); g.moveTo(cx + Math.sin(a) * 310, cx - Math.cos(a) * 310); g.lineTo(cx + Math.sin(a) * 630, cx - Math.cos(a) * 630); g.stroke();
    }
    g.setLineDash([]);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return t;
  }
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(17, 96), mat.suelo);
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true;
  escena.add(suelo);
  // el dial de 60 marcas abarca un círculo de r ≈ 17; los pedestales caen sobre el anillo de 640/1024*17 ≈ 10,6

  /* ---------- esfera armilar central ---------- */
  const armilar = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 0.5, 48), mat.piedra);
  base.position.y = 0.25; base.castShadow = base.receiveShadow = true; armilar.add(base);
  const fuste = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 2.2, 24), mat.laton);
  fuste.position.y = 1.6; fuste.castShadow = true; armilar.add(fuste);
  const anillos = new THREE.Group(); anillos.position.y = 3.6; armilar.add(anillos);
  const anillo = (r, rx, rz) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.045, 12, 96), mat.laton); m.rotation.set(rx, 0, rz); m.castShadow = true; anillos.add(m); return m; };
  anillo(1.35, 0, 0); anillo(1.35, Math.PI / 2, 0); const ecl = anillo(1.25, Math.PI / 2, 0.41); anillo(1.15, 0, Math.PI / 2);
  const nucleo = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 16), mat.tinta); anillos.add(nucleo);
  // anillo horizontal de gemas
  const gemas = [];
  const aroGemas = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.03, 8, 128), mat.laton);
  aroGemas.rotation.x = Math.PI / 2; aroGemas.position.y = 3.6; armilar.add(aroGemas);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const m = new THREE.MeshStandardMaterial({ color: 0x556070, emissive: 0x000000, metalness: 0.3, roughness: 0.3 });
    const g = new THREE.Mesh(new THREE.OctahedronGeometry(0.17, 0), m);
    g.position.set(Math.sin(a) * 2.1, 3.6, -Math.cos(a) * 2.1);
    armilar.add(g); gemas.push(g);
  }
  escena.add(armilar);

  /* ---------- rótulos (sprites) ---------- */
  function rotulo(num, texto) {
    const c = document.createElement("canvas"); c.width = 640; c.height = 160;
    const g = c.getContext("2d");
    g.fillStyle = css("--surface"); g.strokeStyle = css("--sc-laton"); g.lineWidth = 6;
    g.beginPath(); g.roundRect(6, 6, 628, 148, 22); g.fill(); g.stroke();
    g.fillStyle = css("--sc-laton"); g.font = "700 72px Cinzel, serif"; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText(String(num), 70, 84);
    g.fillStyle = css("--sc-tinta"); g.font = "700 46px 'Atkinson Hyperlegible', sans-serif"; g.textAlign = "left";
    let t = texto; while (g.measureText(t).width > 500 && t.length > 4) t = t.slice(0, -2);
    if (t !== texto) t = t.trim() + "…";
    g.fillText(t, 124, 84);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
    s.scale.set(3.2, 0.8, 1);
    return s;
  }

  /* ---------- pedestales ---------- */
  const pedestales = [];
  const animadores = [];
  const braudel = { capas: [] };
  const frisoDatos = { bloques: [], modo: "comprimida" };
  const objetivoSel = [];

  estaciones.forEach((e, i) => {
    const a = (i / 7) * Math.PI * 2;
    const grupo = new THREE.Group();
    grupo.position.set(Math.sin(a) * RADIO, 0, -Math.cos(a) * RADIO);
    grupo.rotation.y = -a + Math.PI; // de cara al centro… y al visitante que llega desde fuera
    const plinto = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.6, 48), mat.piedra.clone());
    plinto.position.y = 0.3; plinto.castShadow = plinto.receiveShadow = true;
    plinto.userData.estacion = i;
    grupo.add(plinto);
    const borde = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 96), mat.laton);
    borde.rotation.x = Math.PI / 2; borde.position.y = 0.61; grupo.add(borde);
    const obj = new THREE.Group(); obj.position.y = 0.6; grupo.add(obj);
    const constructor = [orrery, calendario, relojesArena, ruedaFlechaTrenza, marBraudel, friso, escalera][i];
    constructor(obj);
    obj.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.userData.estacion = i; } });
    const r = rotulo(e.num, e.titulo); r.position.y = 4.1; grupo.add(r);
    escena.add(grupo);
    pedestales.push({ grupo, plinto, angulo: a });
    objetivoSel.push(plinto); obj.traverse((m) => { if (m.isMesh) objetivoSel.push(m); });
  });

  /* 1 · órbita y péndulo */
  function orrery(g) {
    const soporte = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.3, 12), mat.laton); soporte.position.y = 0.65; g.add(soporte);
    const solM = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 16), new THREE.MeshStandardMaterial({ color: 0xffc85a, emissive: 0xffa21a, emissiveIntensity: 0.9 }));
    solM.position.y = 1.55; g.add(solM);
    const orbita = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.012, 6, 96), mat.laton); orbita.rotation.x = Math.PI / 2; orbita.position.y = 1.55; g.add(orbita);
    const brazo = new THREE.Group(); brazo.position.y = 1.55; g.add(brazo);
    const tierra = new THREE.Mesh(new THREE.SphereGeometry(0.15, 24, 12), new THREE.MeshStandardMaterial({ color: 0x2f7fb8, roughness: 0.5 }));
    tierra.position.x = 1.0; brazo.add(tierra);
    const varilla = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 6), mat.laton); varilla.rotation.z = Math.PI / 2; varilla.position.x = 0.5; brazo.add(varilla);
    const lunaB = new THREE.Group(); lunaB.position.x = 1.0; brazo.add(lunaB);
    const luna = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 8), mat.piedra); luna.position.x = 0.28; lunaB.add(luna);
    // péndulo
    const marco = new THREE.Group(); marco.position.set(-1.15, 0, 0.3); g.add(marco);
    [[-0.3], [0.3]].forEach(([x]) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.2, 8), mat.tinta); p.position.set(x, 1.1, 0); marco.add(p); });
    const dintel = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.06, 0.06), mat.tinta); dintel.position.y = 2.2; marco.add(dintel);
    const pend = new THREE.Group(); pend.position.y = 2.18; marco.add(pend);
    const hilo = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.5, 4), mat.laton); hilo.position.y = -0.75; pend.add(hilo);
    const lenteja = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 10), mat.laton); lenteja.position.y = -1.55; pend.add(lenteja);
    animadores.push((t) => { brazo.rotation.y = t * 0.35; lunaB.rotation.y = t * 2.4; tierra.rotation.y = t * 3; pend.rotation.z = Math.sin(t * 2.2) * 0.32; });
  }

  /* 2 · calendario de piedra con reloj de sol */
  function calendario(g) {
    const disco = new THREE.Group(); disco.position.y = 0.25; g.add(disco);
    const colA = new THREE.Color(css("--sc-piedra")), colB = new THREE.Color(css("--sc-dial"));
    for (let i = 0; i < 12; i++) {
      const s = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.16, 8, 1, false, (i / 12) * Math.PI * 2, (Math.PI * 2) / 12 - 0.02),
        new THREE.MeshStandardMaterial({ color: i % 2 ? colA : colB, roughness: 0.75 }));
      disco.add(s);
    }
    const centro = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.2, 48), mat.piedra); centro.position.y = 0.04; disco.add(centro);
    const planetas = [0xd9d9d9, 0xc0503a, 0x9aa3ad, 0xd8a65c, 0xf0d9a0, 0x8a7a5a, 0xffc85a]; // Luna, Marte, Mercurio, Júpiter, Venus, Saturno, Sol
    planetas.forEach((c, i) => {
      const a = (i / 7) * Math.PI * 2;
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 8), new THREE.MeshStandardMaterial({ color: c, roughness: 0.4, emissive: i === 6 ? 0x664400 : 0x000000 }));
      p.position.set(Math.sin(a) * 0.62, 0.2, Math.cos(a) * 0.62); disco.add(p);
    });
    const gnomon = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 8), mat.laton);
    gnomon.position.set(0, 0.75, 0); gnomon.rotation.z = 0.5; g.add(gnomon);
    const piedraHora = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.1, 0.5), mat.piedra); piedraHora.position.set(1.15, 0.9, -0.6); g.add(piedraHora);
    animadores.push((t) => { disco.rotation.y = t * 0.08; });
  }

  /* 3 · dos relojes de arena a distinto ritmo */
  function relojesArena(g) {
    const arena = new THREE.MeshStandardMaterial({ color: 0xd9b26a, roughness: 0.9 });
    [[-0.55, 1], [0.6, 0.35]].forEach(([x, vel]) => {
      const r = new THREE.Group(); r.position.set(x, 0, 0); g.add(r);
      const tapa = new THREE.CylinderGeometry(0.42, 0.42, 0.08, 24);
      const t1 = new THREE.Mesh(tapa, mat.tinta); t1.position.y = 0.04; r.add(t1);
      const t2 = new THREE.Mesh(tapa, mat.tinta); t2.position.y = 1.96; r.add(t2);
      [[-0.32, -0.32], [0.32, -0.32], [-0.32, 0.32], [0.32, 0.32]].forEach(([a, b]) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.92, 8), mat.laton); p.position.set(a, 1, b); r.add(p); });
      const vidrioArr = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 24, 1, true), mat.vidrio); vidrioArr.position.y = 1.5; vidrioArr.rotation.x = Math.PI; r.add(vidrioArr);
      const vidrioAb = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 24, 1, true), mat.vidrio); vidrioAb.position.y = 0.5; r.add(vidrioAb);
      const arriba = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.8, 24), arena); arriba.rotation.x = Math.PI; r.add(arriba);
      const abajo = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.8, 24), arena); r.add(abajo);
      const chorro = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.9, 6), arena); chorro.position.y = 0.95; r.add(chorro);
      animadores.push((t) => {
        const f = ((t * 0.12 * vel) % 1);
        const s1 = Math.max(0.02, 1 - f), s2 = Math.max(0.02, f);
        arriba.scale.set(s1, s1, s1); arriba.position.y = 1.08 + 0.4 * s1;
        abajo.scale.set(s2, s2, s2); abajo.position.y = 0.08 + 0.4 * s2;
      });
    });
  }

  /* 4 · rueda, flecha y trenza */
  function ruedaFlechaTrenza(g) {
    const rueda = new THREE.Group(); rueda.position.set(-1.0, 1.2, 0); g.add(rueda);
    rueda.add(new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 12, 64), mat.laton));
    for (let i = 0; i < 8; i++) { const r = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.1, 6), mat.tinta); r.rotation.z = (i / 8) * Math.PI; rueda.add(r); }
    const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.65, 8), mat.tinta); pie.position.set(-1.0, 0.32, 0); g.add(pie);
    const flecha = new THREE.Group(); flecha.position.set(0.05, 1.25, 0); g.add(flecha);
    const astil = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.0, 10), mat.tinta); astil.rotation.z = Math.PI / 2; flecha.add(astil);
    const punta = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.26, 16), mat.laton); punta.rotation.z = -Math.PI / 2; punta.position.x = 0.62; flecha.add(punta);
    const guia = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.03, 0.03), mat.dial || mat.tinta); guia.position.set(0.15, 0.95, 0); g.add(guia);
    const trenza = new THREE.Group(); trenza.position.set(1.15, 0.05, 0); g.add(trenza);
    const colores = [css("--sc-laton"), css("--sc-mar"), css("--sc-dial")];
    for (let k = 0; k < 3; k++) {
      const pts = [];
      for (let j = 0; j <= 60; j++) { const y = (j / 60) * 2.1; const a = y * 4 + (k * Math.PI * 2) / 3; pts.push(new THREE.Vector3(Math.cos(a) * 0.16 * (1 + Math.sin(y * 2 + k) * 0.35), y, Math.sin(a) * 0.16)); }
      const tubo = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.04, 8), new THREE.MeshStandardMaterial({ color: colores[k], roughness: 0.45, metalness: 0.3 }));
      trenza.add(tubo);
    }
    animadores.push((t) => { rueda.rotation.z = -t * 0.8; flecha.position.x = 0.05 + ((t * 0.25) % 1) * 0.5 - 0.25; trenza.rotation.y = t * 0.4; });
  }

  /* 5 · el mar de Braudel: tres capas que se mueven a distinta velocidad */
  function marBraudel(g) {
    const ancho = 2.6, fondo = 1.5;
    const caja = new THREE.Mesh(new THREE.BoxGeometry(ancho, 2.1, fondo), mat.vidrio); caja.position.y = 1.05; g.add(caja);
    // estructura: sedimento
    const sedM = new THREE.MeshStandardMaterial({ color: css("--sc-dial"), roughness: 0.95 });
    const sed = new THREE.Mesh(new THREE.BoxGeometry(ancho - 0.04, 0.55, fondo - 0.04, 24, 1, 8), sedM); sed.position.y = 0.3; g.add(sed);
    // coyuntura: corriente intermedia con partículas
    const corM = new THREE.MeshStandardMaterial({ color: css("--sc-mar"), transparent: true, opacity: 0.45, roughness: 0.3 });
    const cor = new THREE.Mesh(new THREE.BoxGeometry(ancho - 0.04, 0.8, fondo - 0.04), corM); cor.position.y = 0.98; g.add(cor);
    const nP = 120, pos = new Float32Array(nP * 3);
    for (let i = 0; i < nP; i++) { pos[i * 3] = (Math.random() - 0.5) * (ancho - 0.2); pos[i * 3 + 1] = 0.65 + Math.random() * 0.7; pos[i * 3 + 2] = (Math.random() - 0.5) * (fondo - 0.2); }
    const pg = new THREE.BufferGeometry(); pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const puntos = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true, opacity: 0.8 })); g.add(puntos);
    // acontecimiento: oleaje de superficie
    const supG = new THREE.PlaneGeometry(ancho - 0.04, fondo - 0.04, 48, 24); supG.rotateX(-Math.PI / 2);
    const supM = new THREE.MeshStandardMaterial({ color: css("--sc-mar"), roughness: 0.15, metalness: 0.2, flatShading: true });
    const sup = new THREE.Mesh(supG, supM); sup.position.y = 1.42; g.add(sup);
    const base0 = supG.attributes.position.array.slice();
    braudel.capas = [supM, corM, sedM];
    braudel.base = braudel.capas.map((m) => m.emissive.clone());
    animadores.push((t) => {
      const p = supG.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) { const x = base0[i], z = base0[i + 2]; p[i + 1] = Math.sin(x * 6 + t * 3.2) * 0.05 + Math.cos(z * 7 + t * 2.4) * 0.035; }
      supG.attributes.position.needsUpdate = true; supG.computeVertexNormals();
      const pp = pg.attributes.position.array;
      for (let i = 0; i < nP; i++) { pp[i * 3] += 0.0025; if (pp[i * 3] > (ancho - 0.2) / 2) pp[i * 3] = -(ancho - 0.2) / 2; }
      pg.attributes.position.needsUpdate = true;
      sed.position.y = 0.3 + Math.sin(t * 0.08) * 0.004;
    });
  }

  /* 6 · friso de las edades (escala proporcional o comprimida) */
  function friso(g) {
    const edades = [
      { n: "Prehistoria", dur: 3300000, c: 0x8b6b4a },
      { n: "Edad Antigua", dur: 3976, c: 0xb48a35 },
      { n: "Edad Media", dur: 977, c: 0x5f7f6a },
      { n: "Edad Moderna", dur: 336, c: 0x2e6c8c },
      { n: "Edad Contemporánea", dur: 237, c: 0x7a4f7f }
    ];
    const largo = 3.2;
    const soporte = new THREE.Mesh(new THREE.BoxGeometry(largo + 0.2, 0.08, 0.5), mat.tinta); soporte.position.y = 0.95; g.add(soporte);
    [-largo / 2, largo / 2].forEach((x) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.95, 8), mat.tinta); p.position.set(x, 0.47, 0); g.add(p); });
    edades.forEach((e) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(1, 0.42, 0.36), new THREE.MeshStandardMaterial({ color: e.c, roughness: 0.55 }));
      m.position.y = 1.2; g.add(m); frisoDatos.bloques.push({ m, e, ancho: largo / edades.length, x: 0 });
    });
    frisoDatos.largo = largo;
    colocarFriso(true);
    let previo = performance.now();
    animadores.push(() => {
      const ahora = performance.now(), k = 1 - Math.exp(-((ahora - previo) / 1000) * 6); previo = ahora;
      frisoDatos.bloques.forEach((b) => {
        b.m.scale.x += (b.objAncho - b.m.scale.x) * k;
        b.m.position.x += (b.objX - b.m.position.x) * k;
      });
    });
  }
  function colocarFriso(inmediato) {
    const { bloques, largo, modo } = frisoDatos;
    const total = bloques.reduce((s, b) => s + b.e.dur, 0);
    const minimo = 0.03;
    let anchos = bloques.map((b) => (modo === "lineal" ? Math.max(minimo, (b.e.dur / total) * largo) : largo / bloques.length));
    const suma = anchos.reduce((s, a) => s + a, 0); anchos = anchos.map((a) => (a * largo) / suma);
    let x = -largo / 2;
    bloques.forEach((b, i) => {
      b.objAncho = anchos[i]; b.objX = x + anchos[i] / 2; x += anchos[i];
      if (inmediato) { b.m.scale.x = b.objAncho; b.m.position.x = b.objX; }
    });
  }

  /* 7 · escalera del aprendizaje del tiempo */
  function escalera(g) {
    const n = 6, cols = [0xd9c27a, 0xd8a25c, 0xcf7f5a, 0xb7697a, 0x8a6aa0, 0x5f7fb5];
    const peld = [];
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.25 + i * 0.25, 1.0), new THREE.MeshStandardMaterial({ color: cols[i], roughness: 0.6, emissive: 0x000000 }));
      m.position.set(-1.15 + i * 0.46, (0.25 + i * 0.25) / 2, 0); g.add(m); peld.push(m);
    }
    // reloj al pie y templete en lo alto
    const reloj = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.06, 32), mat.laton); reloj.rotation.x = Math.PI / 2; reloj.position.set(-1.15, 0.6, 0.55); g.add(reloj);
    const templo = new THREE.Group(); templo.position.set(1.15, 1.5, 0); g.add(templo);
    for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.45, 8), mat.piedra); c.position.set(-0.15 + i * 0.1, 0.23, 0); templo.add(c); }
    const front = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.18, 3), mat.piedra); front.rotation.y = Math.PI / 2; front.scale.z = 0.4; front.position.y = 0.55; templo.add(front);
    animadores.push((t) => {
      const activo = Math.floor(t * 0.8) % n;
      peld.forEach((p, i) => p.material.emissive.setHex(i === activo ? 0x332200 : 0x000000));
    });
  }

  /* ---------- interacción ---------- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let hoverIdx = -1, abajo = null;
  function estacionBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((ev.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camara);
    const hit = ray.intersectObjects(objetivoSel, false)[0];
    return hit ? hit.object.userData.estacion : -1;
  }
  renderer.domElement.addEventListener("pointermove", (ev) => {
    const i = estacionBajo(ev);
    if (i !== hoverIdx) {
      if (hoverIdx >= 0) pedestales[hoverIdx].plinto.material.emissive.setHex(0x000000);
      hoverIdx = i;
      if (i >= 0) pedestales[i].plinto.material.emissive.setHex(0x1a2a28);
      renderer.domElement.style.cursor = i >= 0 ? "pointer" : "grab";
    }
    if (onHover) onHover(i, ev);
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (onHover) onHover(-1); });
  renderer.domElement.addEventListener("pointerdown", (ev) => { abajo = { x: ev.clientX, y: ev.clientY }; });
  renderer.domElement.addEventListener("pointerup", (ev) => {
    if (!abajo) return;
    const mov = Math.hypot(ev.clientX - abajo.x, ev.clientY - abajo.y); abajo = null;
    if (mov > 6) return;
    const i = estacionBajo(ev);
    if (i >= 0 && onSeleccion) onSeleccion(i);
  });

  /* ---------- cámara animada ---------- */
  let vuelo = null;
  function volar(pos, objetivo, dur = 1.3) {
    if (reducido) { camara.position.copy(pos); controles.target.copy(objetivo); return; }
    vuelo = { p0: camara.position.clone(), t0: controles.target.clone(), p1: pos, t1: objetivo, ini: performance.now(), dur: dur * 1000 };
  }
  function irA(i) {
    const { angulo } = pedestales[i];
    const dir = new THREE.Vector3(Math.sin(angulo), 0, -Math.cos(angulo));
    const objetivo = dir.clone().multiplyScalar(RADIO).add(new THREE.Vector3(0, 1.6, 0));
    const pos = dir.clone().multiplyScalar(RADIO + 9.5).add(new THREE.Vector3(0, 5.6, 0));
    volar(pos, objetivo);
  }
  function vistaGeneral() { volar(new THREE.Vector3(0, 21, 31), new THREE.Vector3(0, 1.4, 0)); }

  /* ---------- tema ---------- */
  function aplicarTema() {
    escena.background = new THREE.Color(css("--sc-fondo"));
    escena.fog = new THREE.Fog(new THREE.Color(css("--sc-fondo")), 34, 70);
    mat.piedra.color.set(css("--sc-piedra"));
    pedestales.forEach((p) => p.plinto.material.color.set(css("--sc-piedra")));
    mat.laton.color.set(css("--sc-laton"));
    mat.tinta.color.set(css("--sc-tinta"));
    if (mat.suelo.map) mat.suelo.map.dispose();
    mat.suelo.map = texturaDial(); mat.suelo.color.set(0xffffff); mat.suelo.needsUpdate = true;
    const oscuro = matchMedia("(prefers-color-scheme: dark)").matches && document.documentElement.getAttribute("data-theme") !== "light" || document.documentElement.getAttribute("data-theme") === "dark";
    hemi.intensity = oscuro ? 0.75 : 1.1; sol.intensity = oscuro ? 1.2 : 1.6;
  }
  aplicarTema();

  /* ---------- bucle ---------- */
  const reloj = new THREE.Clock();
  let tAnim = 0;
  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();
  function bucle() {
    const dt = Math.min(reloj.getDelta(), 0.05);
    if (!pausa) tAnim += dt;
    animadores.forEach((f) => f(tAnim));
    anillos.rotation.y = tAnim * 0.15; ecl.rotation.y = tAnim * 0.1;
    gemas.forEach((g, i) => { if (g.userData.on) g.rotation.y = tAnim * 1.2 + i; });
    if (vuelo) {
      let k = (performance.now() - vuelo.ini) / vuelo.dur; if (k >= 1) k = 1;
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      camara.position.lerpVectors(vuelo.p0, vuelo.p1, e); controles.target.lerpVectors(vuelo.t0, vuelo.t1, e);
      if (k === 1) vuelo = null;
    }
    controles.update();
    renderer.render(escena, camara);
    requestAnimationFrame(bucle);
  }
  bucle();

  return {
    irA, vistaGeneral,
    proyectar(i) {
      const v = pedestales[i].grupo.position.clone().add(new THREE.Vector3(0, 4.6, 0)).project(camara);
      const r = renderer.domElement.getBoundingClientRect();
      return { x: (v.x * 0.5 + 0.5) * r.width, y: (-v.y * 0.5 + 0.5) * r.height, visible: v.z < 1 };
    },
    marcarResueltas(lista) {
      lista.forEach((on, i) => {
        const m = gemas[i].material; gemas[i].userData.on = on;
        m.color.set(on ? css("--sc-laton") : "#556070");
        m.emissive.set(on ? css("--sc-laton") : "#000000"); m.emissiveIntensity = on ? 0.55 : 0;
      });
    },
    setPausa(v) { pausa = v; },
    getPausa() { return pausa; },
    setNivelBraudel(n) {
      braudel.capas.forEach((m, i) => { m.emissive.set(i === n ? css("--sc-laton") : "#000000"); m.emissiveIntensity = i === n ? 0.35 : 0; });
    },
    setEscalaFriso(modo) { frisoDatos.modo = modo; colocarFriso(false); },
    aplicarTema
  };
}
