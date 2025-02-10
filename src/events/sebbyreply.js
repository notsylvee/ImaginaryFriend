module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1338314970303037440") return;
        if (message.channel.id === "1265926416168517693") return;
        const voiceLines = [
            "I'm sorry Sebastian",
            "Sure thing Sebastian!",
            "As you wish!",
            "Sure, will do."
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        message.channel.send(`${voiceLine}`);
    },
};