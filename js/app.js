/*
 * Cronos y Kairós · interfaz
 * Índice | escena | ficha. Rutas por ancla: #inicio, #e1…#e7, #diseno, #examen, #glosario,
 * #bibliografia, #guia y #docente (activa el modo docente en esta pestaña).
 */
const E = window.ESTACIONES, R = window.REFERENCIAS, X = window.EXAMEN, G = window.GLOSARIO, D = window.DISENO;
const $ = (s) => document.querySelector(s);
const ficha = $("#ficha");
const CLAVE = "cronos-kairos-v1";

/* ---------- estado (solo en este navegador) ---------- */
let estado = { resueltos: {}, predicciones: {}, examen: null, pestana: {} };
try { const g = JSON.parse(localStorage.getItem(CLAVE) || "null"); if (g) estado = Object.assign(estado, g); } catch (e) { /* sin almacenamiento */ }
const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* sin almacenamiento */ } };
let docente = false;
try { docente = sessionStorage.getItem("ck-docente") === "1"; } catch (e) { /* nada */ }

const retosDe = (est) => est.retos.map((r) => r.id);
const hechosDe = (est) => retosDe(est).filter((id) => estado.resueltos[id]).length;
const completa = (est) => hechosDe(est) === est.retos.length;

/* ---------- utilidades ---------- */
function h(tag, attrs = {}, ...hijos) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  hijos.flat().forEach((c) => { if (c != null) n.append(c.nodeType ? c : document.createTextNode(c)); });
  return n;
}
function refHTML(clave) {
  const r = R[clave]; if (!r) return "";
  let s = r.cita;
  if (r.doi) s += ` <a href="https://doi.org/${r.doi}" target="_blank" rel="noopener">https://doi.org/${r.doi}</a>`;
  else if (r.url) s += ` <a href="${r.url}" target="_blank" rel="noopener">${r.url}</a>`;
  if (r.nota) s += `<span class="nota">${r.nota}</span>`;
  return s;
}
let primeraVista = true;
function irArriba() {
  ficha.scrollTop = 0;
  if (!primeraVista && window.innerWidth <= 1100) ficha.scrollIntoView({ behavior: "smooth", block: "start" });
  primeraVista = false;
}

/* ---------- índice ---------- */
function pintarIndice(actual) {
  const ul = $("#lista-estaciones"); ul.innerHTML = "";
  E.forEach((est, i) => {
    const n = hechosDe(est), t = est.retos.length, ok = n === t;
    ul.append(h("li", {}, h("button", {
      type: "button", "aria-current": actual === est.id ? "true" : "false",
      onclick: () => navegar(est.id)
    }, h("span", { class: "num" }, String(est.num)), h("span", { class: "tit" }, est.titulo),
       h("span", { class: "est mono" + (ok ? " hecho" : ""), "aria-label": `${n} de ${t} retos` }, ok ? "✓" : `${n}/${t}`))));
  });
  const nComp = E.filter(completa).length;
  $("#progreso-relleno").style.width = `${(nComp / 7) * 100}%`;
  $(".barra-progreso").setAttribute("aria-valuenow", String(nComp));
  $("#pildora-progreso").textContent = `${nComp} de 7 esferas en hora`;
  if (escena) escena.marcarResueltas(E.map(completa));
}

