// Operadores Aritméticos: Usados para realizar cálculos
let a = 10;
let b = 5;

let soma = a + b;      // 15
let subtracao = a - b;  // 5
let multiplicacao = a * b;  // 50
let divisao = a / b;    // 2
let resto = a % b;      // 0
let exponenciacao = a ** b; // 100000

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Exponenciação:", exponenciacao);

// Operadores de Atribuição: Atribuem valores a variáveis
let c = 20;
c += 5; // c = c + 5; resultado: 25
console.log("Atribuição com soma:", c);

c -= 10; // c = c - 10; resultado: 15
console.log("Atribuição com subtração:", c);

// Operadores de Comparação: Comparam dois valores, retornando um booleano (true ou false)
let x = 10;
let y = "10";

console.log("Igual (==):", x == y);   // true (compara o valor, ignora o tipo)
console.log("Idêntico (===):", x === y); // false (compara valor E tipo)
console.log("Diferente (!=):", x != y); // false
console.log("Estritamente diferente (!==):", x !== y); // true
console.log("Maior que (>):", x > 5);   // true
console.log("Menor ou igual (<=):", x <= 10); // true

// Operadores Lógicos: Combinam ou invertem valores booleanos
let idadeMinima = 18;
let temPassaporte = false;
let podeEntrar = idadeMinima >= 18 && temPassaporte; // 'e' lógico (&&)
console.log("Pode entrar (&&):", podeEntrar); // false

let temDinheiro = true;
let temCartao = false;
let podePagar = temDinheiro || temCartao; // 'ou' lógico (||)
console.log("Pode pagar (||):", podePagar); // true

let estaChovendo = true;
let naoEstaChovendo = !estaChovendo; // 'não' lógico (!)
console.log("Não está chovendo (!):", naoEstaChovendo); // false