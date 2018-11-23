const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .setThumbnail(sicon)
    .addField("Server Name:", message.guild.name)
    .addField("Created On:", message.guild.createdAt)
    .addField("You Joined On:", message.member.joinedAt)
    .addField("Total Members:", message.guild.memberCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
