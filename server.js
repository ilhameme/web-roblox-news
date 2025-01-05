const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

const app = express();

let articles = [];

async function fetchNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=roblox&apiKey=YOUR_API_KEY'); // Ganti dengan API key yang valid
        articles = response.data.articles;
        fs.writeFileSync('news.json', JSON.stringify(articles));
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

cron.schedule('*/30 * * * *', fetchNews); // Jalankan setiap 30 menit

app.use(express.static(path.join(__dirname, 'public')));

app.get('/news', (req, res) => {
    const newsData = fs.readFileSync('news.json');
    res.json(JSON.parse(newsData));
});

fetchNews(); // Panggil segera saat server dimulai

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
