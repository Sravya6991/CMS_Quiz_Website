// const { MongoClient } = require('mongodb');
// // const mongourl = "mongodb://127.0.0.1:27017/"
// require('dotenv').config();

// let database;

// function connectToDb() {
//     const client = new MongoClient(`${process.env.MONGODBURI}`); 
//     database = client.connect()
// }

// function getDb() {
//     if(!database) {
//         database.close();
//         throw({message: "database connection not established"});
//     } else {
//         return database;
//     }
// }

// module.exports = {
//     connectToDb: connectToDb,
//     getDb: getDb
// }
