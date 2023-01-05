
import { Request, Response } from "express";
import UserService from "../service/userService";


/**
 * Quando estamos utilizando classes precisamos nos atentar a injeçao de dependecias
 * metodos e propriedades precisam estar relacionados caso exista interaçao entre
 * enta tempos duas possibildiades
 * 
 * usar o bind ou declarar o metodo usando da notacao de arrow function
 * 
*/


export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();


        // this.create = this.create.bind(this);
        // this.read = this.read.bind(this);
    }

    // create(req: Request, res: Response){ res.status(201).send("Retorno " + this.propriedade) }
    // read(req: Request, res: Response){ res.status(200).send("Retorno " + this.propriedade)}


    //async await aqui não é necessario, utilizamos apenas para ilustrar a possibilidade de um processo que envolva eventloop/ callback
    create = async (req: Request, res: Response) => {
        let response = await this.userService.createUser();
        console.log(response)
        res.status(200).send("Retorno " + response)
    }

    read = async (req: Request, res: Response) => {
        let response = await this.userService.readUser();
        res.status(200).send("Retorno " + response)
    }
}