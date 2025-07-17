const fs = require("fs/promises");

module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Imaginary Friend voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["voicelines"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:ImaginaryFriend:1395290833942745088> ${voiceline.text}` });
      },
}