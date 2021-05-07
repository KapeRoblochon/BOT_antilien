const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODQwMzU1NTQ3NDcxMjgyMjA2.YJXAFw.msP1Ij1_MRSrs-ucEllo90u9Q64')


client.on('message', async message => {
    if(message.content.includes('https://') || message.content.includes('http://') || message.content.includes('www.') || message.content.includes('.fr') || message.content.includes('.net') || message.content.includes('.com') || message.content.includes('.net') || message.content.includes('.gg')){
        if(message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()
    }


})