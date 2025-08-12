# 📘 Tarefa Prática: Sistema de Gerenciamento de Usuários

## 🎯 Objetivo

Criar um script em **TypeScript** que simule um pequeno sistema de cadastro e listagem de usuários.

---

## ✅ Requisitos da Tarefa

Seu projeto deve conter um **único arquivo TypeScript** (`tarefa.ts`) que execute as seguintes ações:

### 1. Defina uma Interface

Crie uma interface chamada `Usuario` com as seguintes propriedades e tipos:

- `nome`: `string`
- `email`: `string`
- `idade`: `number`
- `status`: `boolean`

### 2. Crie um Array de Usuários

Declare uma variável chamada `listaDeUsuarios` que seja um array de objetos do tipo `Usuario`.  
Inicialize-o como um **array vazio**.

### 3. Crie uma Função de Cadastro

Implemente uma função chamada `cadastrarUsuario` que receba um objeto do tipo `Usuario` como parâmetro.

- Dentro da função, adicione o objeto recebido ao array `listaDeUsuarios`.

### 4. Crie uma Função de Exibição

Implemente uma função chamada `listarUsuarios` que não receba parâmetros.

- Esta função deve iterar sobre o array `listaDeUsuarios` e exibir os dados de cada usuário no console, de forma organizada.

---

## 🛠️ Instruções

1. Crie um novo arquivo chamado `tarefa.ts` no seu projeto.
2. Implemente a interface e as duas funções descritas acima.
3. No final do arquivo, chame a função `cadastrarUsuario` algumas vezes para adicionar usuários de teste.
4. Depois de adicionar os usuários, chame a função `listarUsuarios` para ver o resultado no console.
5. Compile o arquivo .ts para .js e, em seguida, execute o arquivo .js gerado para mostrar o resultado.

## Entrega
Publique o arquivo tarefa.ts no seu repositório público do Github