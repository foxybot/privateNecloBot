const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "Pas de protection",
    1: "Faible",
    2: "Moyen",
    3: "Elevé",
    4: "Très élevé"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor(0xBCFF78)
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Nom : ", message.guild.name, inline)
    .addField("ID : ", message.guild.id, inline)
    .addField("Appartenance : ", message.guild.owner, inline)
    .addField("Region : ", message.guild.region, inline)
    .addField("Niveau de vérification : ",  verlvl[message.guild.verificationLevel],inline)
    .addField("Membres", `${message.guild.memberCount}`, inline)
    .addField("Nombre de rôles : ", message.guild.roles.size, inline)
    .addField("Nombre de channels :", message.guild.channels.size, inline)
    .setFooter(`${message.guild.name}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
    .setTimestamp();

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}