module.exports = {
  name: "say",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "You dont have permission to do this command!"
      );
    else {
      message.delete();
      message.channel.send(args.join(" "));
    }
    if (!args || args.length < 1) {
      return message.channel
        .send("Say something!")
        .then((msg) => {
          msg.delete({ timeout: 2000 });
        })
        .catch(console.error);
    }
  },
};
