const UserAuth = require('../Models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService{
    constructor(){

    }

    async register(data){
        data.password = bcrypt.hashSync(data.password, 10) //numero de iteraciones
        const userAuth = new UserAuth(data)
        return await userAuth.save()
    }
    
    async filterByEmail(email){
        const userAuth = await UserAuth.findOne({email})
        return userAuth
    }

    async generateToken(payload){
        const token = jwt.sign(payload, 'SecretKey')
        return token
    }
}

module.exports = AuthService