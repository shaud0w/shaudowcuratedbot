import { Context, Telegraf, deunionize } from "telegraf";
import { Message } from "typegram";

import { Update } from "typegram";
import { Client, Intents } from "discord.js";
import "dotenv/config";

const tgToken: string = process.env.TG_BOT_TOKEN as string;
const discToken: string = process.env.DISCORD_BOT_TOKEN as string;

// Initialize Telegram variables
const tgBot: Telegraf<Context<Update>> = new Telegraf(tgToken);

// Initialize Discord bot
const discordBot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Make sure bot is ready
discordBot.on("ready", () => {
  console.log("Shaudow Bot (Discord) is ready");
});

// Launch Discord bot
discordBot.login(discToken);

//Occurs from any channel bot is part of
tgBot.on("channel_post", (ctx) => {
  const channel = discordBot.channels.cache.get("935715549806227548");
  try {
    let text = deunionize(ctx.channelPost).text;
    if (text === undefined) {
      if (channel?.isText())
        channel.send(
          "This message was not text only. " +
            "See telegram: https://t.me/shaudowcurated to see the message."
        );
    }
    if (channel?.isText() && text != undefined) {
      channel.send(text!);
    }
  } catch (error) {
    console.log(error);
  }
});

// Launch TG bot
tgBot.launch();

// Shut down TG bot when you cleanly
process.once("SIGINT", () => tgBot.stop("SIGINT"));
process.once("SIGTERM", () => tgBot.stop("SIGTERM"));
