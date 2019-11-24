const Discord = require("discord.js");
const YouTube = require("youtube-node");

var youTube = new YouTube();

// YOUTUBE API PRIVATED KEY
youTube.setKey(process.env.googleToken);

const bot = new Discord.Client();

const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };

var canalAtual;

bot.on("message", message => {
  if (message.content == "!avatar") {
    message.reply(message.author.avatarURL);
  }

  if (message.content == "!rip") {
    message.channel.send(
      message.author,
      new Discord.Attachment("https://i.imgur.com/w3duR07.png")
    );
  }

  if (message.content == "!embed") {
    var embed = new Discord.RichEmbed()
      .setTitle("Mensagem Embutida")
      .setColor(0x00a19a)
      .setDescription("Bem loco!");
    message.channel.send(embed);
  }

  if (message.content == "!entrar") {
    if (message.member.voiceChannel) {
      canalAtual = message.member.voiceChannel;
      message.member.voiceChannel.join();
    }
  }

  if (message.content == "!sair") {
    canalAtual.leave();
  }

  if (message.content == "!backstage") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Backstage.mp3");
      })
      .catch(console.error);
  }

  if (message.content == "!mansa") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("mansa.mp3");
      })
      .catch(console.error);
  }

  if (message.content.startsWith("!tocar")) {
    let args = message.content
      .slice(1)
      .trim()
      .split(/ +/g);
    console.log(args[1]);
    canalAtual = message.member.voiceChannel;
    message.member.voiceChannel
      .join()
      .then(connection => {
        const stream = ytdl(args[1], { filter: "audioonly" });
        const discpatcher = connection.playStream(stream, streamOptions);
      })
      .catch(console.error);
  }

  if (message.content.startsWith("!busca")) {
    var args = message.content
      .slice(1)
      .trim()
      .split(/ +/g);
    //contem a palavra da busca
    args.shift();

    console.log("palavra buscada: " + args.toString().replace(/,/g, "+"));
    youTube.search(args.toString(), 1, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result.items[0].id.videoId);
        let busca = result.items[0].id.videoId;
        canalAtual = message.member.voiceChannel;
        canalAtual
          .join()
          .then(connection => {
            const stream = ytdl("https://www.youtube.com/watch?v=" + busca, {
              filter: "audioonly"
            });
            const dispatcher = connection.playStream(stream, streamOptions);
            message.reply(
              "Estou tocando a musica ` " + result.items[0].snippet.title + "`"
            );
          })
          .catch(console.error);
      }
    });
  }
});

// DISCORD API PRIVATED KEY
bot.login(process.env.discordToken);
