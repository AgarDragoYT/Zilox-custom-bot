const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let pEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**Pong!: ${bot.ping} ms**`);
  message.channel.send(pEmbed)
}

module.exports.help = {
  name: "ping"
}
