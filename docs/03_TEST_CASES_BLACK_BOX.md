# SPESIFIKASI TEST SCENARIOS & TEST CASES
## Metode: Black Box Testing (Equivalence Partitioning & Boundary Value Analysis)
## Standar: ISO/IEC/IEEE 29119 & ISO/IEC 25010:2023

---

## 1. Ringkasan Modul Pengujian

| Modul | Kode | Deskripsi Pengujian |
| :--- | :--- | :--- |
| **Navigasi & Tata Letak** | `MOD-NAV` | Pengujian menu utama, header, dan struktur navigasi situs |
| **Katalog Produk** | `MOD-CAT` | Pengujian tampilan katalog, detail dimensi ukuran kerajinan pandan |
| **Call-to-Action (CTA)** | `MOD-CTA` | Pengujian tombol penghubung eksternal (WhatsApp, Instagram, Facebook) |
| **Fungsi Pencarian** | `MOD-SRC` | Pengujian fitur pencarian produk dengan teknik EP & BVA |
| **Keamanan & Validasi** | `MOD-SEC` | Pengujian sanitasi input XSS sederhana dan validasi enkripsi HTTPS |
| **Performa & Responsif** | `MOD-RSP` | Pengujian waktu muat dan keluwesan tampilan pada perangkat *mobile* |

---

## 2. Rincian Kasus Uji (Test Cases)

### Modul 1: Navigasi Menu & Header (MOD-NAV)

#### TC-NAV-01: Pengujian Tautan Menu Beranda (Home)
* **Karakteristik ISO:** *Functional Suitability (Functional Correctness)*
* **Prasyarat:** Pengguna membuka peramban web pada halaman manapun di situs Keke Craft.
* **Langkah Pengujian:**
  1. Akses halaman `https://www.galerikeke.com/about-us/`.
  2. Klik menu **"Home"** pada navigation bar.
* **Data Uji:** Klik tautan `https://www.galerikeke.com/`.
* **Hasil yang Diharapkan:** Peramban diarahkan ke halaman utama (`/`), konten hero banner Keke Craft tampil lengkap, HTTP status 200.

#### TC-NAV-02: Pengujian Tautan Menu Produk (Product)
* **Karakteristik ISO:** *Functional Suitability (Functional Correctness)*
* **Prasyarat:** Pengguna berada di halaman utama `https://www.galerikeke.com/`.
* **Langkah Pengujian:**
  1. Klik menu **"Product"** pada navigation bar.
* **Data Uji:** Klik tautan `https://www.galerikeke.com/product/`.
* **Hasil yang Diharapkan:** Halaman katalog produk terbuka dengan judul "PRODUK KEKE CRAFT", HTTP status 200.

#### TC-NAV-03: Pengujian Tautan Menu Profil (About Us)
* **Karakteristik ISO:** *Functional Suitability (Functional Correctness)*
* **Prasyarat:** Pengguna berada di halaman utama `https://www.galerikeke.com/`.
* **Langkah Pengujian:**
  1. Klik menu **"About Us"** pada navigation bar.
* **Data Uji:** Klik tautan `https://www.galerikeke.com/about-us/`.
* **Hasil yang Diharapkan:** Halaman profil UMKM Keke Craft terbuka, menampilkan teks sejarah sejak tahun 2021 dan filosofi anyaman pandan.

---

### Modul 2: Katalog Produk Kriya (MOD-CAT)

#### TC-CAT-01: Verifikasi Visualisasi Grid Produk Kriya
* **Karakteristik ISO:** *Functional Suitability & Usability*
* **Prasyarat:** Halaman `https://www.galerikeke.com/product/` telah dimuat.
* **Langkah Pengujian:**
  1. Gulir (*scroll*) ke bawah pada daftar produk kriya.
  2. Periksa keberadaan foto produk, judul produk, dan deskripsi dimensi ukuran.
* **Data Uji:** Item katalog (Tote Bag AGDA, BONITA, ALICE, CAYAPATA, Cakrajiya Laptop Sleeve).
* **Hasil yang Diharapkan:** Gambar produk dirender dengan baik tanpa gambar rusak (*broken image icon*), label nama dan dimensi tertera jelas.

