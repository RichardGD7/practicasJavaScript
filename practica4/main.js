/* Funcion que tome una palabra y genere dos nuevas a partir de ella usando las letras en posicion non y par*/

function evenOdd(word){
  odd = "";
  even = "";
  for (let i = 0; i <word.length; i++){
      let letter = word.charAt(i)
      i % 2 !== 0 ? (odd += letter):(even += letter);
  }
  console.log(`La palabra con letras pares es ${even} y con letras impares es ${odd}`)
}

let result = evenOdd("Hola")