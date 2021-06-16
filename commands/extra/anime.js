const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "anime",
  run: async (client, message, args) => {
    const url = `https://trace.moe/api/search?url=${args[0]}`;
    let res, data, anime, adult, episode, season;
    try {
      res = await axios.get(url);
      data = res.data;
      // getting anime data:
      anime = res.data.docs[0].anime;
      episode = res.data.docs[1].episode;
      adult = res.data.docs[0].is_adult;
      season = res.data.docs[0].season;
    } catch (error) {
      return message.channel.send(":x: There's an error.\n" + error);
    }
    const embed = new MessageEmbed()
      .addFields(
        {
          name: "Anime Name: ",
          value: anime,
        },
        {
          name: "Episode Number: ",
          value: episode,
        },
        {
          name: "For Adults?",
          value: adult,
        },
        {
          name: "Season Number: ",
          value: season || "man idk",
        }
      )
      .setColor("RANDOM");
    await message.channel.send(embed);
  },
};
