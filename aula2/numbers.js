//Em JavaScript todos os numeros sao 64-bit floating.
//IEEE 754-2008

let num1 = 0.7; // tipo number
let num2 = 0.1; // tipo number
console.log(typeof(num1));
console.log(typeof(num2));

let num3 = (num1 + num2);
console.log(num3);
console.log(num3.toFixed(2));
console.log((num1 * 100 + num2 * 100) / 100);
console.log(((num1 * 100) + (num2 * 100)) / 100);
console.log(((num1 + num2 ) * 100) / 100);

console.log(Number.isInteger(num3)); //Validando se é um inteiro

let num4 = (num1 + num2 ) * 100 / 100;
console.log( Number(num4.toFixed(2)));

//Number tem um conjunto de propriedades e metodos uteis para manipular dados do tipo numero

//Arredondamento
console.log("teste")
let num5 = 1.47;


//Math
console.log(Math.floor(num5)); // para baixo
console.log(Math.ceil(num5)); // para cima
console.log(Math.round(num5)); // retorna numero inteiro mais proximo

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
let aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio)

//trabalhando com strings e numbers
console.log(num1.toString() + num2); //0701

// .toString(int) escreve um numero em uma base diferente 
// 2 para binary 
// 8 para octal,
// 10 para decimal,
// 16 para hexadecimal.
console.log((10).toString(2)); // numero 10 em binario = 1010  
console.log((10).toString(8)); // numero 10 em octal = 12
console.log((10).toString(10)); // numero 10 em decimal = 10
console.log((10).toString(16)); // numero 10 em hexa = a

num1 = num1.toString(); // quando não passa paramentro converte numero para string
// console.log(num1.toFixed(2)); // erro

console.log(Number.isInteger(10)); //true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN("Não é numero")); // false
console.log(Number.isNaN(10)); // false
//NaN é uma propriedade do Number - Um numero que não é numero: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

//parseInt ou parseFloat para converter string para number
let strNumero = '5';
let strOutroNumero = '5';
console.log(strNumero + strOutroNumero);
console.log(parseFloat(num1) + parseInt(strNumero));
