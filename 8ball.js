const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let nqEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Please ask me a question (The message must have more then 3 words!)**");

  if(!args[2]) return message.channel.send(nqEmbed)
  let replies = ["Yes", "No", "Maybe", "Ask again later", "Not sure"]

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(0).join(" ");


  let ballEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .addField("Question:", `**${question}**`)
  .addField("Answer:", `**${replies[result]}**`)


  message.channel.send(ballEmbed);
}

module.exports.help = {
  name: "8ball"
}
