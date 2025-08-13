// 📘 Tarefa Prática: Sistema de Gerenciamento de Usuários
// Arquivo único: tarefa.ts
// 2) Array de Usuários (inicialmente vazio)
var listaDeUsuarios = [];
// 3) Função de Cadastro
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
}
// 4) Função de Exibição
function listarUsuarios() {
    if (listaDeUsuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    console.log("=== Lista de Usuários ===");
    listaDeUsuarios.forEach(function (u, i) {
        console.log("#".concat(i + 1));
        console.log("Nome:   ".concat(u.nome));
        console.log("Email:  ".concat(u.email));
        console.log("Idade:  ".concat(u.idade));
        console.log("Status: ".concat(u.status ? "Ativo" : "Inativo"));
        console.log("-".repeat(30));
    });
}
// --- Exemplos de uso (cadastro de usuários de teste) ---
cadastrarUsuario({ nome: "Ana Silva", email: "ana@exemplo.com", idade: 28, status: true });
cadastrarUsuario({ nome: "Bruno Lima", email: "bruno@exemplo.com", idade: 34, status: false });
cadastrarUsuario({ nome: "Carla Souza", email: "carla@exemplo.com", idade: 22, status: true });
// Listar usuários no console
listarUsuarios();
