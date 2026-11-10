# DOKUMEN RENCANA PENGUJIAN SISTEM (TEST PLAN)
## Berdasarkan Standar ISO/IEC/IEEE 29119-3:2021 & ISO/IEC 25010:2023

---

### Informasi Dokumen
| Parameter | Deskripsi |
| :--- | :--- |
| **Judul Proyek** | Analisis Pengujian Kualitas dan Fungsionalitas Website Keke Craft Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023 |
| **Nama Aplikasi / Target** | Website Resmi Keke Craft Tangerang |
| **URL Target** | [https://www.galerikeke.com/](https://www.galerikeke.com/) |
| **Tim Penyusun (Kelompok)** | 1. **Bagas Afrizal** (NIM: 231011400204)<br>2. **Abdul Hafizh Ar Rasyid** (NIM: 231011403352)<br>3. **Aditya Eka Purnama** (NIM: 231011400988)<br>4. **Syaifa Maulana** (NIM: 231011401802) |
| **Mata Kuliah** | Testing & Quality Assurance (QA) - Semester 7 |
| **Program Studi / Kampus** | Teknik Informatika / Universitas Pamulang |
| **Versi Dokumen** | 1.0.0 |
| **Tanggal Terbit** | November 2026 |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3:2021 *(Test Documentation)* & ISO/IEC 25010:2023 *(Product Quality Model)* |

---

## 1. Pendahuluan (Introduction)

### 1.1 Latar Belakang & Deskripsi Sistem
Keke Craft merupakan unit Usaha Mikro, Kecil, dan Menengah (UMKM) kriya unggulan di Tangerang yang berfokus pada produksi kerajinan ramah lingkungan berbahan anyaman pandan dipadukan dengan tenun Nusantara, batik, dan kulit asli. Untuk memperluas jangkauan pasar, Keke Craft mengoperasikan portal resmi [galerikeke.com](https://www.galerikeke.com/) sebagai media katalog digital, informasi profil usaha, dan kanal interaksi pemesanan konsumen.

Sebagai sistem *medium ke bawah* yang digunakan langsung oleh publik dan calon pembeli, kualitas antarmuka, fungsionalitas navigasi, serta ketahanan sistem menjadi faktor krusial. Oleh karena itu, pengujian penjaminan mutu (*Quality Assurance*) berbasis standar internasional diperlukan guna mengevaluasi keandalan situs secara menyeluruh.

### 1.2 Tujuan Pengujian (Test Objectives)
1. Memverifikasi fungsionalitas seluruh fitur utama pada website Keke Craft sesuai spesifikasi kebutuhan pengguna (*Functional Suitability*).
2. Mengidentifikasi galat (*defect/bug*), tautan rusak (*broken links*), anomali antarmuka, dan validasi input menggunakan metode **Black Box Testing**.
3. Menilai kualitas portal berdasarkan karakteristik mutu standar **ISO/IEC 25010:2023** (*Functional Suitability, Usability, Performance Efficiency, Compatibility, Security*).
4. Melaksanakan pengujian secara komprehensif melalui dua pendekatan: **Manual Testing** dan **Automated Testing**.
5. Mengintegrasikan wawasan praktisi industri melalui wawancara dengan profesional *Quality Assurance* (QA) untuk memvalidasi relevansi hasil pengujian dengan standar industri.

---

## 2. Ruang Lingkup Pengujian (Test Scope)

### 2.1 Item Pengujian (Items to be Tested)
* **Halaman Beranda (Home - `/`):** Header, navigasi menu utama, hero section, carousel portofolio kriya, deskripsi nilai produk, footer, dan ikon tautan media sosial.
* **Halaman Produk (Product Catalog - `/product/`):** Tampilan grid produk kriya (Tote Bag, Pouch, Sleeve, dll.), deskripsi dimensi ukuran, gambar produk, dan struktur tata letak katalog.
* **Halaman Profil (About Us - `/about-us/`):** Teks visi, sejarah UMKM Keke Craft sejak 2021, integrasi elemen grafis, dan responsivitas halaman.
* **Fungsi Interaksi & Komunikasi (CTA Buttons):**
  - Tombol WhatsApp Direct Chat (`https://wa.me/6281386058147`).
  - Tautan Instagram resmi (`https://www.instagram.com/kekecraft_`).
  - Tautan Facebook resmi (`https://www.facebook.com/share/18mBgD3fpP/`).
* **Fitur Pencarian Sistem (Global Search - `/?s={query}`):**
  - Pencarian kata kunci valid (misal: "tas", "pandan").
  - Pencarian kata kunci invalid / tidak ditemukan.
  - Penanganan masukan kosong (*empty query*) dan karakter khusus (*special characters / XSS payload basic*).
* **Performa & Kompatibilitas:** Waktu muat halaman (*load time*), TTFB (*Time to First Byte*), HTTP Response Code, dan tampilan responsif (Desktop, Tablet, Mobile).

### 2.2 Item yang Tidak Diuji (Out of Scope)
* Kode sumber backend (*source code internal server-side PHP/LiteSpeed*) dan basis data internal MySQL pengelola (karena hak akses terbatas dan pengujian berfokus pada metode Black Box).
* Sistem pembayaran payment gateway otomatis (website Keke Craft saat ini menggunakan skema katalog dan pemesanan direct chat WhatsApp, bukan automated checkout cart).
* Uji penetrasi mendalam (*deep black-hat penetration testing*) yang berpotensi menyebabkan *Denial of Service* (DoS) pada server UMKM.

---

## 3. Strategi Pengujian (Test Strategy)

### 3.1 Pendekatan Metode: Black Box Testing
Metode pengujian yang dipilih secara eksklusif adalah **Black Box Testing**. Pengujian dilakukan dari perspektif pengguna akhir (*end-user*) tanpa memerlukan pengetahuan atau akses terhadap struktur logika internal program.

Teknik Black Box yang diimplementasikan:
1. **Equivalence Partitioning (EP):** Mengelompokkan domain masukan (input) ke dalam partisi kelas valid dan invalid untuk menguji respon fungsi pencarian dan parameter URL.
2. **Boundary Value Analysis (BVA):** Menguji nilai batas panjang karakter masukan kata kunci pencarian (panjang minimum, normal, dan ekstrem).
3. **End-to-End Scenario Testing:** Menguji alur pengguna dari mulai menemukan produk di katalog hingga menekan tombol pemesanan melalui WhatsApp.

### 3.2 Pendekatan Eksekusi: Manual & Otomatis
| Aspek | Pengujian Manual (Manual Testing) | Pengujian Otomatis (Automated Testing) |
| :--- | :--- | :--- |
| **Fokus** | Eksplorasi UX, layout visual antarmuka, verifikasi pesan teks, dan navigasi lintas halaman. | Regresi fungsionalitas, status HTTP, verifikasi keberadaan elemen DOM, dan pengujian parameter pencarian. |
| **Alat Bantu (Tools)** | Web Browser (Google Chrome, Firefox, Safari), DevTools Network, Lighthouse Audit. | Automated Test Runner (Node.js Test Framework / Playwright / Script Test Runner). |
| **Artefak** | Tabel Test Matrix, Lembar Test Case, Bukti Tangkapan Layar (*Defect Screenshot*). | Test Script (`*.test.js`), Log Eksekusi Konsol, Laporan Pengujian Otomatis JSON/HTML. |

---

## 4. Kriteria Kelayakan (Criteria for Pass/Fail)

### 4.1 Kriteria Lolos Pengujian (Pass Criteria)
1. Fitur utama (navigasi, visualisasi katalog, dan tombol kontak WhatsApp) berfungsi sesuai skenario tanpa galat fatal (*fatal error / broken link 404/500*).
2. Status respon HTTP untuk seluruh halaman utama adalah `200 OK`.
3. Tautan eksternal (WhatsApp, Instagram, Facebook) membuka tujuan URL yang valid dan tepat.
4. Fitur pencarian menampilkan hasil yang relevan untuk input valid dan pesan ramah pengguna ketika data tidak ditemukan.
5. Nilai kepatuhan mutu ISO/IEC 25010:2023 pada aspek *Functional Suitability* minimal 85%.

### 4.2 Kriteria Penghentian Sementara & Dimulai Kembali (Suspension & Resumption)
* **Suspensi:** Pengujian ditangguhkan apabila server target mengalami *downtime* (*HTTP 502/503/504*) atau koneksi internet penguji terputus.
* **Resumsi:** Pengujian dilanjutkan kembali setelah situs kembali dapat diakses normal (*HTTP 200*).

---

## 5. Sumber Daya & Lingkungan Pengujian (Test Environment)

### 5.1 Perangkat Keras (Hardware)
* Komputer Penguji: Mac / PC (Processor Multi-Core, RAM ≥ 8 GB, Resolusi Layar 1920x1080 & Retina Display).
* Perangkat Mobile (Pengujian Responsif): Layar Emulasi Smartphone (375x667 hingga 414x896 piksel).

### 5.2 Perangkat Lunak (Software)
* Sistem Operasi: macOS Sonoma / Linux / Windows 11.
* Web Browser: Google Chrome (versi terbaru), Mozilla Firefox, Apple Safari.
* Node.js Engine (v18+) untuk skrip automasi pengujian.
* Version Control System: Git & GitHub Repository.
