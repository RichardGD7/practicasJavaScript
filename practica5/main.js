/*Primer ejercicio*/
function prueba1(numero,texto){
    let longitudTexto = texto.length
    let palabra = "";
    for (let i = 0; i < numero; i++){
        // let palabra = texto.charAt(i);
        numero<longitudTexto ? (palabra += texto.charAt(i)): (palabra = "Error")
    }
    console.log(palabra)
}

prueba1(11,"Oswaldo")

/*Segundo ejercicio */
function evenOdd(oracion){
    let myArray = oracion.split(" ");
    let sentenseCount = myArray.length;
    let contOdd = 0;
    let contEven = 0;
    for (let i = 0; i < sentenseCount; i++){
        let word = myArray[i];
        let letters = word.length;
        letters % 2 !== 0 ? (contOdd ++):(contEven ++);
    }
    console.log(`Pares: ${contEven} e Impares: ${contOdd}`);
  }
  
  let result = evenOdd("La mejor forma de predecir el futuro es creandolo")