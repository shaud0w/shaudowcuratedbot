"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
require("dotenv/config");
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.on('text', (ctx) => ctx.reply('👍'));
bot.start((ctx) => ctx.reply('Hello'));
bot.help((ctx) => ctx.reply('Help message'));
// Launch bot after handlers are created
bot.launch();
// Shut down bot when you stop Node
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
//# sourceMappingURL=app.js.map