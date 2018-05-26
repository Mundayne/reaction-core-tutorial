// github.com/Mundayne/reaction-core-tutorial

const RC = require('reaction-core')
const discord = require('discord.js')

const client = new discord.Client()
const handler = new RC.Handler()

client.on('messageReactionAdd', (messageReaction, user) => handler.handle(messageReaction, user))

let menuText = {
  title: 'reaction-core tutorial',
  color: 0xffffff
}

let menuButtons = [
  {
    emoji: '🍎',
    run: (user, message) => {
      menuText.color = 0xff0000
      message.edit({ embed: menuText })
    }
  },
  {
    emoji: '🍏',
    run: (user, message) => {
      menuText.color = 0x00ff00
      message.edit({ embed: menuText })
    }
  },
  {
    emoji: '🔵',
    run: (user, message) => {
      menuText.color = 0x0000ff
      message.edit({ embed: menuText })
    }
  }
]

let changeColourMenu = new RC.Menu('', menuButtons)
handler.addMenus(changeColourMenu)

client.on('message', msg => {
  if (msg.content === '@GO') msg.channel.sendMenu(changeColourMenu).catch(console.error)
})

client.login('BOT_TOKEN')
