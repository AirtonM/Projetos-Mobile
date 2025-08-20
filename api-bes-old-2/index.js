// Arquivo: api-bes/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const cursos = [
  { id: 1, nome: 'React Native para Iniciantes', area: 'Mobile' },
  { id: 2, nome: 'Node.js, Express e MongoDB', area: 'Backend' },
];

app.get('/cursos', (req, res) => {
  res.json(cursos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});