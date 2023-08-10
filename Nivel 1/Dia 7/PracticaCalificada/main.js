let x = 0;//definir x como 0

function finalValueAfterOperations(operations) {//cambiar los strings por sus numeros
    
    for (let operation of operations) {

        operation = operation.replace("--X", -1).replace("X--", -1).replace("++X", 1).replace("X++", 1);

        x += eval(operation);//aquí irá sumar el x=0 con los valores reasignados

    }

    return x;
    
};

const operations = ["++X", "X++", "--X"];
console.log(finalValueAfterOperations(operations));





/* 

let X = 0

const operations = ["++x", "x++", "--x"]
return operations() = 1

*** estou pensando em trocar os valores que estão no array por numeros ou seja "++x" = 1 y 
"x--" = -1.
Ficariamos com [1+1-1] = 1

*/

function finalValueAfterOperations(operations) {
    let x = 0;
  
    for (let operation of operations) {
      
      operation = operation.replace(/--X|X--/g, '-1').replace(/\+\+X|X\+\+/g, '+1');
      
      
      x += eval(operation);
    }
  
    return x;
  }
  
  const operations = ["++X", "X++", "--X"];
  console.log(finalValueAfterOperations(operations));
