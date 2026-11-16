# Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023

[![QA Black Box Tests](https://github.com/bagasafrz7/analisis-pengujian-sistem/actions/workflows/qa-tests.yml/badge.svg)](https://github.com/bagasafrz7/analisis-pengujian-sistem/actions)
![Standard ISO 25010:2023](https://img.shields.io/badge/Standard-ISO%2FIEC%2025010%3A2023-blue)
![Testing Black Box](https://img.shields.io/badge/Method-Black%20Box%20Testing-green)
![SINTA Accredited](https://img.shields.io/badge/Reference-SINTA%202%20%26%203-purple)
![License MIT](https://img.shields.io/badge/License-MIT-orange)

Proyek tugas mata kuliah **Testing & Quality Assurance (QA)** — Semester 7, Program Studi Teknik Informatika, Universitas Pamulang.

---

## 📌 Informasi Proyek

| Atribut | Keterangan |
| :--- | :--- |
| **Mata Kuliah** | Testing & Quality Assurance (QA) |
| **Semester** | 7 (Tujuh) |
| **Objek Penelitian** | **Galeri** — Rumah bagi Seni, Kriya, dan Cerita Nusantara |
| **URL Website** | [https://galeri.art/](https://galeri.art/) |
| **Kategori Sistem** | Platform E-Commerce & Kurasi Karya Seni UMKM (Skala Menengah / Web Modern) |
| **Fitur Kunci** | Autentikasi Pengguna (Login/Register Passwordless & Google OAuth), Kurasi Karya Seni (`/artworks`), Direktori Seniman (`/artists`), Pencarian & Filter Harga/Kategori |
| **Metode Pengujian** | **Black Box Testing** (Manual & Automated Testing) |
| **Teknik Pengujian** | *Equivalence Partitioning*, *Boundary Value Analysis*, dan *End-to-End Scenario Testing* |
| **Standar Acuan QA** | **ISO/IEC 25010:2023** (*Product Quality Model*) & **ISO/IEC/IEEE 29119** (*Software Testing*) |

---

## 👥 Anggota Kelompok Penguji

| No | Nama Lengkap | NIM | Peran Utama dalam Pengujian |
| :-: | :--- | :---: | :--- |
| 1 | **BAGAS AFRIZAL** | `231011400204` | Project Lead, Git Repository Manager & Automated Test Developer |
| 2 | **ABDUL HAFIZH AR RASYID** | `231011403352` | QA Analyst & Manual Functional Test Execution |
| 3 | **ADITYA EKA PURNAMA** | `231011400988` | Test Scenario & Test Case Designer (EP & BVA) |
| 4 | **SYAIFA MAULANA** | `231011401802` | ISO 25010 Quality Metrics Auditor & Defect Documentation |

---

## 🎯 Objek Penelitian: Galeri (galeri.art)

**Galeri.art** merupakan platform digital e-commerce dan kurasi karya seni serta kerajinan tangan (*artisan craft*) lokal asli Indonesia. Platform ini menghubungkan langsung para seniman, pengrajin, dan kreator kriya dari berbagai pelosok Nusantara dengan apresiator seni dan konsumen umum.

Dibangun dengan arsitektur web modern (**Next.js**, **Auth.js / NextAuth**, **Material UI / Emotion**, dan **Nginx reverse proxy**), platform ini menyediakan fitur komprehensif mulai dari **sistem autentikasi pengguna (Login & Registrasi)**, penjelajahan katalog karya (*Artworks*), filter rentang harga dan kategori, hingga direktori profil seniman (*Artists*). Karakteristik sistem ini sangat ideal untuk studi kasus pengujian perangkat lunak kategori menengah (*medium-scale web application*) berbasis penjaminan mutu internasional.

---

## 🔬 Pemilihan Metode: Black Box Testing

Berdasarkan analisis kebutuhan pengujian perangkat lunak:
1. **Objek Pengujian Berupa Sistem Produksi (Live System):** Website diuji langsung dari antarmuka pengguna tanpa akses kode sumber (*source code*) internal maupun basis data backend pengelola.
2. **Pengujian Fitur Autentikasi & Transaksi:** Memverifikasi fungsionalitas formulir masuk (*login*), pendaftaran akun (*registration*), proteksi token CSRF, validasi format email, pencarian katalog, dan filter rentang harga.
3. **Kombinasi Pengujian:**
   - **Manual Testing:** Perancangan Test Matrix, Test Scenario, dan Test Case untuk verifikasi alur pengguna secara manual.
   - **Automated Testing:** Implementasi skrip automasi pengujian (E2E testing) berbasis Node.js untuk memverifikasi fungsionalitas tombol, halaman, proteksi CSRF, dan stabilitas server secara berulang.

---

## 📚 Landasan Standar & Referensi Jurnal Ilmiah (SINTA 1–3)

### 1. Standar Kualitas Internasional
* **ISO/IEC 25010:2023** — *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*. (Revisi resmi standar mutu perangkat lunak yang berlaku untuk periode 2023 hingga saat ini).
* **ISO/IEC/IEEE 29119** — *Software and Systems Engineering — Software Testing* (Standar internasional pedoman dokumentasi pengujian, proses pengujian, dan teknik pengujian perangkat lunak).

### 2. Referensi Jurnal Terakreditasi Nasional (SINTA 1–3)
Penggunaan metode *Black Box Testing* dan evaluasi mutu perangkat lunak mengacu pada publikasi ilmiah bereputasi:

1. **JUTIF (Jurnal Teknik Informatika) — Terakreditasi SINTA 2**
   * *Topik:* Penerapan *Black Box Testing* dengan metode *Equivalence Partitioning* dan pemodelan skenario fungsionalitas pada sistem informasi.
   * *Penerbit:* Universitas Jenderal Soedirman (UNSOED), P-ISSN: 2723-3863, E-ISSN: 2723-3871.
2. **Jurnal RESTI (Rekayasa Sistem dan Teknologi Informasi) — Terakreditasi SINTA 2**
   * *Topik:* Pengujian fungsionalitas dan analisis kualitas perangkat lunak berbasis kerangka standar ISO/IEC SQuaRE.
   * *Penerbit:* Ikatan Ahli Informatika Indonesia (IAII).
3. **DECODE: Jurnal Pendidikan Teknologi Informasi — Terakreditasi SINTA 2**
   * *Topik:* Evaluasi kualitas dan validasi fungsional sistem informasi web menggunakan *Black Box Testing*.
4. **JURIKOM (Jurnal Riset Komputer) / MIB — Terakreditasi SINTA 3**
   * *Topik:* Implementasi pengujian *Black Box* (*Boundary Value Analysis*) pada sistem berbasis web UMKM dan layanan publik.

---

## 📂 Struktur Dokumentasi & Laporan Pengujian

### 1. Dokumen Rencana & Spesifikasi QA (Folder `docs/`)
- [01_TEST_PLAN_ISO_29119.md](docs/01_TEST_PLAN_ISO_29119.md) — Dokumen Rencana Pengujian (*Test Plan & Test Strategy*) berdasarkan standar ISO/IEC/IEEE 29119-3:2021.
- [02_METRIK_KUALITAS_ISO_25010_2023.md](docs/02_METRIK_KUALITAS_ISO_25010_2023.md) — Karakteristik Mutu Perangkat Lunak (*Product Quality Model*) & Formula Evaluasi Kuantitatif ISO/IEC 25010:2023.
- [03_TEST_CASES_BLACK_BOX.md](docs/03_TEST_CASES_BLACK_BOX.md) — Matriks & Spesifikasi Kasus Uji (*Test Cases*) dengan teknik *Equivalence Partitioning* dan *Boundary Value Analysis*.
- [04_PEDOMAN_WAWANCARA_QA.md](docs/04_PEDOMAN_WAWANCARA_QA.md) — Panduan, instrumen 10 pertanyaan, kriteria narasumber, dan template wawancara praktisi QA profesional.

### 2. Laporan Hasil Eksekusi & Wawancara (Folder `reports/`)
- [MANUAL_TEST_EXECUTION_REPORT.md](reports/MANUAL_TEST_EXECUTION_REPORT.md) — Laporan Hasil Eksekusi Pengujian Manual (15 Test Cases, Pass Rate 93.33%, dan Log Defect `DEF-001` HTTP 500 on Not Found Slug).
- [AUTOMATED_TEST_REPORT.md](reports/AUTOMATED_TEST_REPORT.md) — Laporan Hasil Pengujian Otomatis (12 Test Cases, Pass Rate 100%, rata-rata durasi respons < 300 ms).
- [automated_test_results.json](reports/automated_test_results.json) — Data mentah (*raw data*) eksekusi automasi dalam format JSON.
- [WAWANCARA_QA_PROFESIONAL.md](reports/WAWANCARA_QA_PROFESIONAL.md) — Transkrip lengkap dan sintesis wawancara bersama Senior QA Engineer industri teknologi.

### 3. Laporan Akademik Lengkap & Bahan Presentasi
- [LAPORAN_LENGKAP_PENGUJIAN_SISTEM.md](LAPORAN_LENGKAP_PENGUJIAN_SISTEM.md) — Naskah Laporan Akademik Lengkap Tugas Akhir (BAB I s.d. BAB V beserta Daftar Pustaka format APA/IEEE).
- [PRESENTASI_PENGUJIAN_SISTEM.md](PRESENTASI_PENGUJIAN_SISTEM.md) — Panduan Slide Presentasi dan *Speaking Notes* untuk sidang/evaluasi di kelas.
- [reports/dashboard.html](reports/dashboard.html) — Dashboard visual interaktif hasil pengujian kualitas ISO/IEC 25010:2023.

---

## ⚡ Cara Menjalankan Skrip Pengujian Otomatis

Skrip pengujian otomatis dibangun menggunakan Node.js Native API (tanpa dependensi eksternal yang rumit) sehingga dapat langsung dieksekusi:

```bash
# Jalankan test suite otomatis Black Box testing
node tests/run_blackbox_tests.js
```

Hasil pengujian otomatis akan langsung dicetak pada terminal dan disimpan ke berkas `reports/automated_test_results.json`.

---

## 🗺️ Roadmap Tahapan Pengerjaan

- [x] **Tahap 1: Penetapan Judul & Penyesuaian Objek Penelitian (Galeri.art)**
- [x] **Tahap 2: Penyusunan Dokumentasi QA (ISO Standard Testing)**
  - Test Plan & Test Strategy (ISO/IEC/IEEE 29119)
  - Identifikasi Karakteristik Mutu (ISO/IEC 25010:2023)
  - Penyusunan Test Scenarios & Test Cases (termasuk Modul Login/Register)
  - Penyusunan Panduan Wawancara Praktisi QA
- [x] **Tahap 3: Eksekusi Pengujian Sistem (Manual & Otomatis)**
  - Pengujian Manual (*15 Test Cases & Defect Reporting DEF-001*)
  - Pengujian Otomatis (*12 Test Cases dengan Node.js Runner*)
- [x] **Tahap 4: Wawancara Praktisi QA Profesional**
  - Transkrip & sintesis industri QA
- [x] **Tahap 5: Finalisasi Repositori, CI/CD Pipeline & GitHub**
