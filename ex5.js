const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;

function perguntarNumero() {
  rl.question("Digite um número: ", (numeroStr) => {
    const numero = parseInt(numeroStr);

    if (numero > 0) {
      soma += numero;
    }

    if (numero === 0) {
      console.log(`\nA soma dos números positivos é: ${soma}`);
      rl.close();
    } else {
      perguntarNumero(); // chama novamente até o número ser 0
    }
  });
}

// Inicia o processo
perguntarNumero();

