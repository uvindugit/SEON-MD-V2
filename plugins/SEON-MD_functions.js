const fs = require('fs');
const path = require('path');
var { connectdb,input,get, updb,updfb } = require("../lib/githubdb")
const {cmd , commands} = require('../command')

//=====================auto_voice==================================== 
cmd({
on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../DATA/voice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (await get("AUTO_VOICE") === 'true') {
                //if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});

//=====================auto sticker=================================
cmd({
on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../DATA/sticker.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (await get("AUTO_STICKER") === 'true') {
                //if (isOwner) return;        
                await conn.sendMessage(from,{sticker: { url : data[text]},package: 'SEON-MD'},{ quoted: mek })   
            
            }
        }
    }                
})

//===========================auto reply===================================
cmd({
on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../DATA/reply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (await get("AUTO_REPLY") === 'true') {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});
//==================================AUTO_RECORDING========================================
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {  
    if (await get("RECORDING") === 'true') { 
        if (isOwner) return;
            await conn.sendPresenceUpdate('recording', from);
    }         
});
  
//========================AUTO_REACT==============================================
  cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {  
    if (await get("AUTO_REACT") === 'true') { 
        if (isOwner) return;
            await conn.sendMessage(from, { react: { text: '🌹', key: mek.key } });             
    }         
});
  
