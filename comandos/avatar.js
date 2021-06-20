// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 

let usuario = message.mentions.members.first() || message.member;
    let avatar = usuario.user.displayAvatarURL({size: 4096, dynamic: true});
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Avatar del usuario ${usuario.user.username}`)
    .setImage(avatar)
    return message.channel.send(embed);
}