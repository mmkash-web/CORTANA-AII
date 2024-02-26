const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254112735877']
global.ownername = "𓆩 EMMKASH‎𓆪"//owner name
global.ytname = "YT: EMMKASH TECH.Bots.inc"
global.socialm = "GitHub: CORTANA-AI"
global.location = ""

global.botname = 'CORTANA-AI' //name of the bot

//sticker details
global.stickername = 'CORTANA-AI'
global.packname = 'Sticker By EMMKASH'
global.author = 'EMMKASH'
//console view/theme
global.themeemoji = '🤖'
global.wm = "EMMKASH TECH BOTS inc."

//theme link
//global.link = 'https://chat.whatsapp.com/L49QBvVDWX0EwT3kqAZI9b'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go! \n\nCORTANA-AI\n\nBot link: \nhttps://github.com/EMMKASH20/CORTANA-AI\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
