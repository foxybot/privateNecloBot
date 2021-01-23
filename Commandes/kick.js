const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("KICK_MEMBERS")) 
      return message.channel.send("**:x: Erreur, vous n'avez pas la permission !**")
    
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	    if(!member.kickable) 
      return message.channel.send("**:x: Erreur, le bot n'a pas la permission !**")

    let reason = args.slice(1).join(' ');
	    
    await member.kick(reason)

   
    var embed = new Discord.RichEmbed() 
.setTitle("KICK") 
.addField("Joueur", member.user.username) 
.addField("Modérateur", message.author.username) 
.addField("Raison", reason || "Aucune")
.setColor("RANDOM") 
.setTimestamp()

message.channel.send(embed);


}

module.exports.help = {
  name: "kick"
}
