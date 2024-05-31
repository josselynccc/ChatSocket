const UserService = require('../Services/userService')
const userService = new UserService

exports.getAllUsers = async (req, res) =>{
    res.status(200).send("accediendo a mis usuarios")
    const usuarios = await userService.getAllUsersService()
    console.log(usuarios)
}

exports.getUser = async (req, res) => {
    const id = req.params.id
    if(!usuario){
        return res.status(400).json({'mensaje':'No se encontro el usuario'})
    }
    else{
        res.status(200).json(usuario) 
        console.log(usuario)
    }
    
}

exports.createUser = async (req, res) =>{
 // leer los datos que estan llegando desde mi peticion
    try {
        //console.log(name)
        let data = req.body
        await userService.createService(data)
        console.log(data)
        res.status(201).send("Usuario creado")
    } 
    catch (error) {
        res.status(500).send(error.message)
    }
    
}

exports.updateUser = async (req, res) => {
    let data = req.body
    const id = req.params.id
    const usuario = await userService.getUserService(id)
    if(!usuario){
        return res.status(400).json({'mensaje':'No se encontro el usuario'})
    }
    
    await userService.updateService(id , data)
    console.log(usuario)
    res.status(200).send("modificando usuario")
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    const usuario = await userService.getUserService(id)
    if(!usuario){
        return res.status(400).json({'mensaje':'No se encontro el usuario'})
    }
    else{
        await userService.deleteService(id)
        res.status(200).send("usuario eliminado")
    }
}