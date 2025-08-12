# Capstone-Sudokuu
Pembuatan game web php native sudoku dengan bantuan granite AI 3.2

Sebuah game Sudoku klasik interaktif yang dibuat untuk projek capstone program Hakctiv8 + IBM Student Developer initiative Wave 6. dengan fitur Timer, Reset, Hint, dan validasi secara realtime untuk pengalaman bermain yang mudah dan menyenangkan

# Teknologi Yang digunakan

- **Backend** : PHP Native
- **Frontend** : HTML5
- **Styling:** CSS3
- **Interactivity:** JavaScript (Vanilla)
- **AI Assistant:** IBM Granite (diakses melalui Replicate API)

# Fitur

- **Papan Acak** : Papan Sudoku 9x9 yagn selalu random di setiap game
- **Timer** : Menghitung seberapa cepat pemain menyelesaikan permainan
- **Tombol Reset** : Memulai permainan baru dengan puzzle yang berbeda
- **Tombol Hint** : Memberikan satu jawaban benar
- **Validasi Real-Time** : Angka yang dimasukkan pemain dapat diketahui benar tidaknya secara langsung
- **Pesan Kemenangan** : Notifikasi akan muncul saat semua kotak berhasil diisi dengan benar

# Setup

1.  Clone repository ini ke komputer Anda.
2.  Pastikan Anda memiliki PHP terinstal.
3.  Buka terminal atau command prompt di dalam folder proyek.
4.  Jalankan server lokal dengan perintah: `php -S localhost:8000`
5.  Buka `http://localhost:8000` di browser Anda.

# Penjelasan Bantuan AI

- **Generasi Prompt** : Saya merancang prompt yang detail dan terstruktur untuk meminta AI membuat kerangka kode awal.
- **Generasi Kode Awal** : AI membantu membuat versi pertama dari file `index.php`, `style.css`, dan `script.js`. Ini memberikan fondasi yang solid untuk dikembangkan lebih lanjut.
- **Debugging & Refactoring** : Saat kode awal dari AI memiliki *bug* (seperti logika generator Sudoku yang salah), saya meminta AI untuk memberikan alternatif atau memperbaiki bagian tertentu. Proses ini membantu saya memahami kesalahan logika dan cara memperbaikinya.
- **Dampak** : Penggunaan AI mempercepat fase setup dan pembuatan kerangka awal proyek sekitar 50%, sehingga saya bisa lebih fokus pada debugging, perbaikan logika, dan penyempurnaan user interface.

### Catatan Proses Pengembangan

Proyek ini pada awalnya direncanakan menggunakan PHP untuk logika pembuatan puzzle di sisi server. Namun, untuk menyesuaikan dengan platform deployment yang disarankan (Netlify) yang lebih optimal untuk situs statis, proyek ini kemudian di-refactor sepenuhnya menjadi aplikasi statis yang hanya menggunakan HTML, CSS, dan JavaScript.
