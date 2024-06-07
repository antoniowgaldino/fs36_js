const
    num1 = document.getElementById('n1');
    num2 = document.getElementById('n2');
    conteudoDiv = document.querySelector('#resultado');

function soma() {
    let result = parseFloat(num1.value) + parseFloat(num2.value);
    exibirResultado(result);
}

function subtrai() {
    let result = parseFloat(num1.value) - parseFloat(num2.value);
    exibirResultado(result);
}

function multiplica() {
    let result = parseFloat(num1.value) * parseFloat(num2.value);
    exibirResultado(result);
}

function divide() {
    let result = parseFloat(num1.value) / parseFloat(num2.value);
    exibirResultado(result);
}

function exibirResultado(result) {
    conteudoDiv.innerHTML = result.toString().replace(".", ",");
}

function limpar() {
    conteudoDiv.style.display = 'none';
    conteudoDiv.innerHTML ='';
}