#### TC-CAT-02: Pemeriksaan Kelengkapan Informasi Dimensi Ukuran
* **Karakteristik ISO:** *Functional Suitability (Functional Completeness)*
* **Prasyarat:** Berada di halaman `/product/`.
* **Langkah Pengujian:**
  1. Periksa setiap deskripsi produk kerajinan di bawah gambar.
* **Data Uji:** Seluruh elemen teks dimensi produk.
* **Hasil yang Diharapkan:** Setiap produk yang tercantum memiliki dimensi ukuran yang spesifik (misal: "34 x 10 x 27 Cm").

---

### Modul 3: Integrasi Call-to-Action (MOD-CTA)

#### TC-CTA-01: Verifikasi Tombol Pemesanan Langsung WhatsApp
* **Karakteristik ISO:** *Compatibility (Interoperability) & Functional Correctness*
* **Prasyarat:** Berada di halaman beranda `/`.
* **Langkah Pengujian:**
  1. Gulir ke bagian "Hubungi Kami".
  2. Klik ikon atau tautan WhatsApp.
* **Data Uji:** Tautan `https://wa.me/6281386058147`.
* **Hasil yang Diharapkan:** Pengguna dialihkan ke domain resmi WhatsApp API (`wa.me` / `api.whatsapp.com`) yang terhubung dengan nomor telepon resmi Keke Craft (`+62 813-8605-8147`).

#### TC-CTA-02: Verifikasi Tautan Akun Instagram Resmi
* **Karakteristik ISO:** *Functional Correctness & Compatibility*
* **Prasyarat:** Berada di footer atau bagian kontak website.
* **Langkah Pengujian:**
  1. Klik ikon Instagram.
* **Data Uji:** Tautan `https://www.instagram.com/kekecraft_`.
* **Hasil yang Diharapkan:** Membuka tab baru yang mengarah ke profil Instagram `@kekecraft_` tanpa galat 404.

#### TC-CTA-03: Verifikasi Tautan Halaman Facebook Resmi
* **Karakteristik ISO:** *Functional Correctness & Compatibility*
* **Prasyarat:** Berada di footer atau bagian kontak website.
* **Langkah Pengujian:**
  1. Klik ikon Facebook.
* **Data Uji:** Tautan `https://www.facebook.com/share/18mBgD3fpP/`.
* **Hasil yang Diharapkan:** Mengarahkan ke halaman Facebook resmi Keke Craft.

---

### Modul 4: Pengujian Fitur Pencarian (MOD-SRC)
*Teknik: Equivalence Partitioning (EP) dan Boundary Value Analysis (BVA)*

#### TC-SRC-01: Pencarian dengan Kata Kunci Valid (EP - Valid Partition)
* **Karakteristik ISO:** *Functional Correctness*
* **Teknik:** Equivalence Partitioning (Input data produk yang eksis).
* **Langkah Pengujian:**
  1. Masukkan kata kunci "tas" atau "pandan" pada endpoint pencarian.
* **Data Uji:** `https://www.galerikeke.com/?s=tas`.
* **Hasil yang Diharapkan:** Halaman menampilkan judul "Hasil Pencarian untuk: tas" dan memuat artikel/katalog terkait produk tas anyaman pandan.

#### TC-SRC-02: Pencarian dengan Kata Kunci Tidak Ditemukan (EP - Invalid Partition)
* **Karakteristik ISO:** *Usability (User Error Protection)*
* **Teknik:** Equivalence Partitioning (Input data yang tidak ada di sistem).
* **Langkah Pengujian:**
  1. Masukkan kata kunci acak yang tidak berhubungan dengan produk.
* **Data Uji:** `https://www.galerikeke.com/?s=produkxyzabckosong999`.
* **Hasil yang Diharapkan:** Sistem tidak mengalami *crash/blank page*, melainkan menampilkan pesan ramah: *"Maaf, tidak ada yang sesuai dengan kata kunci Anda. Silahkan coba lagi dengan kata kunci lain."*

