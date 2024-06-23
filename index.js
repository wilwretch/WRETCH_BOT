const config = require('./config.js');

if(config.shardManager.shardStatus == true){

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

} else {

require("./bot.js")

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

