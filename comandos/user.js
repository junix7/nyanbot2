// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
const userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
         const embed = new Discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.avatarURL)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .setColor("RANDOM")

       message.channel.send({ embed });
    }else{
       const embed = new Discord.MessageEmbed()
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .setColor("RANDOM")
     message.channel.send(embed);
    }

}