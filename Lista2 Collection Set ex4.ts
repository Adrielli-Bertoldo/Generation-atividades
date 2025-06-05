import * as readline from 'readline-sync';

// Inicializa o Set com 10 números únicos
const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Mostra os números do Set
console.log("Lista de números:");
console.log(Array.from(numeros).join(" "));

// Pergunta ao usuário o número desejado
const entrada = readline.question("Digite o número que você deseja encontrar: ");
const numeroProcurado = Number(entrada);

// Verifica se o número está no Set
if (numeros.has(numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado!`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}

