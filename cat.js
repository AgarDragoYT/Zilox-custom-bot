const Discord = require("discord.js");
let color = ((1 << 24) * Math.random() | 0).toString(16);
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow`);

  let cEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setTitle("**Meow! :heart_eyes_cat:**")
  .setImage(body.file);

  message.channel.send(cEmbed);

}

module.exports.help = {
name: "cat"
}
