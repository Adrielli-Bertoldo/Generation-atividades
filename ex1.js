// Função principal
function verificarMultiplos(inicio, fim) {
  // Verifica se o intervalo é válido
if (inicio >= fim) {
    console.log("Intervalo inválido!");
    return;
}

console.log(`No intervalo entre ${inicio} e ${fim}:`);

  // Laço FOR para percorrer o intervalo
for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
    }
}
}

// Exemplos de chamada:
verificarMultiplos(10, 100);
// verificarMultiplos(100, 10); // Intervalo inválido
// verificarMultiplos(-100, -10);
