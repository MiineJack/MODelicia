module.exports = {
	name: 'spam',
	description: 'Envie um Spam para o usuario mencionado.',
	cooldown: 0,
	execute(message, args) {
		if (!message.mentions.users.size) 
        {
          message.react('🤠');
            return message.channel.send(`${message.author} Mencione com o @ quem você deseja spamar.`);
        }
    const spam1 = message.mentions.users.map(user => {
			return `Oi <@${user.id}>`;
      	});
    const spam2 = message.mentions.users.map(user => {
			return `Ta ai <@${user.id}>?`;
		});
    const spam3 = message.mentions.users.map(user => {
			return `<@${user.id}> Responde o ` + message.author.toString() + ` 😧`;
		});

  setTimeout(function(){ 
 }, 2000);

  message.channel.send(spam1);
  setTimeout(() => {  message.channel.send(spam2); }, 2000);
  setTimeout(() => {  message.channel.send(spam3); }, 5000);
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