module.exports = {
	name: 'avatar',
	description: 'Show Avatar from user mentioned',
	aliases: ['icon', 'pfp'],
	execute(message, args) {
        message.react('👌');
		if (!message.mentions.users.size) 
        {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({dynamic: true , format: "png", size: 1024})}>`);
        }
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({dynamic: true , format: "png", size: 1024})}>`;
		});
	
		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	}
};