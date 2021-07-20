// at the top of your file
const Discord = require('discord.js');
module.exports = (client, message, args) => { 
img = "images";
let number = 10;
let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;


let anime ='prueba';

if (imageNumber==1) {
      anime = '#1 Erza Scarlet: Fairy Tail  ';
   }

if (imageNumber==2) {
      anime = '#2 Asuna Yuuki: Sword Art Online';
   }

if (imageNumber==3) {
      anime = '#3 Hinata Hyuga: Naruto';
   }

if (imageNumber==4) {
      anime = '#4 Lucy Heartfilia: Fairy Tail';
   }

if (imageNumber==5) {
      anime = '#5 Yuno Gasai: Mirai Nikki / Future Diary';
   }

if (imageNumber==6) {
      anime = '#6 Rukia Kuchiki: Bleach';
   }

if (imageNumber==7) {
      anime = '#7 Yoruichi Shihouin: Bleach';
   }

if (imageNumber==8) {
      anime = '#8 Sasha Braus: Attack on Titan';
   }

if (imageNumber==9) {
      anime = '#9 Saber: Fate Universe';
   }

if (imageNumber==10) {
      anime = '#10 Kurisu Makise: Steins; Gate';
   }





const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(message.author.username + ' Toma tu waifuuuuu! owo')
   .attachFiles([img + '/waifu'+ imageNumber + '.webp'])
   .setImage(`attachment://waifu${imageNumber}.webp`)
   .setTimestamp()
   .setFooter(''+anime+'');
   message.channel.send(embed);
 
}