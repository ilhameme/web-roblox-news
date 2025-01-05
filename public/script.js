document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const searchBar = document.getElementById('search-bar');

    async function fetchNews() {
        const response = await fetch('/news'); // Mengambil data dari server
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

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const articles = Array.from(document.getElementsByClassName('article'));
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    });

    fetchNews();
});
