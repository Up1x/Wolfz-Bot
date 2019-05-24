const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.twitch = require ("./twitch.json");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)

  bot.user.setActivity("Wolfz Community")
});

bot.on("message", (msg) => {

    if (msg.content.startsWith == "!link") {
      editedmessage = message.content.slice (6);

      bot.msgs [message.author.username] = {
        message: msg.content
      }
      fs.writeFile ("./twitch.json", JSON.stringify (bot.msgs, null, 4), err => {
        if (err) throw err;
        msg.channel.sendMessage ("Your Account is Now Linked");
      });

    }

});

bot.login(botconfig.token);
