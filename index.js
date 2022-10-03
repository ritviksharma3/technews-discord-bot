const Discord = require("discord.js");
const config = require("./config.json");

const intents = new Discord.Intents(32509);
const client = new Discord.Client({ intents }, { disableEveryone: false });

client.on("ready", () => {
  console.log("The bot is online");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.channel.send("Hacktoberfest");
  }
});

client.login(config.token);
