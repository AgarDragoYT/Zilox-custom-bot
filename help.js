const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args, prefixes) => {
  let bicon = bot.user.displayAvatarURL;
    let hEmbed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .setFooter(`Help Menu <> Prefix: ${prefixes}`)
    .addField(":house: Main Commands :house:", "Report <> Ping <> Info <> ServerInfo",)
    .addField(":tools: Admin Commands :tools:", "Purge <> Addrole <> Remrole <> Kick <> Ban <> Prefix <> Mute <> Unmute")
    .addField(":laughing: Fun Commands :laughing:", "Say <> Embed <> Dog <> Cat <> 8ball")
    .addField(":crown: BotOwner Commands :crown: ", "Eval <> Uptime");
    return message.channel.send(hEmbed);
}

module.exports.help = {
  name: "help",
  aliases: ["h", "commands"]
}
