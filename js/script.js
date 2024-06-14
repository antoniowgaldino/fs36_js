const
    num1 = document.getElementById('n1');
    num2 = document.getElementById('n2');
    conteudoDiv = document.querySelector('#resultado');

function calcula(e) {
    const operacao = e.innerText;

    if (num1.value === '' && num2.value === '') {
        alert ('Preencha os campos para realizar a operação!')
    } else {
        if (num1.value === '') {
            alert('Preencha os campo 1!');
        } else if (num2.value === '') {
            alert('Preencha os campo 2!');
        } else {
            executarOperacao(operacao);
        }
    }
}

function executarOperacao(op) {
    if (op === '+') {
        soma();
    } else if (op === '-') {
        subtrai();
    } else if (op === '*') {
        multiplica();
    } else if (op === '/') {
        divide();
    }
}

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
    conteudoDiv.innerHTML = '';
}