const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/tugas_eduwork', {
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind('Connection ERROR: '))
db.once('open', () => console.log('Server is CONNECTION'))



