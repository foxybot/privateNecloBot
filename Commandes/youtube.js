const Discord = require('discord.js')
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    var ytembed = new Discord.RichEmbed()
    .setColor(0xBCFF78)
    .setTitle('・Conditions youtube')
    .addField("🎥 | Grade youtubeur", "`100 => 300 Abonnès, 85 vues et plus`")
    .addField("🎥 | Grade youtubeur +", "`300 => 1000 Abonnès, 150 vues et plus`")
    .addField("🎥 | Grade partenaire","`1000 => ∞ Abonnès, 350 vues et plus`")
    .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
  

 

    message.channel.send(ytembed)
};

module.exports.help = {
    name: "youtube"
}