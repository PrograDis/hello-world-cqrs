class QueryHandler {
  constructor(commandHandler) {
    this.commandHandler = commandHandler;
  }

  handleQuery() {
    return {
      messages: this.commandHandler.messages,
      count: this.commandHandler.messages.length
    };
  }
}

module.exports = QueryHandler;