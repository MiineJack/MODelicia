const message = require("./message");
const roleClaim = require("./role-claim");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
	console.log('\x1b[32m', `O pai ta ON! Logged in as ${client.user.tag}`, '\x1b[0m');
	client.user.setUsername('MODelícia');
    client.user.setStatus('online');
    client.user.setActivity('sua mãe na cama', { type: 'PLAYING'})

	roleClaim(client)
	},
};