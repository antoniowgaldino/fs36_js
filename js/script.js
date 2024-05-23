/*
Declaração de variáveis
1- não pode ser palavra reservada
2- não pode começar com número
3- não pode conter espaços
4- não pode ter caracteres especiais
5- não pode iniciar com operadores aritméticos: +, -, /, *
6- não pode iniciar com operadores de comparação: >, <, =
*/

function soma() {
    let //declarando variaveis e convertendo num, de string para number
        num1 = parseFloat(document.getElementById('n1').value),
        num2 = parseFloat(document.getElementById('n2').value),
        result = num1 + num2; //calculando

    // imprmir result no HTML e trocando "." pela ","
    document.getElementById('resultado').innerHTML = result.toString().replace(".", ",");
}

function subtrai() {
    let
        num1 = parseFloat(document.getElementById('n1').value),
        num2 = parseFloat(document.getElementById('n2').value),
        result = num1 - num2;

    document.getElementById('resultado').innerHTML = result.toString().replace(".", ",");
}

function multiplica() {
    let
        num1 = parseFloat(document.getElementById('n1').value),
        num2 = parseFloat(document.getElementById('n2').value),
        result = num1 * num2;

    document.getElementById('resultado').innerHTML = result.toString().replace(".", ",");
}

function divide() {
    let
        num1 = parseFloat(document.getElementById('n1').value),
        num2 = parseFloat(document.getElementById('n2').value),
        result = num1 / num2;

    document.getElementById('resultado').innerHTML = result.toString().replace(".", ",");
}

/* function limpar() {
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('resultado').value='0';
} */

/*
Objetivo: Calcular a média de 2 números
1- Coletar os 2 números
2- Somar os 2 números
3- Dividir a soma pela quantidade
4- Mostrar o resultado
*/

/* let n1 = 100,
    n2 = 900;

function soma() {
    // console.log(n1 + n2);
    return n1+n2
}

function media() {
    // let result = soma();
    console.log(soma() / 2);
}

media() */