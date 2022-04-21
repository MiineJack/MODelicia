const { GuildChannel } = require("discord.js");

module.exports = {
	name: 'botping',
	description: 'Verifica se o ping do Bot',
	execute(message, args) {
		message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
	},
};