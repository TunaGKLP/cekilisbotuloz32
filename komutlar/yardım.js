const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setAuthor('tngklp Çekiliş Yardım Menüsü')
        .setThumbnail('')
        .addField('**__Çekliş Başlat__**', prefix + 'çekiliş \nÇekiliş Başlatır.',false)
        .addField('**__Çekiliş Bitir__**', prefix + 'çekiliş-bitir \nBelirtilen Çekilişi Sonlandırır.',false)
        .addField('**__Çekiliş Düzenle__**', prefix + 'çekiliş-düzenle \nBelirtilen Çekilişi Düzenler.',false)
        .addField('**__Çekiliş Yenile__**', prefix + 'çekiliş-yenile \n Belirtilen Çekilişi Yeniler.',false)
        .addField('**__Çekiliş Liste__**', prefix + 'çekiliş-liste \nSunucudaki Aktif Çekilişleri Listeler.',false)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};