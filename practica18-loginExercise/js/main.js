let buttom = document.getElementById("sumitButtom")
let divLogin = document.getElementById("divLogin")
let divLogOut = document.getElementById("divLogOut")
let logoutButtom = document.getElementById("logoutButtom")

const validation = () =>{
    let token = localStorage.getItem("token")
    if (token){
        divLogin.classList.remove("d-none");
        divLogOut.classList.add("d-none")
        
    } else {
        divLogin.classList.add("d-none");
        divLogOut.classList.remove("d-none")
    }
    
}

validation()

const login = () => {
    
    let nameInput = document.getElementById("nameInput").value
    let passInput = document.getElementById("passInput").value
    if (nameInput && passInput){
        let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";
        localStorage.setItem("token", token)
        location.reload()

    }else{
        alert("Prueba otra vez")
    }

};

const logout = () => {
    localStorage.removeItem("token")
    location.reload()
}

buttom.addEventListener("click", login);
logoutButtom.addEventListener("click",logout)

