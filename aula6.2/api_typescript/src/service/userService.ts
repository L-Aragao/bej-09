import UserModel from "../model/user.model";
import { connection } from "../model/connection";
import UserDTO from "../dto/user.dto";


export default class UserService{
    private userModel: UserModel;

    constructor(){
        this.userModel = new UserModel( connection );
    }

    //async await aqui não é necessario, utilizamos apenas para ilustrar a possibilidade de um processo que envolva eventloop/ callback
    createUser = async (user: UserDTO) => {
        let retorno = await this.userModel.insertUser(user)
        return retorno;
    }

    readUser = async (id: number) => {
        return await this.userModel.selectUserByID(id)
    }

}