const { Router } = require("express");

const routes = Router();
const students = require("../controller/students.controller");

//CRUD
routes.post('/students', students.create);
routes.get('/students/:id', students.read);
routes.put('/students', students.updateAllFields);
routes.patch('/students', students.update);
routes.delete('/students', students.erase);

module.exports = routes;
