let amigos = [];
//função para adicionar amigos
//verificar campo vazio
//adicionar amigos na lista
function adicionarAmigo(){
    let inAmigo = document.getElementById("amigo").value.trim();
if (inAmigo === ""){
    alert ("Por favor, insira um nome.");
}
amigos.push(inAmigo);
document.getElementById("amigo").value = "";
}