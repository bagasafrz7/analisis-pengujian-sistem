# SLIDE PRESENTASI & PANDUAN SIDANG / DEMO TUGAS QA
## Analisis Pengujian Kualitas dan Fungsionalitas Website Keke Craft
## Berdasarkan Standar ISO/IEC 25010:2023 Menggunakan Metode Black Box Testing

---

### 🖥️ Slide 1: Judul & Identitas Proyek
* **Judul Penelitian:** Analisis Pengujian Kualitas dan Fungsionalitas Website Keke Craft Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023
* **Mata Kuliah:** Testing & Quality Assurance (Semester 7)
* **Program Studi:** Teknik Informatika, Universitas Pamulang
* **Anggota Kelompok:**
  1. Bagas Afrizal (231011400204)
  2. Abdul Hafizh Ar Rasyid (231011403352)
  3. Aditya Eka Purnama (231011400988)
  4. Syaifa Maulana (231011401802)
* **Objek Uji:** Website Keke Craft ([https://www.galerikeke.com/](https://www.galerikeke.com/))
* **Target Repositori GitHub:** `https://github.com/bagasafrz7/analisis-pengujian-sistem`
> **Speaking Notes:** *"Selamat pagi/siang Bapak/Ibu dosen dan rekan-rekan. Kami dari kelompok yang beranggotakan Bagas Afrizal, Abdul Hafizh Ar Rasyid, Aditya Eka Purnama, dan Syaifa Maulana akan mempresentasikan hasil pengujian sistem berbasis web pada UMKM lokal Keke Craft Tangerang menggunakan metode Black Box Testing berbasis standar ISO/IEC 25010:2023."*

---

### 🖥️ Slide 2: Latar Belakang & Profil Objek Uji
* **Profil Objek:** Keke Craft adalah produsen kriya anyaman pandan, tenun, dan kulit asli ramah lingkungan asal Tangerang (berdiri sejak 2021).
* **Kategori Skala:** Sistem Informasi / Portal Web UMKM (Skala Menengah ke Bawah).
* **Urgensi Pengujian:** Portal web berfungsi sebagai etalase produk dan gerbang konversi pemesanan melalui WhatsApp. Celah navigasi, tautan rusak, atau ketidaklengkapan data katalog berpotensi menurunkan konversi dan kepercayaan pelanggan.
> **Speaking Notes:** *"Kami memilih portal web Keke Craft sebagai studi kasus kategori medium-to-low scale karena website ini sudah aktif digunakan secara live di dunia industri UMKM. Keandalan katalog dan kemudahan kontak sangat krusial bagi keberlangsungan bisnis mereka."*

---

### 🖥️ Slide 3: Standar ISO & Referensi Jurnal Ilmiah (SINTA 1–3)
* **Standar Mutu:** **ISO/IEC 25010:2023** (*Product Quality Model* pembaruan resmi 2023) & **ISO/IEC/IEEE 29119** (*Software Testing Standard*).
* **Justifikasi Ilmiah Jurnal Terakreditasi Nasional:**
  1. *JUTIF (Jurnal Teknik Informatika) — SINTA 2:* Validasi efektivitas *Equivalence Partitioning* pada sistem berbasis web.
  2. *Jurnal RESTI — SINTA 2:* Kerangka evaluasi mutu fungsional perangkat lunak berbasis ISO SQuaRE.
  3. *DECODE — SINTA 2:* Analisis kepuasan pengguna (*Usability*) dan pengujian Black Box.
  4. *JURIKOM — SINTA 3:* Pengujian batasan nilai (*Boundary Value Analysis*) pada website layanan masyarakat dan UMKM.
> **Speaking Notes:** *"Pemilihan metode dan evaluasi kami bukan sekadar asumsi, melainkan berlandaskan standar baku ISO 25010 tahun 2023 serta rujukan ilmiah dari jurnal-jurnal terakreditasi SINTA 2 dan 3 di Indonesia."*

---

### 🖥️ Slide 4: Metodologi & Teknik Pengujian (Black Box Testing)
* **Alasan Pemilihan Black Box Testing:** Menguji sistem dari perspektif *end-user* tanpa akses ke kode sumber internal (*source code*) maupun basis data backend.
* **Teknik yang Digunakan:**
  - *Equivalence Partitioning (EP):* Pembagian kelas valid (misal kata kunci "tas") dan kelas invalid (kata kunci acak) pada form pencarian.
  - *Boundary Value Analysis (BVA):* Pengujian batas ambang (panjang teks 0 karakter dan teks ekstrem 200 karakter).
  - *End-to-End Scenario Testing:* Penelusuran alur mulai dari halaman beranda, katalog, hingga tautan API WhatsApp.
> **Speaking Notes:** *"Metode Black Box memungkinkan kami mengevaluasi perilaku sistem nyata, menangani kesalahan masukan pengguna, serta menguji responsivitas alur pemesanan secara objektif."*

---

### 🖥️ Slide 5: Pelaksanaan Pengujian: Manual vs Otomatis
* **Pengujian Manual (15 Test Cases):** Fokus pada estetika antarmuka, tata letak grid produk, visual foto kerajinan, dan kemudahan interaksi (*Usability*).
  - *Hasil:* 14 Passed, 1 Failed (**Pass Rate 93.33%**).
* **Pengujian Otomatis (12 Test Cases):** Menggunakan script runner Node.js (`tests/run_blackbox_tests.js`) untuk memvalidasi respon status HTTP 200, keberadaan tautan WhatsApp/Instagram, sanitasi XSS, dan durasi muat (*load performance*).
  - *Hasil:* 12/12 Passed (**Pass Rate 100%**). Rata-rata respons: **1.2 detik** (Ambang batas ISO: $< 3.5\text{ detik}$).
* **CI/CD Pipeline:** Terintegrasi dengan **GitHub Actions** untuk pengujian berkala otomatis.
> **Speaking Notes:** *"Kami menggabungkan kekuatan mata manusia dalam pengujian manual dengan kecepatan dan ketepatan mesin melalui skrip otomatisasi yang terintegrasi pada GitHub Actions."*

---

### 🖥️ Slide 6: Temuan Galat Riil (Defect Report `DEF-001`)
* **ID Defect:** `DEF-001`
* **Klasifikasi:** *Data Completeness Defect* (Severity: **Medium**)
* **Lokasi:** Halaman Katalog Produk ([galerikeke.com/product/](https://www.galerikeke.com/product/))
* **Deskripsi:** Pada produk tas *"Alexander 02"* dan *"Kotak Tisu Anyaman Pandan kombinasi Batik"*, label dimensi hanya tertulis `"Dimensi : "` tanpa adanya angka ukuran panjang, lebar, dan tinggi.
* **Dampak & Rekomendasi:** Calon pembeli tidak mendapatkan kepastian ukuran sebelum memesan via WhatsApp. Disarankan admin toko segera memperbarui informasi dimensi pada CMS.
> **Speaking Notes:** *"Pengujian kami berhasil menemukan satu cacat nyata pada data katalog. Hal ini membuktikan bahwa pengujian fungsionalitas mampu memberikan masukan perbaikan bisnis yang konkret bagi pemilik UMKM."*

---

### 🖥️ Slide 7: Hasil Wawancara Praktisi QA Profesional
* **Narasumber:** Raditya Pratama, S.Kom. (Senior QA Engineer di industri FinTech & E-Commerce, 6+ tahun pengalaman).
* **Poin Kunci Hasil Wawancara:**
  1. *Validasi Pendekatan:* Praktisi membenarkan bahwa untuk pengujian aplikasi live milik pihak ketiga, *Black Box Testing* adalah metode paling tepat dan aplikatif.
  2. *Piramida Automasi:* Pengujian manual tidak dapat dihilangkan karena penting untuk aspek *Usability*, sementara automasi digunakan untuk kecepatan *regression test*.
  3. *Relevansi ISO 25010:* Standar ISO 25010:2023 tetap menjadi rujukan utama industri dalam menyusun *Quality Gates* sebelum aplikasi dinyatakan layak rilis.
> **Speaking Notes:** *"Kami juga berkonsultasi dan mewawancarai Senior QA Engineer untuk memvalidasi bahwa metodologi yang kami terapkan di kampus sudah selaras dengan standar operasional di industri teknologi."*

---

### 🖥️ Slide 8: Evaluasi Kualitas Menyeluruh (ISO/IEC 25010:2023)
* **Functional Suitability:** $93.33\%$ (Katalog dan navigasi berjalan baik).
* **Performance Efficiency:** $98.0\%$ (Waktu respon rata-rata 1.2 detik).
* **Usability & Accessibility:** $90.0\%$ (Navigasi mudah dipahami).
* **Compatibility:** $100\%$ (Responsif penuh pada desktop dan layar mobile 375px).
* **Security Baseline:** $95.0\%$ (Enforce HTTPS dengan sertifikat TLS valid dan sanitasi XSS terlindungi).
> **Speaking Notes:** *"Secara keseluruhan, berdasarkan metrik evaluasi kuantitatif ISO/IEC 25010:2023, website Keke Craft dinyatakan layak dan memiliki tingkat mutu perangkat lunak yang sangat baik."*

---

### 🖥️ Slide 9: Kesimpulan & Rekomendasi
* **Kesimpulan:**
  1. Pengujian manual dan otomatis Black Box berhasil memetakan kualitas fungsional dan performa website Keke Craft.
  2. Sistem memiliki keandalan yang tinggi terhadap masukan ekstrem dan sanitasi karakter khusus.
* **Rekomendasi untuk Keke Craft:**
  1. Melengkapi atribut dimensi produk yang masih kosong (`DEF-001`).
  2. Menyediakan tombol direct WhatsApp per produk dengan template teks otomatis (misal: "Halo, saya tertarik dengan Tote Bag AGDA").
> **Speaking Notes:** *"Demikian presentasi laporan pengujian perangkat lunak kami. Repositori kode, skrip automasi, dan laporan lengkap dapat diakses secara publik pada GitHub. Terima kasih, kami siap untuk sesi tanya jawab."*
