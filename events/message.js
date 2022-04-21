const { GuildChannel } = require("discord.js");

module.exports = {
	name: 'message',
	execute(message) {
		console.log('\x1b[31m', `${message.author.tag}`,'\x1b[0m', `in`, '\x1b[34m', `#${message.channel.name}: `, '\x1b[33m', `${message.content}`, '\x1b[0m');
	},
};