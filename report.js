const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let rEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Couldn't find that user**");
  if(!rUser) return message.channel.send(rEmbed);
  let reason = args.join(" ").slice(22);
  let nr2Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Please supply a reason**");
  if(!reason) return message.channel.send(nr2Embed)

  let reportEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .addField("Reported User:", `**${rUser} with ID: ${rUser.id}**`)
  .addField("Reported By:", `**${message.author} with ID: ${message.author.id}**`)
  .addField("Reported In:", message.channel)
  .addField("Reported For:", `**${reason}**`);

  let reportschannel = message.guild.channels.find(`name`, "↠reports↞")
  let rcEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Couldn't find reports channel**");
  if(!reportschannel) return message.channel.send(rcEmbed);

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

  let reportEmbed2 = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**Reported ${rUser} for the reason: ${reason}**`);
  message.channel.send(reportEmbed2)
}

module.exports.help = {
  name: "report"
}
