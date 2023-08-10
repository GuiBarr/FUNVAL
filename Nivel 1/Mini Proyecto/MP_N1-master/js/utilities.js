/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function  reset(billInput, customPercentageBtn, peopleInput) {

    billInput.value = 0;
    customPercentageBtn.value = "";
    peopleInput.value = 1;
    document.querySelector("#total").innerHTML = 0;
    document.querySelector("#tipAmountInput").innerHTML = 0;

}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip(propina) por persona.
 */


export function calcularTip(bill, tip, people) {
    //necesito valor de bill x % / nº de personas
    let tipPerPerson = ((bill * tip ) / 100) / people;

    let tipPerPersonNew = parseFloat(tipPerPerson.toFixed(2));

    return tipPerPersonNew;
}


/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
    //necesito valor de tip sumado al valor de bill / nº de personas
    let personTotal = (bill / people) + tip;

    let personTotalNew = parseFloat(personTotal.toFixed(2));

    return personTotalNew;
}


/**
 * Ejecutar tanto la función calcularTip() y la función 
 * calcularTotal(), luego retornar un array, teniendo en la posición 0 
 * el retorno de calcularTip() y en la posición 1 el retorno de calcularTotal()
 * @returns array [] con dos valores.
 */
export function calcularTodo(bill, tip, people) {

    let calc = [
        {calcularTip : tip},
        {calcularTotal : bill},
        {people : people}
    
    ]

    console.log(calc)
    return calc

}


/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {

  if (input === 0) {   
    return false;
  }  
    return true;
}
  


/**
 * Añade la claseactive" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {

    const buttons = document.querySelectorAll('.percentage-button');

    buttons.forEach(button => {
      if (button === input) {
        button.classList.add('percentage-button-selected');
      } else {
        button.classList.remove('percentage-button-selected');
      }
    });

    
}


