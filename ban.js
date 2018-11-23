const Discord = require("discord.js");
const ms = require("ms");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let bEmbed95 = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription(`**Can't find that user**`);
  if(!bUser) return message.channel.send(bEmbed95);
  let bReason = args.join(" ").slice(22);
  let nbpm3Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You don't have permission to ban users**");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(nbpm3Embed);
  let iub8ybEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**That person cannot be banned because they have the ban members permission**");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(iub8ybEmbed);

  let bEmbed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .addField("Banned User:", `**${bUser} with ID ${bUser.id}**`)
  .addField("Banned By:", `**<@${message.author.id}> with ID ${message.author.id}**`)
  .addField("Banned In:", message.channel)
  .addField("Reason:", `**${bReason}**`);

  let bChannel = message.guild.channels.find(`name`, "↠logs↞");
  let l1Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠logs↞ channel**");
  if(!bChannel) return message.channel.send(l1Embed);
  message.guild.member(bUser).ban(bReason);

  let bEmbed4 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .addField("Banned User:", `**${bUser} with ID: ${bUser.id}**`)
  .addField("Banned By:", `**<@${message.author.id}> with ID: ${message.author.id}**`)
  .addField("Banned In:", message.channel)
  .addField("Reason:", `**${bReason}**`);
  let bChannel2 = message.guild.channels.find(`name`, "↠public-punishments↞");
  let l2Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠public-punishments↞ channel**");
  if(!bChannel2) return message.channel.send(l2Embed);
  message.guild.member(bUser).ban(bReason);

  let bEmbed2 = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**${bUser} has been banned by <@${message.author.id}> for the reason ${bReason}**`);
  message.channel.send(bEmbed2);

  let bEmbed3 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .setDescription(`**<@${message.author.id}> has banned <@${bUser.id}> for the reason ${bReason}**`);


  bChannel.send(bEmbed4);
  bChannel2.send(bEmbed3);
  return;
}
  module.exports.help = {
    name: "ban"
  }
