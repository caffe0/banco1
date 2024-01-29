const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')
import axios from "axios"


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senhasever",
    database: "bancoprojuno",
})

app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) =>{
        if(err){
            res.send(err);
        }
        res.send(res);
    });
});

app.get('/', (req, res) =>{
    db.query("INSERT INTO usuarios (email, password) VALUES ('abacate@gmail.com','123456')",(err, result) => {
        if(err){
            console.log(err)
        }
    })
})


app.listen(3001, () =>{
    console.log("Rodando na porta 3001")
})  