/* ---------- vistas ---------- */
function vistaInicio() {
  ficha.innerHTML = "";
  ficha.append(
    h("p", { class: "etiqueta" }, "Didáctica de las Ciencias Sociales II · Tema 3"),
    h("h2", {}, "Cronos y Kairós"),
    h("p", { class: "sub" }, "Taller del tiempo social e histórico"),
    h("p", { class: "lema" }, "El reloj del taller se ha desajustado. Como maestra o maestro en prácticas, pon en hora sus siete esferas: cada estación resuelta enciende una gema del anillo central."),
    h("p", {}, "Cronos es el tiempo que se mide; kairós, el tiempo que da sentido. Enseñar historia exige los dos: situar los hechos en el tiempo y explicar sus duraciones, ritmos y cambios."),
    h("h3", {}, "Cómo se trabaja cada estación"),
    h("ol", { class: "lista-plana" },
      h("li", {}, h("strong", {}, "Predice. "), "Responde a la pregunta inicial antes de leer."),
      h("li", {}, h("strong", {}, "Comprende. "), "Lee la síntesis, los conceptos y los avisos de «Lee con cautela»."),
      h("li", {}, h("strong", {}, "Resuelve. "), "Supera los retos; cada respuesta se explica."),
      h("li", {}, h("strong", {}, "Llévalo al aula. "), "Revisa cómo trabajarlo en cada ciclo de Primaria y diseña tu propia actividad.")),
    h("h3", {}, "Estaciones"),
    h("div", { class: "grupo-herr" }, E.map((est) => h("button", { type: "button", class: "boton ancho", onclick: () => navegar(est.id) },
      h("span", { class: "mono" }, `${est.num} ·`), ` ${est.titulo}: ${est.sub}`))),
    h("h3", {}, "Objetivos"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "Comprender las diferentes nociones de tiempo y sus concepciones sociales."),
      h("li", {}, "Diferenciar tiempo cronológico y tiempo histórico y su dimensión social."),
      h("li", {}, "Analizar cómo se construye la comprensión del tiempo en Educación Primaria."),
      h("li", {}, "Diseñar actividades para trabajar el tiempo civil, cronológico e histórico en cada ciclo.")),
    h("p", { class: "nota-pie" }, "Marco curricular: área de Conocimiento del Medio Natural, Social y Cultural (Real Decreto 157/2022; en Canarias, Decreto 211/2022). El progreso se guarda solo en este navegador.")
  );
  irArriba();
}

