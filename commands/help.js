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
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Stream a song from a given link or text from sources' },
          { name: '⏹️ Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: '📊 Queue', value: 'View and manage the song queue of this server' },
          { name: '⏭️ Skip', value: 'Skip the current playing song' },
          { name: '⏸️ Pause', value: 'Pause the currently playing song' },
          { name: '▶️ Resume', value: 'Resume the current paused song' },
          { name: '🔁 Loop', value: 'Toggle loop mode for queue and current song' },
          { name: '🔄 Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️ Previous', value: 'Play the previous song in the queue' },
          { name: '🔀 Shuffle', value: 'Shuffle the songs in queue' },
          { name: '📃 playlist', value: 'manage the playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://media.discordapp.net/attachments/1233303861800865815/1238065743887863808/END_ZONE_MUSIC.gif?ex=663dee13&is=663c9c93&hm=7d2c73bc9cdb6253ff3033204e4027cdbf42093a695f434230d9a663feb11b12&=&width=850&height=300')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/@ENDZONEYT22.')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/gpcPcJwPsF')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://github.com/wilpower1/ENDZONE-MUSIC')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

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
