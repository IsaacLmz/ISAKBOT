let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'   
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^DEJALAPAJA$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [

]