function vistaEstacion(i, pestana) {
  const est = E[i];
  const actual = pestana || estado.pestana[est.id] || "saber";
  ficha.innerHTML = "";
  ficha.append(
    h("p", { class: "etiqueta" }, `Estación ${est.num} de 7`),
    h("h2", {}, est.titulo),
    h("p", { class: "sub" }, est.sub),
    h("p", { class: "lema" }, est.lema)
  );
  // predicción
  const fs = h("fieldset", { class: "prediccion" }, h("legend", {}, "Predice"), h("p", {}, est.prediccion.q));
  const ops = h("div", { class: "opciones" });
  est.prediccion.o.forEach((o, k) => {
    const id = `${est.id}-pred-${k}`;
    const inp = h("input", { type: "radio", name: `${est.id}-pred`, id, value: String(k) });
    if (estado.predicciones[est.id] === k) inp.checked = true;
    inp.addEventListener("change", () => { estado.predicciones[est.id] = k; guardar(); });
    ops.append(h("label", { for: id }, inp, o));
  });
  fs.append(ops);
  if (completa(est)) fs.append(h("p", { class: "fb bien" }, "Estación completada. ¿Mantienes tu predicción? Justifícala con lo aprendido."));
  ficha.append(fs);

  // pestañas
  const nombres = { saber: "Saber", retos: `Retos ${hechosDe(est)}/${est.retos.length}`, aula: "Al aula", fuentes: "Fuentes" };
  const tl = h("div", { class: "pestanas", role: "tablist", "aria-label": "Secciones de la estación" });
  const paneles = {};
  Object.keys(nombres).forEach((k) => {
    const b = h("button", { type: "button", role: "tab", id: `tab-${k}`, "aria-controls": `panel-${k}`, "aria-selected": k === actual ? "true" : "false", tabindex: k === actual ? "0" : "-1" }, nombres[k]);
    b.addEventListener("click", () => activar(k, true));
    b.addEventListener("keydown", (ev) => {
      const ks = Object.keys(nombres), p = ks.indexOf(k);
      if (ev.key === "ArrowRight") { activar(ks[(p + 1) % ks.length], true); ev.preventDefault(); }
      if (ev.key === "ArrowLeft") { activar(ks[(p + ks.length - 1) % ks.length], true); ev.preventDefault(); }
    });
    tl.append(b);
  });
  ficha.append(tl);
  function activar(k, foco) {
    tl.querySelectorAll("button").forEach((b) => { const s = b.id === `tab-${k}`; b.setAttribute("aria-selected", s); b.tabIndex = s ? 0 : -1; if (s && foco) b.focus(); });
    Object.entries(paneles).forEach(([n, p]) => { p.hidden = n !== k; });
    estado.pestana[est.id] = k; guardar();
  }
  const panel = (k) => { const p = h("div", { class: "panel", role: "tabpanel", id: `panel-${k}`, "aria-labelledby": `tab-${k}` }); paneles[k] = p; ficha.append(p); return p; };

  // saber
  const pS = panel("saber");
  pS.append(h("p", { class: "idea" }, est.idea));
  est.sintesis.forEach((p) => pS.append(h("p", { html: p })));
  if (est.id === "e5") {
    const nv = h("div", { class: "nivel-braudel", role: "group", "aria-label": "Ilumina una capa del mar en la escena" },
      h("p", { class: "etiqueta" }, "En la escena, ilumina una capa"));
    [["Oleaje: acontecimiento", 0], ["Corriente: coyuntura", 1], ["Fondo: estructura", 2]].forEach(([t, n]) =>
      nv.append(h("button", { type: "button", class: "boton ancho", onclick: (ev) => {
        nv.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
        ev.currentTarget.setAttribute("aria-pressed", "true"); escena && escena.setNivelBraudel(n); escena && escena.irA(4);
      }, "aria-pressed": "false" }, t)));
    pS.append(nv);
  }
  if (est.id === "e6") {
    const nv = h("div", { class: "nivel-braudel", role: "group", "aria-label": "Escala del friso en la escena" },
      h("p", { class: "etiqueta" }, "Escala del friso en la escena"));
    [["Comprimida: todas las edades iguales", "comprimida"], ["Proporcional a la duración", "lineal"]].forEach(([t, m]) =>
      nv.append(h("button", { type: "button", class: "boton ancho", "aria-pressed": m === "comprimida" ? "true" : "false", onclick: (ev) => {
        nv.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
        ev.currentTarget.setAttribute("aria-pressed", "true"); escena && escena.setEscalaFriso(m); escena && escena.irA(5);
      } }, t)));
    nv.append(h("p", { class: "nota-pie" }, "Duraciones aproximadas: Prehistoria desde las primeras herramientas líticas conocidas (hace unos 3,3 millones de años) hasta la escritura (hacia 3500 a. C.); Edad Antigua hasta 476; Media hasta 1453; Moderna hasta 1789; Contemporánea hasta hoy. En la escala proporcional, las cuatro edades históricas apenas se ven: su ancho mínimo está ampliado para que sean visibles."));
    pS.append(nv);
  }
  pS.append(h("h3", {}, "Conceptos clave"));
  const dl = h("dl", { class: "conceptos" });
  est.conceptos.forEach((c) => dl.append(h("div", {}, h("dt", {}, c.t), h("dd", {}, c.d))));
  pS.append(dl);
  pS.append(h("blockquote", { class: "cita" }, h("p", {}, `«${est.cita.texto}»`), h("footer", {}, est.cita.fuente)));
  pS.append(h("h3", {}, "Lee con cautela"));
  est.matices.forEach((m) => pS.append(h("div", { class: "matiz" }, h("strong", {}, m.t), m.d)));
  pS.append(h("div", { class: "navegacion" }, h("button", { type: "button", class: "boton primario", onclick: () => activar("retos", true) }, "Ir a los retos")));

  // retos
  const pR = panel("retos");
  est.retos.forEach((r) => {
    Retos.render(r, pR, {
      docente, resuelto: !!estado.resueltos[r.id],
      onResuelto: () => {
        const antes = completa(est);
        estado.resueltos[r.id] = true; guardar();
        const tab = tl.querySelector("#tab-retos"); if (tab) tab.textContent = `Retos ${hechosDe(est)}/${est.retos.length}`;
        pintarIndice(est.id);
        if (!antes && completa(est)) {
          const aviso = h("p", { class: "fb bien", role: "status" }, `Esfera ${est.num} en hora. La gema correspondiente se ha encendido en el anillo central.`);
          pR.append(aviso);
        }
      }
    });
  });

  // al aula
  const pA = panel("aula");
  pA.append(h("h3", {}, "Llevarlo al aula de Primaria"));
  pA.append(h("ul", { class: "lista-plana" }, est.aula.map((a) => h("li", {}, a))));
  pA.append(h("p", {}, "¿Quieres convertirlo en una actividad? ", h("button", { type: "button", class: "boton", onclick: () => navegar("diseno") }, "Abrir la Mesa de diseño")));
  if (docente) {
    pA.append(h("div", { class: "docente-caja" },
      h("p", { class: "etiqueta" }, "Notas para el docente"),
      h("p", {}, h("strong", {}, "Duración orientativa: "), est.docente.duracion),
      h("p", {}, h("strong", {}, "Dinámica: "), est.docente.dinamica),
      h("p", {}, h("strong", {}, "Preguntas para el debate:")),
      h("ul", { class: "lista-plana" }, est.docente.preguntas.map((q) => h("li", {}, q)))));
  }

  // fuentes
  const pF = panel("fuentes");
  pF.append(h("h3", {}, "Referencias de esta estación"));
  pF.append(h("ul", { class: "refs" }, est.refs.map((k) => h("li", { html: refHTML(k) }))));

  ficha.append(h("div", { class: "navegacion" },
    h("button", { type: "button", class: "boton", disabled: i === 0, onclick: () => navegar(E[i - 1].id) }, "← Anterior"),
    h("button", { type: "button", class: "boton", onclick: () => navegar("inicio") }, "Inicio"),
    h("button", { type: "button", class: "boton", disabled: i === E.length - 1, onclick: () => navegar(E[i + 1].id) }, "Siguiente →")));
  activar(actual, false);
  irArriba();
}

