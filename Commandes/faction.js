const Discord = require("discord.js");
const request = require('snekfetch');
var discord = require('discord.js');

exports.run = (bot, message, args) => {


    request.get(`https://api.mcsrvstat.us/2/217.182.173.41:21212`).then(body => {


    


        var playerscheck =  body.body.players.online;
        var version = body.body.version;
        let playermax = body.body.players.max;


        if(playerscheck == 0){
            var playerin = "0";
            var player = " Aucun joueur est connecté ";
        }else{
             var array = body.body.players.list;
             var player = array.join(", ");
             var playerin = body.body.players.online;

        }


        var ip = new Discord.RichEmbed()
            .setTitle("**Voici les stats du serveur faction :**\n")
            .addField("Ip:",'play.neclozia.fr')
            .addField(`Personnes Connecté [ ${playerin} / 250 ]` , `${player}`)
            .addField("Version",`${version}`)
            ;


            message.channel.send({
                embed: ip

            });




    })
    
}

module.exports.help = {
    name: "faction"
    }