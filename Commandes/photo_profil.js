const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

let member = message.mentions.members.first();

if(!member){
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`Voici ta photo de profil ${message.author.username}`)
.setImage(message.author.avatarURL)
.setColor(0xBCFF78)
.setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
message.channel.send(embed)

} else {

var ip_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`Voici la photo de profil de ${member.user.username}`)
.setImage(member.user.avatarURL || message.author.avatarURL)
.setColor(0xBCFF78)
.setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
message.channel.send(ip_embed)
    }
}

module.exports.help = {
  name: "pp"
}
