console.log("Funcionou sim")

//Fazer com array
var alunos = ["Pedro","Tiago","João"]
var notas = [7,8,9]

console.log(alunos[0], "=", notas[0])
console.log(alunos[1], "=", notas[1])
console.log(alunos[2], "=", notas[2])

//Declarando um objeto
var aluno = {
    chave: "valor",
    nome: "Pedro", nota: 8
}

console.log(aluno.nome)
console.log(aluno.nota)
console.log(aluno.nome, "-", aluno.nota)

//Selecionando uma propriedade
var pessoa = {
    nome: "Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.nome, "-", pessoa.idade)
console.log(pessoa["idade"])

//Adicionando novas propriedades
pessoa.rg = "12345678910"
console.log(pessoa)

pessoa["profissao"] = "Diretora"
console.log(pessoa)

//Adicionando propriedade com uma variável
var novaProp = "sobrenome"
pessoa[novaProp] = "Do Bairro"
console.log(pessoa)
console.log(pessoa.sobrenome)

//Criando métodos
var animal = {
    nome: "Mel",
    raca: "Poodle",
    latir: function(){
        console.log("Au Au")
    },
    andar: function(){
        console.log("Andei")
    }
}

console.log(animal.nome)
console.log(animal["raca"])
console.log(animal.latir())
animal.latir()
animal.andar()

var novaProp2 = "andar"
animal[novaProp2] = andar = function() {
    console.log("andando")
}

animal.andar()

//Notas como objeto
var aluno = {
    nome: "Cris",
    notas: [7, 7],
    media: function(n1,n2){
        return ((n1+n2) / 2)
    }
}

console.log("o nome do aluno é: " + aluno.nome)
console.log("Sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1]))

var aluno = {
    nome: "Cris",
    notas: [7, 8, 9],
    media: function(n1,n2,n3){
        return ((n1+n2+n3) / 3)
    }
}

console.log("o nome do aluno é: " + aluno.nome)
console.log("Sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]))

var aluno1 = {
    nome: "Ronaldo",
    notas: [5, 7, 3],
    media: function(n1,n2,n3){
        return ((n1+n2+n3) / 3)
    }
}

console.log("o nome do aluno é: " + aluno1.nome)
console.log("Sua média foi:", aluno1.media(aluno1.notas[0], aluno1.notas[1], aluno1.notas[2]))

//Método com função externa
function calculaMedia(n1,n2){
    return ((n1+n2) / 2)
}

var aluno1 = {
    nome: "Ronaldo",
    notas: [8, 2],
    media: calculaMedia
}

var aluno2 = {
    nome: "Messi",
    notas: [9, 8],
    media: calculaMedia
}

console.log("o nome do aluno é: ", aluno1.nome)
console.log("Sua média foi:", aluno1.media(aluno1.notas[0], aluno1.notas[1]))

console.log("o nome do aluno é: ", aluno2.nome)
console.log("Sua média foi:", aluno2.media(aluno2.notas[0], aluno2.notas[1]))

//Uso do this, dentro do próprio objeto
var aluno = {
    nome: "Neymar",
    notas: [1000, 11],
    media: function(){
        return ((this.notas[0]+this.notas[1]) / 2)
    }
}

console.log("o nome do aluno é: ", aluno.nome)
console.log("Sua média foi:", aluno.media())

//Uso do this, fora do próprio objeto
function calculaMediaORetorno(){
    return ((this.notas[0]+this.notas[1]) / 2)
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],
    media: calculaMediaORetorno
}

var aluno2 = {
    nome: "Maria",
    notas: [8, 9],
    media: calculaMediaORetorno
}

console.log(aluno1.nome)
console.log(aluno1.media())
console.log(aluno2.nome)
console.log(aluno2.media())