var alunos = ["Pedro", "Tiago", "João"]
var notasA = [8.0, 7.0, 6.0]
var notasB = [7.0, 5.7, 6.3]

function media(nota1, nota2) {
    var n1 =nota1
    var n2 =nota2
    var media = (n1 + n2) / 2
    return media
}

//aprovado = 7 pra cima, recuperação = entre 5 e 7, reprovado = 5 pra baixo
function situacao(media) {
    if(media >= 7) {
        return "Aprovado"
    }
    else if(media < 7 && media >= 5) {
        return "Recuperação"
    }
    else {
        return "Reprovado"
    }
}


function mostraResultados() {
    
    for(var index in alunos) {
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        var final = situacao(mediaAtual)
        console.log("O aluno", alunos[index], "teve média de", mediaAtual, ". E sua situação final é:", final)
    }
}

mostraResultados()