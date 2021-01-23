const Discord = require("discord.js");

var a = new Date();
var tabMois = ['Janv.','Févr.','Mars','Avri.','Mai.','Juin','Juil.','Août','Sept.','Octo.','Nove.','Déce.'];
var annee = a.getFullYear();
var mois = tabMois[a.getMonth()];
var date = a.getDate();
var heure = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
var time =  date + ' ' + mois + ' ' + annee + ' | ' + heure + ':' + min + ':' + sec;

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send("Veuillez préciser un membre!");

    if(member == message.author) return message.channel.send("Tu ne peux pas te report!");

    let reason = args.slice(1).join(' ');
    if(!reason) {
        return message.channel.send("Merci de dire une raison fiable sinon vous serez punis part le staff.")
    }

    var reportembed = new Discord.RichEmbed()
        .setTitle("Nouveau signalement :")
        .setColor(0xBCFF78)
        .addField("Membre ayant signalé", message.author.username)
        .addField("Membre ayant été signalé", message.mentions.members.first())
        .addField("Raison", reason)
        .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
        .setFooter(time)
        let reportschannel = message.guild.channels.find("name", "🔪・report");

    member.send(reportembed)        
    reportschannel.send(reportembed);
    return;
}

module.exports.help = {
    name: "report"
}