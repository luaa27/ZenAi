const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

async function validarEmail(mail){
    let validacao = true
    const responseApi = await fetch('http://localhost:5082/usuario')
    const listUsers = await responseApi.json()
    listUsers.forEach(user => {
        console.log(user)
        if(user.email == mail){
            //email já existe
            validacao = false
        }
        return validacao
    });
}
async function cadastroUsuario() {
    if (nome.value == "" || email.value == "" || senha.value == "") {
        alert("Preencha os campos devidamente!")
    } else {
        try {
            const novoUsuario = {
                nome: nome.value,
                email: email.value,
                senha: senha.value,
            }
            await fetch('http://localhost:5082/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoUsuario)
            })
            window.location.href = './index.html'
        } catch (error) {
            console.log(error)
        }
    }
}

