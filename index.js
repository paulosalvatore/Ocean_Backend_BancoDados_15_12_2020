const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD
// Create, Read (All or Single), Update, Delete
// Criar, Ler (Tudo ou Individual), Atualizar e Remover

const mensagens = [
  {
    id: 1,
    texto: 'Essa é a primeira mensagem'
  },
  {
    id: 2,
    texto: 'Essa é a segunda mensagem'
  }
];

// [CREATE] - Criar uma mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body;

  const id = mensagens.length + 1;
  mensagem.id = id;

  mensagens.push(mensagem);

  res.send(mensagem);
});

// [READ] All - Ler todas as mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens.filter(Boolean));
});

// [READ] Single - Ler apenas uma mensagem
app.get('/mensagens/:id', (req, res) => {
  const id = +req.params.id - 1;

  const mensagem = mensagens[id];

  res.send(mensagem);
});

// [UPDATE] - Editar uma mensagem
app.put('/mensagens/:id', (req, res) => {
  const id = +req.params.id - 1;

  const novoTexto = req.body.texto;

  mensagens[id] = novoTexto;

  res.send('Mensagem editada com sucesso!');
});

// [DELETE] - Remover uma mensagem
app.delete('/mensagens/:id', (req, res) => {
  const id = +req.params.id - 1;

  delete mensagens[id];

  res.send('Mensagem foi excluída com sucesso!');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000.');
});
