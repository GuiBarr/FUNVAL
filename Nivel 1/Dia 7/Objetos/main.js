/*//scope.js
a = "JavaScript"; // declarar una variable sin let o const la hace disponible en el objeto window y esta se encuentra en cualquier lugar
b = 10; // es una variable de scope global y se encuentra en el objeto ventana
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accesibles*/

//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_08_Objetos/dia_08_objetos.md

const dog = {}; //un objeto vacío

//aqui estoy añadiendo propriedades al objeto dog
dog.name = "Maximus",
dog.legs = 4,
dog.color = "black",
dog.age = 10,
dog.bark = "woof woof",

console.log(dog); //vemos por consola las propriedades y valores de dog

const caracteristicas = Object.values(dog)//object.values es responsable por traer los valores en el objeto

console.log(caracteristicas);//vemos por consola los valores de dog se crea un array"

dog.breed = "Derua"




