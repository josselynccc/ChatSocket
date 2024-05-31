const MessageService = require('../src/Services/messageService')

const messageService = new MessageService

module.exports = (io) =>{

    io.on('connection', async (socket) =>{
        console.log('un nuevo usuatio conectado')

        const message = await messageService.getAllMessageService()

        //emite un evento llamado all-message
        io.emit('all-message', message)

        socket.on('writing', (username)=>{
            socket.broadcast.emit('wrinting', username)
        })

        socket.on('new-message', async (data)=>{
            //messages.push(data)

            await messageService.createService(data)
            const message = await messageService.getAllMessageService()
            io.emit('all-message', message)
        })
    })
}