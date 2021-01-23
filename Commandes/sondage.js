const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("**:x: Erreur, vous n'avez pas la permission !**")
    
    // message.channel.send('@everyone')



    var say = args.join(' ')
    message.delete()

    let sicon = message.guild.iconURL;

    var server = message.guild.name
    var servericon = message.guild.iconURL


    let e = new Discord.RichEmbed()
    .setColor(0xBCFF78)
    .setThumbnail(sicon)
    .setAuthor(server, servericon)
    .setDescription('***:bar_chart: Sondage***\n\n' + say)
    .setFooter(`✔️ Sondage crée par @${message.author.username}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
    let reportschannel = message.guild.channels.find("name", "📋・sondage");
    if(!reportschannel) return message.channel.send("**:x: Erreur, le salon `📋sondage` est introuvable.**");

    message.channel.send("**✔️ Votre sondage a bien été envoyé !**")
    reportschannel.send("@everyone")
    reportschannel.send(e).then(m => {
m.react("✅")
m.react("❌")

      })
}

module.exports.help = {
    name: "sondage"
}