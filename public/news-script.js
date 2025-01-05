document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const gameTitle = document.getElementById('game-title');
    const newsContainer = document.getElementById('news-container');

    gameTitle.textContent = `News about ${game}`;

    async function fetchNews() {
        const response = await fetch(`/news?game=${encodeURIComponent(game)}`); // Mengambil data berita terkait game dari server
        const newsData = await response.json();
        displayNews(newsData);
    }

    function displayNews(articles) {
        newsContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            `;
            articleElement.addEventListener('click', () => {
                window.open(article.url, '_blank');
            });
            newsContainer.appendChild(articleElement);
        });
    }

    fetchNews();
});
