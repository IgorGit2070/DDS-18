console.log("Contagem para o relógio")
/*
function mostrarTexto() {
    console.log("O texto apareceu")
}

var contagem = 0

function mostrarContagem() {
    contagem++
    console.log(contagem)
}

setTimeout(mostrarTexto, 5000)

setInterval(mostrarContagem, 5000)
*/


var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById("saudacaoTexto")
var textoSaudacao2 = document.getElementById("saudacaoTexto2")

var diasSemana = ['DOMINGO','SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']

var cumprimento = ''

var atualizaRelogio = setInterval(function() {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()
    var anoAtual = dataAtual.getFullYear()
    var mesAtual = dataAtual.getMonth()+1
    var diaMesAtual = dataAtual.getDay()+1

    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundoAtual < 10)
        segundoAtual = "0" + segundoAtual

    cumprimento = trocaSaudacao(horaAtual)

    if(mesAtual < 10)
        mesAtual = "0" + mesAtual

    if(diaMesAtual < 10)
        diaMesAtual = "0" + diaMesAtual

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent = `${cumprimento} - ${diasSemana[diaAtual]}`
    textoSaudacao2.textContent= `${diaMesAtual}/${mesAtual}/${anoAtual}`
})

function trocaSaudacao(hora) {
    // if(hora > 12 && hora < 18)
    //     return "Boa Tarde"
    // if(hora > 18 && hora < 24)
    //     return "Boa Noite"
    // if(hora > 0 && hora < 6)
    //     return "Boa Madrugada"
    // if(hora > 6 && hora < 12)
    //     return "Bom Dia"
    if(hora < 6)
        return 'Boa Madrugada'
    else if(hora < 12)
        return 'Bom dia'
    else if(hora < 18)
        return 'Boa tarde'
    else
        return 'Boa Noite'
}