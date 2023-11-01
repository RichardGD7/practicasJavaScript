let users = [
    {
        name: "Armando",
        email: "armando@gmail.com",
        photo: "https://randomuser.me/api/portraits/women/93.jpg",
        id: 123,
    }
];

let inputName = document.getElementById("nombre_input");
let inputEmail = document.getElementById("exampleInputEmail1");
let inputPhoto = document.getElementById("foto_input");
let chageButtom = document.getElementById("changeButtom");
//let pruebah1 = document.getElementById("prueba")

inputName.addEventListener("keyup", (event) => {
    let name_value = event.target.value;
    inputName = name_value;
    console.log(name_value)
})

inputEmail.addEventListener("keyup", (event) => {
    let email_value = event.target.value;
    inputEmail = email_value;
    console.log(email_value)
})

inputPhoto.addEventListener("keyup", (event) => {
    let input_value = event.target.value;
    inputPhoto = input_value;
    console.log(input_value)
})

// chageButtom.addEventListener("click", (event) => {
//    pruebah1.innerText = inputEmail, inputName, inputPhoto;
//    users.push({inputName,inputEmail,inputPhoto})
// })

document.getElementById("form1").addEventListener("submit", (event) => {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    
    // Accede a los valores del formulario
    const nombre = document.getElementById("nombre_input").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const photo = document.getElementById("foto_input").value
    
    users.push({nombre,email,photo})
    // Puedes guardar los valores en una estructura de datos, enviarlos a un servidor, etc.
    // Por ejemplo, puedes mostrar los valores en una alerta:
    //alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}`);
    
    // También puedes realizar una solicitud AJAX para guardar los datos en el servidor.
    // Aquí solo se muestra una alerta como ejemplo.
  });


const cardCration = (users) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card");

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
    cardEmail.innerText = `Email: ${users.email}`;

    /*Append*/
    divCardBody.append(h5Name,cardEmail);
    divCard.append(img,divCardBody);

}
