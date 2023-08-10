/*const estudiantes = [ // array estudiantes y adentro hay objetos
    
    {
        id: 1,
        nombre: "Julia",
        apellido: "Camargo",
        calificacion: 18
    },

    {
        id: 2,
        nombre: "Marco",
        apellido: "Iaquinta",
        calificacion: 17
    },

    {
        id: 3,
        nombre: "Brenda",
        apellido: "Schultz",
        calificacion: 19
    }
];

console.log(estudiantes);

for(let estudiante of estudiantes) {
    console.log(estudiante.nombre)
};*/

const compras = [

    {
        id: 1,
        producto: "Papel",
        codigo: 1234,
        precio: 99,
        rebaja: "20%",
    },

    {
        id: 2,
        producto: "Cinta",
        codigo: 456,
        precio: 79,
        rebaja: "0%",
    },

    {
        id: 3,
        producto: "Colores",
        codigo: 768,
        precio: 79,
        rebaja: "10%",
    },

    {
        id: 4,
        producto: "Mouse",
        codigo: 9867,
        precio: 89,
        rebaja: "15%",
    },

    {
        id: 5,
        producto: "Monitor",
        codigo: 75893,
        precio: 200,
        rebaja: "25%",
    },

    {
        id: 6,
        producto: "Gaseosa",
        codigo: 5382,
        precio: 19,
        rebaja: "5%",
    }
]

//console.log(compras);

const lista = document.querySelector("#Lista"); //traigo el elemento a manipular --- por estar "lincado" con el
//html, el valor de lista.innerHTML va a salir en pantalla

//por cada mercadoria dentro del array compras
for(let mercadoria of compras) {
    
    lista.innerHTML += `<li>${mercadoria.producto}</li>`
}

//el profe usó el for en un ejemplo donde tenia 100 objetos dentro de un array. Aquí está lo mismo
//que hizo él pero con mi array compras que es mucho MediaElementAudioSourceNode.