const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));


const budget = './myBudget.json';
const fs= require("fs");


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    //res.json(budget);
    fs.readFile(budget,"utf8",(err,data)=>{
        if(err){
            throw err;
        }
        res.send(JSON.parse(data));
    }
    );
}) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});