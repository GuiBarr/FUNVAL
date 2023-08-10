console.log(document.body.children[0].children)

//seleccionar un elemento de DOM.
//console.log(document.querySelector(".fruta")) //llamando por console.log

const frutaLi = document.querySelector(".fruta");//llamando por crear una const
// console.log(frutaLi)//luego puedes mostrar la const por console.log

// manipular/eventos su información
frutaLi.innerHTML = "Chocolate"; //aqui asignamos otro valor a frutaLi. Era Pera y ahora será Chocolate

// eventos
const button = document.querySelector("#btn");

button.addEventListener("click", cambiarNombre);

function cambiarNombre() {
    frutaLi.innerHTML = "Pera";
}

// Ejercicio 1
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector("#resultado");
const calcular = document.querySelector("#calcular");
// debo manipular valor 1 y valor 2 para que sean number y no string
calcular.addEventListener("click", multiplicar);

function multiplicar() {
    let a = parseFloat(valor1.innerHTML); //pero también funciona así: let a = valor1.innerHTML; o con parseInt.
    let b = parseFloat(valor2.innerHTML); //pero también funciona así: let b = valor2.innerHTML; o con parseInt.
    let result = a * b;

    resultado.innerHTML = result;

    return resultado
}

console.log(resultado);

/*Lista de eventos:

click - cuando se hace click en el elemento
dblclick - cuando se hace doble click en el elemento
mouseenter - cuando el punto del mouse ingresa al elemento
mouseleave - cuando el puntero del mouse abandona el elemento
mousemove - cuando el puntero del mouse se mueve sobre el elemento
mouseover - cuando el puntero del mouse se mueve sobre el elemento
mouseout - cuando el puntero del mouse sale del elemento
input - cuando el valor entra en el input de entrada
change - cuando el valor cambia en el input de entrada
blur - cuando el elemento no está enfocado
keydown - cuando una tecla está pulsada
keyup - cuando una tecla está levantada
keypress - cuando pulsamos cualquier tecla
onload - cuando el navegador ha terminado de cargar una página*/