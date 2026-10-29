/*
 * Cronos y Kairós · examen final, glosario y plantillas de la Mesa de diseño
 */
window.EXAMEN = [
  { q: "¿Qué afirmación resume mejor la relación entre tiempo cronológico y tiempo histórico?", o: ["Son sinónimos", "El cronológico ordena y sitúa; el histórico explica", "El histórico hace innecesaria la cronología"], c: 1, e: "Ambos se enseñan en paralelo: sin cronología no hay dónde situar; sin tiempo histórico no hay explicación.", est: "e5" },
  { q: "La definición «número del movimiento según el antes y el después» se debe a…", o: ["Platón", "Aristóteles", "Kant"], c: 1, e: "Aristóteles une tiempo, cambio y movimiento.", est: "e1" },
  { q: "¿Cuál de estas unidades es una convención sin base astronómica directa?", o: ["El año", "El mes", "La semana"], c: 2, e: "La semana de siete días procede de tradiciones culturales (hebrea y grecolatina).", est: "e2" },
  { q: "¿Cuántos años separan el 100 a. C. del 100 d. C.?", o: ["200", "199", "201"], c: 1, e: "100 + 100 − 1 = 199, porque no existe el año cero.", est: "e6" },
  { q: "«El tiempo como representación colectiva compartida por un grupo» corresponde a…", o: ["el tiempo social", "el tiempo físico", "el tiempo concebido"], c: 0, e: "Es la noción de Durkheim de tiempo social.", est: "e3" },
  { q: "¿Qué concepción del tiempo subyace a la expresión «la Edad Contemporánea es más avanzada que la Moderna»?", o: ["Cíclica", "Progreso continuo", "Plural y abierta"], c: 1, e: "Es la versión secular del tiempo lineal: cada etapa supera a la anterior.", est: "e4" },
  { q: "Para Braudel, la coyuntura es…", o: ["el acontecimiento político", "un tiempo medio, a menudo económico", "el tiempo casi inmóvil de las mentalidades"], c: 1, e: "Tiempo medio, de ciclos de años o décadas.", est: "e5" },
  { q: "Reconocer que dos procesos ocurren a la vez en lugares distintos es trabajar…", o: ["la sucesión", "la simultaneidad", "la duración"], c: 1, e: "La simultaneidad es una de las dimensiones más difíciles para el alumnado.", est: "e6" },
  { q: "Los tres pasos didácticos de la teoría clásica son…", o: ["identificación, descentración y extensión", "observación, hipótesis y conclusión", "vivido, percibido y concebido"], c: 0, e: "Vivido, percibido y concebido son los estadios; los pasos didácticos son identificación, descentración y extensión.", est: "e7" },
  { q: "¿Qué autor sostuvo que la historia puede comprenderse desde los cinco años o antes?", o: ["Piaget", "Calvani", "Newton"], c: 1, e: "Calvani atribuye las dificultades a los contenidos y a la didáctica.", est: "e7" },
  { q: "¿En qué siglo está el año 2000?", o: ["XX", "XXI", "XIX"], c: 0, e: "El siglo XXI comenzó el 1 de enero de 2001.", est: "e6" },
  { q: "¿Por qué no es neutra una periodización escolar?", o: ["Porque usa números", "Porque elige hitos y criterios desde un punto de vista cultural", "Porque cambia cada año"], c: 1, e: "Los cortes (1492, 1789…) responden a criterios a menudo eurocéntricos; por eso hay que enseñar a periodizar.", est: "e6" }
];

