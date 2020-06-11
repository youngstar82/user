const Discord = require('discord.js') // Wir holen das Paket “discord.js”
const fs = require ('fs')
var client = new Discord.Client(); // Wir erzeugen ein “Bot”-Objekt
const hero = JSON.parse(fs.readFileSync('hero.json', 'utf8'))
const { Client, MessageEmbed } = require('discord.js');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', function(msg){
var prefix = "!"; // Setzt den Prefix
  
if(!msg.content.startsWith(prefix)) return; // Checkt ob die Nachricht mit dem Prefix anfängt
const args = msg.content.slice(1).trim().split(/ +/g); // Damit wir später Argumente benutzen können
const command = args.shift().toLowerCase(); // Damit wir wissen, welcher Command es ist
//const Embed = new MessageEmbed()
  
if (command === 'a1-2') {
  const embed = new MessageEmbed()
    .setTitle(hero.a12des)
    .setDescription(hero.a12)
    .setColor(0xff0000)
  msg.channel.send(embed)
}
if (command === 'a1-3') {
    const embed = new MessageEmbed()
      .setTitle('```Ability upgrade cost from level 1 to 3:```')
      .setColor(0xff0000)
      .setDescription(hero.a13 + hero.a132)
    msg.channel.send(embed)
}
})

client.login("NzE3NjM4NDk3NDAxMzA3MjE3.XteDNw.S7GZvhsZ0gOOo6Oem36SmT9Xiko") // Loggt sich mit dem Token ein

require('http').createServer(function(request, response) {
response.end("Hallo!");
}).listen(process.env.PORT);