const getAllProducts = async () => {
    let result = await fetch("https://practica1-firebase-35306-default-rtdb.firebaseio.com/products/.json",);
    let data = await result.json();
    //console.log(result);
    return data
}

let productsCards = document.getElementById("productsCards");
let formName = document.getElementById("formName");
let formDescription = document.getElementById("formDescription")
let formPicture = document.getElementById("formPicture");
let formPrice = document.getElementById("formPrice");
let submitButtom =document.getElementById("submitButtom");
let form = document.getElementById("form");

const createProduct = async (newProduct) => {
    let response = await fetch("https://practica1-firebase-35306-default-rtdb.firebaseio.com/products/.json",
    {
        method: "POST",
        body: JSON.stringify(newProduct)
    })
    let data = await response.json();
    console.log(data)
    return data
}

const deleteProduct = async (productKey) => {
    let response = await fetch(`https://practica1-firebase-35306-default-rtdb.firebaseio.com/products/${productKey}/.json`,{
        method: "DELETE"
    });
    let data = await response.json();
    printCards()
    

}


form.addEventListener("submit", async () => {
    const name = formName.value;
    const picture = formPicture.value;
    const description = formDescription.value;
    const price = formPrice.value;

    let newProduct = {name, picture, description, price}
    let response = await createProduct(newProduct);
    console.log(response)

    form.reset();
})


const createCard = async (products) => {
    let divCard = document.createElement("div")
    divCard.classList.add("col","mb-4")

    let productCard = document.createElement("div");
    productCard.classList.add("card", "product-card", "h-100", "shadow");

    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top")
    imgCard.setAttribute("src",products.picture)

    let bodyCard = document.createElement("div")
    bodyCard.classList.add("card-body", "d-flex", "flex-column")

    let nameCard = document.createElement("h5")
    nameCard.classList.add("card-title")
    nameCard.innerText = products.name;

    let descriptionCard = document.createElement("p")
    descriptionCard.classList.add("card-text")
    descriptionCard.innerText = products.description;

    let priceCard = document.createElement("p")
    priceCard.classList.add("card-text")
    priceCard.innerText = `Precio: $ ${products.price} MXN`

    let deleteButtom = document.createElement("button");
    deleteButtom.setAttribute("type","buttom");
    deleteButtom.classList.add("btn","btn-danger", "mt-auto");
    deleteButtom.innerText = "Borrar"

    deleteButtom.addEventListener("click", async () => {
        console.log(products.key)
        deleteProduct(products.key)

    })

    /*Append*/
    bodyCard.append(nameCard,descriptionCard,priceCard,deleteButtom)
    productCard.append(imgCard,bodyCard)
    divCard.append(productCard);
    productsCards.append(divCard);

    return productsCards
};

const printCards = async () => {
    let products = await getAllProducts()
    productsCards.innerHTML = "";
    let arrayProducts = Object.entries(products)
    console.log(arrayProducts)

    let newArray = arrayProducts.reduce((accum,current) => {
         return [...accum, {key: current[0], ...current[1]}]
    },[]);

    console.log(newArray)

    newArray.forEach((element) => {
        createCard(element)
    })

}

printCards()

