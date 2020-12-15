const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

(async () => {

const connectionString = 'mongodb://localhost:27017/';

console.info('Conectando ao banco de dados...');

const client = await mongodb.MongoClient.connect(connectionString, {
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD
// Create, Read (All or Single), Update, Delete
// Criar, Ler (Tudo ou Individual), Atualizar e Remover

const db = client.db('ocean_bancodados_15_12_2020');
const mensagens = db.collection('mensagens');

// [CREATE] - Criar uma mensagem
app.post('/mensagens', async (req, res) => {
  const mensagem = req.body;

  await mensagens.insertOne(mensagem);

  res.send(mensagem);
});

// [READ] All - Ler todas as mensagens
app.get('/mensagens', async (req, res) => {
  res.send(await mensagens.find().toArray());
});

// [READ] Single - Ler apenas uma mensagem
app.get('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  res.send(await mensagens.findOne({ _id: mongodb.ObjectId(id) }));
});

// [UPDATE] - Editar uma mensagem
app.put('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  await mensagens.updateOne(
    { _id: mongodb.ObjectId(id) },
    { $set: req.body }
  );

  res.send('Mensagem editada com sucesso!');
});

// [DELETE] - Remover uma mensagem
app.delete('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  await mensagens.deleteOne({ _id: mongodb.ObjectId(id) });

  res.send('Mensagem foi excluída com sucesso!');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000.');
});

})();
