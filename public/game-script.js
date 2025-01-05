document.addEventListener('DOMContentLoaded', () => {
    const gameSearchBar = document.getElementById('game-search-bar');
    const gameList = document.getElementById('game-list');
    const alphabetBar = document.getElementById('alphabet-bar');
    const games = ["Adopt Me!", "Arsenal", "Brookhaven", "Bloxburg", "Jailbreak", "Piggy", "Tower of Hell", "MeepCity", "Murder Mystery 2", "Royale High", "Dungeon Quest", "Shindo Life", "Mad City", "Bee Swarm Simulator", "Bubble Gum Simulator", "Ninja Legends", "Vehicle Simulator", "Skyblock", "Theme Park Tycoon 2", "Work at a Pizza Place"]; // Tambahkan daftar lengkap game Roblox di sini

    function displayGames(filteredGames) {
        gameList.innerHTML = '';
        filteredGames.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.textContent = game;
            gameItem.addEventListener('click', () => {
                window.location.href = `game-news.html?game=${encodeURIComponent(game)}`;
            });
            gameList.appendChild(gameItem);
        });
    }

    function createAlphabetBar() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(letter => {
            const link = document.createElement('a');
            link.className = 'alphabet-link';
            link.textContent = letter;
            link.href = '#';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const filteredGames = games.filter(game => game.startsWith(letter));
                displayGames(filteredGames);
            });
            alphabetBar.appendChild(link);
        });
    }

    gameSearchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredGames = games.filter(game => game.toLowerCase().includes(searchTerm));
        displayGames(filteredGames);
    });

    createAlphabetBar();
    displayGames(games); // Tampilkan semua game saat halaman dimuat
});
