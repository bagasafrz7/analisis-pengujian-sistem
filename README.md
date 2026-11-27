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

---

## 📚 Referensi Jurnal Ilmiah Terakreditasi (SINTA 2 & 3)

Penelitian pengujian sistem Galeri.art berlandaskan metodologi ilmiah yang mengacu pada publikasi jurnal nasional terakreditasi Kemendikbudristek (SINTA):

1. **JUTIF (Jurnal Teknik Informatika) — SINTA 2**
   * *Judul:* Black Box Testing with the Equivalence Partitioning and Cause Effect Graph Method in Archive Information System
   * *Penulis:* Suci Ismiati, Firza Prima Aditiawan, Afina Lina Nurlaili (2024, Vol. 5, No. 4, hal. 981–990)
   * *Penerbit:* Universitas Jenderal Soedirman (Unsoed)
   * *Tautan Langsung:* [https://doi.org/10.52436/1.jutif.2024.5.4.1944](https://doi.org/10.52436/1.jutif.2024.5.4.1944) | [Portal OJS JUTIF](https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/1944)

2. **Jurnal RESTI (Rekayasa Sistem dan Teknologi Informasi) — SINTA 2**
   * *Judul:* Correlation Analysis of ISO 25010 Modularity, CK Metrics, and Architecture Smells
   * *Penulis:* M. Alirridlo, E. A. Tahara, S. Rochimah (2025, Vol. 9, No. 6, hal. 1375–1384)
   * *Penerbit:* Ikatan Ahli Informatika Indonesia (IAII)
   * *Tautan Langsung:* [http://jurnal.iaii.or.id/index.php/RESTI](http://jurnal.iaii.or.id/index.php/RESTI) | [Portal Garuda Kemdikbud](https://garuda.kemdikbud.go.id/journal/view/10636)

3. **DECODE (Jurnal Pendidikan Teknologi Informasi) — SINTA 2**
   * *Judul:* Implementasi Blackbox Testing Pada Sistem Informasi Berbasis Website dengan Teknik Equivalence Partitioning
   * *Publikasi:* Vol. 5, No. 1 (2025)
   * *Penerbit:* Universitas Muhammadiyah Kendari
   * *Tautan Langsung:* [https://journal.umkendari.ac.id/index.php/decode](https://journal.umkendari.ac.id/index.php/decode)

4. **JITET (Jurnal Informatika dan Teknik Elektro Terapan) — SINTA 3**
   * *Judul:* Penerapan Teknik Boundary Value Analysis dan Equivalence Partitioning pada Pengujian Sistem Informasi Berbasis Web
   * *Publikasi:* Vol. 11, No. 3
   * *Penerbit:* Universitas Lampung (Unila)
   * *Tautan Langsung:* [https://journal.eng.unila.ac.id/index.php/jitet](https://journal.eng.unila.ac.id/index.php/jitet) | [DOI: 10.23960/jitet](https://doi.org/10.23960/jitet)

5. **JURIKOM (Jurnal Riset Komputer) — SINTA 3**
   * *Judul:* Pengujian Fungsionalitas Website Menggunakan Metode Black Box Testing
   * *Publikasi:* Vol. 10, No. 2
   * *Penerbit:* STMIK Budi Darma
   * *Tautan Langsung:* [https://ejurnal.stmik-budidarma.ac.id/index.php/jurikom](https://ejurnal.stmik-budidarma.ac.id/index.php/jurikom)

---

## 🏛️ Standar Internasional Pengujian & Kualitas Perangkat Lunak

Proyek pengujian ini mengadopsi dua pilar standar internasional resmi dari ISO (*International Organization for Standardization*) dan IEEE (*Institute of Electrical and Electronics Engineers*):

1. **ISO/IEC 25010:2023 — Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model**
   * *Fungsi:* Standar acuan **Karakteristik & Metrik Mutu Produk** (Apa yang dinilai).
   * *Tautan Resmi ISO:* [https://www.iso.org/standard/78176.html](https://www.iso.org/standard/78176.html)
   * *Penerapan di Proyek:* Menjadi tolak ukur evaluasi kualitas sistem Galeri.art yang mencakup *Functional Suitability* (kelengkapan fitur autentikasi & katalog), *Performance Efficiency* (waktu respon server rata-rata 245 ms), *Usability* (kemudahan antarmuka form login OTP), *Reliability* (toleransi masukan salah dan penanganan galat HTTP 500), serta *Security* (validasi HTTPS dan proteksi Anti-CSRF Token).

2. **ISO/IEC/IEEE 29119-1:2022 — Software and systems engineering — Software testing — Part 1: General concepts** (serta **Part 3: Test documentation**)
   * *Fungsi:* Standar acuan **Proses, Tata Kelola & Struktur Dokumentasi Pengujian** (Bagaimana cara menguji & mendokumentasikan).
   * *Tautan Resmi ISO:* [https://www.iso.org/standard/81291.html](https://www.iso.org/standard/81291.html)
   * *Penerapan di Proyek:* Mengatur standarisasi hierarki dokumen QA mulai dari Rencana Pengujian (*Test Plan*), Spesifikasi Skenario Kasus Uji (*Test Case Specification*), Lembar Kerja UAT (*User Acceptance Testing*), Laporan Cacat Sistem (*Defect Report DEF-001*), hingga Laporan Ringkasan Pengujian (*Test Summary Report*).

### 💡 Inti Pemahaman (Summary) ISO 25010 vs ISO/IEEE 29119

| Standar | Peran Utama | Pertanyaan Kunci | Wujud Penerapan di Proyek Kita |
| :--- | :--- | :--- | :--- |
| **ISO/IEC 25010:2023** | **Model Kualitas Produk** (*Product Quality*) | *"Seberapa baik, cepat, aman, dan andal website Galeri.art yang kita uji?"* | Penilaian 5 karakteristik mutu, formula skor kelayakan, dan dashboard visual di [02-metrik-kualitas-iso-25010-2023.md](file:///Users/user/Documents/Unpam/Semester%207/TESTING%20%26%20QA/project/analisis-pengujian-sistem/docs/02-metrik-kualitas-iso-25010-2023.md) & [dashboard.html](file:///Users/user/Documents/Unpam/Semester%207/TESTING%20%26%20QA/project/analisis-pengujian-sistem/reports/dashboard.html). |
| **ISO/IEC/IEEE 29119** | **Tata Kelola & Dokumentasi Pengujian** (*Testing Process & Docs*) | *"Bagaimana urutan kerja, format rencana, dan dokumentasi pengujian QA yang baku?"* | Kerangka kerja Test Plan di [01-test-plan-iso-29119.md](file:///Users/user/Documents/Unpam/Semester%207/TESTING%20%26%20QA/project/analisis-pengujian-sistem/docs/01-test-plan-iso-29119.md), format skenario kasus uji, dan lembar kerja UAT [dokumen-uat-galeri-art.xlsx](file:///Users/user/Documents/Unpam/Semester%207/TESTING%20%26%20QA/project/analisis-pengujian-sistem/docs/dokumen-uat-galeri-art.xlsx). |
