// Arquivo: api-bes/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Nosso "banco de dados" temporário
const cursos = [
  { id: 1, nome: 'React Native para Iniciantes', area: 'Mobile' },
  { id: 2, nome: 'Node.js, Express e MongoDB', area: 'Backend' },

];

// Rota principal para obter todos os cursos
app.get('/cursos', (req, res) => {
  res.json(cursos);
});

// Inicia o servidor para ouvir na porta 3000
app.listen(port, () => {
  console.log(`Servidor da API BES rodando em http://localhost:${port}`);
});