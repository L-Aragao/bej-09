import {Pool, ResultSetHeader} from "mysql2/promise";
import UserDTO from "../dto/user.dto";


export default class UserModel {
    connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    insertUser = async (user: UserDTO): Promise<UserDTO> => {
        const {nome, email, documento, dataNascimento } = user;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO `BEJ-09`.CLIENTE  (NOME , EMAIL , DOCUMENTO , DATA_NASCIMENTO) VALUES (?, ?, ?, ?)',
            [nome, email, documento, dataNascimento]
        )
        const [ dataInserted ] = result; 
        const { insertId } = dataInserted;
        return {id_cliente: insertId, ...user}
        // return (await this.selectUserByName(user.nome))[0]
    }

    selectUserByName = async (nome: String): Promise<UserDTO[]> => {
        const result = await this.connection.execute(
                'SELECT * FROM `BEJ-09`.CLIENTE WHERE NOME = ?',
                [nome]
            )
        const [rows] = result;
        return rows as UserDTO[];
    }

    selectUserByID = async (id: number) => {
        const result = await this.connection.execute(
            'SELECT * FROM `BEJ-09`.CLIENTE WHERE ID_CLIENTE = ?',
            [id]
        )
    const [rows] = result;
    return rows as UserDTO[];
    }

    updateUserByID = () => {

    }

    deleteuserByID = () => {

    }
}