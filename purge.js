const Discord = require("discord.js");
const fs = require("fs");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {

  let pEmbed = new Discord.RichEmbed()
  .setDescription(`**${args[0]} messages purged by <@${message.author.id}>**`)
  .setColor(`#${color}`);

  let npEmbed = new Discord.RichEmbed()
  .setDescription("**You don't have permission to delete messages**")
  .setColor(0x8B0000);

  let nnEmbed = new Discord.RichEmbed()
  .setDescription("**Add a number after purge**")
  .setColor(0x8B0000);

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(npEmbed);
  if(!args[0]) return message.channel.send(nnEmbed);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(pEmbed).then(msg => msg.delete(5000));
  });
 }
  module.exports.help = {
    name: "purge"
  }
