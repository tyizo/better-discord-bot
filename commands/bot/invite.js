const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  run: (client, message) => {
    const botID = "";
    const embed = new MessageEmbed()
      .setTitle(`${client.user.tag} Invite`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${botID}&permissions=8&scope=bot`
      )
      .setDescription(":smile: YAY thanks!")
      .setColor("RANDOM");
    message.channel.send(embed);
  },
};
