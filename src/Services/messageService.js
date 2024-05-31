const Message = require('../Models/messageModel')
class MessageService{

    constructor(){}

    async getAllMessageService(){
        const message = await Message.find({})
        return message
    }

    async createService(msg){
        const message = new Message(msg)
        return await message.save()
    }

}

module.exports = MessageService