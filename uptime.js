const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {
  let n2 = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You are not the bot owner!**");
  if(message.author.id !== "157619634504204289") return message.channel.send(n2);

  let totalSeconds = (bot.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  let uEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**${uptime}**`);
  message.channel.send(uEmbed);
  return;
}

module.exports.help = {
  name: "uptime"
}