#### TC-SRC-03: Pencarian dengan Nilai Parameter Kosong (BVA - Boundary Min)
* **Karakteristik ISO:** *Functional Suitability & Robustness*
* **Teknik:** Boundary Value Analysis (Panjang karakter masukan = 0).
* **Langkah Pengujian:**
  1. Akses parameter pencarian tanpa memasukkan teks query.
* **Data Uji:** `https://www.galerikeke.com/?s=`.
* **Hasil yang Diharapkan:** Sistem menangani permintaan dengan wajar, mengembalikan respon status 200 OK tanpa galat fatal server.

#### TC-SRC-04: Pencarian dengan Karakter Panjang Ekstrem (BVA - Boundary Max)
* **Karakteristik ISO:** *Reliability & Robustness*
* **Teknik:** Boundary Value Analysis (Panjang string 200 karakter berulang).
* **Langkah Pengujian:**
  1. Masukkan string panjang berulang ke parameter `s`.
* **Data Uji:** `/?s=` + 200 karakter `"A"`.
* **Hasil yang Diharapkan:** Server tetap merespon dengan status 200, string dipotong atau ditampilkan aman tanpa merusak layout antarmuka situs.

---

### Modul 5: Keamanan Antarmuka & Validasi Masukan (MOD-SEC)

#### TC-SEC-01: Pengujian Sanitasi Masukan Karakter Khusus / Basic XSS
* **Karakteristik ISO:** *Security (Integrity & Resistance)*
* **Teknik:** Black Box Fault Injection.
* **Langkah Pengujian:**
  1. Masukkan payload tag HTML/Script ke query pencarian: `<script>alert('QA-TEST')</script>`.
  2. Periksa kode HTML sumber dari respon halaman.
* **Data Uji:** `https://www.galerikeke.com/?s=%3Cscript%3Ealert(%27QA-TEST%27)%3C/script%3E`.
* **Hasil yang Diharapkan:** Tag script dinetralisasi / di-escape secara otomatis menjadi entitas HTML teks biasa sehingga tidak dieksekusi oleh peramban klien.

#### TC-SEC-02: Verifikasi Enforce HTTPS / SSL Certificate
* **Karakteristik ISO:** *Security (Confidentiality)*
* **Langkah Pengujian:**
  1. Akses alamat web menggunakan protokol tidak aman `http://www.galerikeke.com/`.
  2. Periksa pengalihan otomatis (*redirection*) dan keabsahan sertifikat TLS.
* **Data Uji:** Request via HTTP port 80.
* **Hasil yang Diharapkan:** Server otomatis mengalihkan koneksi ke `https://` (Enforced HTTPS) dengan sertifikat SSL yang valid dan tidak kadaluwarsa.

---

### Modul 6: Kinerja & Responsivitas Antarmuka (MOD-RSP)

#### TC-RSP-01: Responsivitas Tampilan pada Layar Smartphone Mobile
* **Karakteristik ISO:** *Compatibility & Usability*
* **Prasyarat:** Peramban web dengan Developer Tools Responsive Mode aktif.
* **Langkah Pengujian:**
  1. Atur viewport ke ukuran layar 375x667 piksel (iPhone SE/XR/12).
  2. Periksa tampilan menu navigasi (hamburger button), teks, dan gambar produk.
* **Data Uji:** Viewport width 375px & 414px.
* **Hasil yang Diharapkan:** Tidak terjadi overflow horizontal yang memotong teks; tombol hamburger menu berfungsi membuka menu navigasi di perangkat *mobile*.

#### TC-PERF-01: Pengukuran Waktu Muat Halaman (Page Load Time)
* **Karakteristik ISO:** *Performance Efficiency (Time Behavior)*
* **Langkah Pengujian:**
  1. Ukur durasi waktu respons server (TTFB) dan penyelesaian unduhan dokumen pada halaman beranda dan katalog.
* **Data Uji:** Akses `https://www.galerikeke.com/` dan `https://www.galerikeke.com/product/`.
* **Hasil yang Diharapkan:** Waktu muat dokumen utama berada dalam toleransi $< 3.5$ detik pada jaringan stabil.
