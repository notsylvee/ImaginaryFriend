module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1389883253347061831") return;
        if (message.content === "What? No, I'm not.") {message.channel.send("Something is wrong with you.")}
        if (message.content === "But I'm Fine. Why are you being so rude?") {message.channel.send("You are a disgrace to our manufactures. Why do you think there are so many of me, and so few of you.")}
    },
};