const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioFinal;

salarioBruto = leia.questionFloat("Salario Bruto: \t\t");
adicionalNoturno = leia.questionFloat("Adicional Noturno: \t");
horasExtras = leia.questionFloat("Horas Extras: \t\t");
descontos = leia.questionFloat("Descontos: \t\t");

salarioFinal = salarioBruto + adicionalNoturno + (horasExtras *5) - descontos
console.log("Salario Final: " + 
    new Intl.NumberFormat('pt-BR', {    
    style: 'currency',
    currency: 'BRL'
}).format(salarioFinal))
