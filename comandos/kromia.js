// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 10;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' toma tu imagen de Kromia!! >w<')
   .setColor("RANDOM")
   .attachFiles([img + '/kromia'+ imageNumber + '.jpg'])
   .setImage(`attachment://kromia${imageNumber}.jpg`);
   message.channel.send(embed);
 
}