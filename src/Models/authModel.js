const moongose = require('mongoose')
const Schema = moongose.Schema

const UserAuthSchema = new Schema({
    email : String,
    password : String
})

const UserAuth = moongose.model('UserAuth', UserAuthSchema)
module.exports = UserAuth