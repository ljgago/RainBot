'use strict'
const logger = require('../global/logger');
const message = require('../global/purge');

module.exports = class JoinCommand {
  constructor(bot, msg) {
    this.bot = bot;
    this.msg = msg;
    logger.debug('Constructor Join');
  }

  async run(query) {
    if (query != '') {
      return message.reply(this.msg, 'Please type the command correctly');
    }
    const voiceChannel = this.msg.member.voiceChannel;
    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return message.reply(this.msg, 'I couldn\'t connect to your voice channel');
    }
    voiceChannel.join()
      .then(connection => logger.info('Connected!'))
      .catch(err => logger.error(err));
  }
}
