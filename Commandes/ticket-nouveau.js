const Discord = require("discord.js");

var a = new Date();
var tabMois = ['Janv.','Févr.','Mars','Avri.','Mai.','Juin','Juil.','Août','Sept.','Octo.','Nove.','Déce.'];
var annee = a.getFullYear();
var mois = tabMois[a.getMonth()];
var date = a.getDate();
var time =  date + ' ' + mois + ' ' + annee;

module.exports.run = async (bot, message, args) => {
    let roles = message.guild.roles;
    

    let reason = args.slice(0).join(' ');
    if(!reason) {
        return message.channel.send("Merci de dire une raison.")
    }

    const s = message.content.split(" ").slice(1).join(" ");
      if (!message.guild.roles.exists("name", "Support-Bot"));;
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send('Vous pouvez créer que un ticket. ');
      message.channel.send("Votre ticket a bien était crée.")
      if (!message.guild.roles.exists("name", "Support-Bot")){
        message.guild.createRole({
         name: 'Support-Bot',
         mentionable: true,
        });
        }

      
message.guild.createChannel(`ticket-${message.author.id}`, "text")
.then(m => {
    
        let t = new Discord.RichEmbed()
    .setTitle(":tickets: Ticket Support")
    .setColor(0xBCFF78)
    .addField("Bienvenue dans votre ticket support.", "Merci d'expliquer le bug, le soucis, demande de grade, poste de candidature autre problème que vous avez.")
    .addField("Raison donné par le créateur", reason)
    .addField("Date de création du ticket", time)
    .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
    m.send(t)
    
    
    m.overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: false
    })

    m.overwritePermissions(message.author.id, {
        VIEW_CHANNEL: true
    })
    m.overwritePermissions('573213022995087380', {
      VIEW_CHANNEL: true
  })
  let testRole = roles.find('name', 'Support-Bot');
  m.overwritePermissions(
    testRole,
    { 'VIEW_CHANNEL': true},
    'ticket ouvert'
)
  m.overwritePermissions(
    testRole,
    { 'SEND_MESSAGES': true },
    'closing up shop'
)
    m.overwritePermissions(
      testRole,
      { 'VIEW_CHANNEL': true},
      'ticket ouvert'
  )
})
};


module.exports.help = {
    name: "nouveau"
}
