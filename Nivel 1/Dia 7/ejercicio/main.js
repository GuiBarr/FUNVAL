/*TENEMOS UM STRING CON LAS PALABRAS "APPLE BANANA UVA" CONVIRTELO EN UN ARRAY CON LA 
LA LONGITUD DE LAS PALABRAS ["APPLE 5", "BANANA 6", "UVA 3"].*/

/** PRIMERA SOLUCIÓN **/

/*let palabra = "apple banana uva";

function addLength(str) {

    let init = 0;
    let arr = [];

    for(let i=0; i < str.length; i++) {
        if(str[i] == " ") {
            //cortamos la palabra
            let word = str.slice(init, i);

            //sumamos la longitud a la palabra
            word += " " + word.length;

            //insertar en array
            arr.push(word);

            //indicamos el nuevo punto de inicio
            init = i + 1;
            console.log(arr)
        }
    }

    console.log(init); //indicanos donde empieza la proxima palabra
    console.log(str.length);//indicanos donde se termina la ultima

    if (str.length > init) {
        let word = str.slice(init, str.length);
        word += " " + word.length;
        arr.push(word)
    }

    return arr
}

let arr = addLength(palabra);*/

/** SEGUNDA SOLUCIÓN**/

let palabra = "apple ban pera";

function addLength(str) {

    let arr = str.split(" ");

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + " " + arr[i].length;
    }

    return arr

}

let resultado = addLength(palabra);

console.log(resultado)