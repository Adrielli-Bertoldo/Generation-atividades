const leia = require('readline-sync');

let Cdg, Qdt, Pdt, PrUn;

Cdg = leia.questionInt("Digite o codigo do produto: ");
Qdt = leia.questionInt("Digite a quantidade: ");

switch (Cdg) {
case 1:
    Pdt = "Cachorro Quente";
    PrUn = 10.00;
    break;
case 2:
    Pdt = "X-Salada";
    PrUn = 15.00;
    break;
case 3:
    Pdt = "X-Bacon";
    PrUn = 18.00;
    break;
case 4:
    Pdt = "Bauru";
    PrUn = 12.00;
    break;
case 5:
    Pdt = "Refrigerante";
    PrUn = 8.00;
    break;
case 6:
    Pdt = "Suco de laranja";
    PrUn = 13.00;
    break;
default:
    console.log("Código inválido!");
    PrUn = 0;
    break;
}

// Só mostra se o código for válido
if (PrUn > 0) {
  let valorTotal = Qdt * PrUn;
  console.log("Produto: " + Pdt);
  console.log("Valor total: R$ " + valorTotal.toFixed(2));
}
