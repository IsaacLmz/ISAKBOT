import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `


*ββ πΏππ΄π³π΄ πΏππΎπ±π°π πΈπ½πππ°π»π°π π³π΄ππ³π΄ π²π΄ππΎ π΄π» π±πΎπ ππΈπΆππΈπ΄π½π³πΎ ππ½πΎ π³π΄ π»πΎπ ππππΎππΈπ°π»π΄π πππ΄ π·π°π π΄π½ π΄π» π²π°π½π°π» π³π΄ ππ·π΄ ππ·π°π³πΎπ π±ππΎπΊπ΄ππ*
*β https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - ππ΄ππ±πΎπ',
body: 'ISAKBOT',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})   
}
handler.command = /NADIEPUEDESERSUBBOT/i
export default handler
