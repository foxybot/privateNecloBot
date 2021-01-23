const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    const m = await message.channel.send("Calcul... " + bot.emojis.find("name", "loading"))

    var ping_embed = new Discord.RichEmbed()
        .setColor("#00F1FF")
        .setTitle("Information de connexion du bot")
        .addField("Bot", `${m.createdTimestamp - message.createdTimestamp}ms`)
        .addField ("API", `${Math.round(bot.ping)}ms`)
        .setColor(0xBCFF78)
        .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')

    m.edit(ping_embed)
}

module.exports.help = {
    name: "ping"
}
