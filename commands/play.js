'use strict'
const logger = require('../global/logger');
const message = require('../global/purge');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Config = require('../config.json')

module.exports = class PlayCommand {
  constructor(bot, msg) {
    this.bot = bot;
    this.msg = msg;
    this.queue = new Map();
    this.youtube = new Youtube(Config.api_keys.youtube);
    logger.debug('Constructor Play');
  }
 
  async run(query) {

  }

}

