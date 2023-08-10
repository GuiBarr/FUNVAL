
//funcion declarativa
/*function capitalize(str) {
    let resultado = str[0].toUpperCase() + str.slice(1,str.length);

    return resultado;

}*/



//function expression
/*let capitalize = function(str) {
    let resultado = str[0].toUpperCase() + str.slice(1,str.length);

    return resultado
}*/

//arrow function -solo en una linea
const capitalize1 = (str) => str[0].toUpperCase() + str.slice(1,str.length);

capitalize1("gato");

console.log(capitalize1("gato"));