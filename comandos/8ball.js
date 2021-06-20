//Esta función recibe el parametro client, message, y args para ser usados:
module.exports = (client, message, args) => { 
   if(!args[2]){
      return message.channel.send(`Escriba una pregunta.`);
  }
     var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];

     message.channel.send(message.author.username +' mi respuesta es:'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
 }