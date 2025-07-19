const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1338314970303037440") return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;

        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["sebby"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
        
        message.channel.send(`<:ImaginaryFriend:1395290833942745088> ${voiceline.text}`);
    },
};