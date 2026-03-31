const prompt = require("prompt-sync")();

let a,b,c,d,e, menorValor;

a = Number(prompt("Informe o Valor: "));
menorValor = a;
b = Number(prompt("Informe o Valor: "));
if (b < menorValor) {
    menorValor = b;
}
c = Number(prompt("Informe o Valor: "));
if (c < menorValor) {
    menorValor = c;
}
d = Number(prompt("Informe o Valor: "));
if (d < menorValor) {
    menorValor = d;
}

e = Number(prompt("Informe o Valor: "));
if (e < menorValor) {
    menorValor = e;
}

console.log("O menor valor é: " + menorValor);