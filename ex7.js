const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Vetor fixo com 10 números
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor:", vetor);

rl.question("Digite o número que você deseja encontrar: ", (input) => {
  const numero = parseInt(input);

  // Encontrar o índice do número no vetor
  const indice = vetor.indexOf(numero);

  if (indice !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${indice}`);
  } else {
    console.log(`O número ${numero} não foi encontrado!`);
  }

  rl.close();
});
