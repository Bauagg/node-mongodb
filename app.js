require('./config/mongoose')
const express = require('express')
const routerProduct = require('./app/product/routes')
const routerUser = require('./app/users/routes')


const app = express()

app.use(express.json())
app.use('/', routerProduct)
app.use('/', routerUser)

app.listen(4000, () => console.log('localhost udah berjalan di port 4000 start')) 