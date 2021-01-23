const Discord = require('discord.js')
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    var ipembed = new Discord.RichEmbed()
    .setColor(0xBCFF78)
    .setTitle('・Néclozia')
    .addField('**Voici le site du serveur :**',' **__https://www.nécloziamc.fr__** :')
    .addField('**Voici la version du serveur :**',' **__1.8.x__** ')
    .addField("**Voici l'ip du serveur :**", "**__play.neclozia.fr__**")
    .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
 
    message.channel.send(ipembed)
};

module.exports.help = {
    name: "info"
}