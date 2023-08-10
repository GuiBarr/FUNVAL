import { biblioteca } from './data.js';


// Aqui van los elementos del DOM
const app = document.querySelector("#app");
const button = document.querySelector(".button")

showView(null);// por defecto debe mostrar los de null pues son los 5 principales de la pagina

let historial = [];

button.addEventListener("click", () => {
    
});

function showView (has_parent) { //Renderiza la vista de los segmentos en pantalla

    app.innerHTML = " "; //limpiamos la vista

    //  creo un nuevo array solo con los elementos que debo mostrar
    const bibliotecaFiltrada = biblioteca.filter((seg) => seg.has_parent == has_parent); //la funcion de filter es crear un nuevo array de acuerdo con el filtro que determiné

    //mostrar la informacion filtrada en la vista
    bibliotecaFiltrada.forEach( seg => {
        app.innerHTML += createCard(seg);
        
    })

    //traigo las cards, luego de que ya existen en el DOM
    const cards = document.querySelectorAll(".card"); 

    cards.forEach(card => {
        //por cada card, le añado un escuchador de evento
        card.addEventListener("click", () => {

            let id = card.id.split("-")[1];
            
            showView(id)
            historial.push(id);
            
        })
    })


}

function createCard(obj) {

    return `
    <div class="card" id="card-${obj.id}">
        <img src="https://picsum.photos/200/300" alt ="portada" >
        <h3>${obj.name}</h3>
    </div>
    `
}

button.addEventListener



/*


app. innerHTML = "";
padres.forEach( seg => {

    app.innerHTML += createCard(seg);
})

const cards = document.querySelectorAll(".card");

cards.forEach( card => card.addEventListener("click", showMore))
function showMore(id) {

}

*/