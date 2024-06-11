export async function getusuarios(){
    const url = `http://localhost:8080/v2/usuariosACME/usuarios`
    const response = await fetch(url)
    const data = await response.json()
    

    return data.usuarios
}

export async function postusuario(usuario){
    const url = 'http://localhost:8080/v2/usuariosACME/usuario'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deleteusuario(id){
    try{
        await fetch(`http://localhost:8080/v2/usuariosACME/usuario/${id}`,{
            method: 'DELETE'
        })
        console.log("usuario excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir usuario: ',error);
    }
}
export async function putusuario(id, usuario){
    const url = `http://localhost:8080/v2/acmeusuarios/usuario/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)

    return response.ok
}
