const Discord = require("discord.js");
const bot = new Discord.Client
const client = new Discord.Client
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {
  let n2 = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You are not the bot owner!**");
  if(message.author.id !== "157619634504204289") return message.channel.send(n2);
  try {
    var code = args.join(" ");
    var evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

      message.channel.send("", clean(evaled));
    } catch(err) {
      message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);

    }

function clean(text) {
  if (typeof(text) === "sting")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
  else
      return text;
    }


}

module.exports.help = {
  name: "eval",
  alliases: ["e", "evaluate"]
}
