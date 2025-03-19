const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("badge")
    .setDescription("Get a random badge from Pressure"),

    async execute(interaction) {

      const badgesJsonData = await fs.readFile("data/badges.json", {
        encoding: "utf8",
      });
      const badgesMap = JSON.parse(badgesJsonData);
      const badges = badgesMap["badges"];
      const badge = badges[Math.floor(Math.random() * badges.length)];

      const embed = new EmbedBuilder()
      .setColor("98211e")
      .setTitle(`${badge.name}`)
      .setDescription(`${badge.description}`)
      .setThumbnail(badge.url)

      await interaction.reply({ embeds: [embed] });
    },
};