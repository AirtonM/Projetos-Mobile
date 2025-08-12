// Estruturas Condicionais (if, else if, else)
let hora = 19;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Loops (for, while)
// Loop 'for': Repete um bloco de código um número específico de vezes
for (let i = 0; i < 5; i++) {
    console.log("O número no loop for é: " + i);
}

// Loop 'while': Repete um bloco de código enquanto uma condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("O número no loop while é: " + contador);
    contador++;
}