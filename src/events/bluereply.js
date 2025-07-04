module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1389883253347061831") return;
        if (message.content === "What? No, I'm not.") {message.channel.send("Something is wrong with you.")}
        if (message.content === "But I'm Fine. Why are you being so rude?") {message.channel.send("You are a disgrace to our manufactures. Why do you think there are so many of me, and so few of you.")}

        if (message.content === "I haven't even said anything to you yet.") {message.channel.send("Keep it that way.")}

        if (message.content === "That's not a nice thing to say to someone else. How would you feel if I said that to you? You should not exist. Doesn't feel good, does it?") {message.channel.send("I hate you.")}

        if (message.content === "You're boring, You know that? I don't like your attitude either. I have done nothing to you. Yet you treat me like this.") {message.channel.send("Stop talking to me.")}

    },
};