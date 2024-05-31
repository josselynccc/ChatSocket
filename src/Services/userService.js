const User = require('../Models/userModels')
class UserService{
    constructor(){}

    async getAllUsersService(){
        const users = await User.find({})
        return users
    }

    async getUserService(id){
        const user = await User.findOne({_id : id})
        return user
    }

    async createService(data){
        const user = new User(data)
        return await user.save()
    }

    async updateService(id, data){
        return await User.findByIdAndUpdate({_id : id}, data)
    }
    
    async deleteService(id){
        return await User.deleteOne({_id : id})
    }
}

module.exports = UserService