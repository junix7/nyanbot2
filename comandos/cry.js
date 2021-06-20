// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 6;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' está llorando... qwq')
   .setColor("RANDOM")
   .attachFiles([img + '/cry'+ imageNumber + '.gif'])
   .setImage(`attachment://cry${imageNumber}.gif`);
   message.channel.send(embed);
 
}