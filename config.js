const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_09_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEOE93Z1FCUHZPMXhhSml0RGtDLzRvRTlqSVd6Q0FsUUFoL0ZCUWZaZUZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuWDFCbnYxZVFVNngzckRvU191TG5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1NTlmYjdiLWQ0NzAtNDA1MS1hNzJjLTA0MWFmZGNlMGU2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxODMsXG4gICAgICAxNDgsXG4gICAgICAxMTAsXG4gICAgICAzOCxcbiAgICAgIDE1OSxcbiAgICAgIDEzMCxcbiAgICAgIDE5NSxcbiAgICAgIDYyLFxuICAgICAgMTUzLFxuICAgICAgNjcsXG4gICAgICA5NCxcbiAgICAgIDE2NixcbiAgICAgIDI3LFxuICAgICAgMTA2LFxuICAgICAgMjA2LFxuICAgICAgMTM4LFxuICAgICAgMjYsXG4gICAgICA5OSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAxMTksXG4gICAgICAxMDMsXG4gICAgICAxOSxcbiAgICAgIDI1MSxcbiAgICAgIDI4LFxuICAgICAgNjksXG4gICAgICAxODYsXG4gICAgICAxMzQsXG4gICAgICAyNDAsXG4gICAgICA1MyxcbiAgICAgIDE4OCxcbiAgICAgIDEwMSxcbiAgICAgIDE0NyxcbiAgICAgIDE4NyxcbiAgICAgIDQ1LFxuICAgICAgMTk4LFxuICAgICAgNDUsXG4gICAgICAxNDUsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEJBMlpTS1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjI3OTkzMzA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3NjQ0MTU5MTE1NTA3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZ6MmNZQ0VKT0J5Ym9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaUDhFUWl2ZER4WXF6ZS9rSHhENXQ5RjArNUVmSWZSeHNhNW5rUzl6WEFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRsWWdHaTVPTnFCcW1TcGxoZ2FMMzU5WDB3NnQ2MklHdGxiTHVzb2x3R1ZHeDYzSTVaV2pWSTRnUHR0R0p1UlY2Snd4bU9iM2dETko5UU9QVnpEMEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZpa2g0aHlYZkVrOWQ4VjlQelpubVBldUt0SkE1ZlRYazRoUFJaTFA1MEFCYW02SHRFNm9VWlgxQUtPQ1dOZmVmUFpsMUxMYlVpbndsamFQS1J5WGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjI3OTkzMzA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQ0MzczNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
