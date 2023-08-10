
const numbers = [];

//el usuario ingresa los numeros y los guardo
function getNumbers() {
    
  
    while (true) {//mientras sea positivo pide otro numero, si no es un numero salta alert y si es igual a cero se termina el bucle
      const numberEntered = parseFloat(prompt("Ingrese un numero positivo/negativo (o ingrese '0' para detener):"));
      
      if (isNaN(numberEntered)) {
        alert("Valor invalido. Por favor, digite un numero valido.");//si no es un numero sale un alert
      } else if (numberEntered === 0) {
        break; // sale del bucle cuando el usuario digitar 0
      } else {
        numbers.push(numberEntered);//guarda los numeros en la variable numberEntered
      }
    }
  
    return numbers;
  }
  //aqui suma los numeros positivos
  function positiveSum(numbers) {
    let sum = 0;
    for (let number of numbers) {
      if (number > 0) {
        sum += number;//es lo mismo que sum = sum + number
      }
    }
    return sum;
  }
  
  const numberEntered = getNumbers();
  const resultSum = positiveSum(numberEntered);
  
  console.log("Numeros ingresados:", numberEntered);

// Verificar si la suma es igual a cero cuando no hay numeros positivos en el array
if (resultSum === 0 && numberEntered.length > 0) {
    console.log("Não hay numeros positivos para sumar.");
  } else {
    console.log("Suma de los numeros positivos:", resultSum);
  }
  
  
  
  





  
  
  
  
  
  