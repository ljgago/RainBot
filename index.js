'use strict'
const Discord = require('discord.js');
const logger = require('./global/logger');
const Config = require("./config.json");
const Command = require("./commands");

const bot = new Discord.Client();

/*
var normalizedPath = require("path").join(__dirname, "routes");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./routes/" + file);
});


*/

/*
var whatToBring = {
  "Sunny" : "Sunscreen and hat",
  "Rain" : "Umbrella and boots",
  "Cold" : "Scarf and Gloves",
  "Default" : "Play it by ear"
}
var gear = whatToBring[weather] || whatToBring["Default"];
*/




bot.on('ready', () => {
  logger.info('The Bot is running!');
  // Change the Game status
  bot.user.setGame(Config.bot.game)
})
.on('guildDelete', guild => {

})
.on('message', msg => {
  if(msg.author.id != Config.bot.id && msg.content.startsWith(Config.bot.prefix)) {
    const query = parceContent(msg.content);

    const dispatcher = {
      'help': () => { return new Command.HelpCommand(bot, msg) },
      'join': () => { return new Command.JoinCommand(bot, msg) },
      'leave': () => { return new Command.LeaveCommand(bot, msg) },
      'play': () => { return new Command.PlayCommand(bot, msg) },
      'stop': () => { return new Command.StopCommand(bot, msg) },
      'playlist': () => { return new Command.PlaylistCommand(bot, msg) }
        //const a = new Command.JoinCommand(bot, query);
        //a.run();

      //JcommandoinCommand(),
    };
    
    const command = dispatcher.hasOwnProperty(query[1]) ? dispatcher[query[1]]() : undefined;
    if(command === undefined) {
      logger.info('Command not found');
      return
    };
    command.run(query[2]);
    //const start = command();
    //start.run();
    
    //run();

    //const args = msg.content.split(/\s+/g);
    //logger.info(args);
    //if(request != undefined) msg.reply(request);
    /*
    if (msg.content === 'ping') {
      msg.reply('pong');
      msg.channel.send("**`pong`**");
      msg.channel.send("**`pong`**");
      msg.reply("Algo");
      bot.user.setGame('GAME HERE')
    }
    */
  }
  
});

const parceContent = (content) => {
  // ExpReg /^!@(\S+)\s*(.*)/ prefix = !@
  const exp = new RegExp("^"+ Config.bot.prefix +"(\\S+)\\s*(.*)");
  //const args = content.split(Config.bot.prefix)[1];
  const query = content.match(exp);
  //logger.debug(req);
  return query;
};

bot.login(Config.bot.token);
