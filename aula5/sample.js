
//rest api

const express = require('express');

const app = express();

app.use();


//CRUD com rest + express
app.post("/criarAluno")
app.get("/recuperAluno")
app.put("/atualizarAluno")
app.delete("/apagarAluno")

//Restful
app.post("/alunos")
app.post("/alunos/aluno")
app.post("/alunos/aluno/:id")

app.get("/alunos")
app.get("/alunos/aluno")

app.put("/alunos/aluno") //atualiazar o registro inteiro
app.patch("/alunos/aluno") //atualiza so parte do registro

app.delete("/alunos/aluno")