const Discord = require("discord.js");
var owner = "415611192036425730"

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("**:x: Erreur, vous n'avez pas la permission !**");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("**:x: Erreur, veuillez mentionner le joueur à bannir**");
    if(!member.bannable) 
      return message.channel.send("**:x: Erreur, vous ne pouvez pas bannir cette personne !**");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison fournie";
    
    await member.ban(reason)
      .catch(error => message.channel.send(`**Erreur, ${message.author} je ne pouvais pas le ban à cause de : ${error}**`));
    message.channel.send(`**✔️** __**${member.user.tag0}**__ **a été banni par** __**${message.author.tag}**__ **Pour :${reason}**`);
  }
  
module.exports.help = {
    name: "ban"
}