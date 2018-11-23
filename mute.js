const Discord = require("discord.js");
const ms = require("ms");
let color = ((1 << 24) * Math.random() | 0).toString(16);

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let tmEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Could not find that user**");
  if(!tomute) return message.channel.send(tmEmbed);
  let tm4Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**You cannot do that!**");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(tm4Embed)
  let tm2Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**that user cannot be muted**");
  if(tomute.hasPermission("KICK_MEMBERS")) return message.channel.send(tm2Embed);
  let muterole = message.guild.roles.find(`name`, "Muted");
  //create role [IMPORTANT]
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
        });
      });
    }catch(e){
      console.log(e.stack)
    }
  }

  let mutetime = args[1]
  let fmEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Please say how long the user will be muted for | Format: S/M/H/D**");
  if(!mutetime) return message.channel.send(fmEmbed);

  let mReason = args.join(" ").slice(22);
  let mreEmbed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription(`Please say why <@${tomute.id} is being muted`);
  if(!mReason) return message.channel.send(mreEmbed);


  await(tomute.addRole(muterole.id));
  let mEmbed = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${tomute.id}> has been muted by <@${message.author.id}> for ${mutetime}**`)
  message.channel.send(mEmbed);

  let bChannel2 = message.guild.channels.find(`name`, "↠public-punishments↞");
  let l2Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠public-punishments↞ channel**");
  if(!bChannel2) return message.channel.send(l2Embed);

  let bChannel = message.guild.channels.find(`name`, "↠logs↞");
  let l1Embed = new Discord.RichEmbed()
  .setColor(0x8B0000)
  .setDescription("**Can't find ↠logs↞ channel**");
  if(!bChannel) return message.channel.send(l1Embed);


  setTimeout(function(){
    tomute.removeRole(muterole.id);
    let umEmbed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .setDescription(`**<@${tomute.id}> has been unmuted**`);
    message.channel.send(umEmbed)
  }, ms(mutetime));

  let bEmbed3 = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setColor(`#${color}`)
  .addField("Muted User:", `**<@${tomute.id}> with ID: ${tomute.id}**`)
  .addField("Muted By:", `**<@${message.author.id}> with ID: ${message.author.id}**`)
  .addField("Mute Length", `**${mutetime}**`);

  let bEmbed4 = new Discord.RichEmbed()
  .setColor(`#${color}`)
  .setDescription(`**<@${message.author.id}> has muted <@${tomute.id}> for ${mutetime}**`)
  bChannel.send(bEmbed3);
  bChannel2.send(bEmbed4);

}

module.exports.help = {
  name: "mute"
}
