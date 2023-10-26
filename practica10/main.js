/*Funcion que recibe los nombres de una persosa como objeto y regresa las iniciales, usando forEach y funciones flecha*/
let list = [
    {
        name:"Karla Ameyali",
        lastName:"Hernandez Lorenzo",
    },
    {
        name:"Angela Donaji",
        lastName:"Garcia Garcia",
    },
    {
        name:"Armando",
        lastName:"García Miranda",
    },
    {
        name:"Anais",
        lastName:"Laguna Torres",
    },
    {
        name:"Raul",
        lastName:"Gomez Sotelo",
    },
    {
        name:"Rodolfo",
        lastName:"Ramirez Morales",
    },
    {
        name:"Jorge Luis",
        lastName:"Juarez Reyes",
    },
    {
        name:"Ulises",
        lastName:"Flores Grande",
    },
    {
        name:"Jose Ricardo ",
        lastName:"Gomez Duran",
    },
    {
        name:"Jose Alejandro",
        lastName:"Sanchez Cruz",
    },
    {
        name:"Eduardo",
        lastName:"Montiel Luna",
    }
];

const initials = (element) => {
    let nameInitial = element.name.charAt(0);
    let lastNameArray = element.lastName.split(" ");
    let lastNameInitial = (lastNameArray[0].charAt(0)).concat(".",lastNameArray[1].charAt(0));
    let koderInitials = nameInitial.concat(".",lastNameInitial);
    console.log(koderInitials);
}

list.forEach(initials);
