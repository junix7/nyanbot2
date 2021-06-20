// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 10;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
   .setTitle(message.author.username + ' toma tu waiifuuuuu! owo')
   .setColor("RANDOM")
   .attachFiles([img + '/waifu'+ imageNumber + '.gif'])
   .setImage(`attachment://waifu${imageNumber}.gif`);
   message.channel.send(embed);
 
}