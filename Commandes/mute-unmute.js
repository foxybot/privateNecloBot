const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let reason = args.slice(1).join(' ');
            var guild = message.guild;
            var member = message.mentions.members.first();

            if(!message.member.hasPermission("MANAGE_MESSAGES")) 
      return message.channel.send("**:x: Erreur, vous n'avez pas les permissions !**");

            guild.channels.forEach(channel => {
                if (channel.type === 'text') {
                    channel.overwritePermissions(member, { SEND_MESSAGES: null });
                }
            });

            message.channel.send('**✔️ Le joueur** __**' + member.user.username + '**__ **a bien été unmute.**');

            var mute = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("UNMUTE")
                .addField('Utilisateur', `${member.user.username}`)
                .addField('Modérateur', message.author.username)
                .setTimestamp() 
 message.channel.send(mute)
   }

module.exports.help = {
  name: "unmute"
}
