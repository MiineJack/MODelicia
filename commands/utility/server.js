module.exports = {
	name: 'server',
	description: 'Say server name',
	guildOnly: true,
	execute(message, args) {
        message.react('👌');
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at:${message.guild.createdAt}\nRegion:${message.guild.region}`);
	},
};