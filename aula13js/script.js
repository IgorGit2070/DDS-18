function logar() {
    var login = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if(login == "admin" && senha == "admin") {
        location.href = "home.html"
        alert('Login realizado com sucesso! ')
    }
    else {
        alert('Usuário ou senha incorretos')
    }
}

function cadastrar() {
    var usuario = document.getElementById('inputUsuarioNovo').value
    var email = document.getElementById('inputEmailNovo').value
    var senha = document.getElementById('inputSenhaNovo').value
    var senhaConfirma = document.getElementById('inputSenhaConfirme').value

    var emailCerto = emailValido(email)

    if(emailCerto) {
        if(senha === senhaConfirma) {
            location.href = "index.html"
            alert("Olá " + usuario + ", seja bem-vindo!")
        }
        else {
            alert('As senhas não coincidem')
        }
    }
    else {
        alert("Este email não é válido")
    }
}

function emailValido(email) {
    return email.includes('@')
}