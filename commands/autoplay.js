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

const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "autoplay",
  description: "Toggle the autoplay of the queue.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ No music playing!!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#2f58fe')
        .setTitle('Your Music, Your Call!!')
        .setDescription(queue?.autoplay ? '**✅ Autoplay ON**' : '**❌ Autoplay OFF**')
        
      
      interaction?.reply({ embeds: [embed] });
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
