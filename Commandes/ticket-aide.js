const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.iconURL;

    var server = message.guild.name
    var servericon = message.guild.iconURL

    var help_embed = new Discord.RichEmbed()
        .setColor(0xBCFF78)
        .setAuthor(server, servericon)
        .addField("**- __Néclozia Support__**", "\n\n**= = = = = =**\n\n")
        .addField("**__Ticket__**", `- __!nouveau + "raison"__ : Pour crée un ticket d'aide. \n- __!close + raison"__ : Pour fermer le ticket.`,)
        .addField("\n\n**= = = = = =**\n\n", "Merci d'avoir utilisez cette commande.")
        .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
    message.channel.sendEmbed(help_embed)
}

module.exports.help = {
    name: "ticket"
}