function vistaExamen() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Examen del taller"),
    h("p", { class: "sub" }, `${X.length} preguntas de todas las estaciones. Cada fallo indica qué estación repasar.`));
  if (estado.examen != null) ficha.append(h("p", { class: "idea" }, `Tu mejor resultado en este navegador: ${estado.examen} de ${X.length}.`));
  const form = h("form", {});
  X.forEach((p, qi) => {
    const fs = h("fieldset", { class: "pregunta" }, h("legend", {}, `${qi + 1}. ${p.q}`));
    const ops = h("div", { class: "opciones" });
    p.o.forEach((o, oi) => { const id = `ex-${qi}-${oi}`; ops.append(h("label", { for: id }, h("input", { type: "radio", name: `ex-${qi}`, id, value: String(oi) }), o)); });
    fs.append(ops, h("div", { class: "resultado-item", id: `ex-r-${qi}` }));
    form.append(fs);
  });
  const res = h("div", { class: "resultado", role: "status" });
  form.append(h("div", { class: "reto-acciones" }, h("button", { type: "submit", class: "boton primario" }, "Corregir examen"),
    docente ? h("button", { type: "button", class: "boton", onclick: () => { X.forEach((p, qi) => { form.querySelector(`#ex-${qi}-${p.c}`).checked = true; }); } }, "Marcar solución") : null), res);
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let ok = 0;
    X.forEach((p, qi) => {
      const m = form.querySelector(`input[name="ex-${qi}"]:checked`), out = form.querySelector(`#ex-r-${qi}`);
      const bien = m && Number(m.value) === p.c; if (bien) ok++;
      const est = E.find((e) => e.id === p.est);
      out.innerHTML = "";
      out.append(h("div", { class: "fb " + (bien ? "bien" : "mal") }, bien ? `Correcto. ${p.e}` : (m ? "No es correcta. " : "Sin responder. "),
        bien ? null : h("button", { type: "button", class: "boton", onclick: () => navegar(p.est) }, `Repasar estación ${est.num}`)));
    });
    estado.examen = Math.max(estado.examen || 0, ok); guardar();
    res.innerHTML = `<div class="fb ${ok >= 9 ? "bien" : "mal"}">${ok} de ${X.length} correctas.${ok >= 9 ? " Buen dominio del tema." : " Repasa las estaciones indicadas y vuelve a intentarlo."}</div>`;
  });
  ficha.append(form);
  irArriba();
}

function vistaGlosario() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Glosario"));
  const dl = h("dl", { class: "glosario" });
  G.forEach((g) => {
    const est = E.find((e) => e.id === g.e);
    dl.append(h("div", {}, h("dt", {}, g.t), h("dd", {}, g.d, " ", h("button", { type: "button", class: "boton", onclick: () => navegar(g.e), "aria-label": `${g.t}: ir a la estación ${est.num}` }, `Estación ${est.num}`))));
  });
  ficha.append(dl);
  irArriba();
}

