module.exports = (client) => {
    console.log(`Ready on ${client.user.tag} - total channels ${client.channels.cache.size} servers: ${client.guilds.cache.size} users: ${client.users.cache.size}`);
};