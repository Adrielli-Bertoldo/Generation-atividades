const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pares = 0;
let impares = 0;
let contador = 0;

function perguntarNumero() {
    if (contador < 10) {
        rl.question(`Digite o ${contador + 1}º número: `, (resposta) => {
            const numero = parseInt(resposta);

            if (!isNaN(numero)) {
                if (numero % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
                contador++;
                perguntarNumero(); // Chama de novo até chegar a 10
            } else {
                console.log("Por favor, digite um número válido.");
                perguntarNumero(); // Tenta de novo
            }
        });
    } else {
        console.log(`\nTotal de números pares: ${pares}`);
        console.log(`Total de números ímpares: ${impares}`);
        rl.close(); // Encerra a leitura
    }
}

// Inicia a pergunta
perguntarNumero();
