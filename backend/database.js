const MongoClient = require('mongodb').MongoClient;
const mongourl = "mongodb://127.0.0.1:27017/"

let database;

async function connectToDb() {
    const client = await MongoClient.connect(mongourl); 
    database = client.db('cms');
}

function getDb() {
    if(!database) {
        throw({message: "database connection not established"});
    } else {
        return database;
    }
}

module.exports = {
    connectToDb: connectToDb,
    getDb: getDb
}