window.GLOSARIO = [
  { t: "Acontecimiento", d: "Hecho puntual y fechable; tiempo corto en Braudel.", e: "e5" },
  { t: "Calendario", d: "Sistema convencional de organización de días, meses y años.", e: "e2" },
  { t: "Causalidad", d: "Relación entre un hecho y sus causas y consecuencias; inseparable del tiempo histórico.", e: "e5" },
  { t: "Coyuntura", d: "Tiempo medio, de ciclos de años o décadas.", e: "e5" },
  { t: "Cronología", d: "Sistema de medida de la historia: eras, edades, siglos, años.", e: "e6" },
  { t: "Descentración", d: "Paso de la experiencia propia a la de otras personas o tiempos.", e: "e7" },
  { t: "Duración", d: "Permanencia de un fenómeno entre dos momentos.", e: "e6" },
  { t: "Era", d: "Punto de partida convencional para contar los años.", e: "e2" },
  { t: "Estructura", d: "Larga duración: constantes que limitan el cambio.", e: "e5" },
  { t: "Kairós", d: "Tiempo cualitativo y oportuno; asociado al tiempo social e histórico.", e: "e3" },
  { t: "Periodización", d: "División del pasado en etapas según criterios.", e: "e6" },
  { t: "Positivismo", d: "Historia como sucesión lineal de hechos fechados.", e: "e5" },
  { t: "Ritmo", d: "Velocidad del cambio: aceleración, estancamiento, retroceso, ruptura.", e: "e6" },
  { t: "Sentido del tiempo", d: "Tiempo colectivo que da significado a la experiencia de una civilización.", e: "e4" },
  { t: "Simultaneidad", d: "Coexistencia de hechos o procesos en un mismo tiempo.", e: "e6" },
  { t: "Sucesión", d: "Orden de los hechos según antes y después.", e: "e6" },
  { t: "Tiempo civil", d: "Tiempo que regula la vida cotidiana mediante reloj y calendario.", e: "e1" },
  { t: "Tiempo cronológico", d: "Tiempo que ordena, sitúa y organiza los hechos.", e: "e5" },
  { t: "Tiempo físico", d: "Tiempo observable y medible ligado a los astros.", e: "e1" },
  { t: "Tiempo histórico", d: "Simultaneidad de duraciones, movimientos y cambios en una colectividad a lo largo de un periodo.", e: "e5" },
  { t: "Tiempo personal", d: "Experiencia subjetiva y emotiva de la duración.", e: "e3" },
  { t: "Tiempo social", d: "Manera compartida por un grupo de entender y organizar el tiempo.", e: "e3" },
  { t: "Tiempo vivido, percibido y concebido", d: "Estadios piagetianos de la construcción del tiempo.", e: "e7" }
];

/* Mesa de diseño: piezas para componer un borrador de actividad */
window.DISENO = {
  ciclos: {
    c1: { nombre: "1.er ciclo (1.º-2.º)", vocab: "antes, ahora, después, ayer, hoy, mañana, primero, último, mañana/tarde/noche, días de la semana, meses", escala: "su propia vida, la familia cercana y el día de la clase" },
    c2: { nombre: "2.º ciclo (3.º-4.º)", vocab: "generación, década, siglo, antiguo, moderno, actual, cambiar, permanecer, mientras, al mismo tiempo", escala: "tres generaciones, la localidad y los grandes periodos asociados a imágenes" },
    c3: { nombre: "3.er ciclo (5.º-6.º)", vocab: "anteriormente, posteriormente, simultáneamente, lustro, milenio, era, aceleración, ruptura, causa, consecuencia", escala: "la historia local y de Canarias relacionada con los grandes periodos y otras culturas" }
  },
  dimensiones: {
    sucesion: { nombre: "Sucesión", verbo: "ordenar antes y después", pregunta: "¿Qué ocurrió primero? ¿Cómo lo sabes?" },
    simultaneidad: { nombre: "Simultaneidad", verbo: "reconocer lo que ocurre a la vez", pregunta: "¿Qué pasaba en otro lugar al mismo tiempo?" },
    duracion: { nombre: "Duración", verbo: "comparar lo que dura más y lo que dura menos", pregunta: "¿Qué ha durado más? ¿Qué sigue igual?" },
    ritmo: { nombre: "Ritmo", verbo: "distinguir cambios rápidos, lentos, retrocesos y rupturas", pregunta: "¿Cambió deprisa o despacio? ¿Hacia mejor para todos?" },
    cambio: { nombre: "Cambio y permanencia", verbo: "detectar qué cambia y qué permanece", pregunta: "¿Qué ha cambiado y qué se mantiene?" },
    causalidad: { nombre: "Causalidad", verbo: "relacionar causas y consecuencias", pregunta: "¿Por qué ocurrió? ¿Qué consecuencias tuvo?" },
    medida: { nombre: "Medida del tiempo", verbo: "usar y comprender unidades y calendarios", pregunta: "¿Cómo lo medimos? ¿Quién decidió esa medida?" }
  },
  recursos: {
    fotos: { nombre: "Fotografías familiares", uso: "fotografías de la propia vida y de la familia" },
    objetos: { nombre: "Objetos del pasado", uso: "objetos cotidianos de distintas épocas (juguetes, teléfonos, utensilios)" },
    relatos: { nombre: "Cuentos y relatos", uso: "cuentos y relatos con una estructura temporal clara" },
    linea: { nombre: "Línea del tiempo", uso: "una línea del tiempo construida en el aula, con escala visible" },
    oral: { nombre: "Fuentes orales", uso: "entrevistas a familiares o personas mayores del barrio" },
    calendarios: { nombre: "Calendarios de otras culturas", uso: "calendarios gregoriano, islámico, judío u otros" },
    planos: { nombre: "Planos y fotografías antiguas", uso: "planos y fotografías antiguas de la localidad" }
  }
};
