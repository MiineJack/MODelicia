module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
		message.react('👌');
	},
};

	/*
	// Send a Direct Message to a user
	message.author.send("hello");
	// With Member it works too:
	message.member.send("Heya!");

	// Mention a user in a message
	message.channel.send(`Hello ${user}, and welcome!`);
	// or
	message.channel.send("Hello " + message.author.toString() + ", and welcome!");*/
