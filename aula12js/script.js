console.log("Testando o script")

//Objeto window = janela do navegador
window.console.log("Testando Window Console")
window.alert("Window Alert")
window.prompt("Window Prompt")


//Objeto document = código html
console.log(document.head)
console.log(document.body)

//Acessando elementos por tag, class e id
//Utilizando Get Elementos Por TAG Nome
var titulo = document.getElementsByTagName("h1")[0]
console.log(titulo)
//Utilizndo Get Elementos Por CLASS Nome
var paragrafos = document.getElementsByClassName("para")[0]
console.log(paragrafos)
//Utilizando Get Elementos Por ID
var para3 = document.getElementById("p3")
console.log(para3)

//Acessando elementos por tag, class e id
var titulo = document.getElementsByTagName("h1")
var paragrafos = document.getElementsByClassName("para")
var para3 = document.getElementById("p3")
paragrafos[0].innerText = "Tauba"
para3.innerHTML = "<h3> Novo texto aqui </h3>"

//Trocando as cores pelo js
var p1 = document.getElementsByTagName("p")[0]
p1.style.backgroundColor = "red"

para3.style.color = "green"


function cliquei() {
    console.log("Cliquei de novo")
}

function cliquei4() {
    console.log("Clique pelo botão")
}



function outroFoco() {
    console.log("Mudei o foco, não está mais na caixa")
}

function trocaTexto() {
    console.log("Estou digitnado")
}

function trocaTexto(textoCaixinha) {
    var texto = document.getElementById("textoPraTrocar")
    texto.innerText = textoCaixinha.value
}

function corVerde(elemento) {
    elemento.style.color = "green"
    elemento.style.fontSize = "60px"
}
function corAzul(elemento) {
    elemento.style.color = "blue"
    elemento.style.fontSize = "30px"
}