/*Se requiere generar una funcion que devuelva las iniciales del nombre completo que se le de*/
function iniciales(nombre){
    let iniciales = "";
    let nombreArray = nombre.split(" ");
    for (let i = 0; i < nombreArray.length; i++){
        iniciales +=  nombreArray[i].substr(0,1) + ".";
    }
    return iniciales
}

console.log(iniciales("Jose Ricardo Gomez Duran"))

/*Funcion que devuelva una nueva frase con las palabras en posicion non*/
function oracionNon (oracion){
    let nuevaOracion = "";
    let oracionArray = oracion.split(" ");
    for (let i = 0; i < oracionArray.length; i++){
        i % 2 !== 0 ? (nuevaOracion += oracionArray[i] + " "): "";
    }
    return nuevaOracion
}

console.log(oracionNon("Si esperas a estar listo, esperarás toda la vida"))

/*Funcion que reciba nombre edad y correo de la persona y cree una lista de personas*/
let listaNombres = ["Ricardo","Francisco","Ramon","Javier"];
let listaEdades = [20,30,15,40];
let listaCorreos = ["ricardo@gmail.com","frank@gmail.com","ramon@gmail.com","javi@gmail.com"];
function listaKoders (nombres,edades,correos){
    let listaKoders = [];
    for (let i = 0; i< nombres.length; i++){
        let persona = {nombre:nombres[i], edad:edades[i], correo:correos[i]};
        listaKoders.push(persona);
    }
    return listaKoders
}

console.log(listaKoders(listaNombres,listaEdades,listaCorreos))

/*Ultima función pero con el Método del Profesor*/
let people = [];
 function createPerson (name,age,email){
    // let person = {name,age,email}
    let person = {};
    person.name = name;
    person.age = age;
    person.email = email;
    console.log(person);
    people.push(person);
    console.log(people);
 }

 createPerson("Ricardo",35,"ow@gmail.com")