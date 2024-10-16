const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/denethhansaka/DENETH-MD-New/blob/main/Images/DENETH-MD.jpg?raw=true",
ALIVE_MSG : process.env.ALIVE_MSG || "Hey,I Am DENETH-MD.I am Alive Now",
MENU_IMG : process.env.MENU_IMG || "https://github.com/denethhansaka/DENETH-MD-New/blob/main/Images/DENETH-MD.jpg?raw=true",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
