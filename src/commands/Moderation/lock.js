const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, ChannelType } = require('discord.js');
 
module.exports = {
    data: new SlashCommandBuilder()
    .setName('lock')
    .setDescription('lock a channeö')
    .addChannelOption(option => option.setName('channel').setDescription('the channel you want to lock').addChannelTypes(ChannelType.GuildText).setRequired(true)),
    async execute(interaction) {
 
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: "You must have the Manage Channels permission to use this command", ephemeral: true});
 
        let channel = interaction.options.getChannel('channel');
 
        channel.permissionOverwrites.create(interaction.guild.id, {SendMessages: false})
 
        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: ${channel} has been locked by a administrator`) 
 
        await interaction.reply({ embeds: [embed] });
    }
}
