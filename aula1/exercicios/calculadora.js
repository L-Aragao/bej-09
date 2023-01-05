//Criar uma calculadora

function calculadora(){

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let tipoOperacao = document.getElementById("tipoOperacao").value;

    if(tipoOperacao === '+'){
        alert("O resultado da some e: " + (numero1+numero2) )
    }
    else if(tipoOperacao === '-'){
        alert("O resultado da subtracao e: " + (numero1-numero2) )
    }
    else if(tipoOperacao === '*'){
        alert("O resultado da multiplicacao e: " + (numero1*numero2) )
    }
    else if(tipoOperacao === '/'){
        alert("O resultado da divisao e: " + (numero1/numero2) )
    }
    else if(tipoOperacao === '%'){
        alert("O resto da divisao e: " + (numero1%numero2) )
    }else{
        alert('Operacao invalida')
    }
}

//SwitchCase
//Pesquisem falsy values javascript!!!
function calculadora2(){

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let tipoOperacao = document.getElementById("tipoOperacao").value;

    switch(tipoOperacao){
        case '+':
            alert("O resultado da some e: " + (numero1+numero2) )
            break;
        case '-':
            alert("O resultado da some e: " + (numero1-numero2) )
            break;
        case '*':
            alert("O resultado da some e: " + (numero1*numero2) )
            break;
        case '/':
            alert("O resultado da some e: " + (numero1/numero2) )
            break;
        case '%':
            alert("O resultado da some e: " + (numero1%numero2) )
            break;
        default:
            alert('Operacao invalida')
    }
}