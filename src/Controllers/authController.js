const AuthService = require('../Services/authService')
const authService = new AuthService()
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
        await authService.register(req.body)
        console.log(req.body)
        res.status(201).json({"message" : "usuario registrado"})
    } catch (error) {
        res.status(500).json({"error" : error.message})
    }
}
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const userAuth = await authService.filterByEmail(email) 
        if(!userAuth){
            return res.status(500).json({"message" : "usuario no encontrado"})
        }

        const passwordMatch = bcrypt.compareSync(password,userAuth.password)
        if(!passwordMatch){
            return res.status(400).json({"message" : "Constraseña incorrecta"})
        }
        const payload = {
            email: userAuth.email
        }

        const token = authService.generateToken(payload)
        console.log(token)
        res.status(400).json({"message" : "contraseña correcta"})

    } catch (error) {
        res.status(500).json({"error" : error.message})
    }
}