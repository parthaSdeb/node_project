const express = require('express')
const app = express()

require('dotenv').config();
const port = process.env.PORT
// const port = 3000 //hard coded
// console.log(process.env.PORT) //printing the server port


//---------------------------------------mysql connection------------------------


// const mysql = require('mysql');

// const con = mysql.createConnection({

//     host:'my-db',
//     // port:3306,
//     user:"root",
//     password:"complex_password",
//     database:"Customer"
// })

// con.connect(function(err){
//     // if(err) throw err; it is not necessary. it will create chaos.
//     if(err){
//         console.log(err)
//     }
//     console.log("Connected!!")
// });


//--------------------------------------- Routes -----------------------------
app.get('/', (req, res) => res.send('Hello, Inventory service....'))

app.get('/docker', (req,res) => { 
    res.send("hello from docker - inventory service!!");
});


app.listen(port,()=>{
    console.log(`Server is listening on: ${port}`)
})

//testing bind mount....