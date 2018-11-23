const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .addField("Bot Name:", bot.user.username)
    .addField("Amount Of Servers I'm In:", `${bot.guilds.size} Servers`)
    .addField("Bot invite:", "Click [Here](https://discordapp.com/oauth2/authorize?client_id=492821477008343050&scope=bot&permissions=8)")
    .setThumbnail(bicon)
    .addField("Created On:", bot.user.createdAt)
    .addField("Made by:", "SweatyChildren#2025");

    return message.channel.send(botembed);
  }
    module.exports.help = {
      name: "info"
    }
