let users = [];


let inputName = document.getElementById("nombre_input");
let inputEmail = document.getElementById("exampleInputEmail1");
let inputPhoto = document.getElementById("foto_input");
let chageButtom = document.getElementById("changeButtom");
let usersCard = document.getElementById("usersCard")
let form = document.getElementById("form1")

form.addEventListener("submit", (event) => {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();
    
    // Accede a los valores del formulario
    const name = inputName.value;
    const email = inputEmail.value;
    const photo = inputPhoto.value;
    const id = Date.now()
    
    users.push({name,email,photo,id})
    printCard(users);
    form.reset();
    // Por ejemplo, puedes mostrar los valores en una alerta:
    //alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}`);
});

const cardCration = (users,id) => {

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

    let deleteButtom = document.createElement("button");
    deleteButtom.setAttribute("type","buttom");
    deleteButtom.classList.add("btn","btn-primary");
    deleteButtom.innerText = "Borrar"
    deleteButtom.setAttribute("id",id);

    /*Append*/
    divCardBody.append(h5Name,cardEmail);
    divCard.append(img,divCardBody,deleteButtom);

    usersCard.append(divCard);
    return usersCard;
}

const printCard = (users) => {
    usersCard.innerHTML = "";
    users.forEach((card,index,array) => {
        
        cardCration(card,card.id)

        let idButtom = document.getElementById(card.id)

        idButtom.addEventListener("click", () => {
            array.splice(index,1)
            printCard(array)
            console.log(card.id)
        })
        
    });
}

printCard(users)
