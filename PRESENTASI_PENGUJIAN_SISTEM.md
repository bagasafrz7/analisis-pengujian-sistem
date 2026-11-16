# SLIDE PRESENTASI & PANDUAN SIDANG / DEMO TUGAS QA
## Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art
## Berdasarkan Standar ISO/IEC 25010:2023 Menggunakan Metode Black Box Testing

---

### 🖥️ Slide 1: Judul & Identitas Proyek
* **Judul Penelitian:** Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023
* **Mata Kuliah:** Testing & Quality Assurance (Semester 7)
* **Program Studi:** Teknik Informatika, Universitas Pamulang
* **Anggota Kelompok:**
  1. Bagas Afrizal (231011400204)
  2. Abdul Hafizh Ar Rasyid (231011403352)
  3. Aditya Eka Purnama (231011400988)
  4. Syaifa Maulana (231011401802)
* **Objek Uji:** Platform Galeri.art ([https://galeri.art/](https://galeri.art/))
* **Target Repositori GitHub:** `https://github.com/bagasafrz7/analisis-pengujian-sistem`
> **Speaking Notes:** *"Selamat pagi/siang Bapak/Ibu dosen dan rekan-rekan. Kami dari kelompok yang beranggotakan Bagas Afrizal, Abdul Hafizh Ar Rasyid, Aditya Eka Purnama, dan Syaifa Maulana akan mempresentasikan hasil pengujian sistem berbasis web pada platform kurasi karya seni Galeri.art menggunakan metode Black Box Testing berbasis standar ISO/IEC 25010:2023."*

---

### 🖥️ Slide 2: Latar Belakang & Profil Objek Uji
* **Profil Objek:** Galeri.art adalah platform digital e-commerce kurasi karya seni dan kerajinan artisan lokal asli Indonesia.
* **Fitur Utama Sistem:**
  1. *Autentikasi Pengguna:* Halaman Masuk (`/login`) via Passwordless Email OTP & Google OAuth, serta Halaman Pendaftaran (`/register`).
  2. *Katalog Karya Seni (`/artworks`):* Penjelajahan karya dengan kontrol filter kategori, rentang harga (min/max), dan ketersediaan stok.
  3. *Direktori Seniman (`/artists`):* Profil artisan nusantara.
* **Arsitektur Teknologi:** Dibangun menggunakan Next.js (React Server Components), Auth.js / NextAuth, Material UI, dan reverse proxy Nginx.
> **Speaking Notes:** *"Kami memilih platform Galeri.art karena merupakan aplikasi web modern kategori menengah yang memiliki modul autentikasi login dan register lengkap, katalog karya seni, serta kontrol filter interaktif yang sangat ideal untuk pengujian penjaminan mutu."*

---

### 🖥️ Slide 3: Standar ISO & Referensi Jurnal Ilmiah (SINTA 1–3)
* **Standar Mutu:** **ISO/IEC 25010:2023** (*Product Quality Model* pembaruan resmi 2023) & **ISO/IEC/IEEE 29119** (*Software Testing Standard*).
* **Justifikasi Ilmiah Jurnal Terakreditasi Nasional:**
  1. *JUTIF (Jurnal Teknik Informatika) — SINTA 2:* Validasi efektivitas *Equivalence Partitioning* pada form autentikasi dan formulir web.
  2. *Jurnal RESTI — SINTA 2:* Kerangka evaluasi mutu fungsional perangkat lunak berbasis ISO SQuaRE.
  3. *DECODE — SINTA 2:* Analisis kepuasan pengguna (*Usability*) dan pengujian Black Box.
  4. *JURIKOM — SINTA 3:* Pengujian batasan nilai (*Boundary Value Analysis*) pada sistem berbasis web.
> **Speaking Notes:** *"Metode pengujian yang kami gunakan berlandaskan standar baku internasional ISO 25010 revisi tahun 2023 dan didukung rujukan jurnal-jurnal ilmiah nasional terakreditasi SINTA 2 dan 3."*

---

### 🖥️ Slide 4: Metodologi & Teknik Pengujian (Black Box Testing)
* **Alasan Pemilihan Black Box Testing:** Menguji sistem dari sudut pandang *end-user* tanpa akses ke kode program internal backend.
* **Teknik yang Digunakan:**
  - *Equivalence Partitioning (EP):* Pembagian kelas valid (format email valid) dan invalid (format email keliru) pada form login.
  - *Boundary Value Analysis (BVA):* Pengujian batas ambang panjang masukan query (250 karakter) dan rentang harga (0).
  - *Security Fault Injection:* Pengujian verifikasi token CSRF dan penolakan callback liar tanpa token keamanan.
> **Speaking Notes:** *"Dengan metode Black Box, kami menguji fungsionalitas formulir login, proteksi keamanan token CSRF, serta ketahanan filter katalog terhadap masukan batas ekstrem."*

---

### 🖥️ Slide 5: Pelaksanaan Pengujian: Manual vs Otomatis
* **Pengujian Manual (15 Test Cases):** Menguji alur login email, registrasi akun, kontrol filter harga, direktori artis, dan penanganan galat.
  - *Hasil:* 14 Passed, 1 Failed (**Pass Rate 93.33%**).
* **Pengujian Otomatis (12 Test Cases):** Menggunakan script runner Node.js (`tests/run_blackbox_tests.js`) untuk memvalidasi status kode HTTP, ketersediaan form login/register, token CSRF, sanitasi XSS, dan durasi muat dokumen.
  - *Hasil:* 12/12 Passed (**Pass Rate 100%**). Rata-rata respons: **245 ms** (Jauh di bawah batas ISO: $< 3.5\text{ detik}$).
* **CI/CD Pipeline:** Terintegrasi dengan **GitHub Actions** untuk pengujian berkala otomatis.
> **Speaking Notes:** *"Pengujian otomatis membuktikan kecepatan respon server Galeri.art yang sangat impresif, rata-rata hanya 245 milidetik, serta sistem keamanan CSRF yang aktif mencegah permintaan liar."*

---

### 🖥️ Slide 6: Temuan Galat Riil (Defect Report `DEF-001`)
* **ID Defect:** `DEF-001`
* **Klasifikasi:** *Unhandled Server Exception* (Severity: **Medium / High**)
* **Lokasi:** Slug Dinamis Karya & Artis (`/artworks/[slug]` dan `/artists/[slug]`)
* **Deskripsi:** Ketika pengguna mengakses alamat karya atau seniman yang tidak terdaftar di database (misal: `/artworks/item-palsu-xyz`), server mengembalikan galat **`HTTP 500 Internal Server Error`** alih-alih menampilkan halaman ramah **`HTTP 404 Not Found`**.
* **Dampak & Rekomendasi:** Pengguna merasa situs mengalami kerusakan (*crash*), dan mesin pencari (SEO) mencatat galat server. Disarankan pengembang menambahkan fungsi `notFound()` dari Next.js ketika query data bernilai null.
> **Speaking Notes:** *"Pada pengujian keandalan, kami menemukan cacat nyata di mana akses URL karya yang tidak terdaftar memicu unhandled exception HTTP 500. Ini menjadi temuan kritis yang bernilai perbaikan arsitektur bagi pengembang."*

---

### 🖥️ Slide 7: Hasil Wawancara Praktisi QA Profesional
* **Narasumber:** Raditya Pratama, S.Kom. (Senior QA Engineer di industri FinTech & E-Commerce, 6+ tahun pengalaman).
* **Poin Kunci Hasil Wawancara:**
  1. *Validasi Pendekatan:* Praktisi membenarkan bahwa pengujian Black Box pada platform yang memiliki modul login/register memberikan bobot pengujian yang sangat realistis di industri.
  2. *Bobot Temuan DEF-001:* Praktisi memvalidasi bahwa bug HTTP 500 pada rute dinamis merupakan cacat arsitektur penting yang menurunkan reputasi SEO dan kenyamanan pengguna.
  3. *Relevansi ISO 25010:* Standar ISO 25010:2023 tetap menjadi rujukan utama industri dalam menyusun *Quality Gates*.
> **Speaking Notes:** *"Senior QA Engineer yang kami wawancarai mengonfirmasi bahwa temuan defect HTTP 500 ini sangat penting di industri e-commerce dan memvalidasi metode Black Box yang kami gunakan."*

---

### 🖥️ Slide 8: Evaluasi Kualitas Menyeluruh (ISO/IEC 25010:2023)
* **Functional Suitability:** $93.33\%$ (Modul login, register, dan katalog beroperasi baik).
* **Performance Efficiency:** $98.5\%$ (Waktu respon rata-rata 245 ms).
* **Usability & Accessibility:** $92.0\%$ (Form login passwordless memudahkan pengguna).
* **Security & CSRF Protection:** $96.0\%$ (Enforce HTTPS dan proteksi Anti-CSRF Token aktif).
* **Reliability (Fault Tolerance):** $86.7\%$ (Perlu penanganan fallback 404 pada slug tidak terdaftar).
> **Speaking Notes:** *"Secara keseluruhan, berdasarkan metrik evaluasi kuantitatif ISO/IEC 25010:2023, platform Galeri.art memperoleh evaluasi mutu yang sangat tinggi."*

---

### 🖥️ Slide 9: Kesimpulan & Rekomendasi
* **Kesimpulan:**
  1. Pengujian fungsionalitas dan keamanan autentikasi Galeri.art berhasil dievaluasi secara manual dan otomatis.
  2. Kecepatan respon server dan proteksi CSRF bekerja sangat baik.
* **Rekomendasi untuk Galeri.art:**
  1. Mengimplementasikan fungsi `notFound()` untuk mencegah galat HTTP 500 pada rute dinamis karya dan seniman (`DEF-001`).
  2. Menyempurnakan pesan kesalahan interaktif pada form registrasi jika email sudah terdaftar.
> **Speaking Notes:** *"Demikian presentasi laporan pengujian perangkat lunak kami. Repositori kode, skrip automasi, dan laporan lengkap dapat diakses secara publik pada GitHub. Terima kasih, kami siap untuk sesi tanya jawab."*
