function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function mostrarEjercicio() {
    document.getElementById("solucion").textContent =
        "Solución: =PROMEDIO(80,75,90,85,70) → resultado: 80.";
}

const preguntas = [
    { pregunta: "¿Qué función se utiliza para sumar varios valores?", opciones: ["PROMEDIO", "SUMA", "MAX", "MIN"], correcta: "SUMA" },
    { pregunta: "¿Qué función encuentra el valor más alto?", opciones: ["MIN", "PROMEDIO", "MAX", "SUMA"], correcta: "MAX" },
    { pregunta: "¿Qué función calcula el promedio?", opciones: ["SUMA", "MIN", "PROMEDIO", "MAX"], correcta: "PROMEDIO" },
    { pregunta: "¿Con qué signo comienzan normalmente las fórmulas?", opciones: ["#", "=", "%", "&"], correcta: "=" },
    { pregunta: "¿Qué elemento se identifica con una letra y un número, como A1?", opciones: ["Una celda", "Una fila", "Un libro", "Una gráfica"], correcta: "Una celda" }
];

let indicePregunta = 0;

function cargarPregunta() {
    const p = preguntas[indicePregunta];
    document.getElementById("preguntaJuego").textContent = p.pregunta;
    document.getElementById("resultadoJuego").textContent = "";
    const contenedor = document.getElementById("opcionesJuego");
    contenedor.innerHTML = "";
    p.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.onclick = () => responderJuego(boton, opcion === p.correcta);
        contenedor.appendChild(boton);
    });
}

function nuevaPregunta() {
    indicePregunta = (indicePregunta + 1) % preguntas.length;
    cargarPregunta();
}

function responderJuego(boton, correcta) {
    const resultado = document.getElementById("resultadoJuego");
    if (correcta) {
        resultado.textContent = "🎉 ¡Correcto! Muy bien.";
        resultado.style.color = "#107c41";
    } else {
        resultado.textContent = "💡 Incorrecto. ¡Inténtalo de nuevo!";
        resultado.style.color = "#a33a2b";
    }
}

function verdaderoFalso(respuesta) {
    const resultado = document.getElementById("vfResultado");
    if (respuesta === true) {
        resultado.textContent = "🎉 ¡Correcto! Las columnas se identifican con letras.";
        resultado.style.color = "#107c41";
    } else {
        resultado.textContent = "💡 Incorrecto. Las columnas se identifican con letras.";
        resultado.style.color = "#a33a2b";
    }
}

function abrirFormulario() {
    const formUrl = ""; // Pega aquí el enlace real del Google Forms cuando el grupo lo tenga.
    if (!formUrl) {
        alert("📝 El Google Forms todavía está pendiente. Cuando tengan el enlace, agréguenlo en script.js en la variable formUrl.");
        return;
    }
    window.open(formUrl, "_blank", "noopener,noreferrer");
}

cargarPregunta();
