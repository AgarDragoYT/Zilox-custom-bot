const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true});
module.exports.run = async (bot, message, args) => {
  let botmessage = args.join(" ");
  message.delete().catch();

  if(message.author.id == "157619634504204289") return message.channel.send(`${botmessage}`);
  
  message.channel.send(`**<@${message.author.id}>**: ${botmessage}`);
}

module.exports.help = {
  name: "say"
}
