/* Lesson 3 */

/* FUNCIONES */

// Paso 1: OK - Usando una funcion declarativa, defina una funcion llamada add que reciba dos argumentos, numero 1 y numero 2

// Paso 2: OK - En la funcion, retorna la suma de los parametros numero uno y numero 2

// Paso 3: OK - Usando una funcion declarativa, define otra funcion llamada addNumbers que tome los valores de las
//entradas del formulario con los ID's de addend1 y addend2. Paselos a la funcion add

// Paso 4: OK - Asigna el valor retornado al elemento de formulario con el ID de sum

// Paso 5: OK - Añade un escuchador de evento "click" al boton HTML con el ID addNumbers que llama a la funcion addNumbers

// Paso 6: Usando funcion anonima, repita los pasos 1 a 5 con funciones nuevas llamadas subtract y subtractNumbers y controles de formulario HTML con ID de minuend, subtrahend, difference y subtractNumbers

// Paso 7: Usando funciones flecha, repeta los pasos 1 a 5 con funciones nuevas llamadas multiply y mulitplyNumbers y elementos de formulario con ID's factor1, factor2, product y multiplyNumbers

// Paso 8: Usando funciones flecha, repeta los pasos 1 a 5 con funciones nuevas llamadas divide y divideNumbers y elementos de formulario con ID's dividend, divisor, quotient y divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.
// Prueba todas las funciones matematicas de la pagina task3.html

/* BUILT-IN METHODS */

// Paso 1: Declara una instancia en una variable de tipo fecha para obtener la fecha actual // new Date()

// Paso 2: Declara una variable para obtener el año actual

// Paso 3: Usando la variable declarada en paso 1, llama el metodo getFullYear() y asignalo en la variable declarada en paso 2

// Paso 4: Asigna la varaible de año actual al emento de formulario con el id de year

/* Métodos de Array */

// Paso 1: Declara una instancia de un array para que tenga los numero del 1 al 25

// Paso 2: Asigna el valor del array al elemento HTML con el id de "array"

// Paso 3: Usa el metodo filter para encontrar todos los numeros impares del array y asigna el resultado el elemento HTML con el ID de "odds" // ( hint: % (modulus operartor) )

// Paso 4: Usa el metodo filter para encontrar todos los numeros pares del array y asigna el resultado el elemento HTML con el ID de "evens" // ( hint: % (modulus operartor) )

// Paso 5: Use el metodo reduce para sumar la variable que contenga el array y asigna el resultado al elemento HTML con el ID de "sumOfArray"

// Paso 6: Usa el metodo map para multiplicar cada elemento en el array por 2 y asignar el resultado el elemnto HTML con el ID de "multiplied"

// Paso 7: Usa el metodo map y reduce para sumar los elementos del array luego de multiplicar cada elemento por 2. Asigna el resultado al elemento HTML con el id de "sumOfMultiplied"

//-------------------------------------------------------------------------------------------------------------//

// ADDITION ----------------------------------------------------------------------------------
function add(numero1, numero2) {
  return numero1 + numero2;
}

function addNumbers() {
  let addend1 = parseInt(document.querySelector("#addend1").value);
  let addend2 = parseInt(document.querySelector("#addend2").value);
  let resultado = add(addend1, addend2);

  document.querySelector("#sum").value = resultado;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// SUBTRACTION -----------------------------------------------------------------------------
function sub(numero1, numero2) {
  return numero1 - numero2;
}

function subNumbers() {
  let minuend = parseInt(document.querySelector("#minuend").value);
  let subtrahend = parseInt(document.querySelector("#subtrahend").value);
  let resultado = sub(minuend, subtrahend);

  document.querySelector("#difference").value = resultado;
}

document.querySelector("#subtractNumbers").addEventListener("click", subNumbers);

// MULTIPLICATION --------------------------------------------------------------------------
function mult(numero1, numero2) {
  return numero1 * numero2;
}

function multNumbers() {
  let factor1 = parseInt(document.querySelector("#factor1").value);
  let factor2 = parseInt(document.querySelector("#factor2").value);
  let resultado = mult(factor1, factor2);

  document.querySelector("#product").value = resultado;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multNumbers);

// DIVISION --------------------------------------------------------------------------------
function div(numero1, numero2) {
  return numero1 / numero2;
}

function divNumbers() {
  let dividend = parseInt(document.querySelector("#dividend").value);
  let divisor = parseInt(document.querySelector("#divisor").value);
  let resultado = div(dividend, divisor);

  document.querySelector("#quotient").value = resultado;
}

document.querySelector("#divideNumbers").addEventListener("click", divNumbers);
