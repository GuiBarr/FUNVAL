// traigo a mis actores
const tarea = document.querySelector("#tarea");
const add = document.querySelector("#add");
const lista = document.querySelector("#list");

add.addEventListener("click", addTask);


function addTask() {
  
  // extraigo el valor y lo guardo en task
  let task = tarea.value;
  

  // añadir task en la lista
  lista.innerHTML += `<li>${task}</li>`;

  // limpiar el input
  tarea.value = "";

  tarea.focus();
}