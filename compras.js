"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Criando uma função que recebe um array de Items
function calcularTotal(itens) {
    let total = 0;
    for (const item of itens) {
        total += item.preco;
    }
    return total;
}
// 3. Criando um array de itens de exemplo
const carrinho = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Teclado", preco: 300 }
];
// 4. Chamando a função e exibindo o resultado
const valorTotal = calcularTotal(carrinho);
console.log(`O valor total do carrinho é R$ ${valorTotal}`);
// Exemplo de erro:
// const itemInvalido = { nome: "Cadeira", preco: "500" };
// carrinho.push(itemInvalido); // Erro de compilação! A propriedade 'preco' está com o tipo errado.
