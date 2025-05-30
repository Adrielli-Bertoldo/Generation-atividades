// Entradas (poderiam ser feitas via prompt em um navegador)
let nome = "João da Silva"; // Exemplo: João da Silva
let codigoCargo = 1;        // Exemplo: 1 (Gerente)
let salario = 10000.00;     // Exemplo: 10000.00

// Variáveis auxiliares
let cargo = "";
let percentualReajuste = 0;

// Determina o cargo e percentual de reajuste
switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08;
        break;
    default:
        console.log("Código de cargo inválido!");
        break;
}

// Calcula novo salário se código for válido
if (cargo !== "") {
    let novoSalario = salario + (salario * percentualReajuste);
    
    // Saída
    console.log("Nome do colaborador: " + nome);
    console.log("Cargo: " + cargo);
    console.log("Salário: R$ " + novoSalario.toFixed(2));
}
