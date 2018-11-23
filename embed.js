const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let color = ((1 << 24) * Math.random() | 0).toString(16);
  let botmessage = args.join(" ");
  message.delete().catch();

  let s2Embed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`${botmessage}`);
  if(message.author.id == "157619634504204289") return message.channel.send(s2Embed);

  let sEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${message.author.id}>**: ${botmessage}`);
  message.channel.send(sEmbed);
}

module.exports.help = {
  name: "embed"
}
