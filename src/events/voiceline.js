const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 250;
        const voiceLines = [
            "H-hello.",
            "Hey.",
            "-# I think there's someone else here...",
            "Where'd it go?",
            "I hear music..",
            "**HEY!**",
            "Hello.",
            "Do you hear them?",
            "What's that noise?!",
            "How are you doing?",
            "-# What's that sound?",
            "-# Come closer..",
            "*hehe* Hi there!",
            "Can you hear me?",
            "It's crawling all over you...",
            "What are you doing?",
            "-# Where are you going?",
            "Hehe.",
            "I love you.",
            "-# The walls are painted with blood.",
            "-# There's something beneath your skin!",
            "Behind you.",
            "Can you hear me?",
            "-# We are not alone in this room.",
            "It's coming this way!",
            "I can see the water filling your lungs...",
            "Spill your innards... show the world the beauty of your gore.",
            "This is all in vain...",
            "I smell... flowers...",
            "-# Are you afraid?",
            "You're gonna die down here.",
            "I... don't... remember your name.",
            "You aren't safe here.",
            "Psst!",
            "I can't feel my eyes anymore...",
            "Why are your insides arranged like that...? it's all... wrong...",
            "I see through you... your organs aren't where they should be.",
            "Keep going.",
            "Your family has long since forgotten you.",
            "Hiding will only prolong the inevitable...",
            "Why bother...? Hiding will only prolong the inevitable",
            "No one will miss you once you're gone",
            "Who... were you again...?",
            "Will they remember you?",
            "No one will mourn you.",
            "What will happen when time runs out? Where will I go? Is there a heaven waiting for me? Is there a... Hell.. waiting for me? Will it be anything at all? They never told me... I'm scared..",
            "Your body is riddled with shame and guilt.",
            "Your shoulders bear the burden of guilt.",
            "Were they wrong about you...? Do you believe you were justified?",
            "Your name... is forever tarnished",
            "You disgust me.",
            "You have hurt many... you will continue to hurt more...",
            "When the dust settles... would it all be worth it?",
            "Don't let it see you!",
            "Something wicked this way comes...",
            "Turn around!",
            "Run!",
            "It's coming this way!",
            "Watch out!",
            "Something is coming!",
            "You're defective.",
            "You annoy me.",
            "You should not exist."
        ];
        const voiceLine = voiceLines[Math.floor(Math.random() * voiceLines.length)];
        if (chance < 249) {
            return;
          } else {
            message.channel.send(`<:ImaginaryFriend:1395290833942745088> ${voiceLine}`);
          };
    },
};