function vistaBibliografia() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Bibliografía y créditos"));
  const grupos = [["base", "Fuentes base del tema"], ["revista", "Investigación en revistas"], ["libro", "Obras clásicas y de referencia"], ["fuente", "Fuentes primarias"], ["norma", "Normativa"]];
  grupos.forEach(([t, nombre]) => {
    const claves = Object.keys(R).filter((k) => R[k].tipo === t).sort((a, b) => R[a].cita.localeCompare(R[b].cita, "es"));
    ficha.append(h("h3", {}, nombre), h("ul", { class: "refs" }, claves.map((k) => h("li", { html: refHTML(k) }))));
  });
  ficha.append(h("h3", {}, "Créditos y advertencias"),
    h("p", {}, "Recurso elaborado para la asignatura Didáctica de las Ciencias Sociales II (Historia) del Grado en Educación Primaria, con asistencia de un modelo de inteligencia artificial (Claude, Anthropic) en la redacción y la programación. Los textos son síntesis propias; las citas literales son breves y se atribuyen. Las referencias se cotejaron el 29 de octubre de 2026 y cada nota declara lo que no pudo contrastarse."),
    h("p", {}, "Requiere revisión docente antes de su uso con alumnado. Escena 3D modelada por código con Three.js 0.160.0 (licencia MIT). Tipografías Cinzel, Atkinson Hyperlegible y JetBrains Mono (SIL Open Font License)."));
  irArriba();
}

function vistaGuia() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Guía de uso"),
    h("h3", {}, "Para el alumnado"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "Recorre las siete estaciones en orden o empieza por la que te pida tu docente."),
      h("li", {}, "Responde la predicción antes de leer: al terminar, vuelve a ella."),
      h("li", {}, "Los retos se pueden repetir; la explicación aparece al acertar."),
      h("li", {}, "Tu progreso se guarda solo en este navegador.")),
    h("h3", {}, "Para el profesorado"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "«Presentar» oculta el índice y amplía la ficha para proyectar."),
      h("li", {}, "El modo docente muestra notas de sesión, preguntas de debate y botones de solución. Se activa abriendo el recurso con el ancla #docente o con el botón de abajo, y dura mientras la pestaña siga abierta."),
      h("li", {}, "Anclas directas: #e1 a #e7, #diseno, #examen, #glosario, #bibliografia."),
      h("li", {}, "Propuesta de uso: dos sesiones de 90 minutos (estaciones 1-4 y 5-7) y una tercera para la Mesa de diseño y el examen.")),
    h("div", { class: "reto-acciones" },
      h("button", { type: "button", class: "boton" + (docente ? " activo" : ""), "aria-pressed": docente ? "true" : "false", onclick: () => { ponerDocente(!docente); vistaGuia(); } }, docente ? "Desactivar modo docente" : "Activar modo docente")),
    h("h3", {}, "Accesibilidad"),
    h("p", {}, "Todo el contenido de la escena 3D está también en el índice y en la ficha; los retos se resuelven con teclado. La animación se detiene si el sistema pide reducir el movimiento o con el botón «Pausar movimiento»."));
  irArriba();
}

