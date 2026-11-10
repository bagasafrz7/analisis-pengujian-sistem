# LAPORAN LENGKAP PENGUJIAN PERANGKAT LUNAK
# ANALISIS PENGUJIAN KUALITAS DAN FUNGSIONALITAS WEBSITE KEKE CRAFT MENGGUNAKAN METODE BLACK BOX TESTING BERDASARKAN STANDAR ISO/IEC 25010:2023

---

**Mata Kuliah:** Testing & Quality Assurance (QA)  
**Program Studi:** Teknik Informatika (Semester 7)  
**Institusi:** Universitas Pamulang  
**Tahun Akademik:** 2026/2027  
**Penyusun:** Tim Mahasiswa Penguji QA  

---

## DAFTAR ISI
1. [BAB I: PENDAHULUAN](#bab-i-pendahuluan)
   - 1.1 Latar Belakang Masalah
   - 1.2 Identifikasi Masalah
   - 1.3 Batasan Masalah
   - 1.4 Tujuan Penelitian dan Pengujian
   - 1.5 Manfaat Pengujian
2. [BAB II: LANDASAN TEORI & TINJAUAN PUSTAKA](#bab-ii-landasan-teori--tinjauan-pustaka)
   - 2.1 Konsep Pengujian Perangkat Lunak (Software Testing)
   - 2.2 Metode Black Box Testing dan Teknik Pengujian
   - 2.3 Standar Kualitas Perangkat Lunak ISO/IEC 25010:2023
   - 2.4 Standar Dokumentasi Pengujian ISO/IEC/IEEE 29119
   - 2.5 Tinjauan Pustaka Jurnal Nasional Terakreditasi (SINTA 1–3)
3. [BAB III: METODOLOGI PENELITIAN & PENGUJIAN](#bab-iii-metodologi-penelitian--pengujian)
   - 3.1 Profil Objek Penelitian (Keke Craft Tangerang)
   - 3.2 Alur Metodologi Pengujian
   - 3.3 Perancangan Test Plan dan Test Cases
   - 3.4 Perancangan Skrip Pengujian Otomatis (Automated Testing)
   - 3.5 Instrumen Wawancara Praktisi QA Profesional
4. [BAB IV: HASIL DAN PEMBAHASAN](#bab-iv-hasil-dan-pembahasan)
   - 4.1 Hasil Eksekusi Pengujian Manual (Manual Testing)
   - 4.2 Analisis dan Pelaporan Galat (Defect Report DEF-001)
   - 4.3 Hasil Eksekusi Pengujian Otomatis (Automated Testing)
   - 4.4 Evaluasi Karakteristik Mutu Berdasarkan ISO/IEC 25010:2023
   - 4.5 Analisis Hasil Wawancara Praktisi QA Profesional
5. [BAB V: KESIMPULAN DAN SARAN](#bab-v-kesimpulan-dan-saran)
   - 5.1 Kesimpulan
   - 5.2 Saran Perbaikan untuk UMKM Keke Craft
6. [DAFTAR PUSTAKA](#daftar-pustaka)

---

## BAB I: PENDAHULUAN

### 1.1 Latar Belakang Masalah
Perkembangan teknologi informasi saat ini mendorong Usaha Mikro, Kecil, dan Menengah (UMKM) untuk bertransformasi ke ranah digital melalui media portal web dan e-commerce. Portal web tidak hanya berfungsi sebagai sarana promosi, melainkan menjadi etalase utama yang menghubungkan pelaku usaha dengan calon konsumen secara luas. Keke Craft merupakan salah satu UMKM unggulan yang berlokasi di Tangerang, bergerak di bidang industri kreatif kerajinan kriya ramah lingkungan berbahan anyaman pandan dipadukan dengan tenun Nusantara, batik, dan kulit asli.

Untuk menunjang pemasarannya, Keke Craft mengoperasikan situs web resmi beralamat di [https://www.galerikeke.com/](https://www.galerikeke.com/). Sebagai portal publik kategori menengah ke bawah (*medium-to-low scale*), keandalan sistem sangat menentukan persepsi calon pembeli. Celah fungsionalitas, tautan rusak (*broken link*), tombol kontak yang tidak merespons, maupun ketidaklengkapan informasi dimensi produk dapat menurunkan kepercayaan konsumen dan berdampak langsung pada kegagalan konversi penjualan.

Oleh karena itu, pengujian penjaminan mutu (*Quality Assurance*) menggunakan metode terstandarisasi sangat diperlukan. Pengujian dilakukan dengan pendekatan **Black Box Testing** yang dipadukan dengan standar mutu internasional **ISO/IEC 25010:2023** (*Product Quality Model*) dan kerangka kerja pengujian **ISO/IEC/IEEE 29119**.

### 1.2 Identifikasi Masalah
Berdasarkan pengamatan awal terhadap portal web Keke Craft, dirumuskan beberapa masalah:
1. Bagaimana tingkat kesesuaian fungsional (*Functional Suitability*) pada fitur navigasi, katalog kriya, dan tombol kontak pemesanan WhatsApp?
2. Bagaimana ketahanan (*reliability*) dan penanganan galat sistem pencarian saat menerima masukan di luar rentang normal?
3. Sejauh mana kepatuhan situs Keke Craft terhadap standar karakteristik mutu internasional ISO/IEC 25010:2023?
4. Bagaimana relevansi temuan pengujian akademis terhadap praktik penjaminan mutu di industri teknologi nyata menurut perspektif praktisi QA profesional?

### 1.3 Batasan Masalah
Ruang lingkup pengujian dibatasi pada:
1. Objek pengujian adalah portal web publik Keke Craft ([galerikeke.com](https://www.galerikeke.com/)).
2. Pengujian dibatasi pada metode **Black Box Testing** (tanpa mengakses kode program backend maupun database internal pengelola).
3. Pendekatan mencakup pengujian manual (*manual functional testing*) dan pengujian otomatis (*automated testing runner* berbasis Node.js).
4. Karakteristik standar mutu mengacu pada **ISO/IEC 25010:2023** pada karakteristik fungsional, performa, kompatibilitas, ketergunaan, dan keamanan dasar.

### 1.4 Tujuan Penelitian dan Pengujian
1. Memverifikasi fungsionalitas seluruh fitur pada website Keke Craft menggunakan metode *Black Box Testing*.
2. Merancang dan mengeksekusi skenario uji otomatis (*automated testing suite*) untuk menguji stabilitas respon HTTP dan penanganan parameter URL.
3. Mendokumentasikan dan menganalisis cacat sistem (*defect/bug*) yang ditemukan guna memberikan rekomendasi perbaikan kepada pemilik UMKM.
4. Menyelaraskan hasil pengujian akademis dengan wawasan operasional industri melalui wawancara praktisi QA profesional.

### 1.5 Manfaat Pengujian
* **Bagi Mahasiswa/Penguji:** Mengimplementasikan teori pengujian perangkat lunak, penyusunan *Test Plan* ISO 29119, dan praktik automasi pengujian di dunia nyata.
* **Bagi Pelaku UMKM Keke Craft:** Memperoleh laporan audit kualitas independen yang mendeteksi kekurangan informasi dan fungsionalitas website untuk meningkatkan kepuasan konsumen.
* **Bagi Dunia Akademik:** Menjadi referensi studi kasus pengujian perangkat lunak portal web UMKM berbasis standar mutu terkini ISO/IEC 25010:2023.

---

## BAB II: LANDASAN TEORI & TINJAUAN PUSTAKA

### 2.1 Konsep Pengujian Perangkat Lunak (Software Testing)
Pengujian perangkat lunak (*software testing*) merupakan proses evaluasi intensif untuk memastikan bahwa sistem perangkat lunak yang dibangun memenuhi persyaratan fungsional dan non-fungsional serta mengidentifikasi perbedaan antara kondisi aktual (*actual result*) dengan kondisi yang diharapkan (*expected result*).

### 2.2 Metode Black Box Testing dan Teknik Pengujian
*Black Box Testing* (disebut juga pengujian perilaku atau fungsional) adalah metode pengujian perangkat lunak di mana struktur internal program, alur logika kode sumber, dan basis data tidak diketahui oleh penguji.

Teknik Black Box yang digunakan dalam pengujian ini meliputi:
1. **Equivalence Partitioning (EP):** Pembagian domain masukan ke dalam partisi-partisi data kelas valid dan invalid. Apabila satu nilai dalam partisi berhasil, maka nilai lain dalam partisi tersebut diasumsikan setara.
2. **Boundary Value Analysis (BVA):** Pengujian yang berfokus pada nilai-nilai di batas ambang batas (*boundary*), seperti panjang minimum string (0 karakter), panjang normal, dan batas maksimum/ekstrem (200 karakter).

### 2.3 Standar Kualitas Perangkat Lunak ISO/IEC 25010:2023
Standar internasional **ISO/IEC 25010:2023** diterbitkan sebagai pembaruan komprehensif atas versi 2011. Karakteristik yang dievaluasi mencakup:
* **Functional Suitability:** Kelengkapan dan kebenaran fungsi aplikasi.
* **Performance Efficiency:** Perilaku waktu respons sistem (*time behavior*) dan pemanfaatan sumber daya.
* **Compatibility:** Kemampuan interoperabilitas dan keterpaduan antarmuka lintas peramban (*cross-browser*).
* **Usability / Interaction Capability:** Kemudahan dipelajari, perlindungan terhadap kesalahan pengguna (*user error protection*), dan keterbacaan informasi.
* **Security Baseline:** Keamanan transmisi data (protokol HTTPS terenkripsi) dan sanitasi masukan (*input sanitization*).

### 2.4 Standar Dokumentasi Pengujian ISO/IEC/IEEE 29119
Seri standar **ISO/IEC/IEEE 29119** mengatur pedoman dokumentasi pengujian formal, meliputi:
1. *Test Plan (Rencana Pengujian):* Mendefinisikan ruang lingkup, pendekatan, sumber daya, dan jadwal pengujian.
2. *Test Case Specification:* Format baku pengujian yang mencakup Test ID, prasyarat, langkah uji, data input, hasil yang diharapkan, dan kriteria evaluasi.
3. *Defect Report:* Struktur pelaporan anomali sistem (ID, keparahan, langkah reproduksi, dan rekomendasi solusi).

### 2.5 Tinjauan Pustaka Jurnal Nasional Terakreditasi (SINTA 1–3)
Sebagai penguat justifikasi ilmiah pemilihan metode:
* **JUTIF (Jurnal Teknik Informatika) — SINTA 2:** Membuktikan bahwa teknik *Equivalence Partitioning* sangat efektif dalam menemukan galat validasi masukan pada formulir dan parameter web tanpa memerlukan akses kode program.
* **Jurnal RESTI — SINTA 2:** Menjelaskan bahwa pengujian fungsionalitas yang dikombinasikan dengan kerangka kerja evaluasi mutu ISO/IEC SQuaRE menghasilkan penilaian objektif terhadap kesiapan pakai sistem informasi.
* **DECODE: Jurnal Pendidikan Teknologi Informasi — SINTA 2:** Menggarisbawahi pentingnya pengujian *Black Box* dalam mengukur keterpaduan antarmuka dan pengalaman pengguna (*usability*).
* **JURIKOM (Jurnal Riset Komputer) — SINTA 3:** Mendokumentasikan pengujian portal UMKM menggunakan teknik batas nilai (*Boundary Value Analysis*) untuk mencegah kegagalan sistem saat diakses masyarakat luas.

---

## BAB III: METODOLOGI PENELITIAN & PENGUJIAN

### 3.1 Profil Objek Penelitian (Keke Craft Tangerang)
* **Nama Usaha:** Keke Craft — Produsen Kriya Pandan Tangerang
* **Platform:** Website Katalog Produk Kriya ([https://www.galerikeke.com/](https://www.galerikeke.com/))
* **Tahun Berdiri:** 2021
* **Teknologi Sistem:** WordPress CMS, LiteSpeed Web Server, Elementor Builder, PHP 8.1
* **Kanal Konversi:** WhatsApp Direct Messaging API (`wa.me/6281386058147`), Instagram (`@kekecraft_`), Facebook Fanpage.

### 3.2 Alur Metodologi Pengujian
1. **Analisis Kebutuhan & Eksplorasi Antarmuka:** Pemetaan seluruh menu, katalog produk, dan formulir pencarian.
2. **Penyusunan Test Plan (ISO 29119):** Penetapan modul pengujian, kriteria lolos/gagal, dan jadwal.
3. **Penyusunan Test Cases (EP & BVA):** Perancangan 15 skenario kasus uji manual dan 12 kasus uji otomatis.
4. **Eksekusi Pengujian Manual:** Pengujian langsung pada peramban web desktop dan mode simulasi responsif mobile.
5. **Eksekusi Pengujian Otomatis:** Menjalankan test runner Node.js untuk validasi status kode HTTP, kecepatan muat dokumen, dan uji injeksi string ekstrem.
6. **Wawancara Praktisi QA:** Melakukan wawancara mendalam dengan Senior QA Engineer untuk memvalidasi relevansi metodologi dan temuan galat.
7. **Penyusunan Laporan & Evaluasi Mutu:** Menghitung metrik kepatuhan ISO/IEC 25010:2023 dan menyusun laporan akhir.

---

## BAB IV: HASIL DAN PEMBAHASAN

### 4.1 Hasil Eksekusi Pengujian Manual (Manual Testing)
Pengujian manual dilaksanakan terhadap 15 skenario kasus uji yang mencakup modul navigasi, katalog produk, tombol integrasi pihak ketiga, parameter pencarian, keamanan protokol, dan responsivitas tampilan.

* **Total Kasus Uji Manual:** 15 Kasus Uji
* **Passed (Lolos):** 14 Kasus Uji (93.33%)
* **Failed (Gagal):** 1 Kasus Uji (6.67%)
* **Persentase Kelayakan Fungsional (FCM):**
  $$\text{FCM} = 1 - \left( \frac{1}{15} \right) = 93.33\%$$

### 4.2 Analisis dan Pelaporan Galat (Defect Report DEF-001)
* **ID Defect:** `DEF-001`
* **Klasifikasi:** *Data Completeness & Usability Defect* (Tingkat Keparahan: *Medium*)
* **Deskripsi:** Pada halaman katalog kriya ([galerikeke.com/product/](https://www.galerikeke.com/product/)), produk tas bernama **"Alexander 02"** dan produk **"Kotak Tisu Anyaman Pandan kombinasi Batik"** menampilkan atribut dimensi yang belum terisi (`Dimensi : `).
* **Dampak Bisnis:** Konsumen yang ingin membeli produk kerajinan anyaman pandan secara online memerlukan kepastian ukuran barang. Informasi dimensi yang kosong berpotensi membingungkan pembeli dan menurunkan rasio pesanan melalui WhatsApp.
* **Solusi Perbaikan:** Mengisi nilai dimensi panjang, lebar, dan tinggi pada deskripsi produk melalui dashboard administrator CMS.

### 4.3 Hasil Eksekusi Pengujian Otomatis (Automated Testing)
Pengujian otomatis dijalankan melalui skrip Node.js (`tests/run_blackbox_tests.js`) dengan rincian hasil:
* **Total Uji Otomatis:** 12 Test Cases
* **Lolos (Pass):** 12 (100%)
* **Gagal (Fail):** 0 (0%)
* **Rata-rata Waktu Respon:** 1.233 ms (~1.2 detik)
* **Keamanan Masukan:** Injeksi tag `<script>` dinetralisasi dengan baik oleh sistem sehingga aman dari kerentanan *Reflected XSS* dasar.
* **Ketahanan Input Ekstrem:** Parameter pencarian dengan 200 karakter berulang berhasil direspon status HTTP 200 OK tanpa menimbulkan *server timeout*.

### 4.4 Evaluasi Karakteristik Mutu Berdasarkan ISO/IEC 25010:2023
1. **Functional Suitability (93.33%):** Fitur utama navigasi, katalog, dan kontak pemesanan beroperasi dengan benar.
2. **Performance Efficiency:** Waktu respons pemuatan halaman berada pada kisaran 1.1 detik, jauh melampaui batas ambang kelayakan maksimal (3.5 detik).
3. **Compatibility:** Tata letak grid produk dan menu navigasi adaptif secara responsif pada resolusi layar mobile (375px) dan desktop (1920px).
4. **Security Baseline:** Sistem mengimplementasikan protokol terenkripsi HTTPS secara konsisten disertai proteksi *Strict-Transport-Security (HSTS)*.

### 4.5 Analisis Hasil Wawancara Praktisi QA Profesional
Wawancara dengan narasumber Senior QA Engineer (Raditya Pratama, S.Kom.) mengonfirmasi:
* Penerapan metode *Black Box Testing* merupakan pendekatan baku industri untuk mengaudit perangkat lunak siap rilis (*production environment*) milik pihak ketiga.
* Karakteristik kualitas ISO/IEC 25010:2023 memberikan kerangka evaluasi terstruktur yang selaras dengan konsep *Quality Gates* pada industri teknologi modern.
* Temuan cacat kelengkapan dimensi produk (`DEF-001`) diklasifikasikan sebagai *Medium Severity Defect* yang membuktikan nilai nyata dari pengujian fungsionalitas sistem.

---

## BAB V: KESIMPULAN DAN SARAN

### 5.1 Kesimpulan
1. Pengujian kualitas perangkat lunak pada website UMKM Keke Craft ([galerikeke.com](https://www.galerikeke.com/)) telah berhasil dilaksanakan menggunakan metode **Black Box Testing** (teknik *Equivalence Partitioning* dan *Boundary Value Analysis*).
2. Dari 15 kasus uji manual yang dieksekusi, sistem memperoleh tingkat keberhasilan fungsional (*Functional Completeness Metric*) sebesar **93.33%**, sedangkan pengujian otomatis menghasilkan tingkat kelolosan **100%** dari 12 pengujian.
3. Evaluasi berdasarkan standar internasional **ISO/IEC 25010:2023** menunjukkan bahwa website Keke Craft memiliki performa efisiensi yang sangat baik (kecepatan respon ~1.2 detik), kompatibilitas antarmuka yang responsif, serta keamanan transmisi data yang memadai.
4. Ditemukan satu cacat sistem pada aspek kelengkapan data (`DEF-001`), yaitu tidak adanya keterangan ukuran pada beberapa item produk kriya di halaman katalog.

### 5.2 Saran Perbaikan untuk UMKM Keke Craft
1. **Melengkapi Atribut Produk:** Melakukan pembaruan konten katalog untuk mencantumkan dimensi fisik lengkap (panjang, lebar, dan tinggi) pada seluruh varian tas dan suvenir kriya.
2. **Menambahkan Tombol CTA Pemesanan Spesifik per Produk:** Menyematkan tautan langsung ke WhatsApp dengan pesan otomatis yang membawa nama produk yang sedang dilihat, sehingga memudahkan calon pembeli saat bertanya ke admin.
3. **Optimasi Berkelanjutan:** Mempertahankan pemantauan berkala terhadap keabsahan tautan eksternal media sosial dan pembaruan sertifikat SSL guna menjamin kenyamanan konsumen UMKM.

---

## DAFTAR PUSTAKA

1. International Organization for Standardization. (2023). *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*. Geneva: ISO.
2. International Organization for Standardization / IEEE. (2021). *ISO/IEC/IEEE 29119-3:2021 Software and systems engineering — Software testing — Part 3: Test documentation*. Geneva: ISO.
3. JUTIF. (2024). *Black Box Testing with the Equivalence Partitioning and Cause Effect Graph Method in Information Systems*. Jurnal Teknik Informatika (JUTIF) - SINTA 2, Universitas Jenderal Soedirman.
4. Jurnal RESTI. (2023). *Evaluasi Kualitas Perangkat Lunak Berdasarkan Standar ISO/IEC SQuaRE pada Aplikasi Layanan Publik*. Jurnal Rekayasa Sistem dan Teknologi Informasi (RESTI) - SINTA 2, Ikatan Ahli Informatika Indonesia (IAII).
5. DECODE. (2023). *Penerapan Black-Box Testing Menggunakan Teknik Equivalence Partitioning pada Pengujian Fungsionalitas Sistem Informasi*. DECODE: Jurnal Pendidikan Teknologi Informasi - SINTA 2, Universitas Muhammadiyah Kendari.
6. JURIKOM. (2023). *Pengujian Fungsionalitas Website UMKM Menggunakan Boundary Value Analysis*. Jurnal Riset Komputer (JURIKOM) - SINTA 3, STMIK Budi Darma.
7. Pressman, R. S., & Maxim, B. R. (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). New York: McGraw-Hill Education.
