
// forEach -- recorre cada uno de los indices en el array
let arreglo = [2, 4, 6, 8, 10, 12];

for (let i = 0; i < arreglo.length; i++) { // la forma normal
    const item = arreglo[i];
    const index = i;

    //console.log(item, index);
    
}

arreglo.forEach( function (item, index) {// manera de hacer con forEach
    console.log(item, index);
});

function myFunc (item, index) { // función declarativa
    //console.log(item, index);
}

// MAP -- recorre cada uno de los indices en el array y retorna un nuevo arreglo
let arr = ['juan', 'marcos', 'lena', 'sergio']

let resultado = [];
for (let i = 0; i < arr.length; i++) { // la forma normal
    const item = arr[i];

    resultado.push(`<div>${item}</div>`);
}

console.log(resultado);

let resultado2 = arr.map( (item, index) => { // usando a map
    return `<div>${item}</div>`;
});

console.log(resultado2);
console.log(arr);

// FILTER -- filtra elementos basado en una condición y los guarda en un nuevo array
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let result = [];

for (let i = 0; i < numeros.length; i++) {
    const item = numeros[i];

    if(item >= 5 && item <= 11) {
        result.push(item);
    }
    
}

console.log(result);

let result2 = numeros.filter((item, i) => item >= 5 && item <= 11); //usando FILTER en una función flecha

console.log(result2);

// FIND -- lo que hace es busca la primera coincidencia en un array basado en una condición.




// FININDEX -- trae el indice de la primera coincidencia




// REDUCE -- permite reduzir el array






























