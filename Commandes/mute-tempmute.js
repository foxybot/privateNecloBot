const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    //tempmute @user 1s/m/h/d
       if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("**:x: Erreur, vous n'avez pas la permsision !**");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("**:x: Erreur, Utilisateur introuvable.**");
    if(tomute.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("**:x: Erreur, le bot n'a pas la permission !**");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#RANDNOM",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch (e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("**:x: Erreur, vous devez spécifier un temps.**");

    await(tomute.addRole(muterole.id));
    message.channel.send(`**✔️ Le joueur <@${tomute.id}> a bien été mute pendant ${ms(mutetime)} (Millisecondes [1000 = 1s])**`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`**✔️ Le joueur <@${tomute.id}> a été unmute**`);
    }, ms(mutetime));
}

module.exports.help = {
    name: "tempmute"
}