# Roblox News

Ini adalah proyek web yang menampilkan berita terkini tentang Roblox. Proyek ini menggunakan Node.js untuk backend dan HTML, CSS, serta JavaScript untuk frontend.

## Persyaratan

Pastikan Anda memiliki perangkat lunak berikut yang terinstal di sistem Anda:
- Node.js
- npm (Node Package Manager)

## Instalasi

### Windows

1. Clone repositori ini:
    ```sh
    git clone https://github.com/ilhameme/web-roblox-news.git
    ```
2. Masuk ke direktori proyek:
    ```sh
    cd web-roblox-news
    ```
3. Instal dependensi:
    ```sh
    npm install
    ```
4. Ganti `YOUR_API_KEY` dengan API key Anda di file `server.js`.

5. Jalankan server:
    ```sh
    npm start
    ```

### Linux

1. Clone repositori ini:
    ```sh
    git clone https://github.com/ilhameme/web-roblox-news.git
    ```
2. Masuk ke direktori proyek:
    ```sh
    cd web-roblox-news
    ```
3. Instal dependensi:
    ```sh
    npm install
    ```
4. Ganti `YOUR_API_KEY` dengan API key Anda di file `server.js`.

5. Jalankan server:
    ```sh
    npm start
    ```

### macOS

1. Clone repositori ini:
    ```sh
    git clone https://github.com/ilhameme/web-roblox-news.git
    ```
2. Masuk ke direktori proyek:
    ```sh
    cd web-roblox-news
    ```
3. Instal dependensi:
    ```sh
    npm install
    ```
4. Ganti `YOUR_API_KEY` dengan API key Anda di file `server.js`.

5. Jalankan server:
    ```sh
    npm start
    ```

### Termux

1. Clone repositori ini:
    ```sh
    git clone https://github.com/ilhameme/web-roblox-news.git
    ```
2. Masuk ke direktori proyek:
    ```sh
    cd web-roblox-news
    ```
3. Instal dependensi:
    ```sh
    npm install
    ```
4. Ganti `YOUR_API_KEY` dengan API key Anda di file `server.js`.

5. Jalankan server:
    ```sh
    npm start
    ```

### Replit

Klik tombol berikut untuk mengkloning proyek ini ke akun Replit Anda:

[![Run on Replit](https://replit.com/badge/github/ilhameme/web-roblox-news)](https://replit.com/new/github/ilhameme/web-roblox-news)

### Heroku

1. **Daftar dan Login**:
    - Daftar akun di [Heroku](https://signup.heroku.com/) jika Anda belum punya.
    - Login ke akun Heroku Anda menggunakan perintah:
      ```sh
      heroku login
      ```

2. **Buat Aplikasi Baru**:
    - Buat aplikasi baru di Heroku dengan perintah:
      ```sh
      heroku create nama-aplikasi-anda
      ```

3. **Deploy Aplikasi**:
    - Tambahkan Heroku sebagai remote:
      ```sh
      git remote add heroku https://git.heroku.com/nama-aplikasi-anda.git
      ```
    - Push kode ke Heroku:
      ```sh
      git push heroku master
      ```

4. **Konfigurasi API Key**:
    - Setel API key sebagai variabel lingkungan di Heroku:
      ```sh
      heroku config:set NEWS_API_KEY=YOUR_API_KEY
      ```
    - Ganti kode di `server.js` untuk menggunakan variabel lingkungan:
      ```javascript
      const response = await axios.get(`https://newsapi.org/v2/everything?q=roblox&apiKey=${process.env.NEWS_API_KEY}`);
      ```

5. **Jalankan Aplikasi**:
    - Aplikasi Anda akan berjalan di URL yang diberikan oleh Heroku. Buka URL tersebut di browser Anda.

## Penggunaan

Setelah server berjalan, Anda dapat mengakses aplikasi web di browser Anda dengan membuka alamat berikut:
