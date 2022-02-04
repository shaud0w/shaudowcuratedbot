import { Context, Telegraf, Telegram } from 'telegraf';
import { Update } from 'typegram';
import 'dotenv/config';

const token: string = process.env.TG_BOT_TOKEN as string;

const bot: Telegraf<Context<Update>> = new Telegraf(token);
//const telegram: Telegram = new Telegram(token);

//const chatId: string = process.env.CHAT_ID as string;

bot.on("channel_post", (ctx: Context) => ctx.reply("channel reply"))

// Launch bot after handlers are created
bot.launch();

// Shut down bot when you stop Node
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));