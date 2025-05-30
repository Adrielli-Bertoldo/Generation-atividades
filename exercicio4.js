const leia = require('readline-sync');

let num1, num2, num3, num4

num1 = leia.questionFloat("Número1: ");
num2 = leia.questionFloat("Número2: ");
num3 = leia.questionFloat("Número3: ");
num4 = leia.questionFloat("Númer4:  ");

console.log("Diferença: " + ((num1 * num2 - num3 * num4)))
