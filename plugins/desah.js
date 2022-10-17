let fs = require('fs')
let handler = async (m) => {
let desah = fs.readFileSync('./mp3/ah.opus')
conn.sendFile(m.chat, desah, '', '', m, true)
}

handler.customPrefix = /^(aine|aiineBagi desah nya|Desah dong kk|Desah dong|C0li|ah|Ah)$/i
handler.command = new RegExp

module.exports = handler