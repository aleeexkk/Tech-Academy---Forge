 //salario > 10000 = 2%
 //salario > 10000 e 8000 = 4%
 //salario > 6000 e 4000 = 6%
 //salario > 2000 e 1500 = 8%
 //salario < 1500 = 15%

const prompt = require("prompt-sync")();
let salario = Number(prompt("Informe o salário: "));

if (salario > 10000) {
    salario = salario* 1.02;
} else if (salario < 10000 && salario > 8000) {
    salario = salario* 1.04;
} else if (salario < 8000 && salario > 6000) {
    salario = salario* 1.06;
} else if (salario < 6000 && salario > 4000) {
    salario = salario* 1.08;
} else if (salario < 4000 && salario > 2000) {
    salario = salario* 1.1;
} else if (salario < 2000 && salario > 1500) {
    salario = salario* 1.15;
}
console.log("O salário reajustado é: " + salario);