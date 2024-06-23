/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by WYNO LIVE!                                              ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.gg/gpcPcJwPsF                           ║
║  ## YouTube : https://www.youtube.com/@ENDZONEYT22.                    ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


module.exports = {
  TOKEN: "",
  ownerID: ["1084600605995188286", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'WYNO LIVE',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/@ENDZONEYT22.",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: false,
        cooldown: 10000000,
      },

    },

    maxVol: 200,

  }
}
/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by WYNO LIVE!                                              ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.gg/gpcPcJwPsF                           ║
║  ## YouTube : https://www.youtube.com/@ENDZONEYT22.                    ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

