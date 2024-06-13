function verificaIdade (idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade!");
    } else if (idade < 18 && idade > 12) {
        console.log("Você é um adolescente!");
    } else if (idade <= 12 && idade > 3) {
        console.log("Você é uma criança!");
    } else {
        console.log("Você é um bebê!");
    }
}

verificaIdade(2);
verificaIdade(12);
verificaIdade(15);
verificaIdade(18);
verificaIdade(30);