'use strict'
const logger = require('./logger');
const Config = require("../config.json");

module.exports = {
  send: (msg, text) => {
    msg.channel.send(text)
      .then(m => m.delete(1000 * Config.bot.purgetime))
      .catch(err => logger.error(err));
  },
  reply: (msg, text) => {
    msg.reply(text)
      .then(m => m.delete(1000 * Config.bot.purgetime))
      .catch(err => logger.error(err));
  }
};
