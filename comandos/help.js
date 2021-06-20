//Esta función recibe el parametro client, message, y args para ser usados:
module.exports = (client, message, args) => { 
 message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.≧﹏≦');
 message.author.send('**COMANDOS DE NYANBOT**\n```\n'+
 //LISTA DE COMANDOS >2<
     '8ball          :: Nyanbot responde a tus preguntas.\n'+
     'ameno          :: ameno dorime   .\n'+
     'avatar <@user> :: Muestra el avatar de un usuario.\n'+
     'baka  <@user>  :: dice que eres baka owo.\n'+
     'bite  <@user>  :: te muerde owx.\n'+
     'blush          :: te sonrrojas.\n'+
     'bye            :: imagen anime despide  .\n'+
     'cat            :: Imagen de un gatito random.\n'+
     'clap <@user>   :: aplaudes :3  .\n'+
     'cry            :: te pones a llorar :c.\n'+
     'cookie         :: Toma una galletita! .\n'+
     'cuddle <@user> :: te da mimos :3  .\n'+
     'dab            :: toma tu dab!!  .\n'+
     'dance          :: Nyanbot baila.\n'+
     'dog            :: Imagen de un perrito random.\n'+
     'happy          :: te pones feliz :3.\n'+
     'help           :: te envia informacion de los comandos.\n'+
     'hi             :: imagen anime saludando.\n'+
     'hug   <@user>  :: Nyanbot da un abrazo.\n'+
     'kiss  <@user>  :: te envía un beso!.\n'+
     'kromia         :: Imagen de Kromia random.\n'+
     'lick  <@user>  :: te lamen o//o  .\n'+
     'pat   <@user>  :: te acaricia.\n'+
     'ping           :: Comprueba la latencia .\n'+
     'rip   <@user>  :: te suicidas!.\n'+
     'server         :: Muestra información del servidor.\n'+
     'slap  <@user>  :: te envía un golpe!.\n'+
     'sleep          :: te vas a mimir  .\n'+
     'think          :: envia imagen pensando owo.\n'+
     'user <@user>   :: Muestra información de usuario.\n'+
     'waifu          :: veamos quien es tu waifu.\n```'
);
  if (message.author.bot) return;
}
