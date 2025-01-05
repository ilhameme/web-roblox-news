const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

const app = express();

let articles = [];

async function fetchNews(game) {
    const apiKey = '48a2c27be3794c4f852d6650917d721a'; // Ganti dengan API key Anda
    let url = `https://newsapi.org/v2/everything?q=roblox&apiKey=${apiKey}`;

    if (game) {
        url = `https://newsapi.org/v2/everything?q=roblox+${encodeURIComponent(game)}&apiKey=${apiKey}`;
    }

    try {
        const response = await axios.get(url);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

cron.schedule('*/30 * * * *', async () => {
    articles = await fetchNews();
    fs.writeFileSync('news.json', JSON.stringify(articles));
}); // Jalankan setiap 30 menit

app.use(express.static(path.join(__dirname, 'public')));

app.get('/news', async (req, res) => {
    const game = req.query.game;
    if (game) {
        const gameArticles = await fetchNews(game);
        res.json(gameArticles);
    } else {
        const newsData = fs.readFileSync('news.json');
        res.json(JSON.parse(newsData));
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
