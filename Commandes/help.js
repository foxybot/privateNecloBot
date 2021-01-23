const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setFooter(`Demandé par ${message.author.username}`, client.user.avatarURL)
        .setTitle("Listes des commandes disponibles :")
        .addField("<:tools:699769076880244807>  Modération :", "`!kick, !ban, !tempmute, !unmute, !clear `")
        .addField("<:wrench:699769284569595955> Utilitaires :","` !info, !serverinfo, !sondage, !youtube, !report, !faction, !botinfo `")
        .addField("🎟️ Ticket :", "`!ticket, !nouveau, !close`")
        .addField("🎲 Fun :","`!ping, !pp`")
        .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
        .setColor(0xBCFF78)
        
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}
