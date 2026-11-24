# Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023

[![QA Black Box Tests](https://github.com/bagasafrz7/analisis-pengujian-sistem/actions/workflows/qa-tests.yml/badge.svg)](https://github.com/bagasafrz7/analisis-pengujian-sistem/actions)
![Standard ISO 25010:2023](https://img.shields.io/badge/Standard-ISO%2FIEC%2025010%3A2023-blue)
![Testing Black Box](https://img.shields.io/badge/Method-Black%20Box%20Testing-green)
![SINTA Accredited](https://img.shields.io/badge/Reference-SINTA%202%20%26%203-purple)
![License MIT](https://img.shields.io/badge/License-MIT-orange)

Dokumentasi komprehensif proyek tugas besar mata kuliah **Testing & Quality Assurance (QA)** — Semester 7, Program Studi Teknik Informatika, Universitas Pamulang (Tahun Akademik Ganjil 2026/2027).

---

## 📌 Ringkasan Eksekutif (Core Overview)

Repositori ini menyajikan laporan penjaminan mutu dan pengujian sistem menyeluruh terhadap platform live e-commerce seni dan kriya Nusantara, **[Galeri.art](https://galeri.art/)**. Pengujian dirancang secara independen menggunakan metode **Black Box Testing** dengan teknik **Equivalence Partitioning (EP)** dan **Boundary Value Analysis (BVA)**, mengacu pada model kualitas internasional **ISO/IEC 25010:2023** (*Product Quality Model*) dan standar proses dokumentasi **ISO/IEC/IEEE 29119**.

| Parameter Proyek | Informasi Rinci |
| :--- | :--- |
| **Mata Kuliah** | Testing & Quality Assurance (QA) — 07TPLE004 |
| **Dosen Pengampu** | **Asep Erlan Maulana, S.Kom., M.Kom.** |
| **Semester / Kampus** | 7 (Tujuh) / Universitas Pamulang |
| **Objek Penelitian** | **Platform Galeri** ([https://galeri.art/](https://galeri.art/)) |
| **Kategori Sistem** | E-Commerce & Marketplace Kurasi Karya Seni Nusantara (Skala Menengah) |
| **Arsitektur Teknologi**| Next.js (React Server Components), Auth.js (NextAuth), Material UI, Nginx |
| **Fitur Kunci Diuji** | Autentikasi Pengguna (Login Passwordless & Register), CSRF Security, Katalog Karya (`/artworks`), Filter Harga & Kategori, Direktori Seniman (`/artists`) |
| **Metode Pengujian** | **Black Box Testing** (Manual Functional & Automated Script) |
| **Standar Mutu Acuan** | **ISO/IEC 25010:2023** (*SQuaRE*) & **ISO/IEC/IEEE 29119** (*Software Testing*) |
| **Batas Laporan (H-7)**| **Sabtu, 12 Desember 2026 (23:59 WIB)** |
| **Pelaksanaan UAS** | **Sabtu, 19 Desember 2026** |

---

## 👥 Tim Penguji (Anggota Kelompok)

| No | Nama Lengkap | NIM | Peran Tim Utama | Cakupan Pengujian UAT Manual | Lembar Aktivitas Mandiri |
| :-: | :--- | :---: | :--- | :--- | :---: |
| 1 | **Bagas Afrizal** *(Project Lead)* | `231011400204` | Setup & Lead, CI/CD, Automasi Node.js | Seluruh 21 Fitur (End-to-End Flow) | [activity-bagas-afrizal.md](docs/activity-bagas-afrizal.md) |
| 2 | **Abdul Hafizh Ar Rasyid** | `231011403352` | QA Analyst & Heuristic Evaluation | Seluruh 21 Fitur (End-to-End Flow) | [activity-abdulhafizh.md](docs/activity-abdulhafizh.md) |
| 3 | **Aditya Eka Purnama** | `231011400988` | Test Scenario Designer (EP & BVA) | Seluruh 21 Fitur (End-to-End Flow) | [activity_adityaeka.md](docs/activity_adityaeka.md) |
| 4 | **Syaifa Maulana** | `231011401802` | Quality Metrics Auditor & Defect Logger | Seluruh 21 Fitur (End-to-End Flow) | [activity_syaifamaulana.md](docs/activity_syaifamaulana.md) |

---

## 📑 Audit Kepatuhan terhadap Silabus Kuliah (Pertemuan 1 – 16)

Berdasarkan silabus dan materi perkuliahan resmi mata kuliah **Testing & QA Perangkat Lunak** (Universitas Pamulang - Dosen: Asep Erlan Maulana, S.Kom., M.Kom.), proyek pengujian ini telah diaudit dan mengimplementasikan seluruh kompetensi materi secara komprehensif:

| Pertemuan / Topik Perkuliahan | Implementasi Nyata dalam Proyek Ini | Berkas Acuan |
| :--- | :--- | :--- |
| **Pertemuan 1–2:** Konsep Testing, QA vs QC, STLC | Penerapan Software Testing Life Cycle (STLC) terstruktur mulai dari perencanaan, analisis kebutuhan, perancangan kasus uji, eksekusi, hingga evaluasi akhir. | [01-test-plan-iso-29119.md](docs/01-test-plan-iso-29119.md) |
| **Pertemuan 3–4:** Strategi Black Box Testing (EP & BVA) | Pemilihan metode Black Box pada portal produksi Galeri.art menggunakan teknik *Equivalence Partitioning* (valid/invalid email login & kategori) dan *Boundary Value Analysis* (string panjang 250 karakter). | [03-test-cases-black-box.md](docs/03-test-cases-black-box.md) |
| **Pertemuan 5–6:** Hierarki Pengujian (Unit & Integration) | Analisis keterpaduan komponen autentikasi, token CSRF, dan formulir pencarian lintas komponen antarmuka. | [laporan-lengkap-pengujian-sistem.md](laporan-lengkap-pengujian-sistem.md) |
| **Pertemuan 7–8:** Pengujian Fungsional & Non-Fungsional | Evaluasi fungsionalitas tombol masuk, navigasi katalog karya, serta pengujian non-fungsional performa efisiensi dan kompatibilitas antarmuka. | [02-metrik-kualitas-iso-25010-2023.md](docs/02-metrik-kualitas-iso-25010-2023.md) |
| **Pertemuan 9:** User Acceptance Testing (UAT) | Penyusunan dokumen formal UAT berstandar silabus P9, kuesioner skala Likert penerimaan sistem, serta lembar kerja eksekusi pengujian manual untuk seluruh 4 anggota kelompok. | [05-dokumen-uat-dan-pengujian-manual.md](docs/05-dokumen-uat-dan-pengujian-manual.md) |
| **Pertemuan 10:** Otomatisasi Pengujian (Automation) | Pengembangan skrip automasi pengujian E2E mandiri berbasis Node.js Native API (`tests/run-blackbox-tests.js`) terintegrasi pada GitHub Actions CI/CD. | [run-blackbox-tests.js](tests/run-blackbox-tests.js) |
| **Pertemuan 11:** Pengujian Regresi (Regression Testing) | Menjalankan ulang suite pengujian otomatis secara berkala setiap ada pembaruan kode guna mendeteksi efek samping perubahan. | [.github/workflows/qa-tests.yml](.github/workflows/qa-tests.yml) |
| **Pertemuan 12:** Pengujian API (API Testing) | Pengujian endpoint otentikasi internal NextAuth (`/api/auth/csrf` dan `/api/auth/callback/credentials`) untuk validasi token kriptografis. | [automated-test-report.md](reports/automated-test-report.md) |
| **Pertemuan 13:** Pengujian Performa (Performance Testing) | Pengukuran waktu respon server (TTFB) dan total waktu muat halaman katalog karya seni (Tercatat ~168 ms s.d. 245 ms, jauh di bawah batas $< 3.5\text{s}$). | [dashboard.html](reports/dashboard.html) |
| **Pertemuan 14:** Pengujian Keamanan (Security Testing) | Verifikasi proteksi Anti-CSRF token, penolakan permintaan login liar (`error=MissingCSRF`), sanitasi injeksi tag script XSS, dan sertifikat SSL/HTTPS. | [03-test-cases-black-box.md](docs/03-test-cases-black-box.md) |
| **Pertemuan 15:** Manajemen Bug & Defect Tracking | Pelaporan cacat riil sistem **`DEF-001`**: *Unhandled Server Exception (HTTP 500)* pada akses slug dinamis yang tidak ada di database, disertai rekomendasi teknis `notFound()`. | [manual-test-execution-report.md](reports/manual-test-execution-report.md) |
| **Pertemuan 16:** Dokumentasi Pengujian Standar ISO | Penyusunan laporan uji berstandar **ISO/IEC/IEEE 29119** (*Test Plan, Test Strategy, Test Case Specification, Defect Report, & Summary Report*). | [01-test-plan-iso-29119.md](docs/01-test-plan-iso-29119.md) |

---

## 📅 Timeline Proyek & Target Milestone (H-7 Sebelum UAS)

Proyek ini dirancang dalam 5 minggu kerja intensif dan 1 minggu persiapan sidang UAS:
* **Target Laporan Akhir Selesai 100% (H-7):** **Sabtu, 12 Desember 2026**
* **Hari H Ujian Akhir Semester (UAS):** **Sabtu, 19 Desember 2026**

👉 **Unduh Berkas Timeline & Visual Gantt Chart:**
- 📑 **[Buka Dokumen Timeline Lengkap (PDF)](timeline/timeline-qa-galeri-art.pdf)** — Dokumen resmi landscape A4 memuat visual Gantt Chart dan matriks jadwal.
- 📊 **[Buka Matriks & Gantt Sheet (Excel)](timeline/timeline-qa-galeri-art.xlsx)** — Lembar kerja Excel interaktif berisikan alur WBS, PIC, durasi hari, dan progress bar.
- 📝 **[Baca Rencana Kerja Mingguan (Markdown)](timeline/timeline-proyek.md)** — Uraian deskriptif per minggu (W1 s.d. W6).

---

## 🔬 Hasil Pengujian Sistem (Manual & Otomatis)

### 1. Pengujian Otomatis (Node.js Test Runner)
Skrip dijalankan langsung terhadap server live `https://galeri.art/`:
* **Total Test Cases:** 12 Kasus Uji Otomatis
* **Passed (Lolos):** **12 (100% Pass Rate)**
* **Rata-rata Waktu Respon:** **~245 ms** (Sangat Cepat, di bawah ambang batas ISO $< 3.5\text{ detik}$)
* **Keamanan:** Pembangkitan CSRF token valid (64-hex string) dan pencegatan callback liar tanpa token berhasil 100%.

### 2. Pengujian Manual & Temuan Defect Riil (`DEF-001`)
* **Total Test Cases:** 15 Kasus Uji Manual
* **Passed:** 14 Kasus Uji (**93.33%**)
* **Failed:** 1 Kasus Uji (6.67% — Temuan Defect)
* **Temuan Defect `DEF-001` (Severity: Medium/High):**  
  Ketika pengguna mengakses alamat slug karya atau artis yang tidak terdaftar di database (misal: `/artworks/item-palsu-acakkk999`), server mengembalikan respon **`HTTP 500 Internal Server Error`** alih-alih menyajikan halaman ramah pengguna **`HTTP 404 Not Found`**. Disarankan pengembang menambahkan pemanggilan fungsi `notFound()` dari Next.js saat hasil query data bernilai null.

---

## 👥 Pelaksanaan UAT & Pengujian Manual Alur Penuh oleh Setiap Anggota (W3 & W4)

Sesuai silabus perkuliahan dan instruksi penugasan di mana **setiap anggota wajib memahami alur utuh (*end-to-end flow*) dan melakukan testing manual secara lengkap**, seluruh 4 anggota kelompok (Bagas, Hafizh, Aditya, Syaifa) menguji **seluruh 21 skenario fitur** pada portal [Galeri.art](https://galeri.art/):

* 📊 **[Unduh Dokumen UAT Format Excel (dokumen-uat-galeri-art.xlsx)](docs/dokumen-uat-galeri-art.xlsx):** Lembar kerja Microsoft Excel berisikan tab Ringkasan/Panduan, 4 tab kasus uji anggota kelompok (masing-masing memuat 21 skenario fitur lengkap siap uji dengan kolom hasil pengamatan kosong untuk diisi mandiri), rumus kelulusan otomatis, dan kuesioner skala Likert penerimaan sistem.
* 📘 **[Dokumen Master UAT & Manual Testing (Format Markdown)](docs/05-dokumen-uat-dan-pengujian-manual.md):** Dokumentasi formal naratif memuat 21 skenario uji UAT alur penuh, kriteria penerimaan sistem, exit criteria, dan panduan teknis.
* 👤 **Lembar Kerja & Log Riwayat Aktivitas Seluruh Anggota:**
  - [activity-bagas-afrizal.md](docs/activity-bagas-afrizal.md) — Log Rekam Jejak Progres Project Lead Bagas Afrizal
  - [activity-abdulhafizh.md](docs/activity-abdulhafizh.md) — Catatan Aktivitas Abdul Hafizh Ar Rasyid
  - [activity_adityaeka.md](docs/activity_adityaeka.md) — Catatan Aktivitas Aditya Eka Purnama
  - [activity_syaifamaulana.md](docs/activity_syaifamaulana.md) — Catatan Aktivitas Syaifa Maulana

---

## 📂 Peta Navigasi Berkas Penting (Project Directory Map)

Seluruh berkas telah distandarisasi menggunakan penamaan bersih (*clean kebab-case* tanpa underscore):

```
analisis-pengujian-sistem/
├── README.md                                  # Pintu masuk utama & ringkasan eksekutif proyek
├── laporan-lengkap-pengujian-sistem.md        # Naskah akademik lengkap BAB I s.d. BAB V + Daftar Pustaka
├── presentasi-pengujian-sistem.md             # Panduan slide presentasi & speaking notes sidang UAS
├── docs/                                      # Dokumen standar penjaminan mutu ISO & UAT
│   ├── 01-test-plan-iso-29119.md              # Dokumen Rencana Pengujian (Test Plan & Strategy)
│   ├── 02-metrik-kualitas-iso-25010-2023.md   # Taksonomi mutu & formula evaluasi ISO 25010:2023
│   ├── 03-test-cases-black-box.md             # Spesifikasi kasus uji Black Box (EP & BVA)
│   ├── 04-pedoman-wawancara-qa.md             # Pedoman & instrumen wawancara praktisi QA
│   ├── 05-dokumen-uat-dan-pengujian-manual.md # Dokumen master UAT & panduan 21 skenario uji
│   ├── dokumen-uat-galeri-art.xlsx            # Lembar kerja UAT format Excel interaktif 4 anggota
│   ├── activity-bagas-afrizal.md              # Log rekam jejak progres Project Lead Bagas Afrizal
│   ├── activity-abdulhafizh.md                # Catatan aktivitas Abdul Hafizh Ar Rasyid
│   ├── activity_adityaeka.md                  # Catatan aktivitas Aditya Eka Purnama
│   └── activity_syaifamaulana.md              # Catatan aktivitas Syaifa Maulana
├── reports/                                   # Laporan hasil pengujian & bukti evaluasi
│   ├── manual-test-execution-report.md        # Laporan pengujian manual & log Defect DEF-001
│   ├── automated-test-report.md               # Laporan hasil automasi testing
│   ├── automated-test-results.json            # Data mentah eksekusi pengujian (JSON)
│   ├── wawancara-qa-profesional.md            # Transkrip lengkap wawancara Senior QA Engineer
│   └── dashboard.html                         # Dashboard visual interaktif hasil uji ISO 25010
├── tests/                                     # Kode sumber skrip automasi pengujian
│   └── run-blackbox-tests.js                  # Skrip runner pengujian otomatis (Node.js)
├── timeline/                                  # Rencana kerja & visualisasi jadwal proyek
│   ├── timeline-qa-galeri-art.pdf             # Dokumen timeline resmi format PDF (Gantt Chart)
│   ├── timeline-qa-galeri-art.xlsx            # Lembar kerja timeline format Microsoft Excel
│   └── timeline-proyek.md                     # Deskripsi rencana kerja mingguan (W1-W6)
└── .github/workflows/
    └── qa-tests.yml                           # Skrip pipeline CI/CD GitHub Actions
```

---

## ⚡ Cara Menjalankan Skrip Pengujian Otomatis

Skrip pengujian otomatis dibangun menggunakan Node.js Native API sehingga dapat langsung dieksekusi tanpa instalasi pustaka eksternal yang rumit:

```bash
# Jalankan suite pengujian otomatis Black Box testing
node tests/run-blackbox-tests.js
```

Hasil pengujian otomatis akan langsung dicetak pada terminal dan disimpan ke berkas `reports/automated-test-results.json`. Untuk melihat visualisasi dashboard, buka berkas `reports/dashboard.html` di peramban web (browser).
