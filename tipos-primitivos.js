"use strict";
// Declaração de tipos primitivos
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "João";
let idade = 25;
let estaAtivo = true;
// Exemplo de erro de tipagem:
let erro = 10; // Erro de compilação! "Type 'number' is not assignable to type 'string'."
// Exibindo os valores no console
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Ativo: ${estaAtivo}`);
//console.log(`Erro: ${erro}`);
