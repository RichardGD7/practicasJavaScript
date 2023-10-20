let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
  ];

  /*Ejercicio 1*/
  function promedio (koders){
    let total = 0;
    for (let i = 0; i <koders.length; i++){
        total += koders[i].score;
    }
    let result = total/koders.length
    return result;
  }

  console.log("El promedio es: ",promedio(koders));

  /*Ejercicio 2*/
  let highScore = [];
  function ejercicio2(koders){
    for (let i = 0; i <koders.length;i++){
        if (koders[i].score >= 9){
            highScore.push(koders[i]);
        }
    }
    let lista = highScore
    return lista
}
 console.log(ejercicio2(koders))

 /*Ejercicio 3*/
 function kodersGeneration (koders,generacion){
    let kodersFiltred = 0;
    for (let i = 0; i < koders.length; i++){
        if (koders[i].generation === generacion){
            kodersFiltred++;
        }
    }

    if (kodersFiltred === 0){
        return "No hay koders en esta generacion"
    }else {
        return `Hay ${kodersFiltred} en la generacion ${generacion}`
    }
 }

 console.log(kodersGeneration(koders,7))