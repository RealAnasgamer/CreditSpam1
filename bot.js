const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643503702539501590")
setInterval(function() {
channel.send(`Anas CREDIT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
