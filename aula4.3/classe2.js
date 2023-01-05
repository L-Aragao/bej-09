class Escola {
    #professores;
    #alunos;

    constructor() {
        this.#alunos = [];
        this.#professores = [];
    }

    get listaAlunos() { return this.#alunos }
    get listaProfessores() { return this.#professores }

    set listaProfessores (value) { this.#alunos.push( value); }
    set listaAlunos (value) { this.#professores.push({ value }); }

}

let escola = new Escola();


escola.listaAlunos = {nome: 'Luiz', disciplina:'JS'};
escola.listaProfessores = {nome: 'Aragao', disciplina: 'JS'};

console.log(escola.listaAlunos);
console.log(escola.listaProfessores);