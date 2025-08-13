// 1) Interface Usuario
interface Usuario {
  nome: string;
  email: string;
  idade: number;
  status: boolean; // true = ativo, false = inativo
}

// 2) Array de Usuários (inicialmente vazio)
const listaDeUsuarios: Usuario[] = [];

// 3) Função de Cadastro
function cadastrarUsuario(usuario: Usuario): void {
  listaDeUsuarios.push(usuario);
}

// 4) Função de Exibição
function listarUsuarios(): void {
  if (listaDeUsuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  console.log("=== Lista de Usuários ===");
  listaDeUsuarios.forEach((u, i) => {
    console.log(`#${i + 1}`);
    console.log(`Nome:   ${u.nome}`);
    console.log(`Email:  ${u.email}`);
    console.log(`Idade:  ${u.idade}`);
    console.log(`Status: ${u.status ? "Ativo" : "Inativo"}`);
    console.log("-".repeat(30));
  });
}

// --- Exemplos de uso (cadastro de usuários de teste) ---
cadastrarUsuario({ nome: "Ana Silva",  email: "ana@exemplo.com",  idade: 28, status: true  });
cadastrarUsuario({ nome: "Bruno Lima", email: "bruno@exemplo.com", idade: 34, status: false });
cadastrarUsuario({ nome: "Carla Souza", email: "carla@exemplo.com", idade: 22, status: true  });

// Listar usuários no console
listarUsuarios();
