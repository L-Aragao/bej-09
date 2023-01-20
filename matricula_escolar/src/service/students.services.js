const model = require("../model/students.model")


const createStudent = async (data) => {
    return await model.create(data);
}

const readStudent = async (id) => {
    return await model.read(id);
}

const updateStudent = async(data) => {
    return await model.update(data);
}

const deleteStudent = async (id) => {
    return await model.deleteRow(id);
}



module.exports = {createStudent, readStudent, updateStudent, deleteStudent}