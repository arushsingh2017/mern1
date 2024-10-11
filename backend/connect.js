const {MongoClient}= require('mongodb')
const  url = 'mongodb://0.0.0.0:27017'
const clint= new MongoClient(url)


async function dbconnection(){
     let res= await clint.connect()
     let dbname= res.db('eshop')
     return dbname.collection('regsteruser')
}

module.exports= dbconnection;