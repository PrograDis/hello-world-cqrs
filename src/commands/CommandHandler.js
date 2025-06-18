class CommandHandler {
  constructor() {
    this.messages = [];
  }

  handleCommand(message) {
    this.messages.push(message);
    return { success: true, message: "Comando procesado" };
  }
}

module.exports = CommandHandler;