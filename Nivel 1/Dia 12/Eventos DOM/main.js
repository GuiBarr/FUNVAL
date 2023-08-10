// EJEMPLO 1
/*
const resultado = document.getElementById("resultado");
const count = document.getElementById("count");

let contador = 0;

resultado.innerHTML = contador;

count.addEventListener("click", () => {
    contador++;

    resultado.innerHTML = contador;
}); */

// EJEMPLO 2 - addEventListener para obtener valor de input
/*
const mass = document.querySelector("#mass");
const height = document.querySelector("#height");
const button = document.querySelector("button");

let bmi;
button.addEventListener("click", () => {
    bmi = mass.value / height.value ** 2;
    alert(`your bmi is ${bmi.toFixed(2)}`);
    console.log(bmi);
}); */

// EJEMPLO 3 - obtener valores usando input y mostrarselo por pantalla
/*
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("input", (e) => {
    p.textContent = e.target.value; // aquí añade el contenido de input en un (p) parrafo.
}); */

// EJEMPLO 4 - 