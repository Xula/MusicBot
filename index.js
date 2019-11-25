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
    if (message.content == "!angelic") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Angelic.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!binetsu") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Binetsu.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!heart") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Heart.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!happy") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Happy.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!heart") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Heart.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!hello") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Hello.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!kira") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Kira.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!moment") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Moment.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!paradise") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Paradise.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!sunny") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Sunny.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!super") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Super.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!wing") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Wing.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!vamo") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("vamo.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!nico") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("nico.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!nyan") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("nyan.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!nani") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("nani.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!nakade") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Nakade.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!kururin") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Kururin.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!snow") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Snow.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!wonderful") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Wonderful.mp3");
      })
      .catch(console.error);
  }
    if (message.content == "!love") {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Love.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!kora) {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Kora.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!aishiteru) {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Aishiteru.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!startd) {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Start.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!kaguya) {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Kaguya.mp3");
      })
      .catch(console.error);
  }
  if (message.content == "!mogyu) {
    message.member.voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile("Mogyu.mp3");
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
