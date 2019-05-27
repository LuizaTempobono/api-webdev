const express = require ('express')
const app = express()

//Primeira rota GET
app.get('/' , function(req,res) {
    res.send("Bem vindo ao meu site")
})

app.get('/watch' , function(req,res) {
    res.send("toma ai o video!")
})

app.listen(8086, function(){
    console.log("API TA RODANDO EBAAA")
})