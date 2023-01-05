const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get("/alunos", function(req, res){
    res.status(200).json([{'nome': 'luiz'}, {'nome': 'mario'}, {'nome': 'toad'}])
})

app.get("/alunos/aluno", function(req, res){
    if(req.query.nome == 'Luiz') res.status(200).json([{'nome': 'luiz', 'idade': 33}])
    else res.status(404).json({error: 'Aluno nao encontrado' })
})

app.listen(3000, () => console.log("servidor online: localhost:3000/"))