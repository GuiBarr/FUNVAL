// RETO 1 

const cambiar = document.querySelector("#cambiar");

cambiar.innerHTML = "Programación Full Stack";

// RETO 2

const operador1 = document.querySelector("#operador1");
const operador2 = document.querySelector("#operador2");
const suma = document.querySelector("#suma");

function multiplicar() {
    let a = parseFloat(operador1.innerHTML); 
    let b = parseFloat(operador2.innerHTML); 
    let result = a + b;

    suma.innerHTML = result;

    return suma;
}

multiplicar();

// RETO 3 

const styleButton = document.querySelector("#estilos")

styleButton.classList.add("button");

// RETO 4

const lista = document.querySelector("#lista");
const fruits = ["Manzana", "Mandarina", "Pera"]

function addFruit(){

    for (let i = 0; i < fruits.length; i++) {
        const li = document.createElement("li"); 
        li.innerHTML = fruits[i]; 
        lista.appendChild(li); 
    }
}

addFruit();



