const { RichEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    aliases: ["purge", "delete"],
    usage: "*clear [number] / *clear @mention/userid",
    category : "mod",
    description: "clear the text messages by numbers or clear the user text messages by the user is or mention",
    run : async (client, message, args) => {
      const user = message.mentions.users.first() || client.users.find('id', `${args[0]}`)
      const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
      message.channel.fetchMessages({
        limit: 100,
       }).then((messages) => {
         if(user) {
          const filterBy = user || client.user.id;
          const userdelete = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
          message.channel.bulkDelete(userdelete).then((message) => {
            const embed1 = new Discord.RichEmbed()
            .setAuthor('✅')
            .setTitle('Clear Command')
            .setDescription(`**Successfully** 
            \`\`\`Deleted ${message} of ${filterBy} messages in the channel\`\`\` `)
            .setColor('#36393e')
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
            message.channel.send(embed1).catch(error => console.log(error.stack));
          })
         }
         if(amount) {
          message.channel.bulkDelete(amount).then(message1 => {
            const embed2 = new Discord.RichEmbed()
            .setAuthor('✅')
            .setTitle('Clear Command')
            .setDescription(`**Successfully** 
            \`\`\`Deleted ${message1} messages in the channel\`\`\` `)
            .setColor('#36393e')
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
            message.channel.send(embed2).catch(error => console.log(error.stack));
          })
         }
       })
    }
  }
