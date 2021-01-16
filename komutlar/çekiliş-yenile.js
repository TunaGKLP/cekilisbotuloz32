const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send('Bir Çekiliş Kimliği **Belirtmelisin!**');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: Yeni Kazanan(lar): {winners}! Tebrikler!",
        error: "Geçerli Katılım Yok, Kazanan Seçilemez!"
                    }   
}).catch((err) => {
    message.channel.send("`"+ messageID +"` İçin Çekiliş Bulamadım, Lütfen Kontrol Edin Ve Tekrar Deneyin");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-yenile'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yenile',
  description: 'çekiliş',
  usage: 'çekiliş-yenile'
};