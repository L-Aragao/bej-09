// nova palavra - new

// function Faca(){
//     this.corte = "afiado"
// }

// let f = new Faca();

// console.log(typeof f)
// console.log(f.corte)

// classes - pensem em RECEITAS
// em resumo são um conjunto de regras que servem de modelo para objetos
// class => é composta por this (propriedades), arguments, methods (length, apply, call, push, etc), escopo)
// function != class => classe não é de primeira ordem, isto é, não pode ser tratada como variavel

class Hero {
    nome

    constructor(nome) {
        this.nome = nome;
    }

    getEscopo() { console.log(this); }
}

//criou um objeto usando a classe Hero como padrão
let heroi = new Hero("NewHero");
heroi.

console.log(typeof heroi)
heroi.getEscopo();


class Escola {
    #professores;
    #alunos;

    constructor() {
        this.#alunos = [];
        this.#professores = [];
    }

    setAluno(nome, discplina) { this.#alunos.push({ nome, discplina }); }
    setProfessores(nome, discplina) { this.#professores.push({ nome, discplina }); }
    getAlunos() { return this.#alunos }
    getProfessores() { return this.#professores }

}

let escola = new Escola();

escola.setAluno('Luiz', 'JS');
escola.setProfessores('Aragao', 'JS');

console.log(escola.getAlunos());
console.log(escola.getProfessores());