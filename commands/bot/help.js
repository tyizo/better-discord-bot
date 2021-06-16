const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  catogory: "bot",
  description: "Get help about this bot",
  run: async (client, message) => {
    const date = new Date().toLocaleDateString("en-us");
    const embed = new MessageEmbed()
      .setTitle("**😆 Available Commands**")
      .setColor("RANDOM")
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setFooter(":yum: More are coming soon .. ")
      .addFields(
        {
          name: "**Admin:**",
          value:
            "`kick, ban, unban, unkick, lock, unlock, addrole, roles, clear, setnick, removerole.`",
        },
        {
          name: "**Info: **",
          value: "`server, vote, botinfo, ping, user, invite, avatar.`",
        },
        {
          name: "**Fun: **",
          value: "`say, meme, joke, hug, advice, anime.`",
        }
      )
      .setFooter(date);
    message.react("🚀");
    await message.author.send(embed);
  },
};
