
const sql = require("./db.connection");


const create = async ( data ) => { 
    const result = await sql.execute(
        'INSERT INTO `BEJ-09`.students  (NOME , EMAIL , DOCUMENTO , DATA_NASCIMENTO) VALUES (?, ?, ?, ?)',
        [data.nome, data.email, data.documento, data.dataNascimento]
    )
    console.log(result[0])
    console.log(result[0].insertId)
    data.id = result[0].insertId;
    return {data} 
};



const read = () => {};
const update = () => {};
const deleteRow = () => {};

module.exports = { create, read, update, deleteRow }