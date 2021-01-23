const Discord = require("discord.js");
var owner = "415611192036425730";

module.exports.run = async (bot, message, args) => {

    if(message.author.id !== owner) return;

    var evalCode = args.join(" ");

    let result = null;
    try {
        result = eval(evalCode);
    }
    catch(e) {
        result = e.toString();
    }

    const util = require("util");

var embed = new Discord.RichEmbed()
.setFooter(bot.user.username, bot.user.avatarURL)
.setTitle("Code Eval")
.setColor("0xBCFF78")
.addField("Input:", '```' + evalCode + '```')
.addField("Output:", '```' + util.inspect(result) + '```')
    message.channel.send(embed).catch(() => {
        message.channel.send(`:x: Trop de caractères`);
        console.log(util.inspect(result));
     })
}

module.exports.help = {
  name:"eval",
}