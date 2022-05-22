const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Que es Media Queries ?",
    respuestas: {
      a: "Crea formularios que no aparecen en la pantalla ",
      b: "Sirven para definir estilos diferentes para distintos tamaños en la pantalla",
      c: "Sirven para cambiar la apariencia de la pantalla",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Para que sirve Media Queries?",
    respuestas: {
      a: "Crear consultas a la base de datos con visual Studio y php",
      b: "Definir una variable dentro de un Campo html y agregarle mas estilos",
      c: "Nos sirven para definir estilos condicionales",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. De que tipo representa Media Queres?",
    respuestas: {
      a: "PHP _",
      b: "Html5 _",
      c: "ALPHA _",
      d: "CSS _",
    },
    respuestaCorrecta: "d",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);