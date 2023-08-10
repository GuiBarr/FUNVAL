/*En esta clase vimos acerca de array y objetos (el principio) y también un ciclo while para el juego de Pokemón.*/
//vídeo de la clase de hoy: https://www.youtube.com/watch?v=Mev8vY-GECI&t=1s
/*Tipos de datos

Primitivos:

- String (cadenas de texto);
- Number (176493624);
- Boolean (true/false);

Tipo Objeto:

- Arrays
- Objetos

--- Array - Guardar una colección de información de un grupo de datos que comparten una caracteristica.
Usualmente el nombre de la variable se escribe en plural.

let arr = ["manzana", "pera", "durazno", "sandia", "coco"] // esto es una variable de tipo array.Para poder 
acceder a unos de estos datos debes guardar en una variable.

arr[3] - te va a retornar sandia

- si quiero traer dos valores de este array, tendría que concatenarlos, por ejemplo:

let arr = ["manzana", "pera", "durazno", "sandia", "coco"];

console.log(arr[2] + ", " + arr[3]); // te salta 'durazno, sandia'.*/

// CREA UN ARRAY CON 7 COMIDAS Y LUEGO SE LE MUESTRA POR CONSOLE

/*let comidas = ["arroz", "porotos", "lechuga", "fideos", "milanesa", "carne", "huevos", "burritos"];

console.log(comidas[0],comidas[1],comidas[2],comidas[3],comidas[4],comidas[5],comidas[6],comidas[7]);*/

/*let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
alert( fruits[3] );

fruits[2] = 'Pear'; //para reemplazar un elemento ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; //para agregar un nuevo ["Apple", "Orange", "Pear", "Lemon"]
alert( fruits.length );// para mostrar el total de elementos en el array */

/*Un array puede almacenar elementos de cualquier tipo.

Por ejemplo:

// mezcla de valores
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // John
// obtener la función del índice 3 y ejecutarla
arr[3](); // hello*/

/*

--- Objeto - Los valores internos forman parte de un "algo". Es separado por KEY: VALUE PAIR o sea llave: valor.

let perro = {
    nombre: "Firulais",
    genero: "macho",
    edad: 3,
    raza: "cruzado",
    estaVacunado: true
}

console.log(perro.nombre)

perro.nombre // "Firulais"
perro.raza //"cruzado" */



/*let usuario = {
    nombre: "Guilherme",
    nacionalidad: "Brasileño",
    edad: 24,
    equipoFutbol: "Palmeiras",
    favGame: "FIFA",
    casado: false,
}

console.log(usuario.nombre);
console.log(usuario.nacionalidad);
console.log(usuario.edad);
console.log(usuario.equipoFutbol);
console.log(usuario.favGame);
console.log(usuario.casado);
delete(usuario.casado);// como deletar una propiedad
console.log(usuario.casado);
usuario.casado = true; // como agregar una nueva propiedad
console.log(usuario.casado);*/



/*//POKEMÓN

//esta variable se usará para ir cambiando los turnos
let turno = 1;

//declaro los pokemones
let pikachu = {
    vida:100,
    atk:55
}

let jiglypuff = {
    vida: 100,
    atk: 45
}

//LA BATALLA!
while (pikachu.vida >0 && jiglypuff.vida >0) {

    if (turno ==1) {
        jiglypuff.vida = jiglypuff.vida - pikachu.atk;
        turno = 0;
    }else {
        pikachu.vida = pikachu.vida - jiglypuff.atk;
        turno = 1;
    }
    console.log("La vida de Pikachu es:" + pikachu.vida);
    console.log("La vida de Jiglypuff es:" + jiglypuff.vida);
    console.log("")
};

//luego de la batalla
if (pikachu.vida >0) {
    console.log("Pikachu es el ganador");
}else {
    console.log("Jiglypuff es el ganador");
}*/

//Estudiar: Arrays, Objetos y ciclos con ellos.


/*let nome = prompt('Digite seu nome:');
alert('Olá, ' + nome + '!'); // Exibe uma saudação com o nome inserido pelo usuário
let usuario = [nome]
console.log(usuario);*/

