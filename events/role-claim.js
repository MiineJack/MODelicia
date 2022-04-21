const { User, UserFlags } = require('discord.js')
const firstMessage = require('./first-message')

module.exports = (client) => {
    const channelId = '839644212442038312'

    const getEmoji = (emojiName) => 
        client.emojis.cache.find((emoji) => emoji.name === emojiName)

    const emojis = {
        18: '+18',
        toddynho: '-18',
        leagueoflegends: 'League of Legends',
        csgo: 'CS:GO',
        valorant: 'Valorant',
        minecraft: 'Minecraft',
        overwatch: 'Overwatch',
        gta: 'GTA V',
    }

    const reactions = []

    let emojiText = '**Reaja de acordo com a sua faixa etária e qual jogo você joga 🎮**\n**Você ira conseguir visualizar os canais de voz após esta verificação 🐱‍💻**\n\n*Este canal ira funcionar apenas se o MODelícia estiver online*🐱‍👤\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} = ${role}\n`
    }

    firstMessage(client, channelId, emojiText, reactions)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '829186958777122816'){
            return
        }
        const emoji = reaction._emoji.name

        const { guild } = reaction.message
        
        const roleName = emojis[emoji]
        if (!roleName) {
            return
        }

        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)

        if (add){
            member.roles.add(role)
        } else{
            member.roles.remove(role)
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction (reaction, user, true)
            console.log('\x1b[32m','Added a reaction', '\x1b[0m')
        }
    })
    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction (reaction, user, false)
            console.log('\x1b[31m','Removed a reaction', '\x1b[0m')
        }
    })

}