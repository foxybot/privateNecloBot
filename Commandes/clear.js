const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**:x: Erreur, vous n'avez pas la permission !**");
  if(!args[0]) return message.channel.send("**:x: Erreur, Veuillez définir un nombre de message entre 1 et 5000 !**");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**✔️** __**${args[0]}**__ **messages ont été éffacés.**`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}