var users = JSON.parse( localStorage.getItem("users") ) || [];

var loggeded = JSON.parse( localStorage.getItem("loggeded") ) || {};
var hello = document.getElementById("hello");
if(hello && loggeded) hello.innerHTML = "Olá " + loggeded.nome

var listUsers = document.getElementById("listUsers")
if(listUsers){
    users.forEach( (u) => {
        console.log(u)
    });
}


var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let pass = document.getElementById("iPass").value;
    let birth = document.getElementById("iBirth").value;

    const user = {//objeto anônimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"
})

var btL = document.getElementById("btLogin");
if(btL) btL.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("iEmailLogin").value;
    let pass = document.getElementById("iPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })

    if(!user){//not usuario
        console.log("usuário não encontrado")
        return
    }

    if(user.senha == pass){
        console.log("usuário logado")
        localStorage.setItem("loggeded", JSON.stringify(user))
        window.location.href = "painel.html"
    }else{
        console.log("senha invalida")
    }
})


