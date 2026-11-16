# DOKUMEN RENCANA PENGUJIAN SISTEM (TEST PLAN)
## Berdasarkan Standar ISO/IEC/IEEE 29119-3:2021 & ISO/IEC 25010:2023

---

### Informasi Dokumen
| Parameter | Deskripsi |
| :--- | :--- |
| **Judul Proyek** | Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023 |
| **Nama Aplikasi / Target** | Platform Galeri (Rumah bagi Seni, Kriya, dan Cerita Nusantara) |
| **URL Target** | [https://galeri.art/](https://galeri.art/) |
| **Tim Penyusun (Kelompok)** | 1. **Bagas Afrizal** (NIM: 231011400204)<br>2. **Abdul Hafizh Ar Rasyid** (NIM: 231011403352)<br>3. **Aditya Eka Purnama** (NIM: 231011400988)<br>4. **Syaifa Maulana** (NIM: 231011401802) |
| **Mata Kuliah** | Testing & Quality Assurance (QA) - Semester 7 |
| **Program Studi / Kampus** | Teknik Informatika / Universitas Pamulang |
| **Versi Dokumen** | 2.0.0 |
| **Tanggal Terbit** | November 2026 |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3:2021 *(Test Documentation)* & ISO/IEC 25010:2023 *(Product Quality Model)* |

---

## 1. Pendahuluan (Introduction)

### 1.1 Latar Belakang & Deskripsi Sistem
**Galeri.art** merupakan platform digital marketplace dan kurasi karya seni serta produk kerajinan tangan (*artisan craft*) lokal asli Indonesia. Platform ini mewadahi berbagai kreator, seniman, dan UMKM kriya dari seluruh penjuru Indonesia untuk memamerkan dan memperdagangkan karya mereka.

Dibangun dengan teknologi web modern berbasis **Next.js** dan sistem autentikasi terpadu **Auth.js / NextAuth**, platform ini menyajikan fitur interaktif yang meliputi:
* **Autentikasi Pengguna:** Halaman Masuk (*Login* `/login`) dan Pendaftaran (*Register* `/register`) menggunakan *passwordless magic link / OTP email* serta integrasi *OAuth*.
* **Koleksi Karya (*Artworks* `/artworks`):** Fitur katalog produk seni, filter kategori, filter rentang harga (minimum-maksimum), status ketersediaan (*ready stock / pre-order*), serta pencarian kata kunci.
* **Direktori Seniman (*Artists* `/artists`):** Halaman profil para pembuat karya kriya dan cerita di balik karya mereka.
* **Kanal Transaksi & Informasi:** Halaman detail karya, Tentang Galeri (`/about`), Cara Kerja (`/cara-kerja`), dan Panduan (`/panduan`).

Sebagai sistem kategori menengah yang melayani interaksi pengguna aktif dan autentikasi akun, keandalan fungsional, keamanan transmisi data, dan ketahanan terhadap galat masukan menjadi faktor yang sangat krusial. Oleh karena itu, pengujian penjaminan mutu (*Quality Assurance*) berbasis standar internasional **ISO/IEC 25010:2023** dan **ISO/IEC/IEEE 29119** dilaksanakan untuk mengevaluasi kualitas platform secara objektif.

### 1.2 Tujuan Pengujian (Test Objectives)
1. Memverifikasi fungsionalitas fitur autentikasi (login, register, validasi CSRF) pada platform Galeri.art (*Functional Suitability & Security*).
2. Memverifikasi fungsionalitas penjelajahan katalog karya seni, filter harga, filter kategori, dan pencarian produk (*Functional Completeness & Correctness*).
3. Mengidentifikasi galat (*defect/bug*), penanganan *error* pada slug tidak ditemukan, serta anomali respons sistem menggunakan metode **Black Box Testing**.
4. Mengukur kepatuhan terhadap standar mutu **ISO/IEC 25010:2023** (*Functional Suitability, Usability, Performance Efficiency, Compatibility, Reliability, Security*).
5. Melaksanakan pengujian secara komprehensif melalui dua pendekatan: **Manual Testing** dan **Automated Testing**.
6. Menghubungkan temuan pengujian dengan wawasan praktisi industri melalui wawancara QA Engineer profesional.

---

## 2. Ruang Lingkup Pengujian (Test Scope)

### 2.1 Item Pengujian (Items to be Tested)
* **Modul Autentikasi Pengguna (Authentication Module):**
  - Halaman Masuk / Login (`https://galeri.art/login`): Form masukan email, validasi format email, tombol "Kirim kode masuk", dan proteksi token CSRF.
  - Halaman Pendaftaran / Register (`https://galeri.art/register`): Form masukan Nama, Email, tombol "Buat Akun", dan tautan navigasi ke halaman login.
  - Endpoint Keamanan Auth (`/api/auth/csrf` & `/api/auth/callback/credentials`): Verifikasi pembangkitan token CSRF dan penolakan permintaan tanpa token (*Missing CSRF error*).
* **Modul Katalog Karya Seni (Artworks Module - `/artworks`):**
  - Tampilan grid produk seni/kriya (gambar, nama karya, nama artisan, harga).
  - Kontrol filter rentang harga (input `minPrice` dan `maxPrice`).
  - Kontrol filter kategori (`categoryId`) dan filter status ketersediaan.
  - Fitur pencarian ("Cari di galeri").
* **Modul Direktori Seniman (Artists Directory - `/artists`):**
  - Daftar kartu profil artisan, tautan profil seniman, dan bio singkat.
* **Modul Halaman Informasi & Navigasi Utama:**
  - Header, logo Galeri, navigasi beranda (`/`), Tentang Galeri (`/about`), Panduan (`/panduan`), dan Kebijakan Privasi (`/privacy-policy`).
* **Pengujian Robustness & Error Handling:**
  - Respon sistem terhadap slug karya seni atau seniman yang tidak terdaftar (misal `/artworks/slug-tidak-ditemukan-xyz`).
  - Sanitasi karakter script / HTML injection (`<script>alert('xss')</script>`).
* **Performa & Kompatibilitas:**
  - Kecepatan pemuatan halaman katalog (TTFB & Load duration $< 3.5\text{ detik}$).
  - Responsivitas tampilan pada resolusi layar *smartphone* (375px - 414px) dan *desktop*.

### 2.2 Item yang Tidak Diuji (Out of Scope)
* Kode sumber backend (*Next.js server-side / Node.js runtime*) dan basis data internal produksi pengelola.
* Proses penerimaan kode OTP email di kotak masuk pengguna nyata (karena pengujian berfokus pada validasi antarmuka dan respon API tanpa melakukan spam email massal).
* Uji penetrasi beban ekstrem (*DDoS / Stress Testing*) yang berisiko mengganggu operasional live server Galeri.art.

---

## 3. Strategi Pengujian (Test Strategy)

### 3.1 Pendekatan Metode: Black Box Testing
Pengujian dilakukan secara murni menggunakan metode **Black Box Testing** dari perspektif pengguna luar (*end-user*):
1. **Equivalence Partitioning (EP):**
   - Masukan email valid (`user@example.com`) vs masukan email invalid (`invalid-email-format`).
   - Masukan kategori valid (`?categoryId=...`) vs kategori acak.
2. **Boundary Value Analysis (BVA):**
   - Nilai batas panjang teks masukan pencarian (panjang 0 karakter hingga 250 karakter).
   - Nilai batas rentang harga minimum (0) dan maksimum.
3. **Fault Injection & Error Guessing:**
   - Permintaan otentikasi tanpa menyertakan CSRF token.
   - Akses URL slug dinamis yang tidak ada di basis data.

### 3.2 Pendekatan Eksekusi: Manual & Otomatis
* **Manual Testing:** Eksplorasi interaksi UI, pengujian responsivitas tata letak, pengujian formulir login/register, dan observasi penanganan galat.
* **Automated Testing:** Eksekusi skrip test runner berbasis Node.js (`tests/run_blackbox_tests.js`) yang menguji 12 parameter fungsional, status HTTP, token CSRF, proteksi form callback, sanitasi XSS, dan durasi muat dokumen.

---

## 4. Kriteria Kelayakan (Pass / Fail Criteria)
* **Pass:** Fitur login, register, katalog, filter, dan navigasi beroperasi dengan status kode HTTP 200, proteksi CSRF bekerja, dan waktu respons $< 3.5\text{ detik}$.
* **Fail:** Terjadi galat fatal *Internal Server Error (HTTP 500)* pada alur normal, atau formulir otentikasi tidak memvalidasi masukan secara semestinya.
