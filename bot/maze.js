const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`Hi, ${client.user.username} is now online!`);
})

bot.login(botconfig.token);
