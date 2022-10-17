let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Telkomsel [081283186765]
│ • Dana •  [087887173186]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281283186765
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────

*｢ Made by ❤️ ᴹᴿHARUKA-MD×፝֟͜×｣*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
