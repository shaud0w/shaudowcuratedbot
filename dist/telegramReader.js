"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
require("dotenv/config");
const token = process.env.TG_BOT_TOKEN;
const bot = new telegraf_1.Telegraf(token);
//const telegram: Telegram = new Telegram(token);
//const chatId: string = process.env.CHAT_ID as string;
bot.on("channel_post", (ctx) => ctx.reply("channel reply"));
// Launch bot after handlers are created
bot.launch();
// Shut down bot when you stop Node
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
//# sourceMappingURL=telegramReader.js.map