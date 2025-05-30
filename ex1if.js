const leia = require('readline-sync');

let a, b, c

a = leia.questionInt("Digite o numero A: ")   
b = leia.questionInt("Digite o numero B: ")
c = leia.questionInt("Digite o numero C: ")

if ((a + b)> c ){
    console.log("\n ${a} + ${b} = ${a + b} > ${c}")
    console.log("A soma de A + B é maior do que C")
} else if ((a + b) < c){
    console.log("\n ${a} + ${b} = ${a + b} < ${c}")
    console.log("A soma de A + B é menor do que C")
} else {
    console.log("\n${a} + ${b} = ${a + b} = ${c}")
    console.log("A soma de A + B é igual a C")
}