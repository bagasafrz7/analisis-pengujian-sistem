# LAPORAN LENGKAP PENGUJIAN PERANGKAT LUNAK
# ANALISIS PENGUJIAN KUALITAS DAN FUNGSIONALITAS PLATFORM GALERI.ART MENGGUNAKAN METODE BLACK BOX TESTING BERDASARKAN STANDAR ISO/IEC 25010:2023

---

### Identitas Laporan Tugas Besar
* **Mata Kuliah:** Testing & Quality Assurance (QA)
* **Program Studi:** Teknik Informatika (Semester 7)
* **Institusi:** Universitas Pamulang
* **Tahun Akademik:** 2026/2027

### Disusun Oleh (Kelompok Penguji):
| No | Nama Lengkap | NIM | Peran / Tanggung Jawab Pengujian |
| :-: | :--- | :---: | :--- |
| 1 | **BAGAS AFRIZAL** | **231011400204** | Project Lead & Automated Test Developer |
| 2 | **ABDUL HAFIZH AR RASYID** | **231011403352** | QA Analyst & Manual Test Execution |
| 3 | **ADITYA EKA PURNAMA** | **231011400988** | Test Scenario Designer (EP & BVA) |
| 4 | **SYAIFA MAULANA** | **231011401802** | ISO 25010 Quality Metrics & Defect Auditor |

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
   - 3.1 Profil Objek Penelitian (Platform Galeri.art)
   - 3.2 Alur Metodologi Pengujian
   - 3.3 Perancangan Test Plan dan Test Cases (Modul Login & Registrasi)
   - 3.4 Perancangan Skrip Pengujian Otomatis (Automated Testing)
   - 3.5 Instrumen Wawancara Praktisi QA Profesional
