// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 3;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' toma tu imagen de un gatito!!! >w<')
   .setColor("RANDOM")
   .attachFiles([img + '/cat'+ imageNumber + '.gif'])
   .setImage(`attachment://cat${imageNumber}.gif`);
   message.channel.send(embed);
 
}