const winston = require('winston');

const Logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({ level: 'debug', colorize: true })
  ]
});
//Logger.level = 'debug';

module.exports = Logger;
