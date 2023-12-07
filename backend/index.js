const express = require('express');
// const db = require('./database');
const routes = require('./Routes/route');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/.env`});
const uri = process.env.MongoDbUri;
// const client = new MongoClient(uri);

let db; 

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'Get, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-access-token, Authorization');
    next();
});

app.use('/', routes);

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } ,
    (err, client) => {
    console.log("Mongodb is connected")
    if(err) console.log("Error while connectiong")
    db = client.db();
    app.listen(5000, ()=>{
        console.log("server is running at port: 8000");
    });
})

module.exports = db;

// async function run() {
//     try {
//         await client.connect();
//         db = client.db('cms')
//     } catch(e) {
//         client.close()
//         throw('Error')
//     }
// }

// run().catch(console.error)


// db.connectToDb().then((err, client) => {
//     if(err) console.log('Error while connecting mongo client');
//     app.listen(process.env.PORT || 5000, (err, render) => {
//         if(err) console.log('Error connecting to port');
//         console.log("server connected at port: 5000");
//     })
// })