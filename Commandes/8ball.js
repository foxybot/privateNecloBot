const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //-8ball <question>
    if(!args[2] && !message.content.includes("?")) return message.channel.send("**:x: Erreur, veuillez poser une question compléte !**");
    let reponses = ["Oui", "Non", "Je ne sais pas", "Je ne trouve pas la réponse", "Tu es qui toi ?!", "Je ne te connais pas", "Exactement", "Je pense comme toi", "C'est pas vrai", "Absolument pas", "It's true", "C'est potentiellement la v�rit�", "Ch�vre naine", "Je ne t'aime pas beaucoup"];

    let resultat = Math.floor((Math.random() * reponses.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .addField("Question", question)
        .addField("Réponse", reponses[resultat])
        .setColor("#34d41e")
        .setThumbnail('https://cdn.discordapp.com/attachments/794684495567650887/794973983262900244/Logo_Neclozia_By_Speachey.png')

        message.channel.send(ballembed);
};

module.exports.help = {
    name: "8ball"
};