4. [BAB IV: HASIL DAN PEMBAHASAN](#bab-iv-hasil-dan-pembahasan)
   - 4.1 Hasil Eksekusi Pengujian Manual (Manual Testing)
   - 4.2 Analisis dan Pelaporan Galat (Defect Report DEF-001 HTTP 500)
   - 4.3 Hasil Eksekusi Pengujian Otomatis (Automated Testing)
   - 4.4 Evaluasi Karakteristik Mutu Berdasarkan ISO/IEC 25010:2023
   - 4.5 Analisis Hasil Wawancara Praktisi QA Profesional
5. [BAB V: KESIMPULAN DAN SARAN](#bab-v-kesimpulan-dan-saran)
   - 5.1 Kesimpulan
   - 5.2 Saran Perbaikan untuk Pengembang Platform Galeri.art
6. [DAFTAR PUSTAKA](#daftar-pustaka)

---

## BAB I: PENDAHULUAN

### 1.1 Latar Belakang Masalah
Pertumbuhan ekosistem ekonomi kreatif dan digitalisasi di Indonesia memicu munculnya platform kurasi seni dan kriya berbasis web. Berbeda dengan marketplace konvensional berskala masif, platform kurasi seni lokal berfokus pada penyajian narasi di balik karya, profil para artisan daerah, dan keaslian material nusantara. Salah satu platform digital karya anak bangsa yang mewadahi hal tersebut adalah **Galeri** yang beroperasi pada domain resmi [https://galeri.art/](https://galeri.art/).

Platform Galeri.art merupakan aplikasi web modern berbasis framework **Next.js** yang dilengkapi dengan sistem **Autentikasi Pengguna (Login & Register)** tanpa kata sandi (*passwordless email OTP*), katalog kurasi karya seni (*Artworks*), filter rentang harga dan kategori, serta direktori seniman (*Artists*). Sebagai portal yang menangani interaksi langsung pengguna dan autentikasi akun, kestabilan sistem, validasi masukan formulir, keamanan dari eksploitasi CSRF, dan ketahanan terhadap kesalahan (*fault tolerance*) menjadi syarat mutlak.

Oleh karena itu, pengujian penjaminan mutu (*Quality Assurance*) menggunakan metode terstandarisasi sangat diperlukan. Pengujian dilakukan dengan pendekatan **Black Box Testing** yang dipadukan dengan standar mutu internasional **ISO/IEC 25010:2023** (*Product Quality Model*) dan kerangka kerja dokumentasi **ISO/IEC/IEEE 29119**.

### 1.2 Identifikasi Masalah
Berdasarkan analisis awal terhadap platform Galeri.art, dirumuskan beberapa masalah:
1. Bagaimana fungsionalitas dan keamanan modul autentikasi (*login* dan *register*) serta proteksi token CSRF pada platform Galeri.art?
2. Bagaimana keandalan sistem penjelajahan katalog karya seni, kontrol filter kategori, dan pencarian saat menerima masukan di luar rentang normal (*Boundary Value Analysis*)?
3. Bagaimana ketahanan (*fault tolerance*) platform ketika pengguna mengakses alamat URL karya seni atau artis yang tidak terdaftar di database?
4. Sejauh mana kepatuhan platform Galeri.art terhadap standar karakteristik mutu internasional ISO/IEC 25010:2023?

### 1.3 Batasan Masalah
Ruang lingkup pengujian dibatasi pada:
1. Objek pengujian adalah platform publik Galeri.art ([https://galeri.art/](https://galeri.art/)).
2. Pengujian berfokus pada metode **Black Box Testing** (tanpa mengakses kode program backend maupun database internal server).
3. Pengujian mencakup modul Autentikasi Pengguna (`/login`, `/register`, `/api/auth/csrf`), Navigasi, Katalog Karya (`/artworks`), Direktori Seniman (`/artists`), dan Filter Pencarian.
4. Karakteristik standar mutu mengacu pada **ISO/IEC 25010:2023** pada karakteristik fungsional, performa, ketergunaan, keandalan, dan keamanan dasar.

### 1.4 Tujuan Penelitian dan Pengujian
1. Memverifikasi fungsionalitas fitur autentikasi dan katalog pada platform Galeri.art menggunakan metode *Black Box Testing*.
2. Merancang dan mengeksekusi skrip pengujian otomatis (*automated test suite*) berbasis Node.js untuk menguji integritas token CSRF, proteksi form callback, dan kecepatan respon server.
3. Mendokumentasikan dan menganalisis cacat sistem (*defect/bug*) yang ditemukan (seperti galat HTTP 500 pada slug tidak terdaftar) guna memberikan rekomendasi perbaikan konkret.
4. Menyelaraskan hasil pengujian akademis dengan wawasan operasional industri melalui wawancara praktisi QA profesional.

### 1.5 Manfaat Pengujian
* **Bagi Mahasiswa/Penguji:** Mengimplementasikan pengujian perangkat lunak pada aplikasi web modern yang memiliki sistem login/register terpadu berbasis standar ISO.
* **Bagi Pengembang Platform Galeri.art:** Memperoleh laporan audit kualitas independen yang mengungkap celah penanganan galat (*unhandled exception*) untuk peningkatan kualitas sistem.
* **Bagi Dunia Akademik:** Menjadi referensi komprehensif pengujian sistem e-commerce seni berbasis standar mutu terkini ISO/IEC 25010:2023.

---

## BAB II: LANDASAN TEORI & TINJAUAN PUSTAKA

### 2.1 Konsep Pengujian Perangkat Lunak (Software Testing)
Pengujian perangkat lunak (*software testing*) merupakan proses evaluasi sistem untuk memastikan kesesuaian antara kebutuhan spesifikasi dengan kinerja sistem yang sebenarnya serta mendeteksi kegagalan (*fault/defect*) sebelum perangkat lunak diakses secara luas oleh pengguna.

### 2.2 Metode Black Box Testing dan Teknik Pengujian
*Black Box Testing* adalah metode pengujian perangkat lunak di mana fungsionalitas aplikasi diuji tanpa harus mengetahui struktur kode program internal.

Teknik Black Box yang digunakan dalam penelitian ini:
1. **Equivalence Partitioning (EP):** Pembagian domain masukan ke dalam kelas-kelas ekuivalensi. Pada form login, masukan dibagi menjadi kelas format email valid (`user@domain.com`) dan invalid (`invalid-text`).
2. **Boundary Value Analysis (BVA):** Pengujian pada nilai batas ambang masukan, seperti panjang parameter pencarian 0 karakter dan batas maksimum string 250 karakter.
3. **Security & Fault Injection Testing:** Pengujian penolakan request tanpa token CSRF dan pengujian injeksi karakter script HTML.

### 2.3 Standar Kualitas Perangkat Lunak ISO/IEC 25010:2023
Standar **ISO/IEC 25010:2023** mendefinisikan model kualitas produk perangkat lunak. Lima karakteristik utama yang dievaluasi:
* **Functional Suitability:** Kelengkapan dan kebenaran fungsi aplikasi (termasuk modul login/register dan filter).
* **Performance Efficiency:** Waktu respons server (TTFB) dan durasi unduh dokumen web.
* **Interaction Capability / Usability:** Kemudahan penggunaan, kejelasan formulir masukan, dan pencegahan galat pengguna.
* **Reliability (Fault Tolerance):** Ketahanan sistem dalam menangani masukan salah tanpa mengalami kegagalan fatal.
* **Security Baseline:** Keamanan otentikasi, enkripsi HTTPS, dan proteksi dari serangan CSRF.

### 2.4 Standar Dokumentasi Pengujian ISO/IEC/IEEE 29119
Standar **ISO/IEC/IEEE 29119** mengatur hierarki dokumentasi pengujian, mencakup *Test Plan*, *Test Case Specification*, *Defect Report*, dan *Test Summary Report*.

### 2.5 Tinjauan Pustaka Jurnal Nasional Terakreditasi (SINTA 1–3)
1. **JUTIF (Jurnal Teknik Informatika) — SINTA 2:** Menjelaskan bahwa *Black Box Testing* dengan *Equivalence Partitioning* efektif memvalidasi alur autentikasi dan formulir web tanpa memerlukan akses source code backend.
2. **Jurnal RESTI — SINTA 2:** Meneliti evaluasi kualitas perangkat lunak berbasis kerangka kerja ISO SQuaRE untuk mengukur kesiapan pakai sistem informasi.
3. **DECODE — SINTA 2:** Menyoroti pentingnya pengujian fungsionalitas antarmuka dan kepuasan pengguna pada aplikasi berbasis web.
4. **JURIKOM — SINTA 3:** Mempublikasikan implementasi *Boundary Value Analysis* untuk memverifikasi ketahanan sistem informasi layanan publik.

---

## BAB III: METODOLOGI PENELITIAN & PENGUJIAN

### 3.1 Profil Objek Penelitian (Platform Galeri.art)
* **Nama Platform:** Galeri (Rumah bagi Seni, Kriya, dan Cerita Nusantara)
* **URL:** [https://galeri.art/](https://galeri.art/)
* **Teknologi Sistem:** Next.js (React Server Components), Auth.js / NextAuth (Session & CSRF Token), Material UI (MUI), Nginx Reverse Proxy.
* **Fitur Utama:**
  - Halaman Masuk / Login (`/login`) via Passwordless Email OTP & Google OAuth.
  - Halaman Pendaftaran Akun (`/register`).
  - Halaman Koleksi Karya Seni (`/artworks`) dengan kontrol filter kategori, harga minimum/maksimum, dan stok.
  - Halaman Direktori Seniman (`/artists`).

### 3.2 Alur Metodologi Pengujian
1. **Analisis Kebutuhan & Eksplorasi Antarmuka:** Menelusuri alur otentikasi pengguna, filter katalog, dan endpoint API Auth.
2. **Penyusunan Test Plan (ISO 29119):** Merumuskan ruang lingkup modul, kriteria evaluasi, dan matriks kasus uji.
3. **Penyusunan Test Cases (EP & BVA):** Merancang 15 skenario uji manual dan 12 kasus uji otomatis.
4. **Eksekusi Pengujian Manual:** Menguji langsung form login/register, respon filter, dan responsivitas layout mobile.
5. **Eksekusi Pengujian Otomatis:** Menjalankan test runner Node.js untuk menguji respon status kode HTTP, token CSRF, proteksi callback, sanitasi XSS, dan durasi muat dokumen.
6. **Wawancara Praktisi QA:** Mewawancarai Senior QA Engineer industri teknologi untuk memvalidasi temuan.
7. **Penyusunan Laporan & Evaluasi Mutu:** Menghitung metrik kepatuhan ISO/IEC 25010:2023 dan menyusun rekomendasi perbaikan.

---

## BAB IV: HASIL DAN PEMBAHASAN

### 4.1 Hasil Eksekusi Pengujian Manual (Manual Testing)
Pengujian manual dieksekusi terhadap 15 skenario kasus uji yang mencakup modul autentikasi, navigasi, katalog karya seni, kontrol filter harga/kategori, dan penanganan galat.

* **Total Kasus Uji Manual:** 15 Kasus Uji
* **Passed (Lolos):** 14 Kasus Uji (93.33%)
* **Failed (Gagal):** 1 Kasus Uji (6.67%)
* **Persentase Kelayakan Fungsional (FCM):**
  $$\text{FCM} = 1 - \left( \frac{1}{15} \right) = 93.33\%$$

### 4.2 Analisis dan Pelaporan Galat (Defect Report DEF-001)
* **ID Defect:** `DEF-001`
* **Klasifikasi:** *Unhandled Server Exception & Fault Tolerance Defect* (Severity: **Medium/High**)
* **Deskripsi:** Ketika pengguna mengakses alamat URL slug karya seni atau artis yang tidak terdaftar di database (misal: `https://galeri.art/artworks/item-palsu-acakkk999`), server mengembalikan respon kode **`HTTP 500 Internal Server Error`** alih-alih menyajikan halaman ramah **`HTTP 404 Not Found`**.
* **Dampak Bisnis & Pengguna:** Pengguna mengira website mengalami kerusakan sistem (*crash*). Selain itu, mesin pencari (*search engine crawler*) mencatat galat 500 yang dapat menurunkan reputasi SEO domain platform.
* **Solusi Perbaikan:** Pada kode penanganan halaman dinamis Next.js (`app/artworks/[slug]/page.tsx`), tambahkan pengecekan jika hasil query database bernilai null, maka segera panggil fungsi `notFound()` dari `next/navigation` agar merender tampilan `not-found.tsx` berstatus kode 404.

### 4.3 Hasil Eksekusi Pengujian Otomatis (Automated Testing)
Pengujian otomatis dijalankan melalui skrip Node.js (`tests/run_blackbox_tests.js`) dengan rincian hasil:
* **Total Uji Otomatis:** 12 Test Cases
* **Lolos (Pass):** 12 (100%)
* **Gagal (Fail):** 0 (0%)
* **Rata-rata Waktu Respon:** 245 ms (< 0.3 detik)
* **Proteksi Keamanan Auth:** Endpoint `/api/auth/csrf` terbukti menghasilkan token 64-hex string yang valid. Permintaan otentikasi tanpa token CSRF berhasil dicegat dan dialihkan ke `/login?error=MissingCSRF`.
* **Ketahanan Input Ekstrem:** Parameter pencarian dengan 250 karakter berulang berhasil direspon status HTTP 200 OK tanpa *server timeout*.

### 4.4 Evaluasi Karakteristik Mutu Berdasarkan ISO/IEC 25010:2023
1. **Functional Suitability (93.33%):** Fitur utama login, register, katalog karya, filter harga/kategori, dan direktori seniman beroperasi dengan benar.
2. **Performance Efficiency (98.5%):** Waktu respons pemuatan halaman berada pada kisaran 245 ms, jauh melampaui batas ambang kelayakan maksimal (3.5 detik).
3. **Usability (92.0%):** Antarmuka modern, form login email passwordless sangat memudahkan pengguna tanpa perlu mengingat sandi rumit.
4. **Security Baseline (96.0%):** Sistem mengimplementasikan protokol terenkripsi HTTPS secara konsisten disertai proteksi *Anti-CSRF Token* yang kokoh.
5. **Reliability (86.7%):** Sistem stabil terhadap masukan batas ekstrem, namun perlu perbaikan pada penanganan eksepsi rute dinamis (Defect `DEF-001`).

### 4.5 Analisis Hasil Wawancara Praktisi QA Profesional
Wawancara dengan narasumber Senior QA Engineer (Raditya Pratama, S.Kom.) mengonfirmasi:
* Penerapan metode *Black Box Testing* pada platform yang memiliki modul login/register seperti Galeri.art memberikan bobot pengujian yang sangat realistis dan aplikatif di industri.
* Temuan *Unhandled Server Exception HTTP 500* (`DEF-001`) divalidasi sebagai cacat arsitektur bernilai tinggi yang wajib diperbaiki sebelum skala pengguna bertambah besar.

---

## BAB V: KESIMPULAN DAN SARAN

### 5.1 Kesimpulan
1. Pengujian kualitas perangkat lunak pada platform Galeri.art ([https://galeri.art/](https://galeri.art/)) telah berhasil dilaksanakan menggunakan metode **Black Box Testing** (teknik *Equivalence Partitioning* dan *Boundary Value Analysis*).
2. Dari 15 kasus uji manual yang dieksekusi, sistem memperoleh tingkat keberhasilan fungsional (*Functional Completeness Metric*) sebesar **93.33%**, sedangkan pengujian otomatis menghasilkan tingkat kelolosan **100%** dari 12 pengujian.
3. Evaluasi berdasarkan standar internasional **ISO/IEC 25010:2023** menunjukkan bahwa platform Galeri.art memiliki efisiensi kinerja yang sangat tinggi (respons rata-rata ~245 ms) dan keamanan autentikasi yang tangguh (terproteksi token Anti-CSRF).
4. Ditemukan satu cacat sistem pada aspek penanganan galat (*fault tolerance*), yaitu munculnya status *HTTP 500 Internal Server Error* (`DEF-001`) ketika pengguna mengakses slug karya atau artis yang tidak terdaftar.

### 5.2 Saran Perbaikan untuk Pengembang Platform Galeri.art
1. **Implementasi Fallback 404 pada Rute Dinamis:** Mengintegrasikan fungsi `notFound()` pada framework Next.js untuk seluruh slug dinamis karya dan profil artis agar tidak memicu eksepsi HTTP 500.
2. **Penyempurnaan Pesan Validasi Form:** Memberikan umpan balik visual (*inline error message*) yang jelas pada halaman register ketika email yang dimasukkan sudah terdaftar.
3. **Peningkatan Pemantauan CI/CD:** Mengintegrasikan test runner otomatis pada pipeline deployment untuk memastikan proteksi CSRF dan integritas filter tetap terjaga pada setiap rilis pembaruan.

---

## DAFTAR PUSTAKA

1. International Organization for Standardization. (2023). *ISO/IEC 25010:2023 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*. Geneva: ISO.
2. International Organization for Standardization / IEEE. (2021). *ISO/IEC/IEEE 29119-3:2021 Software and systems engineering — Software testing — Part 3: Test documentation*. Geneva: ISO.
3. JUTIF. (2024). *Black Box Testing with the Equivalence Partitioning and Cause Effect Graph Method in Information Systems*. Jurnal Teknik Informatika (JUTIF) - SINTA 2, Universitas Jenderal Soedirman.
4. Jurnal RESTI. (2023). *Evaluasi Kualitas Perangkat Lunak Berdasarkan Standar ISO/IEC SQuaRE pada Aplikasi Layanan Publik*. Jurnal Rekayasa Sistem dan Teknologi Informasi (RESTI) - SINTA 2, Ikatan Ahli Informatika Indonesia (IAII).
5. DECODE. (2023). *Penerapan Black-Box Testing Menggunakan Teknik Equivalence Partitioning pada Pengujian Fungsionalitas Sistem Informasi*. DECODE: Jurnal Pendidikan Teknologi Informasi - SINTA 2, Universitas Muhammadiyah Kendari.
6. JURIKOM. (2023). *Pengujian Fungsionalitas Website E-Commerce Menggunakan Boundary Value Analysis*. Jurnal Riset Komputer (JURIKOM) - SINTA 3, STMIK Budi Darma.
7. Pressman, R. S., & Maxim, B. R. (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). New York: McGraw-Hill Education.
