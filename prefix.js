const Discord = require("discord.js");
const fs = require("fs");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply(":x: **You must have manage server permission to do this! :x:");
  if(!args[0] || args[0 == "help"]) return message.reply (":x: **Try puting a new prefix after saying `prefix` :x:**");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**The new prefix is now: ${args[0]}**`);

  message.channel.send(sEmbed)
}
  module.exports.help = {
    name: "prefix"
  }
