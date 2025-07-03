module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.id !== "1338314970303037440") return;
        const voiceLines = [
            "I'm sorry Sebastian",
            "Sure thing Sebastian!",
            "As you wish!",
            "Sure, will do."
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (message.content === "NO! No! Not again... *Eugh* *Arugh* Can you please just... TRY to be quiet until they leave the shop? I really don't need the unnecessary whisper right now. Thank you.") {message.channel.send(`${voiceLine}`)}
        if (message.content === "*Sigh* Hey. Listen. I'm... really tired right now, so, if you could just, keep it down, for the duration that they're in here, that'd be great. Thank you.") {message.channel.send(`${voiceLine}`)}
        if (message.content === "Look. I know scaring this punk is entertaining and all, but, do you mind saving that after visiting hours are over? I think I have my fair share of existential dread as is, *Heh* Appreciate it.") {message.channel.send(`${voiceLine}`)}
    },
};