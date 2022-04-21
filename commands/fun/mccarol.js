const Discord = require('discord.js');

module.exports = {
	name: 'mccarol',
	description: 'MC Carol ira recitar no servidor.',
	execute(message, args) {
	message.react('🤪');

const mccarolEmbed = new Discord.MessageEmbed()
	.setColor('#FF00F7')
	.setTitle('MC Carol')
	.setURL('https://www.youtube.com/watch?v=OgpOl_hLU2w&ab_channel=PMM')
	//.setAuthor('MC Carol', 'https://s2.glbimg.com/RYDMaNWthByk9K7k5q0cC9VxeTw=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/11/25/mc_carol.png', 'https://s2.glbimg.com/RYDMaNWthByk9K7k5q0cC9VxeTw=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/11/25/mc_carol.png')
	.setDescription('MC Carol - AIR CONDITIONER 2 0 1 3')
	//.setThumbnail('https://s2.glbimg.com/RYDMaNWthByk9K7k5q0cC9VxeTw=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/11/25/mc_carol.png')
	.addFields(
		{ name: 'Letra', value: 'Tirou minha calcinha\nE meteu o pau gelado\nNo ar condicionado,\nno ar condicionado' },
	)
	//.addField('MC Carol', 'Ar condicionado', true)
	.setImage('https://s2.glbimg.com/RYDMaNWthByk9K7k5q0cC9VxeTw=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/11/25/mc_carol.png')
	.setTimestamp()
	//.setFooter('MC Carol', 'https://s2.glbimg.com/RYDMaNWthByk9K7k5q0cC9VxeTw=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/11/25/mc_carol.png');

message.channel.send(mccarolEmbed);
	},
};