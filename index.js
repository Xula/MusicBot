const Discord = require('discord.js'); // É uma classe

const bot = new Discord.Client();

const ytdl = require('ytdl-core');
const streamOptions = {seek:0, volume:1};

var canalAtual;

bot.on('message', (message) => {
    if(message.content == '!avatar'){
        message.reply(message.author.avatarURL);
    }

    if(message.content == '!rip'){
        message.channel.send(message.author, new Discord.Attachment('https://i.imgur.com/w3duR07.png'));
    }

    if(message.content == '!embed'){
        var embed = new Discord.RichEmbed().setTitle('Mensagem Embutida').setColor(0x00A19A).setDescription('Bem loco!');
        message.channel.send(embed);
    }

    if(message.content == '!entrar'){
        if(message.member.voiceChannel){
            canalAtual = message.member.voiceChannel;
            message.member.voiceChannel.join();
        }
    }

    if(message.content == '!sair'){
        canalAtual.leave();
    }

    if(message.content == '!backstage'){
        message.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('Backstage.mp3');
        }).catch(console.error);
    }

    if(message.content.startsWith('!tocar')){
        let args = message.content.slice(1).trim().split(/ +/g);
        console.log(args[1]);
        canalAtual = message.member.voiceChannel;
        message.member.voiceChannel.join().then(connection =>{
            const stream = ytdl(args[1], {filter: 'audioonly'});
            const discpatcher = connection.playStream(stream, streamOptions);
        }).catch(console.error);

    }
});



//deixa o bot online
bot.login('PRIVATE_TOKEN');

