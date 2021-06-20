// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 3;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
const embed = new Discord.MessageEmbed()
      .setTitle('ameno')
      .setColor("RANDOM")
      .attachFiles([img + '/ameno'+ imageNumber + '.jpg'])
      .setImage(`attachment://ameno${imageNumber}.jpg`);
      message.channel.send(embed);
 
}