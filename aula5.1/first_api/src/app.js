const express = require("express");
const app = express();

const routes = require("./route.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes)

app.listen(3333, () => console.log("Servidor iniciado - localhost:3333/"))