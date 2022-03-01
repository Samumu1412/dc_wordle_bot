const { Client, Intents } = require('discord.js')
const { startsWith, toLower, split } = require('lodash')
require('dotenv').config()

const Wordle = require('./wordle.js')
const { prefix } = require('./constant')

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.once('ready', () => {
  console.log('The bot is online')
})


client.on('messageCreate', (msg) => {
  if (msg.author.username === client.user.username) {
    return
  }

  const [command] = split(msg.content, ' ', 1)

  if (startsWith(command, prefix)) {
    switch (toLower(command)) {
      case '!help': {
        msg.channel.send(`
          🌟 You can only play once every day 🌟\n
          Command List\n
          !play: start your wordle game\n
          !guess {anwser}: guess the answer\n
          !wordlestats: show your game status
        `)
        break
      }
      case '!play': {
        Wordle.LoadNewWordle(msg)
        break
      }
      case '!guess': {
        Wordle.PlayWordle(msg)
        break
      }
      case '!wordlestats': {
        Wordle.ShowWordleStats(msg)
        break
      }
      default: {
        msg.channel.send(
          `${msg.content} is not a valid commad. Type !help to see how to play.`
        )
      }
    }
  }
})

client.login(process.env.DISCORD_CLIENT_SECRET)
