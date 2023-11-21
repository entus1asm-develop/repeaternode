const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const TelegramBot = require('node-telegram-bot-api');

const urlparser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root:__dirname})
    });

    app.post('/', urlparser, function (req, res) {
        console.log(req.body);
let name = req.body.name;
let message = req.body.message;



bot.sendMessage(773108220, name+' '+ message);

        });

app.listen(3000)

const token = '6818801034:AAFvtY4NCoMNhKDfH99qGWSMa0CUsTwb_04';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text);
});