/* ---------- Mesa de diseño ---------- */
const FASES = {
  sucesion: ["Cada niño o niña ordena tres o cuatro momentos de su propia experiencia relacionados con el recurso y lo cuenta usando «primero, después, por último».", "Ordena la misma secuencia vivida por otra persona (familia, compañeros) y compara ambas.", "Sitúa la secuencia en la línea del tiempo de la clase y explica qué va antes y qué después, y por qué."],
  simultaneidad: ["Anota qué hacen distintas personas de su entorno a la misma hora.", "Compara con lo que ocurre a esa hora en otro lugar (otra isla, otro país; recuerda que Canarias va una hora por detrás de la península).", "En una línea del tiempo de doble carril, coloca qué ocurría a la vez en dos lugares durante un periodo histórico."],
  duracion: ["Compara cuánto duran actividades de su vida (un recreo, un curso, su edad).", "Compara la duración de la vida de familiares, de objetos o de edificios del barrio.", "Compara la duración relativa de periodos históricos («¿qué duró más?») sin depender de cifras exactas."],
  ritmo: ["Recuerda algo que cambió muy deprisa y algo que cambió muy despacio en su vida.", "Pregunta a un familiar por cambios rápidos y lentos durante su infancia.", "Clasifica cambios históricos en aceleración, estancamiento, retroceso o ruptura y justifica la elección."],
  cambio: ["Compara cómo era algo de su vida cuando era más pequeño y cómo es ahora.", "Compara lo mismo con la infancia de padres y abuelos.", "Elabora una tabla de lo que ha cambiado y lo que permanece a lo largo de varias generaciones o épocas."],
  causalidad: ["Explica por qué ocurrió algo de su vida diaria y qué consecuencias tuvo.", "Explica la decisión de otra persona en otro tiempo atendiendo a sus circunstancias.", "Propone causas de distinta duración (rápidas, intermedias y lentas) para un hecho histórico."],
  medida: ["Mide con un instrumento sencillo (reloj de arena, sombra de un palo) una actividad de clase.", "Compara con instrumentos y calendarios de otras personas, épocas o culturas.", "Explica por qué las unidades, los calendarios y las eras son convenciones con historia."]
};
function vistaDiseno() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Mesa de diseño de actividades"),
    h("p", { class: "sub" }, "Compón un borrador de actividad con los tres pasos didácticos (identificación, descentración y extensión). Es una plantilla para revisar y adaptar, no una programación terminada."));
  const sel = (id, etiqueta, obj) => {
    const s = h("select", { id }); Object.entries(obj).forEach(([k, v]) => s.append(h("option", { value: k }, v.nombre)));
    return [h("div", { class: "campo" }, h("label", { for: id }, etiqueta), s), s];
  };
  const [c1, sC] = sel("d-ciclo", "Ciclo", D.ciclos), [c2, sD] = sel("d-dim", "Dimensión temporal", D.dimensiones), [c3, sR] = sel("d-rec", "Recurso principal", D.recursos);
  const salida = h("pre", { class: "salida", id: "d-salida", tabindex: "0", "aria-label": "Borrador generado" });
  const estadoCopia = h("span", { class: "nota-pie", role: "status" });
  function generar() {
    const c = D.ciclos[sC.value], d = D.dimensiones[sD.value], r = D.recursos[sR.value], f = FASES[sD.value];
    salida.textContent =
`${d.nombre} con ${r.nombre.toLowerCase()} · ${c.nombre}

Propósito
Que el alumnado aprenda a ${d.verbo} a partir de ${r.uso}, a la escala de ${c.escala}.

Pregunta guía
${d.pregunta}

Secuencia
1. Identificación (experiencia vivida): ${f[0]}
2. Descentración: ${f[1]}
3. Extensión del concepto: ${f[2]}
Recurso principal en las tres fases: ${r.uso}.

Vocabulario temporal que conviene usar
${c.vocab}.

Evaluación
Evidencias: el producto (línea del tiempo, tabla, relato o mural), la explicación oral con el vocabulario temporal y una autoevaluación con la pregunta guía.
Indicador orientativo: el alumnado ${d.verbo} y justifica su respuesta con al menos una evidencia.

Conexión curricular
Área de Conocimiento del Medio Natural, Social y Cultural (Real Decreto 157/2022; en Canarias, Decreto 211/2022): competencia específica sobre continuidades y cambios, causalidad, simultaneidad y sucesión. Cotejar la redacción literal del criterio de evaluación del ciclo en el Boletín Oficial de Canarias.

Borrador generado con plantilla en «Cronos y Kairós». Revísalo y adáptalo a tu grupo.`;
    estadoCopia.textContent = "";
  }
  [sC, sD, sR].forEach((s) => s.addEventListener("change", generar));
  sD.value = "cambio"; sR.value = "objetos"; sC.value = "c2";
  const copiar = h("button", { type: "button", class: "boton primario" }, "Copiar borrador");
  copiar.addEventListener("click", () => {
    const t = salida.textContent;
    const seleccionar = () => { const rg = document.createRange(); rg.selectNodeContents(salida); const s = getSelection(); s.removeAllRanges(); s.addRange(rg); estadoCopia.textContent = "Texto seleccionado: cópialo con Ctrl+C o ⌘+C."; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(() => { estadoCopia.textContent = "Borrador copiado."; }, seleccionar);
    else seleccionar();
  });
  ficha.append(c1, c2, c3, salida, h("div", { class: "reto-acciones" }, copiar, estadoCopia));
  generar();
  irArriba();
}

