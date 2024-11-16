//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "254712325544@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "254712325544";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNPWCtFT1dlMlhIanh0ZFZYajh0eGNzVkFNa2RvVXpickRGc0IwZWJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXptSS9ZUDNpd3AwNk8xNjhkdEc1emRYTUorSmVCdkNId2RadHVTZFNIRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS1BTVlhZNjJ4cFloOVNUSmEzVW4xdWx3Rnc1Uit2SEIzOWtGbXFWajJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Tng0QUM4ZHFDcEJ3bjJWbGtlS28xbFRleWY1MUZYV1F1ODRwaTUva2tRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDK1RrZFVsU2ZUNE5RNTlJSG9OeElHWW9mcFNUR0l4V1B2Z2o4T3BmV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZvbDdSY2dqcHRlY1FyMHhTclVQUnhMTDc4SXJFT0s1VVpiTHg1WWNnbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJLR3lZYisxWEhFYnlZWEttTFlDLzFUZXhqbTMzV1lMSllJd0lnMkUyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFDVzBGUWVad1JzZUszVFBsbjVkVjJOVHJBdkRqZ2p6K0dLbzY2NVIzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJCM2JlK1pQbnhTM09DbXJxcEFzS21WaHdrNkovNUNlV1FNZFlEalVaMkdkR1Q4enNnSE1SSXNrbTNIaEpoNlVUZzRKZVI1TFVkRkovdDEwMFE0MUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImlSQjdjUjVaY0ZvQUFvMXhNS2FZajRNTWFabThxOHluVW9RWnhxbXk1ZjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzEyMzI1NTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyNEMwNTQ2NkNBNDFBNkNGNDc1MzdFMjcwRUREQzU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE3NjczNTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxMjMyNTU0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMjk5OUVGMkNGNUQ4NEY4MzRFMjAxQkU1OTkzN0M0QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxNzY3MzU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdWNjVDBqZFN2NnR0dGNGYWNVeVBBIiwicGhvbmVJZCI6ImVkYjNhMDBhLTkzZDgtNGFlMC05NTU0LTg5ZjNmZGRlNjc5ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUEpCUVNhMkVWUjlOTmljblNQY01ZZEsvR0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2RjNzJ4VXJKUlVjbFg3ellFRzVnYkhPbHlNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFKUkdWSFgyIiwibWUiOnsiaWQiOiIyNTQ3MTIzMjU1NDQ6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2V2aW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtQnI5TUhFS2ZZNHJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjMzNEhpRUtDQWZrOWtvaGowT3kwdDByTHRNZEh4R0FMNmRMS2N5L2Q4eG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNtNkxzUExTT3dxYjdmNWZEY01BZ2RLY3RYcHQwMVF4L09PakFRRWsrb1NVN3dFenk5UFVIdFNCdHgyZjA2akpzUGJVUHo2eDlTbkVaQW16aEcxTkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhUExZL05IYm4yalI0RlIxdzVUU0NGSU9XeXQ5OTg4VzhBamcrQlFJUVZSOU0xSTN3UnN4dXl3eTRqZS9IU2o5TVlnNkVUK1dHWEhyeXo4OTI3aDZCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMjMyNTU0NDoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOStCNGhDZ2dINVBaS0lZOURzdExkS3k3VEhSOFJnQytuU3luTXYzZk1hIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNzY3MzQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9JRSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-LATECUMMER-MD-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "LATE CUMMER1-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "254712325544",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
