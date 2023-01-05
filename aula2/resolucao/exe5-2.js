const pessoas = []

//prompt é um metodo do browser
const numero = parseInt(prompt("insira o numero de pessas"))

//loop para inserir as pessoas
for (let i = 0; i < numero; i++) {
    let sexo = leSexo(i);
    let altura = leAltura(i);
    pessoas.push(fabricaPessoas(sexo, altura))
}

// console.log(pessoas)
// console.log(JSON.stringify(pessoas))

const texto = document.getElementById('texto');

texto.innerHTML = `<h1>Lista de Pessoas</h1>`

for (let i = 0; i < pessoas.length; i++) {
    texto.innerHTML += `<h2>Dados da pessoa ${i + 1} </h2>`
    texto.innerHTML += `<p>Sexo: ${pessoas[i].sexo} </p>`
    texto.innerHTML += `<p>Sobrenome: ${pessoas[i].altura} </p>`
    texto.innerHTML += `<p></p>`
}


function fabricaPessoas(altura, sexo) {
    return {
        altura,
        sexo
    }
}

function leSexo(i) {
    while (true) {
        let sexo = String(prompt(`Insira o sexo da pessoa ${i + 1} (F ou M) `));
        if (sexo.toUpperCase() == 'M' || sexo.toUpperCase() == 'F') { return sexo; }
        alert('Valor invalido inserido');
    }
}

function leAltura(i) {
    while (true) {
        let altura = Number(prompt(`Insira a altura da pessoa ${i + 1}`));
        if (!Number.isNaN(altura)) { return altura; }
        alert('Valor invalido inserido');
    }
}

