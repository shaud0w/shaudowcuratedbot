import { Context, Telegraf, Telegram } from 'telegraf';
import { Update } from 'typegram';
import { Client, Intents } from 'discord.js';
import 'dotenv/config';

const tgToken: string = process.env.TG_BOT_TOKEN as string;
const discToken: string = process.env.DISCORD_BOT_TOKEN as string;

// Initialize Telegram variables
const tgBot: Telegraf<Context<Update>> = new Telegraf(tgToken);
//const telegram: Telegram = new Telegram(token);
//const chatId: string = process.env.CHAT_ID as string;

// Initialize Discord bot
const discordBot = new Client({ intents: [Intents.FLAGS.GUILDS] });

discordBot.on('ready', () => {
    console.log("Shaudow Bot (Discord) is ready")
})

// Launch Discord bot
discordBot.login(discToken);

//Occurs from any channel bot is part of
tgBot.on("channel_post", (ctx: Context) => {
    const channel = discordBot.channels.cache.get('935715549806227548');
    console.log("ctx: " + ctx)
    if (channel?.isText()) {channel.send("sample")};
})

// Launch TG bot
tgBot.launch();

// Shut down TG bot when you cleanly
process.once('SIGINT', () => tgBot.stop('SIGINT'));
process.once('SIGTERM', () => tgBot.stop('SIGTERM'));