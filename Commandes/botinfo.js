const Discord = require("discord.js");


module.exports.run = async (client, msg) => {


    var os = require('os');

    var embed = new Discord.RichEmbed()

        .setColor(0xBCFF78)
        .setThumbnail(client.user.avatarURL)
        .setAuthor(`${client.user.username}`, client.user.avatarURL)
        .addField(`• Nombre de serveurs`, "`"+`${client.guilds.size}`+"`", true)
        .addField(`• Nombre d\'utilisateurs`, "`"+`${client.users.size}`+"`", true)
        .addField(`• Developpeur du bot`, "`"+client.users.get('795357006058750012').tag+"`", false)
        .addField(`• RAM`, "`"+`${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`+"`", false)
        .addField(`• Dernière connexion`, "`"+(Math.round(client.uptime / (1000 * 60 * 60))) + " Heure(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " seconde(s)"+"`")
        .addField(`• Lib`, "`"+`Discord.js ${Discord.version}`+"`", false)
        .setFooter(`demandé par @${msg.author.username}`)

    msg.channel.send(embed);

}

module.exports.help = {
    name : "botinfo",
    usage: "botinfo",
    description: "Donne les informations et les statistiques du bot",
    type: "bot"
}
