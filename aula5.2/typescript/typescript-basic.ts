
//inferencia do tipo de variavel
let arrayTest = [1 ,2, "string"]; //modo javascript
let arrayTest2: number[] = [1, 2, 5];

let nome: string = "teste";
let numero:  number = 10;

function teste(): string {
    return "teste";
}

function teste2(): number {
    return 1000;
}

interface Pessoa {
    nome: string;
    idade: number;
}

function retornaPessoa(): Pessoa{
    return { nome: "Mario", idade: 50}
}

let pessoa: Pessoa = { nome: "Luiz", idade: 30}

/**
 * Interfaces
 * Muitas vezes precisamos reaproveitar estrutura de dados entre várias manipulações e funções da aplicação, 
 * nisso entram as interfaces, por exemplo:
 */


interface Empregado extends Pessoa{
    registro: number;
    cargo: string;
}

let empregado: Empregado = { nome: "peach", idade: 20, registro: 1.6, cargo: "Chefe do Mario" } //Objeto da interface empregado
let novaPessa: Pessoa = empregado //Objeto do tinterface pessoa???

console.log(typeof empregado)
console.log(empregado)// 4 propriedade

console.log(typeof novaPessa)
console.log(novaPessa)// 4 propriedade

/**
 * Types
 * Quando uma variável pode assumir formatos distintos mesmo que pertencendo a uma mesma entidade 
 * podemos utilizar os Types. Esses se diferem das interfaces em alguns pontos como:
 *      Interfaces podem herdar outras interfaces, Types não;
 *      Types podem assumir formatos distintos;
 */

type Poligno1 =
    { tipo: 'quadrado', lado: number } |
    { tipo: 'circulo', raio: number } |
    { tipo: 'retangulo', comprimento: number, altura: number}

let quadrado: Poligno1 = {tipo: 'quadrado', lado: 10 }
console.log(typeof quadrado)
console.log(quadrado)

function criaPolygnos(): Poligno1{
    return { tipo: 'circulo', raio: 10 }
}

type Poligno2 = 
    { tipo: 'hexagano', lado: number } | Poligno1

let formaGeometrica1: Poligno2 = { tipo: 'hexagano', lado: 100 }
// let formaGeometrica2: Poligno1 = { tipo: 'hexagano', lado: 100 }// nao funciona pq type nao herda
console.log(typeof formaGeometrica1)
console.log(formaGeometrica1)

function calculoArea(formaGeometrica: Poligno2): void{
    switch(formaGeometrica.tipo) {
        case 'quadrado':
            console.log(formaGeometrica.lado ** 2);
            break;
        case 'circulo': 
            console.log((formaGeometrica.raio ** 2) * Math.PI );
            break;
        case 'retangulo':
            console.log( formaGeometrica.altura * formaGeometrica.comprimento );
            break;
        case 'hexagano':
            console.log( (formaGeometrica.lado **2) * 3 * (3**.5) / 2 );
            break;
        default:
            console.log('forma nao encontrada');
            break;
    }
}

calculoArea({tipo: 'quadrado', lado: 5});
calculoArea({tipo: 'circulo', raio: 10});
calculoArea({tipo: 'hexagano', lado: 5});
calculoArea({tipo: 'retangulo', comprimento: 5, altura: 10});


/**
 * Enums
 * 
 * Os Enums são formas de definirmos constantes na tipagem a fim de reaproveitarmos código 
 * entre funções e/ou arquivos. 
 * Por exemplo, na função acima poderíamos usar os Enums da seguinte forma:
 */

// const  QUADRADO: string = 'quadrado';

export enum PolignoEnum {
    QUADRADO,
    CIRCULO,
    RETANGULO,
    HEXAGANO
}

type Poligno3 = 
    { tipo: PolignoEnum.QUADRADO, lado: number } |
    { tipo: PolignoEnum.CIRCULO, raio: number } |
    { tipo: PolignoEnum.RETANGULO, comprimento: number, altura: number} |
    { tipo: PolignoEnum.HEXAGANO, lado: number}

function calculoArea2(formaGeometrica: Poligno3): void{
    switch(formaGeometrica.tipo) {
        case PolignoEnum.QUADRADO:
            console.log(formaGeometrica.lado ** 2);
            break;
        case PolignoEnum.CIRCULO: 
            console.log((formaGeometrica.raio ** 2) * Math.PI );
            break;
        case PolignoEnum.RETANGULO:
            console.log( formaGeometrica.altura * formaGeometrica.comprimento );
            break;
        case PolignoEnum.HEXAGANO:
            console.log( (formaGeometrica.lado **2) * 3 * (3**.5) / 2 );
            break;
        default:
            console.log('forma nao encontrada');
            break;
    }
};


calculoArea2({tipo: PolignoEnum.QUADRADO, lado: 15});
calculoArea2({tipo: PolignoEnum.CIRCULO, raio: 100});
calculoArea2({tipo: PolignoEnum.HEXAGANO, lado: 50});
calculoArea2({tipo: PolignoEnum.RETANGULO, comprimento: 15, altura: 120});