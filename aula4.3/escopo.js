// Escopo na sua menor avaliaçao é onde um dado/ variavel/ propriedade pode ser modificado ou acessado
// Basicamente exitem dois 2 global, função

// let result = 20

// if (true){
//     let result = 10;
// }
// console.log(result) //20

// if (true){
//     result = 30;
// }
// console.log(result) //30


// if (true){
//     (() => {let result = 40})();
// }
// console.log(result) // 30

// if (true){
//     (() => {result = 50})();
// }
// console.log(result) // 50

// if (true) {
//     //IIFE
//     (function () {
//         var result = 60;
//     })();
//     console.log(result); // ReferenceError
// }

// if (true) {
//     //IIFE
//     (function () {
//         result = 60;
//     })();
// }
// console.log(result); // 60

// function logResult() {
//     var result = 5;
// }

// if (true) {
//     logResult();
// }
// console.log(result);  // ReferenceError

// Resolvendo referencias de escopo em cadeia
// JavaScript segue o principio de "Closer is better"
// se a function outer() declara o objeto x, e ela possui a function inner() que tambem declara um objeto x:
// outer() tera a referencia do x de outer 
// inner() tera a referencia do x de inner


//quebra o principio funcional declarar variarivel sem var ou let, e em escopo de funcoes o Var ter maior vunerabilidade


//declarando um variavel no maior escopo
// x = 'teste';

// function outer() {
//     console.log("Primeira valor de x ao entrar na funcao outter: " + x) //cria um x no escopo da funcao outter
//     function inner() {
//         console.log(`Veio como ${x}`)
//         x = 'INNER' //cria um x relacionado ao x esterno de outter
//         console.log(`Saiu como ${x}`)
//         return x;
//     }
//     x = "OUTTER";
//     return { x: x, y: inner() };
// }
// console.log(outer())
// console.log(x)

//closure

// function outter(){
//     let x = "X Vale algum coisa";

//     function inner1(y){
//         return x + y + " teste";
//     }
    
//     return inner;
// }

// let teste = outter()
// console.log(teste);

// console.log(teste(" Y tambem algum coisa"));

//exercicio criar uma estrutura que gerencia alunos e professores
// IIEF
const escola = (function(){
    let professores = [];
    let alunos = [];

    function addAluno(nome, disciplina){
        alunos.push({nome, disciplina});
    }

    function addProfessor(nome, disciplina){
        professores.push({nome, disciplina});
    }

    function getAlunos(){ return alunos };
    function getProfessores(){ return professores};

    return {
        adicionarAluno: addAluno,
        adicionarProfessor: addProfessor,
        retornarListaAlunos: getAlunos,
        retornarListaProfessores: getProfessores
    }

})();

console.log(escola);
console.log(escola.this);

escola.adicionarAluno('Luiz', 'JS');
escola.adicionarProfessor('Aragao', 'JS');

console.log(escola.retornarListaAlunos());
console.log(escola.retornarListaProfessores());


