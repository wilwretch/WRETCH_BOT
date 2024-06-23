/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by WYNO LIVE!                                              ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :   https://discord.gg/gpcPcJwPsF                          ║
║                                                                        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://www.youtube.com/@ENDZONEYT22.';
      const InstagramLink = 'https://www.instagram.com/wynoislive?igsh=MXF6Y2d3enR6bXl0dw==';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://images-ext-1.discordapp.net/external/Pb_E-6NfL_dIWBFskibgDV8TqXv9wp2W0G1Aoo29IMg/%3Fstp%3Ddst-jpg_s100x100%26_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3D3fd06f%26_nc_ohc%3DyuHV48PfPWUAb7TghYS%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26oh%3D00_AfAspS-b_rtQMGxsyM3qnuvByCmgoY8jyCrHsaER5j3JLg%26oe%3D6632CF4E/https/scontent-iad3-1.cdninstagram.com/v/t51.2885-19/353042669_1645952155924885_6672240990661730975_n.jpg?format=webp&width=125&height=125',
          url: 'https://discord.gg/gpcPcJwPsF'
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself WYNO LIVE. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n YouTube : ❤️ [WYNO IS LIVE](${youtubeLink})\n Instagram : 💙 [WYNO IS LIVE](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

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
