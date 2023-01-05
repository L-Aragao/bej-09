//file system


const fs = require("fs");
const { promisify } = require("util");

const caminhoArquivo1 = "/Users/mac_luiz/Documents/Workspace/bej-09/aula3.2/modulos_fs/arquivos/txt1.txt";
const caminhoArquivo2 = "/Users/mac_luiz/Documents/Workspace/bej-09/aula3.2/modulos_fs/arquivos/txt2.txt";
const caminhoArquivo3 = "/Users/mac_luiz/Documents/Workspace/bej-09/aula3.2/modulos_fs/arquivos/txt3.txt";

let arquivo1 = "";
let arquivo2 = "";

// modo callback
// fs.readFile(caminhoArquivo1, 'UTF-8', (err, contents) => {
//     if (err) {
//         console.log(err);
//     } else {
//         arquivo1 = contents
//         console.log(arquivo1);
//         fs.readFile(caminhoArquivo2, 'UTF-8', (err, contents) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 arquivo2 = contents
//                 console.log(arquivo2);
//                 fs.writeFile(caminhoArquivo3, "O arquivo 3 tem dos dados do 1 e do 2: " + arquivo1 + arquivo2, () => {
//                     console.log("Arquivo 3 criado");
//                 });
//             }
//         });
//     }
// });

//resolvendo com promise

// const leitura = (path) => new Promise((resolve, reject) =>
//     fs.readFile(path, 'UTF-8', (err, contents) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve(contents)
//         }
//     })
// )

// const escrita = (path, content) => new Promise((resolve, reject) =>
//     fs.writeFile(path, content, () => {
//         resolve(console.log("Arquivo escrito com sucesso"))
//     })
// );

// processo = leitura(caminhoArquivo1);
// processo.then(
//         result =>{ 
//             arquivo1 = result;
//             return leitura(caminhoArquivo2);
//         }
//     ).then(
//         result => {
//             arquivo2 = result
//             return escrita(caminhoArquivo3, "O arquivo 3 tem dos dados do 1 e do 2: " + arquivo1 + arquivo2)
//         }
//     )


// resolver com asyncAwait

// const leitura = (path) => new Promise((resolve, reject) =>
//     fs.readFile(path, 'UTF-8', (err, contents) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(contents);
//         }
//     })
// )

// const escrita = (path, content) => new Promise((resolve, reject) =>
//     fs.writeFile(path, content, () => {
//         resolve(console.log("Arquivo escrito com sucesso"));
//     })
// );


// const processo = async () => {
//     arquivo1 = await leitura(caminhoArquivo1);
//     arquivo2 = await leitura(caminhoArquivo2);
//     await escrita(caminhoArquivo3, "O arquivo 3 tem dos dados do 1 e do 2: " + arquivo1 + arquivo2);
// }
// processo();

// // Não esquecam que async await é suportado por promise, logo cada instruaçao pode retornar uma promessa
// processo().then(
//     result => {
//         return leitura(caminhoArquivo3)
//     }
//     ).then(
//     result => escrita(caminhoArquivo1+0, result + "Arquivo4")
// )


//Também podemos utilizar o promisify do modulo util para gerar promessas de modulos que nao são suportam nativamente.

const leitura = promisify(fs.readFile) //aqui a magica acontece
const escrita = promisify(fs.writeFile)

const processo = async () => {
    arquivo1 = await leitura(caminhoArquivo1);
    arquivo2 = await leitura(caminhoArquivo2);
    await escrita(caminhoArquivo3, "O arquivo 3 tem dos dados do 1 e do 2: " + arquivo1 + arquivo2);
}
processo();