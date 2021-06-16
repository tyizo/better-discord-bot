const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "advice",
  run: async (client, message) => {
    const url = "https://api.adviceslip.com/advice";
    let res, data;
    try {
      res = await axios.get(url);
      data = res.data.slip.advice;
    } catch (err) {
      return message.channel.send(":x: There's an error.");
    }
    const embed = new MessageEmbed()
      .setAuthor("nEw AdViCe: ")
      .setDescription(`*${data}*`)
      .setColor("RANDOM");

    await message.channel.send(embed);
  },
};
