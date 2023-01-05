import UserModel from "../model/userModel";


export default class UserService{
    private userModel: UserModel;

    constructor(){
        this.userModel = new UserModel();
    }

    //async await aqui não é necessario, utilizamos apenas para ilustrar a possibilidade de um processo que envolva eventloop/ callback
    createUser = async () => {
        let retorno = await this.userModel.insertUser()
        return retorno;
    }

    readUser = async () => {
        return await this.userModel.selectUserByID()
    }

}