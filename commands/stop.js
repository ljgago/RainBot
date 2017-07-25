'use strict'
const logger = require('../global/logger');
const message = require('../global/purge');

module.exports = class StopCommand {
  constructor(bot, msg) {
    this.bot = bot;
    this.msg = msg;
    logger.debug('Constructor Stop');
  }
 
  async run(query) {
    if (query != '') {
      return message.reply(this.msg, 'Please type the command correctly');
    }

  }

}
