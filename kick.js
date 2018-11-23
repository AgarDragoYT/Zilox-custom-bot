const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let kUserEmbed = new Discord.RichEmbed()
  .setDescription("**Can't find that user**")
  if(!kUser) return message.channel.send(kUserEmbed);
  let kReason = args.slice(-1).join(" ");
  let krEmbed = new Discord.RichEmbed()
  .setDescription(`**<@${message.author.id}>, Please supply a reason for kicking <@${kUser.id}>**`)
  .setColor(0x8B0000);
  if(!kReason) return message.channel.send(krEmbed)

  let pEmbed = new Discord.RichEmbed()
  .setDescription("**You don't have permission to kick user's**")
  .setColor(0x8B0000);

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(peEmbed);
  let peEmbed = new Discord.RichEmbed()
  .setDescription("**That use can't be kicked**")
  .setColor(0x8B0000);
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channels.send(pe2Emed);

  let kEmbed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .addField("Kicked User:", `**${kUser} with ID ${kUser.id}**`)
  .addField("Kicked By:", `**<@${message.author.id}> with ID ${message.author.id}**`)
  .addField("Kicked In:", message.channel)
  .addField("Reason:", `**${kReason}**`);

  let kChannel = message.guild.channels.find(`name`, "↠logs↞");
  let l1Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠logs↞ channel**");
  if(!kChannel) return message.channel.send(l1Embed);
  message.guild.member(kUser).kick(kReason);
  kChannel.send(kEmbed);

  let kEmbed2 = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${kUser}> has been kicked by <@${message.author.id}> for the reason ${kReason}**`);
  message.channel.send(kEmbed2);

  let kEmbed3 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .addField("Kicked User:", `**${kUser} with ID ${kUser.id}**`)
  .addField("Kicked By:", `**<@${message.author.id}> with ID ${message.author.id}**`)
  .addField("Kicked In:", message.channel)
  .addField("Reason:", `**${kReason}**`);

  let kChannel2 = message.guild.channels.find(`name`, "↠public-punishments↞");
  let l2Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠public-punishments↞ channel**");
  if(!kChannel2) return message.channel.send(l2Embed);
  message.guild.member(kUser).kick(kReason);
  kChannel2.send(kEmbed3);
  return;
}
  module.exports.help = {
    name: "kick"
  }
