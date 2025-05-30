const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menoresDe21 = 0;
let maioresDe50 = 0;

function perguntarIdade() {
    rl.question("Digite uma idade: ", (resposta) => {
        let idade = parseInt(resposta);

        if (idade < 0) {
            console.log(`\nTotal de pessoas menores de 21 anos: ${menoresDe21}`);
            console.log(`Total de pessoas maiores de 50 anos: ${maioresDe50}`);
            rl.close();
        } else {
            if (idade < 21) {
                menoresDe21++;
            } else if (idade > 50) {
                maioresDe50++;
            }
            perguntarIdade(); // repete a pergunta
        }
    });
}

perguntarIdade();
