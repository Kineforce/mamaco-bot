import Discord from 'discord.js';

export const initDiscordClient = () => {
    // Init client
    const client = new Discord.Client({
        intents: [
          'DirectMessages',
          'MessageContent',
          'Guilds',
          'GuildMessages',
          'GuildPresences'
        ]
    });
    
    // On ready
    client.on('ready', async (e) => {
        client?.user?.setStatus('online');
    });

    // Message create
    client.on('messageCreate', message => {
        console.log(`o usuário ${message.author.username} disse: ${message.content}`);
    });

    // Presence
    client.on('presenceUpdate', presence => {
        const user = presence.user?.username ?? "desconhecido";
        if (presence.activities.length == 0) {
            console.log(`o usuário ${user} tá fazendo nada demais`);
            return;
        }

        console.log(`o usuário ${user} começou a atividade: `, presence.activities.map(p => `${p.name} - ${p.details ?? "🐵"}`));
    });

    client.login(process.env.DISCORD_TOKEN);
}