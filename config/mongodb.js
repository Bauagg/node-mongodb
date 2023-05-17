const { MongoClient } = require("mongodb");

const url = 'mongodb://0.0.0.0:27017';


const client = new MongoClient(url)

async function configMongoDB() {
    try {
        await client.connect()
        console.log('MongoDB connected')
    } catch (err) {
        console.log('Error in MongoDB conection ' + err)
    }
}
configMongoDB()

const db = client.db('product')

module.exports = db