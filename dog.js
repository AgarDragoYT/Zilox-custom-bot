const Discord = require("discord.js");
const superagent = require("superagent");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setTitle("**Woof! :dog:**")
  .setImage(body.url);
  message.channel.send(dEmbed);

}

module.exports.help = {
name: "dog"
}
