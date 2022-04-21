module.exports = {
	name: 'riotid',
	description: 'Envia o Link para alterar o Riot ID.',
	execute(message, args) {
    if (message.channel.id === '390214264495013890'){
       message.author.send(`Não podemos mandar links no canal Zip-Zop. Por favor, utilize #links-e-arquivos.\nSua menssagem: ${message.content}`);
       message.delete();
     }
     else{
    message.react('✅');
		message.reply('https://account.riotgames.com/riot-id')
    }
	},
};