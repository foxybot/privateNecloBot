const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  console.log(message.author.username);
  
  let reason = args.slice(0).join(' ');
  if(!reason) {
      return message.channel.send("Merci de dire une raison.")
  }
  
  let t = new Discord.RichEmbed()
  .setTitle("Ticket Support")
  .setColor(0xBCFF78)
  .addField("Ticket:", "Fermé")
  .addField("Raison", reason)
  .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
  message.author.send(t);

      message.channel.send('Votre ticket a bien été supprimé');
      message.guild.channels.find("name", `ticket-${message.author.id}`).delete();
      }


module.exports.help = {
    name: "close"
}