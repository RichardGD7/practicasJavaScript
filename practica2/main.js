num1 = 9
num2 = 5

/* Funcion para Suma de Dos numeros*/
function sumaDosNumeros(num1,num2) {
  let resultSuma = num1 + num2
  return resultSuma
}

let resultSuma = sumaDosNumeros(num1,num2)
console.log("El resultado de la suma es: ",resultSuma)

/* Funcion para Resta de Dos numeros*/
function restaDosNumeros(num1,num2) {
  let resultResta = num1 - num2
  return resultResta
}

let resultResta = restaDosNumeros(num1,num2)
console.log("El resultado de la resta es: ",resultResta)

/* Funcion para Multiplicacion de Dos numeros*/
function multiplicacionDosNumeros(num1,num2) {
  let resultMultiplicacion = num1 * num2
  return resultMultiplicacion
}

let resultMultiplicacion = multiplicacionDosNumeros(num1,num2)
console.log("El resultado de la multiplicacion es: ",resultMultiplicacion)

/* Funcion para Dividir de Dos numeros*/
function dividirDosNumeros(num1,num2) {
  let resultDivision = num1 + num2
  return resultDivision
}

let resultDivision = dividirDosNumeros(num1,num2)
console.log("El resultado de la division es: ",resultDivision)

/* Función que devuelve si un numero es mayor al otro*/
function numeroMayor(num1,num2){
    if (num1>num2){
        return `El numero ${num1} es mayor a ${num2}`
    } else if (num2>num1){
        return `El numero ${num2} es mayor a ${num1}`
    }
}
let result = numeroMayor(num1,num2)
console.log(result)

/*Función que devuelve si el numero es par o impar*/
function esParOImpar(num1) {
    if (num1 % 2 === 0) {
      return `El numero ${num1} es Par`;
    } else {
      return `El numero ${num1} es Impar`;
    }
}

let result2 = esParOImpar(num1)
console.log(result2)
