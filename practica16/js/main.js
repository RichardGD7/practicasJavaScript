let users = [
    {
        name: "jorge",
        email: "jorge@gmail.com",
        photo: "https://randomuser.me/api/portraits/men/92.jpg",
        id: 123,
    },
    {
        name: "jorge",
        email: "jorge@gmail.com",
        photo: "https://randomuser.me/api/portraits/men/92.jpg",
        id: 123,
    },
    {
        name: "jorge",
        email: "jorge@gmail.com",
        photo: "https://randomuser.me/api/portraits/men/92.jpg",
        id: 123,
    }
];

let inputName = document.getElementById("nombre_input");
let inputEmail = document.getElementById("exampleInputEmail1");
let inputPhoto = document.getElementById("foto_input");
let chageButtom = document.getElementById("changeButtom");
let usersCard = document.getElementById("usersCard")
let form = document.getElementById("form1")
//let pruebah1 = document.getElementById("prueba")

// inputName.addEventListener("keyup", (event) => {
//     let name_value = event.target.value;
//     inputName = name_value;
//     console.log(name_value)
// })

// inputEmail.addEventListener("keyup", (event) => {
//     let email_value = event.target.value;
//     inputEmail = email_value;
//     console.log(email_value)
// })

// inputPhoto.addEventListener("keyup", (event) => {
//     let input_value = event.target.value;
//     inputPhoto = input_value;
//     console.log(input_value)
// })

// chageButtom.addEventListener("click", (event) => {
//    pruebah1.innerText = inputEmail, inputName, inputPhoto;
//    users.push({inputName,inputEmail,inputPhoto})
// })

form.addEventListener("submit", (event) => {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    
    // Accede a los valores del formulario
    const nombre = inputName.value;
    const email = inputEmail.value;
    const photo = inputPhoto.value;
    const id = Date.now()
    
    users.push({nombre,email,photo,id})
    printCard(users);
    form.reset();
    // Por ejemplo, puedes mostrar los valores en una alerta:
    //alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}`);
  });


const cardCration = (users) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card","col","mb-4");

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.setAttribute("src",users.photo);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let h5Name = document.createElement("h5")
    h5Name.classList.add("card-title");
    h5Name.innerText = users.name;

    let cardEmail = document.createElement("p");
    cardEmail.classList.add("card-text");
    cardEmail.innerText = users.email;

    /*Append*/
    divCardBody.append(h5Name,cardEmail);
    divCard.append(img,divCardBody);

    usersCard.append(divCard);
    return usersCard;
}

const printCard = (users) => {
    usersCard.innerHTML = "";
    users.forEach(card => {
        cardCration(card)
    });
}

printCard(users)
