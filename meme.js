const Discord = require("discord.js");
const superagent = require("superagent");
const randomPuppy = require("random-puppy");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  randomPuppy(`memes`).then (url => {
    let mEmbed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .setTitle("**LOL! :rofl:**")
    .setImage(url)
    message.channel.send(mEmbed)
  });
}

module.exports.help = {
  name: "meme"
}
