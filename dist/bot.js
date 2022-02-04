"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const discord_js_1 = require("discord.js");
require("dotenv/config");
const tgToken = process.env.TG_BOT_TOKEN;
const discToken = process.env.DISCORD_BOT_TOKEN;
// Initialize Telegram variables
const tgBot = new telegraf_1.Telegraf(tgToken);
//const telegram: Telegram = new Telegram(token);
//const chatId: string = process.env.CHAT_ID as string;
// Initialize Discord bot
const discordBot = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
discordBot.on('ready', () => {
    console.log("Shaudow Bot (Discord) is ready");
});
// Launch Discord bot
discordBot.login(discToken);
//Occurs from any channel bot is part of
tgBot.on("channel_post", (ctx) => {
    const channel = discordBot.channels.cache.get('935715549806227548');
    console.log("ctx: " + ctx);
    if (channel?.isText()) {
        channel.send("sample");
    }
    ;
});
// Launch TG bot
tgBot.launch();
//Send to channel
// Shut down TG bot when you cleanly
process.once('SIGINT', () => tgBot.stop('SIGINT'));
process.once('SIGTERM', () => tgBot.stop('SIGTERM'));
//# sourceMappingURL=bot.js.map