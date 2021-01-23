const Discord = require('discord.js')

exports.run = (bot, message, args) => {

var user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                var inviteembed = new Discord.RichEmbed()
                .setTitle("Vos invitations")
                .setColor(0xBCFF78)
                .addField("Votre nombre d'invitations", `Vous avez ${userInviteCount} invitation(s)`)
                .addField("La personne ayant demandé cela est :",`${message.author.username} (${message.author.id})`)
                .setFooter("prochaine mise à jour bientôt sur cette commande")
                .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')
                message.channel.send(inviteembed);
            return;
        }
            
        )   
};

module.exports.help = {
    name: "invite",
}
