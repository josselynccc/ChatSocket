const mongoose = require('mongoose')
const {db} = require('../config')

const dbConnect = async () => {
    const DB_URI = `${db.MONGODB_URI}/${db.database}`
    mongoose.connect(DB_URI)
    .then(()=>{
        console.log("exito")
    })
    .catch((e)=>{
        console.log("sin exito", e)
    })
}

module.exports = { dbConnect }