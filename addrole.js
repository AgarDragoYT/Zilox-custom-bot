const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let pEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You don't have permission to change users roles**");
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(pEmbed);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let nrEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Couldn't find that user**");
  if(!rMember) return message.channel.send(nrEmbed);
  let role = args.slice(-1).join(" ");﻿
  let frEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You forgot to mention a role**");
  if(!role) return message.channel.send(frEmbed);
  let gRole = message.guild.roles.find(`name`, role);
  let rnEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**That role doesn't exist**");
  if(!gRole) return message.channel.send(rnEmbed);

  let urEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription(`**${rMember} already has the role "${gRole}"**`);
  if(rMember.roles.has(gRole.id)) return message.channel.send(urEmbed);
  await(rMember.addRole(gRole.id));

  let rEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**${rMember} now has ${gRole}**`);
  message.channel.send(rEmbed);
  return;
}

module.exports.help = {
  name: "addrole"
}
