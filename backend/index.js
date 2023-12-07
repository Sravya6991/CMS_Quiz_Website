const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/.env`});
const uri = process.env.MongoDbUri;

var db; 

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', ['*']);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-access-token, Authorization');
    next();
});

app.post('/postCategory', (req, res) => {
    console.log(req.body)
    db.collection('category').insertOne(req.body, (err, result) => {
        if(err) console.log('Error in submitting data')
        res.send({message: 'Submitted!!', response: result})  
    })
})

app.get('/getCategory', async (req, res) => {
    await db.collection('category').find({}).toArray((err, result) => {
        if(err) res.send('Error in fetching comprehension questions!')
        console.log(result)
        res.send({message: 'Fetched your question!', response: result})
    })
})


app.post('/comprehension', (req, res) => {
    console.log(req.body)
    db.collection('comprehension').insertOne(req.body, (err, result) =>{
        if(err) console.log('Error in submitting data')
        res.send({message: 'Submitted!!', response: result})  
    }
    )
})


app.get('/getcomprehension',async (req, res) => {
    await db.collection('comprehension').find({}).toArray((err, result) => {
        if(err) res.send('Error in fetching comprehension questions!')
        console.log(result)
        res.send({message: 'Fetched your question!', response: result})
    })
})


app.post('/postCloze', (req, res) => {
    console.log(req.body)
    db.collection('cloze').insertOne(req.body, (err, result) => {
        if(err) console.log('Error in inserting cloze')
        res.send({message: 'Submitted!', response: result})
    })
})


app.get('/getCloze', async (req, res) => {
    await db.collection('cloze').find().toArray((err, result) => {
        if(err) console.log('Error while finding cloze')
        res.send({message: 'Fetched cloze question', response: result})
    })
})

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } ,
    (err, client) => {
    console.log("Mongodb is connected")
    if(err) console.log("Error while connectiong")
    db = client.db();
    app.listen(5000, ()=>{
        console.log("server is running at port: 8000");
    });
})
