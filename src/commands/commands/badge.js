const {  EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: {
    name: "badge",
    description: "Get a random badge from Pressure",
    "integration_types": [0, 1],
    "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const badgesJsonData = await fs.readFile("data/badges.json", {encoding: "utf8"});
      const badgesMap = JSON.parse(badgesJsonData);
      const badges = badgesMap["badges"];
      const badge = badges[Math.floor(Math.random() * badges.length)];

      const embed = new EmbedBuilder()
      .setColor("98211e")
      .setTitle(`${badge.name}`)
      .setDescription(`${badge.description}`)
      .setThumbnail(`https://cdn.sylvee.xyz/pressurebadge${badge.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};