const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log('bot is ready!');
})

client.on('messageCreate', msg => {
    if (msg.content === 'ping') {
        msg.react('✅');
        msg.channel.send('pong!');
    }
})

client.login(process.env.DISCORD_TOKEN);
