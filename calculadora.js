// Atividade: Calculadora Simples

// Instruções:
// Crie um novo arquivo chamado calculadora.js.

// Use variáveis para armazenar dois números e um operador (ex: +, -, *, /).

// Use uma estrutura de decisão (if, else if) para verificar qual é o operador.

// Com base no operador, realize a operação matemática correspondente e armazene o resultado em outra variável.

// Use console.log() para exibir o resultado final de forma clara.


// calculadora.js
let numero1 = 15;
let numero2 = 0;
let operador = "/"; // Mude para '-', '*', '/' para testar

let resultado;

// Estrutura de decisão para verificar o operador
if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operador inválido!";
}

console.log("O resultado da operação é:", resultado);	