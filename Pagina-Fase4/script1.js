const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Que definen las inciales SEO ?",
    respuestas: {
      a: "SEO, Service Engine Optimization.      '",
      b: "SEO, Search Engine Optimization.",
      c: "SEO, Search Engine Optimu.",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Basicamente segun el texto en que consiste SEO?",
    respuestas: {
      a: "SEO consiste en monitorear la red publica de su equipo y aumentar la velocidad.",
      b: "SEO consiste en crear nuevas alternativas para los motores de busqueda.",
      c: "SEO consiste basicamente en complacer a los motores de busqueda.",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Que es el SEO On?",
    respuestas: {
      a: "son las técnicas que puedes aplicar para un ambiente laboral en oficina.",
      b: "son las técnicas que puedes aplicar fuera de una Base de Datos.",
      c: "son las técnicas que puedes aplicar dentro del propio PHP.",
      d: "son las técnicas que puedes aplicar dentro del propio sitio web.",
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