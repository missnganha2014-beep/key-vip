const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

const app = express();
const bot = new TelegramBot(TOKEN, { polling: true });

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bot đang chạy!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server chạy cổng " + PORT);
});

console.log("Bot started...");

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bot đang hoạt động 🔥");
});

bot.onText(/\/week/, (msg) => {
    const key = "KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    bot.sendMessage(msg.chat.id, "Key 1 tuần:\n" + key);
});

bot.onText(/\/month/, (msg) => {
    const key = "KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    bot.sendMessage(msg.chat.id, "Key 1 tháng:\n" + key);
});

bot.onText(/\/year/, (msg) => {
    const key = "KEY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    bot.sendMessage(msg.chat.id, "Key 1 năm:\n" + key);
});

bot.on("message", (msg) => {
    console.log("Tin nhắn:", msg.text);
});