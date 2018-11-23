const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json")
const Discord = require("discord.js");
const fs = require("fs");
const color = ((1 << 24) * Math.random() | 0).toString(16);
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdSeconds = 3;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldnt find commands")
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online and in ${bot.guilds.size} servers!`);
  bot.user.setActivity(`Rip stan lee <3`, {type: "WATCHING"});

});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Joined the server`)

  let welcomechannel = member.guild.channels.find(`name`, "↠main↞")

  let pEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${member.id}> Has joined the server! make sure you say hi!**`);
  welcomechannel.send(pEmbed)
});

bot.on("guildMemberRemove", async member =>{
  console.log(`${member.id} Left the server`)

  let leavechannel = member.guild.channels.find(`name`, "↠main↞")

  let p2Embed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${member.id}> Has left :c**`);
  leavechannel.send(p2Embed)
});


bot.on ("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
          prefixes: botconfig.prefix
    };
}

let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    let fEmbed = new Discord.RichEmbed()
    .setColor(0x8B0000)
    .setDescription(`**You must wait ${cdSeconds} seconds between each command**`).then(msg => msg.delete(5000));
    message.channel.send(fEmbed);
    return;
  }
  if(message.author.id !== "157619634504204289"){
    cooldown.add(message.author.id);
  }

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdSeconds * 1000)

});


bot.login(tokenfile.token);