/* ---------- navegación ---------- */
let escena = null;
function navegar(destino, desdeHash) {
  if (!desdeHash && location.hash.slice(1) !== destino) { location.hash = destino; return; }
  const i = E.findIndex((e) => e.id === destino);
  if (i >= 0) { vistaEstacion(i); pintarIndice(destino); escena && escena.irA(i); return; }
  pintarIndice(null);
  const vista = { diseno: vistaDiseno, examen: vistaExamen, glosario: vistaGlosario, bibliografia: vistaBibliografia, guia: vistaGuia }[destino];
  if (vista) vista();
  else { vistaInicio(); if (escena) escena.vistaGeneral(); }
}
function ponerDocente(v) {
  docente = v; $("#pildora-docente").hidden = !v;
  try { sessionStorage.setItem("ck-docente", v ? "1" : "0"); } catch (e) { /* nada */ }
}
function leerHash() {
  let d = location.hash.slice(1);
  if (d === "docente") { ponerDocente(true); d = "guia"; }
  navegar(d || "inicio", true);
}
window.addEventListener("hashchange", leerHash);

/* ---------- barra ---------- */
$("#btn-inicio").addEventListener("click", () => navegar("inicio"));
$("#btn-guia").addEventListener("click", () => navegar("guia"));
$("#btn-diseno").addEventListener("click", () => navegar("diseno"));
$("#btn-examen").addEventListener("click", () => navegar("examen"));
$("#btn-glosario").addEventListener("click", () => navegar("glosario"));
$("#btn-bibliografia").addEventListener("click", () => navegar("bibliografia"));
$("#btn-presentar").addEventListener("click", (ev) => {
  const on = document.body.classList.toggle("presentar");
  ev.currentTarget.setAttribute("aria-pressed", on ? "true" : "false");
});
$("#btn-general").addEventListener("click", () => escena && escena.vistaGeneral());
$("#btn-movimiento").addEventListener("click", (ev) => {
  if (!escena) return;
  const p = !escena.getPausa(); escena.setPausa(p);
  ev.currentTarget.setAttribute("aria-pressed", p ? "true" : "false");
  ev.currentTarget.textContent = p ? "Reanudar movimiento" : "Pausar movimiento";
});

/* ---------- arranque ---------- */
ponerDocente(docente);
leerHash();

async function iniciarEscena() {
  const carga = $("#carga");
  try {
    await Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1500))]);
    const { crearEscena } = await import("./escena.js");
    const rot = $("#rotulo");
    escena = crearEscena($("#lienzo"), {
      estaciones: E,
      onSeleccion: (i) => navegar(E[i].id),
      onHover: (i, ev) => {
        if (i < 0 || !ev) { rot.hidden = true; return; }
        const r = $("#lienzo").getBoundingClientRect();
        rot.textContent = `${E[i].num}. ${E[i].titulo}`; rot.hidden = false;
        rot.style.left = `${ev.clientX - r.left}px`; rot.style.top = `${ev.clientY - r.top}px`;
      }
    });
    carga.remove();
    if (escena.getPausa()) { const b = $("#btn-movimiento"); b.setAttribute("aria-pressed", "true"); b.textContent = "Reanudar movimiento"; }
    pintarIndice(location.hash.slice(1));
    const i = E.findIndex((e) => e.id === location.hash.slice(1)); if (i >= 0) escena.irA(i);
    const tema = () => escena.aplicarTema();
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", tema);
    new MutationObserver(tema).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  } catch (err) {
    console.warn("Escena 3D no disponible:", err);
    carga.textContent = "La escena 3D no está disponible en este navegador. Todo el contenido sigue accesible desde el índice y la ficha.";
  }
}
iniciarEscena();
