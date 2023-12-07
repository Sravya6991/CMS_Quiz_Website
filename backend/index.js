const express = require('express');
const db = require('./database');
const routes = require('./Routes/route');

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

db.connectToDb().then((err, client) => {
    if(err) console.log('Error while connecting mongo client');
    app.listen(process.env.PORT || 5000, (err, render) => {
        if(err) console.log('Error connecting to port');
        console.log("server connected at port: 5000");
    })
})