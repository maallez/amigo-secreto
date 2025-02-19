let amigos = [];
let listagem = document.getElementById("listaAmigos");
let addLi = document.createElement("li");

//função para adicionar amigos
//verificar campo vazio
//adicionar amigos na lista
function adicionarAmigo(){
    let inAmigo = document.getElementById("amigo").value.trim();
if (inAmigo === ""){
    alert ("Por favor, insira um nome.");
    return;
}
    amigos.push(inAmigo);
    document.getElementById("amigo").value = "";
    addLi.textContent = inAmigo;
    listagem.appendChild(addLi);
}

// Enviar o formulario com Enter
let input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enter-button").click();
  }
});

function reiniciarJogo(){
    amigos = [];
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}