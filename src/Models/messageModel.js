const moongose = require('mongoose')
const Schema = moongose.Schema

const MessageSchema = new Schema({
    username: String,
    message : String
})

const Message = moongose.model('Message', MessageSchema)

module.exports = Message