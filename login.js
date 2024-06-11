// 'use strict'

// const form = document.getElementById('form')
// const email = document.getElementById('email')
// const senha = document.getElementById('senha');
// const icone = document.getElementById('icone');
// const logar = document.getElementById('logar')


// logar.addEventListener('click', ()=>{
//     window.location.href = '../index.html'
// })

// vip.addEventListener('click', ()=>{
//     alert('Parabens você tornou-se ADM!! Não se esqueça dessas informações!! Email: adm@gmail.com, Senha: Adm123@')

//     vip.classList.add('bg-[#ECDDA2]')
//     vip.classList.add('text-[#19191A]')
    
// })


// icone.addEventListener('click', ()=>{
//     if (senha.type === 'password') {
//         senha.type = 'text';
//         icone.classList.replace('bx-lock', 'bx-lock-open');
//     } else {
//         senha.type = 'password';
//         icone.classList.replace('bx-lock-open', 'bx-lock');
//     }
// })

'use strict'
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const buttonValidar = document.getElementById('buttonValidarLogin')
buttonValidar.addEventListener('click',validarLogin)
email.addEventListener('keypress',(event)=>{
    if(event.key==="Enter"){
        senha.focus()
    }
})
senha.addEventListener('keypress',(event)=>{
    if(event.key==="Enter"){
        buttonValidar.click()
    }
})


async function validarLogin(){
    let logado = false
    try{
        const responseApi = await fetch('http://localhost:5082/usuario')
        const listUsers = await responseApi.json()
        listUsers.forEach((user) => {
            console.log(user.email)
            console.log(user.senha)
            if(email.value === user.email && senha.value === user.senha){
                logado = true
                localStorage.setItem("idusuario", user.id)
                window.location.href = '../home.html'
            }
        })
        if(!logado)
        alert("Login inválido!")
    } catch(error){
        console.log(error)
    }
}