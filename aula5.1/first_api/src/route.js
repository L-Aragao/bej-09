const { Router } = require("express");
const controller = require("./controller")

const routes = Router();


routes.post("/users/user", controller.create)

// routes.post("/users")
// routes.post("/users/user")

// routes.put("/users")
// routes.put("/users/user")

// routes.delete("/users")
// routes.delete("/users/user")

//exports.nome = nome -> exportando um objeto do tipo modulo
module.exports = routes;
