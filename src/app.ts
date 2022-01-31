import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import 'dotenv/config';

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

bot.on('text', (ctx) => ctx.reply('👍'))
bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Help message'))

// Launch bot after handlers are created
bot.launch();

// Shut down bot when you stop Node
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));