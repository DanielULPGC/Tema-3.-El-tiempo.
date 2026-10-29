# Cronos y Kairós · Taller del tiempo social e histórico

Recurso web 3D (Three.js 0.160.0) y de estudio para el **Tema 3. La dimensión temporal: el tiempo social e histórico** de *Didáctica de las Ciencias Sociales II (Historia)*, Grado en Educación Primaria (Facultad de Ciencias de la Educación, ULPGC).

## Qué contiene

- **Siete estaciones** en una escena 3D: tiempo físico; tiempo civil y calendarios; tiempo personal y social; sentido del tiempo; tiempo cronológico e histórico (Braudel); dimensiones de la temporalidad; aprendizaje del tiempo en Primaria.
- En cada estación: predicción, síntesis («Saber»), pestaña **Estudiar** (ideas clave, errores frecuentes, pregunta de desarrollo con guion, apuntes propios), retos autocorregidos, aplicación al aula por ciclos y fuentes.
- **Guía de estudio**: mapa conceptual, cuadros comparativos, autores en orden cronológico, vocabulario temporal, conexión literal con el currículo de Canarias (Decreto 211/2022) y recursos para el aula.
- **Tarjetas de repaso** (sistema de cajas), **examen** aleatorio (12 preguntas de un banco de 32), **glosario** y **Mesa de diseño** de actividades.
- Modo docente (`#docente`) con notas de sesión y soluciones; modo presentación.

## Uso

Publicado con GitHub Pages; basta abrir `index.html` desde un servidor web. Anclas directas: `#e1` … `#e7`, `#estudio`, `#tarjetas`, `#examen`, `#diseno`, `#glosario`, `#bibliografia`, `#guia`.

El progreso, los apuntes y las respuestas se guardan **solo en el navegador** de cada estudiante (localStorage). El botón «Copiar mis apuntes» de la Guía de estudio permite conservarlos fuera.

## Estructura

```
index.html
css/estilos.css
js/app.js        interfaz y vistas
js/escena.js     escena 3D procedimental
js/retos.js      motor de retos
datos/           contenido (estaciones, estudio, complementos, referencias)
```

Corregir o ampliar contenido solo exige editar `datos/`.

## Fuentes y créditos

Contenido de redacción propia a partir del tema 3 de la asignatura; Trepat (2006), Cooper (2002) y Arias Ferrer y Egea Vivancos (2022); investigación revisada por pares (De Groot-Reuvekamp et al., 2014, 2017, 2019; Arias-Ferrer y Egea-Vivancos, 2022; Pagès y Santisteban, 2010) y normativa (RD 157/2022; Decreto 211/2022). Las referencias completas, con DOI cuando existe y notas sobre lo no contrastado, están en la vista «Bibliografía y créditos».

Elaborado con asistencia de un modelo de inteligencia artificial (Claude, Anthropic) en la redacción y la programación; requiere revisión docente.

Dependencias externas: Three.js 0.160.0 (MIT) desde jsDelivr, versión fijada; tipografías Cinzel, Atkinson Hyperlegible y JetBrains Mono (SIL OFL) desde Google Fonts. Sin seguimiento ni envío de datos.

Licencia del contenido: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es).

## Versiones

- **v1.2** (29-10-2026): auditoría. Currículo de Canarias cotejado literalmente (CE7, criterios 7.1 y saberes por ciclo); correcciones de contenido (calendario judío lunisolar, reforma juliana, base sexagesimal); citas literales ajustadas; tablas accesibles con teclado.
- **v1.1** (29-10-2026): capa de estudio (pestaña Estudiar, guía, tarjetas, examen aleatorio); tres problemas de la enseñanza del tiempo y tiempos míticos.
- **v1.0** (29-10-2026): siete estaciones, retos, glosario, examen y Mesa de diseño.
