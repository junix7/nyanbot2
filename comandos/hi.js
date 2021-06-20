// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 2;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' está saludando!  owo/')
   .setColor("RANDOM")
   .attachFiles([img + '/hi'+ imageNumber + '.gif'])
   .setImage(`attachment://hi${imageNumber}.gif`);
   message.channel.send(embed);
 
}