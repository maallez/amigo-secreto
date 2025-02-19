let amigos = [];
//função para adicionar amigos
//verificar campo vazio'
//adicionar amigos na lista
function adicionarAmigo() {
  let inAmigo = document.getElementById("amigo").value.trim();
  if (inAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  let listagem = document.getElementById("listaAmigos");

  let addLi = document.createElement("li");

  amigos.push(inAmigo);

  document.getElementById("amigo").value = "";

  addLi.textContent = inAmigo;

  listagem.appendChild(addLi);
}

//enviar o input com Enter
let input = document.getElementById("amigo");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enter-button").click();
  }
});

//função responsavel por reiniciar o jogo
function reiniciarJogo() {
  amigos = [];

  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  alert("Lista de sorteados foi zerada.");

  let listaDeSorteados = document.getElementById("resultado");
  listaDeSorteados.innerHTML = "";
}

//função responsavel pelo sorteio dos nomes
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há nomes para sortear.");
    return;
  }
  let sorteio = Math.floor(Math.random() * amigos.length);

  let nomeSorteado = amigos[sorteio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let amigoSorteado = document.createElement("li");
  amigoSorteado.textContent = `O amigo sorteado foi ${nomeSorteado}!`;
  resultado.appendChild(amigoSorteado);
}
