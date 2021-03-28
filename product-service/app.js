const express = require('express')
const mysql = require('mysql');
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000
// const port = 3000 //hard coded
// console.log(process.env.PORT) //printing the server port

const test = process.env.test;

//---------------------------------------mysql connection------------------------
let attempts = 0;
const seconds = 1000;

function connect(){
    attempts++;

    console.log('password', process.env.DATABASE_PASSWORD);
    console.log('host', process.env.DATABASE_HOST);
    console.log(`attempting to connect to DB time: ${attempts}`);

    const con = mysql.createConnection({

        host: process.env.DATABASE_HOST,
        // port:3306,
        user:"root",
        password: process.env.DATABASE_PASSWORD,
        database:'Products'
    });

    con.connect(function(err){
        if(err){
            console.log("Error",err);
            setTimeout(connect, 30 * seconds);
        }
        else{
            console.log("CONNECTED!!");
        }
    });

    con.on('error', function(err){
        if(err){
            console.log('DISASTER... happened ;(');
            connect()
        }
    
    });
}

connect();


//--------------------------------------- Routes -----------------------------
app.get('/', (req, res) => res.send(`Hello product service, changed ${test}`))

app.get('/docker', (req,res) => { 
    res.send("hello from docker!!");
});

app.get('/nodemon', (req, res) => {
    res.send('hello from nodemon..........')
});

app.listen(port,()=>{
    console.log(`Server is listening on: ${port}`)
})