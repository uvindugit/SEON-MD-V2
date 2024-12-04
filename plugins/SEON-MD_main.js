var { connectdb,input,get, updb,updfb } = require("../lib/githubdb")
const {cmd , commands} = require('../command')
const {runtime} = require('../lib/functions')
const os = require("os")

//===============================ALIVE======================================
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

return await conn.sendMessage(from,{image: {url: await get("ALIVE_IMG")},caption: await get("ALIVE_MSG")},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=============================SYSTEM=========================================
cmd({
    pattern: "system",
	alias: ["s","botinfo"],
    desc: "system",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let msg66 = `*⏱️ Run :-* ${runtime(process.uptime())}
*🗃️ Memory :-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*📍 Platform :-* ${os.hostname()}
*👥 Owners :-* Sanju Bro & Sadiya Tech
*🎉 Version :-* 1.0.0`

await conn.sendMessage(from,{text:msg66},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//======================================PING===========================
cmd({
    pattern: "ping",
    react : "🚀",
    desc: "To check ping",
    category: "general",
    filename: __filename,
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{
var inital = new Date().getTime();
const { key } = await conn.sendMessage(from, {text: '```Ping!!!```'});
var final = new Date().getTime();
//await Secktor.sleep(1000)
return await conn.sendMessage(from, {text: '*Pong*  *' + (final - inital) + ' ms* ', edit: key});
} catch (e) {
console.log(e)
reply(`${e}`)
}});
