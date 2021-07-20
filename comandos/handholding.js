// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 1;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' toma tu mano ://3 ')
   .setColor("RANDOM")
   .attachFiles([img + '/handholding'+ imageNumber + '.gif'])
   .setImage(`attachment://handholding${imageNumber}.gif`);
   message.channel.send(embed);
 
}