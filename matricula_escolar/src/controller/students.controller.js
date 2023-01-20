const service = require("../service/students.services");

const DTO = require("../dto/students.dto");


const create = async (req, res) => {
    const data = req.body;
    const dto = mapper(data)
    if (dto) {
        const response = await service.createStudent(dto)
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(500).json({ error: "500 Internal Server Error" })
        }
    } else {
        res.status(400).json({ error: "Data invalidos" })
    }
}

const read = (req, res) => {
    console.log(req.body);
    res.status(200).send();
}

const update = (req, res) => {
    console.log(req.body);
    res.status(200).send();
}

const updateAllFields = (req, res) => {
    console.log(req.body);
    res.status(200).send();
}

const erase = (req, res) => {
    console.log(req.body);
    res.status(200).send();
}


const mapper = (data) => {
    const verify = verify_student(data)
    if (verify) return new DTO(data.nome, data.email, data.documento, data.data_nascimento);
    else return null
}


const verify_student = (data) => {

   if(!('nome' in data)) return false
   if(!('email' in data)) return false
   if(!('documento' in data)) return false
   if(!('data_nascimento' in data)) return false
   return true
}

module.exports = { create, read, update, updateAllFields, erase }