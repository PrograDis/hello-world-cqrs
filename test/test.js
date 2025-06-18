const CommandHandler = require('../src/commands/CommandHandler');
const QueryHandler = require('../src/queries/QueryHandler');

describe('CQRS Hola Mundo', () => {
  let commandHandler;
  let queryHandler;

  beforeEach(() => {
    commandHandler = new CommandHandler();
    queryHandler = new QueryHandler(commandHandler);
  });

  test('debería manejar un comando', () => {
    const result = commandHandler.handleCommand('Hola');
    expect(result.success).toBe(true);
  });

  test('debería manejar una query', () => {
    commandHandler.handleCommand('Hola');
    commandHandler.handleCommand('Mundo');
    const result = queryHandler.handleQuery();
    expect(result.messages).toEqual(['Hola', 'Mundo']);
    expect(result.count).toBe(2);
  });
});