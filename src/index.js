const { Client, Intents } = require('discord.js')
const { startsWith, toLower } = require('lodash')
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

  if (startsWith(msg.content, prefix)) {
    switch (toLower(msg.content)) {
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
