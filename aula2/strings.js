//-----------------0123456 
let minhaString = 'Palavra';

//String são como lista ordenada de caracteres
console.log(minhaString[0]) // P

// let char = 'A'

//Maneira de como declarar string
console.log(minhaString)
 
minhaString = "'EX' Palavra";
console.log(minhaString)

minhaString = '"EX" Palavra';
console.log(minhaString)

minhaString = '\'EX\' Palavra';
console.log(minhaString)

let aux = 10;

//Template Stream
minhaString = `Minha nova string tambem tem o ${aux}`
console.log(minhaString); 


console.log(minhaString[0]); //P

console.log(minhaString.charAt(0)); // Retorna o valor da pos - P

console.log(minhaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc

console.log("Ola" + " " + "Mundo"); //Ola Mundo

console.log(minhaString.concat(' ', 'é', ' ', 'absoluta')); // raramente usado

console.log(minhaString.indexOf('a',5)); // Retorna o índice != index

console.log(minhaString.lastIndexOf('a', minhaString.length)); // Retorna o índice

//Estudar um pouco de expressao regular
console.log(minhaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)

console.log(minhaString.match("al")); // Retorna um array com os valores encontrados (se g)

console.log(minhaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência

console.log(minhaString.replace(/a/g, '4')); // Substitui valores na string

console.log(minhaString.slice(2, 7)); // recorta e extrai um pedaço da string

console.log(minhaString.slice(-7, -3)); // recorta e extrao um pedaço da string pela sentido contrario do index

console.log(minhaString.split(' ', 2)); // divide a string

console.log(minhaString.toUpperCase()); // tudo para maiusculo
console.log(minhaString.toLowerCase()); // tudo para minusculo
