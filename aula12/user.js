var users = JSON.parse( localStorage.getItem("users") ) || [];

var loggeded = JSON.parse( localStorage.getItem("loggeded") ) || {};
var hello = document.getElementById("hello");
if(hello && loggeded) hello.innerHTML = "Olá " + loggeded.nome

var listUsers = document.getElementById("listUsers")
if(listUsers){
    let i = 0;
    users.forEach( (u) => {
        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;

        let tdAction = document.createElement("td");
        let btV = document.createElement("a");
        btV.innerHTML = "V";
        btV.classList.add("show");
        btV.id =  i;
        tdAction.appendChild(btV);

        let span = document.createElement("span");
        span.innerHTML = " - ";
        tdAction.appendChild(span);

        let btR = document.createElement("a");
        btR.innerHTML = "X";
        btR.id =  i;
        btR.classList.add("remove");
        tdAction.appendChild(btR);

        let tr = document.createElement("tr");
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);

        listUsers.appendChild(tr);
        //i = i + 1;
        //i += 1;
        i++;
    });
}

var botoesV = document.querySelectorAll(".show");
botoesV.forEach((b) => {
    b.addEventListener("click",  ()=>{
        const id = b.id;
        b.innerHTML = users[id].nascimento;
    })
})

var botoesR = document.querySelectorAll(".remove");
botoesR.forEach((b)=>{
    b.addEventListener("click", ()=>{
        const id = b.id;
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "painel.html"
    })
})


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


