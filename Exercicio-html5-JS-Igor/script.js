// Função para calcular a diferença entre a pressão desejada e a pressão lida
function pneu() {
    var desejada = prompt("Digite a pressão desejada:")
    var lida = prompt("Digite a pressão lida:")
    var diferenca = Number(desejada) - Number(lida)

    console.log(diferenca)
    alert("A diferença é: " + diferenca)
  }

// Função para calcular o número máximo de notebooks que podem ser conectados
function tomada() {
    var t1 = prompt("Digite quantas tomadas tem a primeira régua:")
    var t2 = prompt("Digite quantas tomadas tem a segunda régua:")
    var t3 = prompt("Digite quantas tomadas tem a terceira régua:")
    var t4 = prompt("Digite quantas tomadas tem a quarta régua:")
    var conectado = Number(t1 - 1) + Number(t2 - 1) + Number(t3 - 1) + Number(t4)

    console.log(conectado)
    alert("O número máximo de notebooks conectados é: " + conectado)
}

// Função para determinar os novos recordes
function recorde() {
    var resultado = prompt("Digite o resultado da prova:")
    var recordeMundial = prompt("Digite o recorde mundial:")
    var recordeOlimpico = prompt("Digite o recorde olímpico:")
    var novoRecordeMundial
    var novoRecordeOlimpico

    if(resultado < recordeMundial) {
        novoRecordeMundial = "RM"
    }
    else{
        novoRecordeMundial = "*"
    }

    if(resultado < recordeOlimpico) {
        novoRecordeOlimpico = "RO"
    }
    else{
        novoRecordeOlimpico = "*"
    }

    console.log(novoRecordeMundial)
    console.log(novoRecordeOlimpico)
    alert("É novo Recorde Mundial? " + novoRecordeMundial)
    alert("É novo Recorde Olímpico? " + novoRecordeOlimpico)
}

// Função para calcular o número mínimo de viagens de drone entregando as caixas
function caixa() {
    var c1 = Number(prompt("Digite o tamanho da primeira caixa:"))
    var c2 = Number(prompt("Digite o tamanho da segunda caixa:"))
    var c3 = Number(prompt("Digite o tamanho da terceira caixa:"))
    var viagens

    if(c1 < c2) {
        if(c2 < c3) {
            viagens = "1"
        }else {
            viagens = "2"
        }
    }
    else if(c2 < c3) {
        if(c1 + c2 < c3) {
            viagens = "1"
        }else {
            viagens = "2"
        }
    }
    else {
        viagens = "3"
    }

    console.log(viagens)
    alert("O número mínimo de viagens é: " + viagens)
}

// Função para encontrar a idade de Camila
function idadeCamila() {
    var idade1 = Number(prompt("Digite a idade da primeira irmã:"))
    var idade2 = Number(prompt("Digite a idade da segunda irmã:"))
    var idade3 = Number(prompt("Digite a idade da terceira irmã:"))
    var idades = [idade1, idade2, idade3]
    idades.sort(function(a, b) {return a - b})
    var idadeDeCamila = idades[1]

    console.log(idadeDeCamila)
    alert("A idade de Camila é: " + idadeDeCamila)
}

// Função para piloto automático
function pilotoAuto() {
    var posicaoA = Number(prompt("Digite a posição da traseira do carro A:"))
    var posicaoB = Number(prompt("Digite a posição da traseira do carro B:"))
    var posicaoC = Number(prompt("Digite a posição da traseira do carro C:"))
    var posicaoBA = posicaoB - posicaoA
    var posicaoCB = posicaoC - posicaoB
    var precisa

    if(posicaoBA < posicaoCB) {
        precisa = "1" // Acelerar
    }else if (posicaoBA > posicaoCB) {
        precisa = "-1" // Desacelerar
    }else {
        precisa = "0" // Manter a velocidade
    }

    console.log(precisa)
    alert("O carro precisa: " + precisa)
}

// Função para calcular o número de dias que Dona Lesma demorará para chegar ao topo do muro
function donaLesma() {
    var altura = prompt("Digite a altura do muro:")
    var subida = prompt("Digite a distância que a Dona Lesma sobe a cada dia:")
    var descida = prompt("Digite a distância que a Dona Lesma escorrega a cada noite:")
    var alturaRestante = altura - subida
    var subidaDiaria = subida - descida
    var diasAdicionais = Math.ceil(alturaRestante / subidaDiaria)
    var totalDias = 1 + diasAdicionais

    console.log(totalDias)
    alert("O número total de dias é: " + totalDias)
}

// Função para encontrar a idade do filho mais velho de Dona Mônica
function idadeDonaMonica() {
    var idadeMonica = prompt("Digite a idade de Dona Mônica:")
    var idadeFilho1 = prompt("Digite a idade do primeiro filho:")
    var idadeFilho2 = prompt("Digite a idade do segundo filho:")
    var idadeFilho3 = idadeMonica - idadeFilho1 - idadeFilho2
    var idadeFilhoMaisVelho = Math.max(idadeFilho1, idadeFilho2, idadeFilho3)

    console.log(idadeFilhoMaisVelho)
    alert("A idade do filho mais velho é: " + idadeFilhoMaisVelho)
}

// Função para descobrir se é possível levar todos os alunos e monitores em apenas uma viagem
function bondinho() {
    var alunos = Number(prompt("Digite a quantidade de alunos que vão tomar o bondinho"))
    var monitores = Number(prompt("Digite a quantidade de monitores que vão tomar o bondinho"))
    var possivel

    if(alunos + monitores <= 50) {
        possivel = "S" // Apenas uma viagem
    }else {
        possivel = "N" // Mais viagens
    }

    console.log(possivel)
    alert("É possível levar todos em uma viagem? " + possivel)
}

// Função principal que exibe o menu e chama a função apropriada
function menu() {
    var escolha = prompt(
        "Escolha a função:\n" +
        "1. Pneu\n" +
        "2. Tomadas\n" +
        "3. Recorde\n" +
        "4. Entrega de Caixas\n" +
        "5. Idade de Camila\n" +
        "6. Piloto Automático\n" +
        "7. Dona Lesma\n" +
        "8. A idade de Dona Mônica\n" +
        "9. Bondinho\n" +
        "Digite o número da função desejada:"
    );

    switch (escolha) {
        case '1':
            pneu();
            break;
        case '2':
            tomada();
            break;
        case '3':
            recorde();
            break;
        case '4':
            caixa();
            break;
        case '5':
            idadeCamila();
            break;
        case '6':
            pilotoAuto();
            break;
        case '7':
            donaLesma();
            break;
        case '8':
            idadeDonaMonica();
            break;
        case '9':
            bondinho();
            break;
        default:
            console.log("Escolha inválida. Tente novamente.");
            alert("Escolha inválida. Tente novamente.");
    }
}

// Chama o menu para o usuário escolher a função
menu();