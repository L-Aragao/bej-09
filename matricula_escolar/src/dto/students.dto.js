class DTO{
    id;
    nome;
    email;
    documento;
    dataNascimento;

    constructor(nome, email, documento, dataNascimento, id = null){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.documento = documento;
        this.dataNascimento = dataNascimento;
    }
} 
 

module.exports = DTO