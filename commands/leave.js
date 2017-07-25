'use strict'
const logger = require('../global/logger');
const message = require('../global/purge');

module.exports = class LeaveCommand {
  constructor(bot, msg) {
    this.bot = bot;
    this.msg = msg;
    logger.debug('Constructor Leave');
  }

  async run(query) {
    if (query != '') {
      return message.reply(this.msg, 'Please type the command correctly');
    }
    const voiceChannel = this.bot.guilds.get(this.msg.guild.id).members.get(this.bot.user.id).voiceChannel;
    //const guild = this.bot.guilds.get(this.msg.guild.id);
    //const member = guild.members.get(this.bot.user.id);
    //const voiceChannel = member.voiceChannel;
    if (voiceChannel === undefined) {
      logger.debug('The bot isn\'t a channel');
      return
      //return this.msg.reply('I couldn\'t connect to your voice channel...');
    }
    voiceChannel.leave();
  }
}
