// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 5;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' se pone a pensar o.O')
   .setColor("RANDOM")
   .attachFiles([img + '/think'+ imageNumber + '.gif'])
   .setImage(`attachment://think${imageNumber}.gif`);
   message.channel.send(embed);
 
}