// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 6;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(message.author.username + ' se pone a cocinar :P')
   .attachFiles([img + '/cook'+ imageNumber + '.gif'])
   .setImage(`attachment://cook${imageNumber}.gif`)
   .setTimestamp()
   .setFooter('nb! help');
   message.channel.send(embed);
 
}