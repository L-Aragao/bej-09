export default class UserModel {

    constructor() {

    }

    //async await aqui não é necessario, utilizamos apenas para ilustrar a possibilidade de um processo que envolva eventloop/ callback
    insertUser = async () => {
        let retorno: string = await "Usuario Criado";
        return retorno;
    }

    selectUserByID = async () => {
        let retorno: string = await "'usario': 'Super Mario'";
        return retorno;
    }

    updateUserByID = () => {

    }

    deleteuserByID = () => {

    }
}