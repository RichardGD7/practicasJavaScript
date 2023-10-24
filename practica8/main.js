let pelotas = [
    {
        numero: 1,
        color: "azul",
    },
    {
        numero: 2,
        color: "verde",
    },
    {
        numero: 3,
        color: "amarillo",
    },
    {
        numero: 5,
        color: "negro",
    },
    {
        numero: 7,
        color: "rojo",
    },
    {
        numero: 11,
        color: "amarillo",
    },
    {
        numero: 13,
        color: "verde",
    },
    {
        numero: 17,
        color: "amarillo",
    },
    {
        numero: 19,
        color: "negro"
    },
    {
        numero: 23,
        color: "rojo",
    }
];

/*Es el numero de pelo que le sale al concursante de manera aleatoria*/
min = Math.ceil(0);
max = Math.floor(10);
let eleccion = Math.floor(Math.random() * (max - min + 1) + min);

function cajaDePelotas(pelotas,eleccion){
    eleccion --;
    console.log(`Tu numero de pelota es ${pelotas[eleccion].numero} de color ${pelotas[eleccion].color}`);
    if (pelotas[eleccion].numero === 7){
        console.log("Felicidades, ganaste el primer premio")
    } else if (pelotas[eleccion].numero === 2){
        console.log("Felicidad, ganaste el segundo premio")
    } else {
        console.log("La pelota que sacaste no es la ganadora, prueba de nuevo")
    }
}

cajaDePelotas(pelotas,eleccion)
