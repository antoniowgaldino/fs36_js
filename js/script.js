const
    num1 = document.getElementById('n1');
    num2 = document.getElementById('n2');
    conteudoDiv = document.querySelector('#resultado');

function soma() {
    if (num1.value !== '' && num2.value !== '') {
        let result = parseFloat(num1.value) + parseFloat(num2.value);
        exibirResultado(result);    
    } else {
        alert('Preencha os campos para realizar a soma!');
    }
}

function subtrai() {
    if (num1.value !== '' && num2.value !== '') {
        let result = parseFloat(num1.value) - parseFloat(num2.value);
        exibirResultado(result);   
    } else {
        alert('Preencha os campos para realizar a substração!');
    }
}

function multiplica() {
    if (num1.value !== '' && num2.value !== '') {
        let result = parseFloat(num1.value) * parseFloat(num2.value);
        exibirResultado(result);
    } else {
        alert('Preencha os campos para realizar a multiplicação!');
    }
}

function divide() {
    if (num1.value !== '' && num2.value !== '') {
        let result = parseFloat(num1.value) / parseFloat(num2.value);
    exibirResultado(result);  
    } else {
        alert('Preencha os campos para realizar a divisão!');
    }
}

function exibirResultado(result) {
    conteudoDiv.innerHTML = result.toString().replace(".", ",");
}

function limpar() {
    conteudoDiv.style.display = 'none';
    conteudoDiv.innerHTML ='';
}