import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_π₯΅ Pack 3 π₯΅_`, author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(pack3)$/i
export default handler

global.packmen = [
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/",
  "https://i.imgur.com/"
]
