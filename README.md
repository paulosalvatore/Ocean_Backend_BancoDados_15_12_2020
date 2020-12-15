# Instalação e configuração do MongoDB

1. Baixe o MongoDB - http://www.mongodb.org/downloads

2. Instale o arquivo `.msi`.

3. Crie a pasta `data\db` dentro da unidade `C:\`, ficando `C:\data\db`.

4. Abra a pasta onde instalou o MongoDB. Exemplo no caso da versão `4.4`: `C:\Program Files\MongoDB\Server\4.4\bin`.

5. Abra a pasta no terminal/cmd e digite o comando `mongod` para iniciar. Se a última linha ficar piscando, funcionou.

OBS.: Se o comando `mongod` não funcionar, abra o arquivo direto. Se ele fechar automaticamente, é porque tem algum erro, então precisa abrí-lo via terminal para ver qual é o erro.

```
mongod
```

7. Para testar, abra o MongoDB Compass e faça uma conexão no `mongodb://localhost:27017/`.

8. Você também pode testar em um novo terminal, com o seguinte comando:

```
mongo --port 27017
```

# Explicação

SQL vs NoSQL

MongoDB -> NoSQL


SQL: MariaDB, MySQL, SQLServer, SQLite, OracleDB, PostgreSQL, ...

NoSQL: MongoDB, Cassandra, DynamoDB, Redis, Neo4j, ...


SQL: Structured Query Language
NoSQL: Not only Structure Query Language

Full Stack JS

MEAN: MongoDB, Express, Angular, NodeJS
MERN: MongoDB, Express, ReactJS, NodeJS


Tabela: mensagens
id: int(11)
texto: varchar(255)

- READ ALL (SQL):

```sql
SELECT * FROM `mensagens`;
```

- READ SINGLE (SQL)

```sql
SELECT * FROM `mensagens` WHERE `id` = 1;
```

- INSERT (SQL):

```sql
INSERT INTO `mensagens` (`id`, `texto`) VALUES (NULL, 'Essa é a primeira mensagem');
```

- UPDATE (SQL)

```sql
UPDATE `mensagens` SET `texto` = 'Essa é a primeira mensagem EDITADA' WHERE `mensagens`.`id` = 1;
```

- DELETE (SQL)

```sql
DELETE FROM `mensagens` WHERE `mensagens`.`id` = 1;
```

- FOREIGN KEY (SQL)

```sql
ALTER TABLE mensagens
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
```

- INNER JOIN
Inner Join consegue combinar resultados de diferentes tabelas na mesma consulta

SQL Tabelas vs NoSQL Collections

SQL: Estrutura é obrigatória
MongoDB: Collections não possuem schema

MongoDB armazena documentos em JSON


- READ ALL (MongoDB)

```js
db.mensagens.find({})
```

- READ SINGLE (MongoDB)

```js
db.mensagens.find({
    "_id": ObjectId("5fd8f2ad9c9f7a54ec2e262a")
})
```

- INSERT (MongoDB)

```js
db.mensagens.insert({
    "texto": "Essa é a minha primeira mensagem"
})
```

- UPDATE (MongoDB)

```js
db.mensagens.update(
    { 
        _id: ObjectId("5fd8f1ac9c9f7a54ec2e2629")
    },
    {
        $set: {
            "texto": "Essa é a minha primeira mensagem EDITADA"
        }
    }
)
```

- REMOVE (MongoDB)

```js
db.mensagens.remove({
    "_id": ObjectId("5fd8f2ad9c9f7a54ec2e262a")
})
```
