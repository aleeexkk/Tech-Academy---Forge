const prompt = require("prompt-sync")();

let a,b,c,d,e, maiorValor;

a = Number(prompt("Informe o Valor: "));
maiorValor = a;
b = Number(prompt("Informe o Valor: "));
if (b > maiorValor) {
    maiorValor = b;
}
c = Number(prompt("Informe o Valor: "));
if (c > maiorValor) {
    maiorValor = c;
}
d = Number(prompt("Informe o Valor: "));
if (d > maiorValor) {
    maiorValor = d;
}

e = Number(prompt("Informe o Valor: "));
if (e > maiorValor) {
    maiorValor = e;
}

console.log("O maior valor é: " + maiorValor);