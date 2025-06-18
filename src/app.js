const express = require('express');
const CommandHandler = require('./commands/CommandHandler');
const QueryHandler = require('./queries/QueryHandler');

const app = express();
app.use(express.json());

const commandHandler = new CommandHandler();
const queryHandler = new QueryHandler(commandHandler);

// Ruta para comandos (POST)
app.post('/command', (req, res) => {
  const result = commandHandler.handleCommand(req.body.message);
  res.json(result);
});

// Ruta para queries (GET)
app.get('/query', (req, res) => {
  const result = queryHandler.handleQuery();
  res.json(result);
});

// Hola Mundo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo con CQRS!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});