/*
 * Cronos y Kairós · contenido de las siete estaciones
 * Redacción propia a partir de las fuentes base (tema 3, Trepat, Cooper, Arias Ferrer y Egea)
 * y de la investigación citada en datos/referencias.js. Las citas literales son breves y se atribuyen.
 *
 * Esquema de estación:
 *   id, num, titulo, lema, idea, prediccion{q, o[]}, sintesis[], conceptos[{t,d}], cita{texto, fuente},
 *   matices[{t,d}], aula[], docente{duracion, dinamica, preguntas[]}, refs[], retos[]
 * Tipos de reto: clasificar · ordenar · test · numerico (ver js/retos.js).
 */
window.ESTACIONES = [

/* ===================================================================== 1 */
{
  id: "e1", num: 1,
  titulo: "La órbita y el péndulo",
  sub: "El tiempo físico: de Aristóteles a Einstein",
  lema: "¿Existe el tiempo fuera de nosotros o lo pone nuestra mente?",
  idea: "La filosofía y la física han oscilado entre un tiempo exterior y medible y un tiempo que es forma de la mente. Ambas raíces explican cómo enseñamos hoy la cronología.",
  prediccion: {
    q: "Antes de empezar: si nada cambiara ni se moviera en el universo, ¿seguiría pasando el tiempo?",
    o: ["Sí, el tiempo pasaría igual", "No, sin cambio no hay tiempo", "Pasaría, pero nadie podría saberlo"]
  },
  sintesis: [
    "San Agustín resumió la paradoja hacia el año 400: sabemos qué es el tiempo mientras nadie nos lo pregunta, pero no sabemos explicarlo. La dificultad no es solo de definición, sino de naturaleza: el pasado ya no es, el futuro aún no es y el presente se escapa mientras lo nombramos.",
    "La filosofía griega dejó dos raíces. Para <strong>Aristóteles</strong> (384-322 a.&nbsp;C.), el tiempo es «el número del movimiento según el antes y el después»: no hay tiempo perceptible sin cambio. De ahí el triángulo conceptual <em>tiempo-cambio-movimiento</em> y la idea de medida, base del tiempo cronológico. Para <strong>Platón</strong> (428-348 a.&nbsp;C.), el tiempo es «imagen móvil de la eternidad», algo que la persona proyecta desde dentro.",
    "<strong>Newton</strong> (1642-1727) concibió un tiempo absoluto, exterior e igual en todas partes: una sucesión infinita de momentos idénticos. <strong>Kant</strong> (1724-1804) lo criticó: el tiempo es una forma <em>a priori</em> de la sensibilidad interna, un molde de la mente que ordena la experiencia. <strong>Einstein</strong> relativizó el tiempo físico al ligarlo al espacio y al movimiento del observador (relatividad especial, 1905; general, 1915-1916).",
    "Estas rupturas tuvieron eco en la historia. El tiempo absoluto de Newton sostuvo la historia positivista del siglo XIX: una sola línea, homogénea y progresiva, en la que fechar era explicar. La crítica de Kant y de Einstein favoreció, en el siglo XX, la conciencia de varios <em>tempos</em> colectivos simultáneos. Didácticamente, la cronología newtoniana sigue siendo útil para empezar: es condición necesaria, aunque no suficiente, del aprendizaje histórico."
  ],
  conceptos: [
    { t: "Tiempo físico o astronómico", d: "Tiempo observable, medible y regular, ligado al movimiento de los astros." },
    { t: "Tiempo humano", d: "Tiempo personal y colectivo, de duraciones y ritmos difíciles de precisar." },
    { t: "Tiempo civil", d: "Tiempo privado y colectivo que regula la vida cotidiana mediante el reloj y el calendario; une el tiempo astronómico con la temporalidad humana." },
    { t: "Tiempo absoluto", d: "En Newton, tiempo exterior, uniforme e independiente de cualquier observador." },
    { t: "Forma a priori", d: "En Kant, molde de la mente que da forma a lo percibido; el tiempo lo es de la sensibilidad interna." }
  ],
  cita: { texto: "Si nadie me lo pregunta, lo sé; pero si quiero explicárselo al que me lo pregunta, no lo sé.", fuente: "Agustín de Hipona, Confesiones, XI, 14, 17 (traducción habitual)" },
  matices: [
    { t: "Una precisión sobre los gemelos", d: "El ejemplo habitual de los gemelos (uno viaja «a la velocidad de la luz» y apenas envejece) es una simplificación: ningún cuerpo con masa alcanza esa velocidad. Lo que predice la relatividad es que el tiempo de quien viaja transcurre más despacio cuanto más se acerca a ella." },
    { t: "Dos raíces, no dos bandos", d: "La oposición Aristóteles-Platón es un recurso expositivo. Sirve para distinguir el tiempo medido del tiempo vivido, no para clasificar a todos los pensadores posteriores." }
  ],
  aula: [
    "1.er ciclo: observar cambios (una planta que crece, la sombra de un palo en el patio) para asociar tiempo y cambio.",
    "2.º ciclo: construir un reloj de sol o de agua y comparar su medida con la del reloj de la clase.",
    "3.er ciclo: debatir si el tiempo «existe» sin cambios, a partir de la pregunta de San Agustín."
  ],
  docente: {
    duracion: "20-25 minutos",
    dinamica: "Lanzar la predicción en gran grupo (votación a mano alzada) antes de abrir la estación; volver a ella al final.",
    preguntas: [
      "¿Por qué el tiempo de Newton favoreció una historia de fechas encadenadas?",
      "¿Qué gana y qué pierde un niño o una niña que solo aprende el tiempo como medida?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022", "agustin"],
  retos: [
    {
      id: "e1-r1", tipo: "clasificar", titulo: "¿Quién lo dijo?",
      consigna: "Asigna cada idea a su autor.",
      categorias: ["Aristóteles", "Platón", "Newton", "Kant", "Einstein"],
      items: [
        { t: "El tiempo es el número del movimiento según el antes y el después.", c: 0, e: "Es la definición aristotélica (Física, IV): el tiempo se percibe porque hay cambio." },
        { t: "El tiempo es la imagen móvil de la eternidad.", c: 1, e: "Platón (Timeo): el tiempo como producto interior, reflejo de lo eterno." },
        { t: "El tiempo fluye de modo uniforme, sin relación con nada externo.", c: 2, e: "Es el tiempo absoluto de los Principia (1687)." },
        { t: "El tiempo no está fuera de nosotros: es una forma de nuestra sensibilidad que ordena lo que percibimos.", c: 3, e: "Kant: forma a priori de la sensibilidad interna." },
        { t: "El ritmo de un reloj depende del movimiento de quien lo observa.", c: 4, e: "Relatividad: el tiempo deja de ser absoluto." }
      ]
    },
    {
      id: "e1-r2", tipo: "test", titulo: "Del tiempo físico al tiempo histórico",
      preguntas: [
        { q: "¿Qué concepción del tiempo físico sostuvo la historia positivista del siglo XIX?", o: ["El tiempo cíclico griego", "El tiempo absoluto de Newton", "El tiempo relativo de Einstein"], c: 1, e: "Un tiempo exterior, homogéneo y lineal permitió creer que bastaba con fechar y ordenar los hechos para comprenderlos." },
        { q: "Según Trepat, el tiempo cronológico en la enseñanza es…", o: ["innecesario si se trabaja el tiempo histórico", "condición necesaria, pero no suficiente", "lo mismo que el tiempo histórico"], c: 1, e: "Es el armazón para situar los hechos, pero no explica nada por sí mismo." }
      ]
    }
  ]
},

/* ===================================================================== 2 */
{
  id: "e2", num: 2,
  titulo: "El calendario de piedra",
  sub: "El tiempo civil: día, mes, año, semana y hora",
  lema: "¿Qué nos da el cielo y qué hemos inventado nosotros?",
  idea: "El Sol y la Luna marcan el día, el mes y el año; la semana, las 24 horas y la era son convenciones. El tiempo cronológico nace del tiempo histórico.",
  prediccion: {
    q: "Antes de empezar: ¿por qué la semana tiene siete días?",
    o: ["Por el movimiento de la Luna", "Por una convención cultural", "Por las estaciones del año"]
  },
  sintesis: [
    "El tiempo civil combina ciclos astronómicos y acuerdos humanos. El <strong>día</strong> procede de la alternancia de luz y oscuridad; el <strong>mes</strong>, de la lunación (unos 29,5 días); el <strong>año</strong>, del movimiento aparente del Sol. Los egipcios se apoyaron en el Sol; hebreos y griegos, en la Luna; Roma pasó de un calendario lunar a uno solar con la reforma juliana. Hoy el calendario islámico es lunar y el judío, lunisolar (combina meses lunares con un mes añadido para ajustarse al año solar).",
    "La <strong>semana</strong>, en cambio, no responde a ningún astro. Ya lo observó José de Acosta en 1590: las «semanas» mexicas no eran de siete días y los incas no la conocían; el año sigue al Sol y el mes a la Luna, pero la semana de siete días procede del relato hebreo de la creación y, en griegos y latinos, de los siete astros entonces conocidos, que dan nombre a los días (lunes, Luna; martes, Marte; miércoles, Mercurio; jueves, Júpiter; viernes, Venus). Sábado procede del <em>sabbat</em> hebreo y domingo, del «día del Señor».",
    "Nuestro año deriva del calendario romano. Julio César decretó en el 46 a.&nbsp;C., con vigencia desde el 45, un calendario solar de 365 días con un día más cada cuatro años (calendario juliano). Como el año solar es algo más corto, en 1582 el desfase era de diez días: la reforma de Gregorio XIII pasó del jueves 4 al viernes 15 de octubre y fijó que los años seculares solo fueran bisiestos si son divisibles entre 400.",
    "La división del día en 24 horas tiene origen egipcio; la subdivisión en minutos y segundos se apoya en la base sexagesimal babilónica, adoptada por la astronomía helenística. La Edad Media añadió las horas canónicas (prima, tercia, sexta, nona, vísperas, completas). La industrialización exigió coordinar relojes: el meridiano de Greenwich se acordó como origen en 1884 y la conferencia de París de 1912 coordinó las señales horarias. Hoy, cuando en Las Palmas son las 12:00, en Madrid son las 13:00.",
    "La <strong>era</strong> marca el paso del tiempo cronológico al histórico: contar desde el nacimiento de Cristo (cómputo de Dionisio el Exiguo, siglo VI), desde la Hégira (622) o desde la creación del mundo según la tradición judía es una decisión cultural. No existe el año cero: al 1 a.&nbsp;C. le sigue el 1 d.&nbsp;C."
  ],
  conceptos: [
    { t: "Calendario solar y lunar", d: "Sistemas que siguen, respectivamente, el año solar (unos 365,25 días) o las lunaciones (unos 29,5 días)." },
    { t: "Calendario juliano", d: "Reforma de Julio César (46 a. C.): 365 días y un bisiesto cada cuatro años." },
    { t: "Calendario gregoriano", d: "Reforma de 1582: corrige diez días y limita los bisiestos seculares a los divisibles entre 400." },
    { t: "Era", d: "Punto de partida convencional para contar los años (era cristiana, Hégira, era hispánica…)." },
    { t: "Huso horario", d: "Franja de unos 15° de longitud con una misma hora civil." }
  ],
  cita: { texto: "El tiempo cronológico nace del tiempo histórico.", fuente: "Trepat (2006, p. 26)" },
  matices: [
    { t: "Lee con cautela: Augusto y febrero", d: "Algunos manuales explican que Augusto quitó un día a febrero para que agosto tuviera 31. Este relato no se documenta en las fuentes romanas y suele atribuirse a una explicación medieval; conviene presentarlo como leyenda, no como hecho." },
    { t: "Una regla incompleta", d: "Decir que «el último año de cada siglo no es bisiesto» es inexacto: 1700, 1800 y 1900 no lo fueron, pero 1600 y 2000 sí, porque son divisibles entre 400." },
    { t: "Lunar no es lo mismo que lunisolar", d: "Trepat agrupa los calendarios islámico y judío como lunares. El islámico es lunar (su año dura unos 354 días y sus fiestas recorren todas las estaciones); el judío es lunisolar: añade un mes en algunos años para no separarse del año solar." },
    { t: "1884 y 1912", d: "Algunos textos atribuyen el sistema de husos a la conferencia de París de 1912. El meridiano de Greenwich se había adoptado como origen en Washington (1884); la reunión de 1912 trató de las señales horarias por radio. La adopción de husos fue gradual y decidida por cada Estado." }
  ],
  aula: [
    "1.er ciclo: calendario de aula con cumpleaños, estaciones y fiestas; rutinas de mañana, mediodía y tarde.",
    "2.º ciclo: el nombre de los meses y de los días como fuente histórica (Jano, Marte, Juno…).",
    "3.er ciclo: comparar el calendario gregoriano con el islámico y el judío; por qué Canarias va una hora por detrás."
  ],
  docente: {
    duracion: "25-30 minutos",
    dinamica: "Por parejas: una persona resuelve el reto y la otra justifica cada respuesta con la ficha; después se intercambian.",
    preguntas: [
      "¿Qué unidades del tiempo civil se podrían cambiar mañana por acuerdo y cuáles no?",
      "¿Qué ventajas tiene presentar la cronología con su «espesor histórico»?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022", "acosta1590"],
  retos: [
    {
      id: "e2-r1", tipo: "clasificar", titulo: "Cielo o convención",
      consigna: "Clasifica cada unidad según su origen principal.",
      categorias: ["Ciclo astronómico", "Convención cultural"],
      items: [
        { t: "El día", c: 0, e: "Alternancia de luz y oscuridad por la rotación terrestre." },
        { t: "El mes (origen)", c: 0, e: "Nace de la lunación; los meses actuales ya no coinciden con ella." },
        { t: "El año", c: 0, e: "Movimiento aparente del Sol: unos 365,25 días." },
        { t: "La semana de siete días", c: 1, e: "Relato hebreo de la creación y siete astros conocidos; Acosta ya lo advirtió en 1590." },
        { t: "La división del día en 24 horas", c: 1, e: "Origen egipcio; podría haber sido otra." },
        { t: "Empezar el año el 1 de enero", c: 1, e: "Roma empezaba el año en marzo hasta el 153 a. C." },
        { t: "Contar los años desde el nacimiento de Cristo", c: 1, e: "Es una era: un punto de partida elegido por una cultura." }
      ]
    },
    {
      id: "e2-r2", tipo: "numerico", titulo: "Los días que no existieron",
      consigna: "En la reforma gregoriana, al jueves 4 de octubre de 1582 le siguió el viernes 15 de octubre. ¿Cuántos días de fecha se suprimieron?",
      respuesta: 10, tolerancia: 0, unidad: "días",
      pista: "Cuenta las fechas que faltan entre el 4 y el 15: del 5 al 14, ambos incluidos.",
      explicacion: "Se suprimieron diez fechas (del 5 al 14 de octubre) para recuperar el desfase acumulado por el calendario juliano. La semana no se interrumpió: al jueves le siguió el viernes."
    },
    {
      id: "e2-r3", tipo: "test", titulo: "Bisiestos y husos",
      preguntas: [
        { q: "¿Fue bisiesto el año 2000?", o: ["No, porque termina un siglo", "Sí, porque es divisible entre 400", "No, porque es par"], c: 1, e: "Los años seculares solo son bisiestos si son divisibles entre 400: 2000 lo fue; 1900, no." },
        { q: "Un acontecimiento se retransmite en directo a las 21:00 de Madrid. ¿Qué hora es en Gran Canaria?", o: ["22:00", "21:00", "20:00"], c: 2, e: "Canarias va una hora por detrás de la península: es el mismo instante con distinta hora civil." },
        { q: "¿Por qué septiembre significa «séptimo» si es el noveno mes?", o: ["Por un error de traducción medieval", "Porque el año romano empezaba en marzo", "Porque Augusto lo cambió de lugar"], c: 1, e: "En el calendario romano antiguo marzo era el primer mes; septiembre, octubre, noviembre y diciembre eran el 7.º, 8.º, 9.º y 10.º." }
      ]
    }
  ]
},

/* ===================================================================== 3 */
{
  id: "e3", num: 3,
  titulo: "El minuto de cada cual",
  sub: "Tiempo personal y tiempo social",
  lema: "¿Dura lo mismo media hora para todo el mundo?",
  idea: "El minuto del reloj es igual para todos; el minuto vivido, no. Cada grupo comparte, además, una manera de entender el tiempo: el tiempo social.",
  prediccion: {
    q: "Antes de empezar: llegar cinco minutos tarde a una reunión es…",
    o: ["Siempre una falta de respeto", "Depende de la cultura y del grupo", "Irrelevante: son solo cinco minutos"]
  },
  sintesis: [
    "Para la física newtoniana un minuto es idéntico a cualquier otro. Para las personas, no: la densidad de vida de un minuto varía según quién lo vive y en qué circunstancias. El <strong>tiempo humano</strong> es subjetivo, heterogéneo y discontinuo, cargado de emoción. La media hora de una sinfonía y la de preparar una tortilla miden lo mismo, pero no valen lo mismo.",
    "Los griegos distinguían tres palabras: <em>aión</em>, la eternidad; <em>chrónos</em>, el tiempo medible (de ahí cronología o cronómetro), y <em>kairós</em>, el momento oportuno, cualitativo, el conjunto de circunstancias que rodean un hecho. Trepat identifica el <em>kairós</em> con el tiempo social y humano y, en definitiva, con el tiempo histórico.",
    "Durkheim (1912) mostró que la conciencia temporal tiene origen social: días, meses o fiestas son representaciones colectivas que comparten los miembros de un grupo. Cada época y cada cultura vive la temporalidad a su manera; por eso una de las mayores dificultades de adaptación a otra sociedad es su modo de organizar el tiempo, los protocolos de espera o el orden de las acciones (Pagès y Santisteban, 2010).",
    "El tiempo personal y el histórico se parecen y se diferencian. Ambos se dividen en pasado, presente y futuro, usan unidades de medida, tienen ritmos, aceleraciones y frenazos, y producen cambios. Pero el personal se piensa en horas, días o años y es próximo y emotivo; el histórico, en siglos y milenios, y se ocupa de duraciones, sucesiones y cambios de hechos colectivos."
  ],
  conceptos: [
    { t: "Tiempo personal o vivido", d: "Experiencia subjetiva de la duración, ligada a las emociones y a la memoria." },
    { t: "Tiempo social", d: "Manera de entender y organizar el tiempo compartida por un grupo (Durkheim)." },
    { t: "Chrónos", d: "Tiempo cuantitativo y medible." },
    { t: "Kairós", d: "Tiempo cualitativo y oportuno; circunstancias que rodean un hecho." },
    { t: "Aión", d: "Tiempo inmóvil, la eternidad." }
  ],
  cita: { texto: "Para los seres humanos el tiempo no es homogéneo.", fuente: "Presentación del tema 3 (diapositiva 9)" },
  matices: [
    { t: "Tiempo social y estereotipo", d: "Ejemplos como «en tal país se llega tarde» ilustran el tiempo social, pero generalizan. Conviene presentarlos como hipótesis que el alumnado puede contrastar, no como rasgos nacionales." },
    { t: "La memoria no es historia", d: "Lo que un grupo recuerda (memoria colectiva) influye en cómo entiende el pasado, pero la historia es una disciplina que reconstruye ese pasado con fuentes y método (Arias Ferrer y Egea Vivancos, 2022)." }
  ],
  aula: [
    "1.er ciclo: ¿qué se hace largo y qué se hace corto? Dibujar momentos del día y comentarlos.",
    "2.º ciclo: diario de una semana con lo medido (horario) y lo vivido (cómo se sintió cada momento).",
    "3.er ciclo: entrevistar a personas mayores sobre cómo se organizaba el día y la semana en su infancia."
  ],
  docente: {
    duracion: "20 minutos",
    dinamica: "Pedir a cada estudiante un ejemplo propio para cada categoría antes de resolver el reto.",
    preguntas: [
      "¿Qué rasgos del tiempo social del alumnado de tu aula de prácticas conviene conocer?",
      "¿Cómo pasar del tiempo vivido al tiempo social sin abandonar la experiencia del niño o la niña?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022", "pages2010", "durkheim1912"],
  retos: [
    {
      id: "e3-r1", tipo: "clasificar", titulo: "¿Qué tiempo es?",
      consigna: "Clasifica cada enunciado.",
      categorias: ["Tiempo físico o astronómico", "Tiempo personal (vivido)", "Tiempo social (compartido)"],
      items: [
        { t: "La Tierra tarda unos 365,25 días en dar una vuelta alrededor del Sol.", c: 0, e: "Es una medida astronómica, no opinable." },
        { t: "La última media hora del examen se me pasó volando.", c: 1, e: "Percepción subjetiva de una duración medida." },
        { t: "En algunos grupos llegar diez minutos tarde es una falta; en otros, no.", c: 2, e: "Norma compartida sobre el tiempo: tiempo social." },
        { t: "En la escuela, el curso empieza en septiembre y no en enero.", c: 2, e: "Convención colectiva que organiza la vida de un grupo." },
        { t: "Desde que nació mi hermana siento que todo ocurrió ayer.", c: 1, e: "Memoria personal y emoción." },
        { t: "Una lunación completa dura unos 29,5 días.", c: 0, e: "Ciclo astronómico." },
        { t: "El domingo es día de descanso para muchas familias.", c: 2, e: "Costumbre compartida de origen religioso y social." }
      ]
    },
    {
      id: "e3-r2", tipo: "test", titulo: "Chrónos y kairós",
      preguntas: [
        { q: "«Era el momento justo para proponerlo: todo el grupo estaba de acuerdo.» ¿Qué noción describe mejor esta frase?", o: ["Chrónos", "Kairós", "Aión"], c: 1, e: "Kairós es el tiempo oportuno, cualitativo, definido por las circunstancias." },
        { q: "¿Quién sostuvo que la conciencia temporal humana tiene orígenes sociales?", o: ["Newton", "Durkheim", "Braudel"], c: 1, e: "Durkheim (1912) habló de las categorías de tiempo como representaciones colectivas." }
      ]
    }
  ]
},

/* ===================================================================== 4 */
{
  id: "e4", num: 4,
  titulo: "Rueda, flecha y trenza",
  sub: "El sentido del tiempo en cada civilización",
  lema: "¿Hacia dónde va el tiempo de una sociedad?",
  idea: "Cada civilización ha imaginado su origen, su presente y su destino. Ese «sentido del tiempo» condiciona cómo se narra la historia y cómo se enseña.",
  prediccion: {
    q: "Antes de empezar: ¿es la Edad Contemporánea «mejor» que la Edad Media?",
    o: ["Sí, el tiempo implica progreso", "No necesariamente", "Depende de qué se compare y para quién"]
  },
  sintesis: [
    "El tiempo vivido arraiga en el presente, desde el que recordamos el pasado e imaginamos el futuro. Estos tiempos personales se insertan en un tiempo colectivo que da sentido a la experiencia de una civilización: una memoria de sus orígenes, un discurso sobre su presente y una expectativa sobre su destino (Trepat, 2006).",
    "<strong>La rueda.</strong> La Antigüedad grecorromana tendió a concebir el tiempo como cíclico, a imagen de la naturaleza (día y noche, nacimiento, apogeo y decadencia). La idea del Gran Año suponía que, cumplido un largo ciclo, el universo volvía a empezar. Concepciones cíclicas se han atribuido también a los mayas o al budismo.",
    "<strong>La flecha.</strong> La tradición hebrea, abierta al futuro, y el cristianismo, sistematizado por San Agustín, introdujeron un tiempo lineal: un origen (la Creación), un recorrido providencial y un final. Desde el siglo XVIII este esquema se secularizó en la idea de <em>progreso continuo</em> (Turgot, Condorcet, Comte, Hegel) y el marxismo lo adaptó como sucesión de etapas hacia una sociedad sin clases. Esa idea persiste cuando se da por hecho que cada edad es mejor que la anterior o cuando se habla de Edad de Piedra, de Bronce y de Hierro.",
    "<strong>Los tiempos míticos.</strong> Antes que la historia como ciencia está el mito: un relato que pone en palabras la realidad de un modo distinto a la lógica, no un contenido «falso». Los mitos de los orígenes (tiempos primordiales) y del final (tiempos escatológicos) expresan el sentido del tiempo de una sociedad, tienen gran valor didáctico por su orden imaginativo y son fuente para estudiar la larga duración de las mentalidades (tema 3, a partir de Trepat).",
    "<strong>La trenza.</strong> A finales del siglo XX se debilita la idea de una dirección inscrita en la historia. La historia real está hecha de rodeos, desfases, bloqueos, aceleraciones y retrocesos; el futuro depende de lo que hagamos en el presente. La historia sirve para conocernos y juzgarnos, no como «bola de cristal» que marque un único camino (Trepat, 2006)."
  ],
  conceptos: [
    { t: "Sentido del tiempo", d: "Tiempo colectivo que rige en cada civilización el significado de su experiencia global." },
    { t: "Tiempo cíclico", d: "Concepción en la que los procesos retornan periódicamente." },
    { t: "Tiempo lineal", d: "Concepción con origen, recorrido irreversible y, a veces, un final." },
    { t: "Progreso continuo", d: "Versión secular del tiempo lineal: cada etapa supera a la anterior." },
    { t: "Teleología", d: "Explicación de la historia por su supuesto fin o destino." },
    { t: "Tiempos míticos", d: "Tiempos primordiales (orígenes) y escatológicos (final) narrados por el mito; fuente de las mentalidades de larga duración." }
  ],
  cita: { texto: "[La historia] no sería hoy ya, en ningún caso, una bola de cristal que nos marcaría un único camino correcto hacia el porvenir.", fuente: "Trepat (2006, p. 25)" },
  matices: [
    { t: "Simplificar sin falsear", d: "«Cíclico» y «lineal» son tipos ideales. La tradición hebrea conservó ciclos (el año jubilar) y en Grecia también hubo pensamiento lineal. Úsense como herramientas de comparación." },
    { t: "Progreso: ¿para quién?", d: "Arias Ferrer y Egea Vivancos (2022) invitan a contrastar la tesis del progreso con guerras, crisis, retrocesos sociales e impacto ambiental, sin negar las mejoras reales en otros aspectos." }
  ],
  aula: [
    "1.er ciclo: ciclos que se repiten (días, estaciones, fiestas) frente a cosas que no vuelven (crecer).",
    "2.º ciclo: relatos de origen de distintas culturas como fuente del sentido del tiempo.",
    "3.er ciclo: debate guiado «¿todo tiempo pasado fue peor?» con dos o tres fuentes contrastadas."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "Tras el reto, pedir que cada grupo dibuje su propia metáfora del tiempo histórico (rueda, flecha, trenza u otra) y la justifique.",
    preguntas: [
      "¿Qué sentido del tiempo transmiten los libros de texto que conoces?",
      "¿Qué riesgos tiene enseñar la historia como progreso inevitable?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022"],
  retos: [
    {
      id: "e4-r1", tipo: "clasificar", titulo: "¿Rueda, flecha o trenza?",
      consigna: "Relaciona cada afirmación con la concepción del tiempo que expresa.",
      categorias: ["Cíclico", "Lineal providencial", "Progreso continuo", "Plural y abierto"],
      items: [
        { t: "Cumplido el Gran Año, el universo se renueva y todo vuelve a empezar.", c: 0, e: "Idea grecorromana del eterno retorno." },
        { t: "Las ciudades nacen, alcanzan su apogeo y decaen, como los seres vivos.", c: 0, e: "Analogía con los ciclos de la naturaleza." },
        { t: "La historia empieza con la Creación y camina hacia un juicio final.", c: 1, e: "Esquema judeocristiano sistematizado por San Agustín." },
        { t: "Cada generación será más sabia, rica y libre que la anterior.", c: 2, e: "Tesis ilustrada y positivista del progreso continuo." },
        { t: "Las sociedades pasan por etapas forzosas hasta llegar a una sociedad sin clases.", c: 2, e: "Versión marxista, secularizada, del esquema lineal y progresivo." },
        { t: "Hay avances, estancamientos y retrocesos; el futuro depende de lo que decidamos hoy.", c: 3, e: "Concepción plural de finales del siglo XX." }
      ]
    },
    {
      id: "e4-r2", tipo: "test", titulo: "El sentido del tiempo en la escuela",
      preguntas: [
        { q: "Llamar «Edad de Piedra», «de Bronce» y «de Hierro» a la Prehistoria transmite implícitamente…", o: ["una visión cíclica", "una idea de progreso material", "una visión plural del tiempo"], c: 1, e: "La secuencia sugiere avance técnico; además, buena parte de las herramientas paleolíticas eran de madera y no se han conservado." },
        { q: "¿Qué autor sistematizó en el pensamiento cristiano un tiempo lineal con principio y fin?", o: ["Aristóteles", "San Agustín", "Braudel"], c: 1, e: "San Agustín (354-430) rechazó el tiempo cíclico pagano." }
      ]
    }
  ]
},

/* ===================================================================== 5 */
{
  id: "e5", num: 5,
  titulo: "El mar de Braudel",
  sub: "Tiempo cronológico y tiempo histórico",
  lema: "¿Basta con ordenar fechas para entender un hecho?",
  idea: "El tiempo cronológico ordena, sitúa y organiza; el tiempo histórico explica. Braudel mostró que bajo los acontecimientos se mueven coyunturas y estructuras más lentas.",
  prediccion: {
    q: "Antes de empezar: ¿qué explica mejor la llegada de Colón a América en 1492?",
    o: ["La decisión de los Reyes Católicos", "Varias causas de distinta duración", "La fecha exacta del viaje"]
  },
  sintesis: [
    "Hasta comienzos del siglo XX, tiempo histórico y tiempo cronológico eran casi sinónimos. La historia <strong>positivista</strong> era una sucesión lineal, única y progresiva de hechos políticos protagonizados por grandes personajes: el hecho ordenado y su fecha eran el único tiempo de la historia. En la escuela, «saber historia» llegó a equivaler a recordar hechos bien fechados.",
    "La revista <em>Annales</em> (Bloch y Febvre, 1929) defendió una historia total, económica, social y cultural. <strong>Fernand Braudel</strong> (1902-1985) sistematizó en 1949 la existencia de varias duraciones. Su propia imagen era marina: los <em>acontecimientos</em> son el oleaje de superficie, rápido y engañoso, el «tiempo del periodista»; la <em>coyuntura</em> (tiempo medio) son ciclos económicos y sociales de años o décadas; la <em>estructura</em> (larga duración) es un tiempo casi inmóvil —el medio geográfico, los límites técnicos, la demografía, las mentalidades— que impone límites al cambio.",
    "De ahí la definición que maneja el tema: el tiempo histórico es «la simultaneidad de duraciones, movimientos y cambios diversos que se dan en una colectividad humana a lo largo de un periodo determinado» (Trepat, 2006). Dos conceptos le son casi inseparables: la <strong>causalidad</strong> y la identificación de <strong>continuidades y cambios</strong>.",
    "Hoy se considera que ambos tiempos deben enseñarse en paralelo. Sin cronología no hay dónde situar los hechos; con solo cronología, la historia se reduce a memorizar. Ningún aprendizaje histórico debe quedarse en el qué y el cuándo: debe llegar al cómo y al porqué (Arias Ferrer y Egea Vivancos, 2022)."
  ],
  conceptos: [
    { t: "Positivismo", d: "Corriente decimonónica que reduce la historia a hechos documentados en orden lineal, sin teoría explicativa." },
    { t: "Acontecimiento (tiempo corto)", d: "Hecho puntual y fechable; la superficie de la historia." },
    { t: "Coyuntura (tiempo medio)", d: "Ciclo de años o décadas, a menudo económico o social." },
    { t: "Estructura (larga duración)", d: "Constantes que cambian muy despacio y limitan el cambio: medio, técnicas, demografía, mentalidades." },
    { t: "Historia total", d: "Aspiración de los Annales a relacionar todos los niveles de la realidad social." }
  ],
  cita: { texto: "El tiempo cronológico ordena, sitúa y organiza; en cambio el tiempo histórico […] explica.", fuente: "Trepat (2002, pp. 42-43), citado en Arias Ferrer y Egea Vivancos (2022, p. 98)" },
  matices: [
    { t: "¿De quién es la expresión?", d: "Los apuntes atribuyen a Vovelle la idea de las mentalidades como «prisiones de larga duración». La fórmula aparece ya en el artículo de Braudel de 1958 a propósito de los marcos mentales; Vovelle la desarrolló en la historia de las mentalidades." },
    { t: "Un esquema, no una receta", d: "No todos los hechos admiten una explicación causal en tres niveles tan nítida. El ejemplo de 1492 (acontecimiento), 1453 (coyuntura) y el Renacimiento (estructura) es, como reconocen sus autores, reduccionista; su valor está en ampliar el foco." }
  ],
  aula: [
    "1.er ciclo: distinguir lo que pasó «un día» de lo que pasa «siempre» en la vida del barrio.",
    "2.º ciclo: explicar un cambio cercano (llega la guagua al pueblo) con causas rápidas y lentas.",
    "3.er ciclo: analizar un hecho de la historia de Canarias con los tres niveles de Braudel."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Usar el mando de la escena para «bajar» del oleaje a la estructura mientras se comenta cada nivel.",
    preguntas: [
      "¿Qué tiempo predomina en las actividades de historia que has visto en tus prácticas?",
      "¿Cómo se puede trabajar la larga duración con alumnado de 10 u 11 años?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022", "braudel1949", "braudel1958"],
  retos: [
    {
      id: "e5-r1", tipo: "clasificar", titulo: "Tres profundidades",
      consigna: "Sitúa cada fenómeno en la duración que mejor le corresponde.",
      categorias: ["Acontecimiento (corta)", "Coyuntura (media)", "Estructura (larga)"],
      items: [
        { t: "La batalla de Lepanto (7 de octubre de 1571).", c: 0, e: "Hecho puntual y fechable: oleaje de superficie." },
        { t: "La toma de la Bastilla (14 de julio de 1789).", c: 0, e: "Acontecimiento; su explicación exige niveles más profundos." },
        { t: "La subida prolongada de los precios en la Europa del siglo XVI.", c: 1, e: "Ciclo económico de décadas: coyuntura." },
        { t: "Varios años seguidos de malas cosechas y carestía.", c: 1, e: "Fluctuación de medio plazo." },
        { t: "La trashumancia del ganado entre llanura y montaña en el Mediterráneo.", c: 2, e: "Práctica ligada al medio que se mantiene durante siglos." },
        { t: "Las creencias sobre el honor familiar que perduran durante generaciones.", c: 2, e: "Mentalidad: estructura que resiste al cambio." },
        { t: "El calendario agrícola que organiza la vida campesina durante siglos.", c: 2, e: "Tiempo casi inmóvil ligado al medio y a la técnica." }
      ]
    },
    {
      id: "e5-r2", tipo: "ordenar", titulo: "Del oleaje al fondo",
      consigna: "Ordena las causas de la llegada de Colón a América (1492) de la más superficial a la más profunda, según el ejemplo de Arias Ferrer y Egea Vivancos.",
      items: [
        { t: "Las capitulaciones y el viaje de 1492.", e: "Acontecimiento: tiempo corto." },
        { t: "La búsqueda de nuevas rutas tras la caída de Constantinopla (1453).", e: "Coyuntura: tiempo medio." },
        { t: "El desarrollo técnico y científico europeo ligado al Renacimiento.", e: "Estructura: tiempo largo." }
      ],
      explicacion: "Los autores advierten que el ejemplo es reduccionista; sirve para mostrar que un acontecimiento se explica por causas de distinta duración."
    },
    {
      id: "e5-r3", tipo: "test", titulo: "Positivismo y Annales",
      preguntas: [
        { q: "En la historia positivista, la explicación de un hecho consistía sobre todo en…", o: ["relacionarlo con estructuras económicas", "situarlo después de otro hecho", "compararlo con otras culturas"], c: 1, e: "Si un hecho ocurría antes que otro, se daba por su causa: la sucesión era la explicación." },
        { q: "¿Qué nivel del tiempo histórico es, según Braudel, el menos presente en la conciencia de las personas?", o: ["El acontecimiento", "La coyuntura", "La estructura"], c: 2, e: "La larga duración opera sin ser percibida: a través del sistema económico o de las mentalidades." }
      ]
    }
  ]
},

/* ===================================================================== 6 */
{
  id: "e6", num: 6,
  titulo: "El friso de las edades",
  sub: "Cronología, sucesión, simultaneidad, duración y ritmo",
  lema: "¿Qué cuenta una línea del tiempo y qué esconde?",
  idea: "Las dimensiones de la temporalidad histórica permiten situar, comparar y explicar. Enseñar una periodización no basta: hay que enseñar a periodizar.",
  prediccion: {
    q: "Antes de empezar: ¿qué duró más?",
    o: ["La Prehistoria", "La Edad Moderna", "Duraron más o menos lo mismo"]
  },
  sintesis: [
    "<strong>Cronología y periodización.</strong> La cronología es el sistema de medida de la historia: eras, edades, siglos y años. Organiza las secuencias y es frontera entre el tiempo cronológico y el histórico. Nadie nace con ella: hay que construir una «estantería temporal» con sus baldas (Prehistoria, Edad Antigua, Media, Moderna y Contemporánea) donde colocar lo que se aprende (Arias Ferrer y Egea Vivancos, 2022, a partir de Cooper).",
    "<strong>Sucesión.</strong> Ordenar por antes y después es uno de los primeros aprendizajes y la base de la causalidad. A veces importa más que la fecha exacta: saber que 1453 cierra la Edad Media sirve más que recordar el número. <strong>Simultaneidad.</strong> Reconocer hechos y estructuras que coexisten es más difícil, porque la línea del tiempo invita a pensar en serie. Mientras se levantaban las pirámides de Guiza (hacia 2600-2500 a.&nbsp;C.), en la península ibérica vivían sociedades calcolíticas; cuando Colón zarpó de La Gomera (1492), Tenerife aún no había sido conquistada (1494-1496).",
    "<strong>Duración.</strong> No es solo cantidad de años: depende de la naturaleza del hecho (político, económico, mental) y permite comprender el alcance de sus efectos. Con grandes cifras, la duración relativa es más útil que la exacta. <strong>Ritmo.</strong> Es la velocidad entre dos o más cambios: <em>aceleración</em>, <em>estancamiento</em>, <em>retroceso</em> y <em>ruptura</em>.",
    "La periodización escolar española es eurocéntrica y, a veces, hispanocéntrica: la escritura se fecha hacia el 3500 a.&nbsp;C., válido para Mesopotamia, pero en la península no aparece hasta el I milenio a.&nbsp;C.; el final de la Edad Media se marca con 1492. Cada territorio tiene su propio devenir. En Canarias, las sociedades indígenas mantuvieron sus formas de vida hasta la conquista castellana (1402-1496), lo que obliga a preguntarse si conviene aplicarles la etiqueta «Prehistoria». Enseñar a periodizar es hacer visibles esos criterios."
  ],
  conceptos: [
    { t: "Sucesión", d: "Orden lineal de los hechos según un antes y un después." },
    { t: "Simultaneidad", d: "Coexistencia de hechos, procesos o duraciones en un mismo tiempo." },
    { t: "Duración", d: "Permanencia de un fenómeno entre dos momentos; corta, media o larga según su naturaleza." },
    { t: "Ritmo", d: "Velocidad del cambio: aceleración, estancamiento, retroceso o ruptura." },
    { t: "Periodización", d: "División convencional del pasado en etapas según criterios explícitos o implícitos." }
  ],
  cita: { texto: "No solo debemos enseñar una determinada periodización, sino que también debemos enseñar a periodizar.", fuente: "Presentación del tema 3 (diapositiva 56)" },
  matices: [
    { t: "El año cero no existe", d: "Al 1 a. C. le sigue el 1 d. C. Por eso, para calcular cuánto tiempo separa una fecha antes de Cristo de otra después de Cristo, se suman los años y se resta uno." },
    { t: "Escalas que engañan", d: "En una línea del tiempo proporcional la Prehistoria ocupa casi todo el espacio; en las escalas comprimidas, todas las edades parecen iguales. Ninguna es neutra: conviene mostrar las dos (prueba el botón de escala en la escena)." },
    { t: "¿Prehistoria en Canarias?", d: "La fecha del primer poblamiento del archipiélago sigue en debate y las inscripciones líbico-bereberes complican la frontera entre Prehistoria e Historia basada en la escritura. Es un buen caso para enseñar a periodizar." }
  ],
  aula: [
    "1.er ciclo: secuencias de imágenes de la vida cotidiana; línea del tiempo de la propia vida.",
    "2.º ciclo: concepto de generación con el árbol familiar; el siglo como unidad; evolución de objetos (teléfono, radio).",
    "3.er ciclo: números romanos; subperiodos; relacionar hechos de la historia local con los grandes periodos."
  ],
  docente: {
    duracion: "35 minutos",
    dinamica: "Proyectar el friso en escala proporcional y en escala comprimida y pedir al grupo que explique la diferencia antes del reto.",
    preguntas: [
      "¿Qué hitos de corte usarías para periodizar la historia de Canarias? ¿Con qué criterios?",
      "¿Cómo trabajar la simultaneidad sin abandonar la línea del tiempo?"
    ]
  },
  refs: ["tema3", "trepat2006", "arias2022", "cooper2002", "degroot2019"],
  retos: [
    {
      id: "e6-r1", tipo: "ordenar", titulo: "Sucesión",
      consigna: "Ordena los hechos del más antiguo al más reciente.",
      items: [
        { t: "Llegan las primeras comunidades neolíticas a la península ibérica (hacia 5500 a. C.).", e: "VI milenio a. C." },
        { t: "Se construyen las pirámides de Guiza (hacia 2600-2500 a. C.).", e: "III milenio a. C." },
        { t: "Desembarco romano en Ampurias (218 a. C.).", e: "Siglo III a. C." },
        { t: "Fin del Imperio romano de Occidente (476).", e: "Siglo V." },
        { t: "Colón zarpa de La Gomera (1492).", e: "Siglo XV." },
        { t: "Toma de la Bastilla (1789).", e: "Siglo XVIII." }
      ],
      explicacion: "Fíjate en que las fechas antes de Cristo se ordenan al revés que los números: 5500 a. C. es anterior a 218 a. C."
    },
    {
      id: "e6-r2", tipo: "numerico", titulo: "Sin año cero",
      consigna: "¿Cuántos años transcurren entre el desembarco romano en Ampurias (218 a. C.) y el viaje de Colón (1492)?",
      respuesta: 1709, tolerancia: 0, unidad: "años",
      pista: "No existe el año cero: suma los años y resta uno.",
      explicacion: "218 + 1492 − 1 = 1709 años. Restar uno corrige la ausencia del año cero entre el 1 a. C. y el 1 d. C."
    },
    {
      id: "e6-r3", tipo: "numerico", titulo: "¿En qué siglo?",
      consigna: "¿A qué siglo pertenece el año 1900? Escribe el número en cifras arábigas.",
      respuesta: 19, tolerancia: 0, unidad: "siglo",
      pista: "El siglo I va del año 1 al 100; el siglo XX empieza en 1901.",
      explicacion: "1900 es el último año del siglo XIX. Es uno de los errores más frecuentes al relacionar años y siglos."
    },
    {
      id: "e6-r4", tipo: "clasificar", titulo: "Ritmos de la historia",
      consigna: "Identifica el ritmo que describe cada situación.",
      categorias: ["Aceleración", "Estancamiento", "Retroceso", "Ruptura"],
      items: [
        { t: "En pocas décadas cambian la energía, el trabajo y las ciudades con la industrialización.", c: 0, e: "Cambios rápidos y encadenados." },
        { t: "Durante siglos las técnicas agrarias apenas se modifican.", c: 1, e: "Cambios casi imperceptibles." },
        { t: "La peste negra (1348) reduce la población y se abandonan aldeas y cultivos.", c: 2, e: "Cambio en sentido negativo de varios niveles." },
        { t: "En pocos años la monarquía absoluta francesa da paso a un régimen constitucional.", c: 3, e: "Transformación brusca y significativa." }
      ]
    },
    {
      id: "e6-r5", tipo: "test", titulo: "Simultaneidad y duración",
      preguntas: [
        { q: "Cuando Colón zarpó de La Gomera en septiembre de 1492, ¿qué isla seguía sin conquistar?", o: ["Gran Canaria", "Tenerife", "Lanzarote"], c: 1, e: "Tenerife se conquistó entre 1494 y 1496; Gran Canaria, entre 1478 y 1483; Lanzarote, desde 1402." },
        { q: "¿Qué duró más?", o: ["La Prehistoria", "La Edad Moderna", "Duraron lo mismo"], c: 0, e: "La Prehistoria abarca cientos de miles de años; la Edad Moderna, unos tres siglos. La duración relativa importa más que la cifra exacta." }
      ]
    }
  ]
},

/* ===================================================================== 7 */
{
  id: "e7", num: 7,
  titulo: "El aula del tiempo",
  sub: "Cómo aprenden el tiempo niños y niñas",
  lema: "¿Hay que esperar a una edad para enseñar historia?",
  idea: "La teoría piagetiana ordenó el aprendizaje del tiempo en estadios; la investigación posterior muestra que la comprensión temporal depende mucho de los contenidos y de la didáctica.",
  prediccion: {
    q: "Antes de empezar: ¿a partir de qué edad puede un niño o una niña aprender algo de historia?",
    o: ["Desde Educación Infantil", "Desde los 7-8 años", "No antes de los 11-12 años"]
  },
  sintesis: [
    "<strong>Por qué cuesta aprender el tiempo histórico.</strong> El tema distingue tres tipos de problemas: <em>epistemológico y didáctico</em> (qué entendemos por tiempo en la enseñanza; su reducción a cronología), <em>axiológico</em> (para qué enseñar a situarse en el tiempo, es decir, las finalidades de la historia escolar) y <em>psicológico</em> (cómo construyen la temporalidad niños, niñas y adolescentes y qué papel tiene la enseñanza).",
    "<strong>Las teorías clásicas.</strong> Piaget (1946) describió tres estadios: <em>tiempo vivido</em> (hasta los 6-7 años, sin distinguir con nitidez orden, posición ni duración), <em>tiempo percibido</em> (7-11 años, ritmos, duraciones y sucesión) y <em>tiempo concebido</em> (desde los 11-12 años, abstracción y causalidad). Hannoun (1977) y otros organizaron las categorías temporales —ritmos, orientación, posición, duraciones, velocidades y medida— y propusieron tres pasos didácticos: <em>identificación o experiencia</em>, <em>descentración</em> y <em>extensión del concepto</em>.",
    "<strong>La revisión.</strong> Calvani (1986, 1988) sostuvo que la comprensión temporal es posible ya entre los 3 y los 6 años y que los problemas dependen sobre todo de los contenidos y de la didáctica. Egan (1991) revalorizó la imaginación y el relato como herramientas para pensar lo lejano. Cooper (2002) muestra que, desde los 3 años, se pueden trabajar semejanzas y diferencias entre pasado y presente y que, con cuentos, objetos y fuentes, se puede desarrollar pensamiento histórico en los primeros cursos. Thornton y Vukelich (1988) propusieron fases que adelantan a las piagetianas.",
    "<strong>Investigación reciente.</strong> De Groot-Reuvekamp et al. (2017) evaluaron a 1457 escolares de 6 a 12 años y propusieron un modelo de comprensión en tres etapas (emergente, inicial y continuada): todos los cursos mejoraban con la edad, pero el mayor margen de mejora estaba entre los 6 y los 9 años, con poca enseñanza explícita del tiempo. En España, Arias-Ferrer y Egea-Vivancos (2022) comprobaron que los currículos de 2014 seguían más cerca de las tesis piagetianas que de las propuestas recientes sobre pensamiento histórico.",
    "<strong>Implicaciones.</strong> La escuela debe superar la «historia de museo», partir del presente y de los problemas del alumnado, enseñar a periodizar y trabajar la cronología junto con el cambio, la duración, la sucesión y el ritmo. En el marco LOMLOE, la competencia específica 7 del área de Conocimiento del Medio Natural, Social y Cultural pide «observar, comprender e interpretar continuidades y cambios del medio social y cultural, analizando relaciones de causalidad, simultaneidad y sucesión, para explicar y valorar las relaciones entre diferentes elementos y acontecimientos» (RD 157/2022; Decreto 211/2022 en Canarias). En Canarias, el criterio 7.1 progresa de ordenar temporalmente hechos del entorno cercano (1.er ciclo) a localizarlos de la Prehistoria a la Edad Antigua (2.º) y a analizarlos de la Edad Media a la actualidad (3.º). El cuadro completo está en la Guía de estudio."
  ],
  conceptos: [
    { t: "Tiempo vivido", d: "Experiencia directa y poco organizada del tiempo (estadio preoperatorio)." },
    { t: "Tiempo percibido", d: "Identificación de ritmos, duraciones y sucesión en relación con el espacio (operaciones concretas)." },
    { t: "Tiempo concebido", d: "Tiempo abstracto, desligado de referencias concretas (operaciones formales)." },
    { t: "Descentración", d: "Paso de la experiencia propia a la de otras personas, objetos o tiempos." },
    { t: "Pensamiento histórico", d: "Conjunto de habilidades para interpretar el pasado: relevancia, fuentes, cambio y continuidad, causas, perspectiva, dimensión ética (Seixas y Morton, 2013)." }
  ],
  cita: { texto: "La escuela debe superar la enseñanza de una historia de museo.", fuente: "Presentación del tema 3 (diapositiva 56)" },
  matices: [
    { t: "Estadios: orientación, no frontera", d: "Las edades de Piaget son orientativas. Leídas como límites rígidos, justifican retrasar la historia en la escuela, algo que la investigación posterior no respalda." },
    { t: "Lo que no dicen los datos", d: "El estudio de De Groot-Reuvekamp et al. (2017) se hizo con alumnado neerlandés y un currículo organizado en diez eras; sus cifras no se trasladan sin más al contexto canario." },
    { t: "Currículo: la letra y su reparto", d: "La competencia específica 7 se cita literalmente del RD 157/2022 y del Decreto 211/2022 (BOC n.º 231, Anexo 2). Su reparto por ciclos en Canarias (entorno cercano; Prehistoria-Edad Antigua; Edad Media-actualidad) es una decisión curricular, no una consecuencia de los estadios piagetianos: conviene no confundir ambas cosas." }
  ],
  aula: [
    "1.º-2.º: rutinas, horario visual, antes-ahora-después, fotos de la propia vida, objetos de los abuelos.",
    "3.º-4.º: generación y árbol familiar, siglo como unidad, evolución de objetos, refranes temporales.",
    "5.º-6.º: calendarios de otras culturas, subperiodos, historia local en los grandes periodos, causa y efecto con pocas variables."
  ],
  docente: {
    duracion: "30-35 minutos",
    dinamica: "Cerrar la sesión con la Mesa de diseño: cada grupo genera un borrador de actividad y lo defiende en dos minutos.",
    preguntas: [
      "¿Qué consecuencias tuvo en la escuela leer a Piaget como un límite de edad?",
      "¿Qué evidencia necesitarías para comprobar que una actividad mejora la comprensión del tiempo?"
    ]
  },
  refs: ["tema3", "trepat2006", "cooper2002", "arias2022", "piaget1946", "hannoun1977", "calvani1988", "egan1991", "thornton1988", "degroot2014", "degroot2017", "arias2022prof", "seixas2013", "rd157", "d211"],
  retos: [
    {
      id: "e7-r1", tipo: "clasificar", titulo: "Categorías temporales",
      consigna: "Clasifica cada expresión en la categoría temporal que trabaja (cuadro de Hannoun y Trepat).",
      categorias: ["Ritmos", "Orientación", "Sucesión", "Simultaneidad", "Duración"],
      items: [
        { t: "a menudo, a veces, regularmente", c: 0, e: "Frecuencia y regularidad: ritmos." },
        { t: "mañana, más tarde, en el futuro", c: 1, e: "Orientación hacia el futuro." },
        { t: "más antiguo que, uno después de otro", c: 2, e: "Posición relativa: sucesión." },
        { t: "al mismo tiempo que, mientras, durante", c: 3, e: "Posición relativa: simultaneidad." },
        { t: "pasajero, efímero, duradero, permanente", c: 4, e: "Variabilidad y permanencia: duraciones." },
        { t: "hace algún tiempo, anteriormente", c: 1, e: "Orientación hacia el pasado." }
      ]
    },
    {
      id: "e7-r2", tipo: "ordenar", titulo: "Tres pasos didácticos",
      consigna: "Ordena las actividades de esta secuencia sobre el cambio en la ropa según los tres pasos de la teoría clásica.",
      items: [
        { t: "Identificación: cada niño o niña trae una foto suya de bebé y compara su ropa con la actual.", e: "Parte de la experiencia vivida." },
        { t: "Descentración: compara su ropa con la de sus padres y abuelos a su edad.", e: "Relaciona su experiencia con la de otras personas." },
        { t: "Extensión: ordena imágenes de ropa de distintas épocas y explica qué cambió y qué permaneció.", e: "Amplía el concepto de cambio a escalas mayores." }
      ],
      explicacion: "La secuencia va de la experiencia propia a la de otros y, después, a dimensiones más amplias."
    },
    {
      id: "e7-r3", tipo: "clasificar", titulo: "¿Para qué ciclo?",
      consigna: "Asigna cada actividad al ciclo de Primaria donde la sitúan las orientaciones del tema.",
      categorias: ["1.er ciclo (1.º-2.º)", "2.º ciclo (3.º-4.º)", "3.er ciclo (5.º-6.º)"],
      items: [
        { t: "Ordenar fotografías de las rutinas de un día de clase.", c: 0, e: "Sucesión a partir del tiempo vivido." },
        { t: "Comparar los juguetes propios con los de los abuelos.", c: 0, e: "Semejanzas y diferencias entre pasado y presente cercano." },
        { t: "Construir el árbol familiar para comprender la generación.", c: 1, e: "Concepto de generación (tema 3, 3.º-4.º)." },
        { t: "Ordenar la evolución del teléfono y situarla en una línea del tiempo.", c: 1, e: "Cambio en los objetos y sucesión." },
        { t: "Comparar el calendario gregoriano con el islámico y el judío.", c: 2, e: "La medida del tiempo como construcción social (5.º-6.º)." },
        { t: "Relacionar un hecho de la historia de la isla con los grandes periodos.", c: 2, e: "Historia local y periodización general." }
      ]
    },
    {
      id: "e7-r4", tipo: "test", titulo: "Voces de la investigación",
      preguntas: [
        { q: "«La comprensión temporal es posible entre los 3 y los 6 años; los problemas dependen sobre todo de los contenidos y de la didáctica.»", o: ["Piaget", "Calvani", "Hannoun"], c: 1, e: "Calvani criticó la lectura piagetiana del aprendizaje del tiempo." },
        { q: "«La imaginación y los relatos son herramientas de comprensión, no un obstáculo infantil.»", o: ["Egan", "Braudel", "Thornton y Vukelich"], c: 0, e: "Egan revalorizó la capacidad de abstracción e imaginación de la infancia." },
        { q: "En el estudio de De Groot-Reuvekamp et al. (2017), ¿dónde estaba el mayor margen de mejora?", o: ["Entre los 10 y los 12 años", "Entre los 6 y los 9 años", "No hubo diferencias por edad"], c: 1, e: "En los primeros cursos, donde apenas hay enseñanza explícita del tiempo histórico." }
      ]
    }
  ]
}
];
