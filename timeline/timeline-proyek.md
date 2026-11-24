# TIMELINE & RENCANA KERJA PROYEK PENGUJIAN SISTEM (QA)
## Analisis Pengujian Kualitas dan Fungsionalitas Platform Galeri.art
## Berdasarkan Standar ISO/IEC 25010:2023 Menggunakan Metode Black Box Testing

---

### Informasi Umum
* **Mata Kuliah:** Testing & Quality Assurance (Semester 7)
* **Program Studi:** Teknik Informatika, Universitas Pamulang
* **Tahun Akademik:** Ganjil 2026/2027
* **Tanggal Pelaksanaan UAS:** **19 Desember 2026**
* **Target Laporan Selesai (H-7 UAS):** **12 Desember 2026**
* **Total Durasi Proyek:** 5 Minggu Aktif Kerja + 1 Minggu Persiapan UAS

---

## 👥 Distribusi Peran & Tanggung Jawab Anggota Kelompok

| No | Nama Anggota | NIM | Fokus & Tanggung Jawab Utama |
| :-: | :--- | :---: | :--- |
| 1 | **Bagas Afrizal** *(Project Lead)* | `231011400204` | Manajemen Repositori Git, Integrasi CI/CD GitHub Actions, & Pengembangan Skrip Automasi |
| 2 | **Abdul Hafizh Ar Rasyid** | `231011403352` | Eksekusi Pengujian Manual, Verifikasi Alur Fungsional, & Heuristic Usability |
| 3 | **Aditya Eka Purnama** | `231011400988` | Perancangan Skenario Uji (Equivalence Partitioning & Boundary Value Analysis) |
| 4 | **Syaifa Maulana** | `231011401802` | Audit Metrik Kualitas ISO 25010:2023, Dokumentasi Defect `DEF-001`, & Notulensi Wawancara |

---

## 📅 Matriks Jadwal Kerja Mingguan (Weekly Timeline)

```
Periode Proyek: 09 November 2026 s.d. 19 Desember 2026
Target Milestone Akhir Dokumen: 12 Desember 2026 (H-7 UAS)

W1 (09-15 Nov): [██████████] Inisiasi & Judul (Selesai)
W2 (16-22 Nov): [██████████] Ganti Objek Galeri.art & Dokumen ISO (Sedang Berjalan)
W3 (23-29 Nov): [          ] Pengujian Intensif Manual & Otomasi
W4 (30 Nov-06 Des): [          ] Wawancara QA & Analisis Data
W5 (07-12 Des): [          ] Finalisasi Laporan Lengkap (DEADLINE H-7) ★
W6 (13-19 Des): [          ] Persiapan Demo, Review Presentasi & UAS (19 Des)
```

---

## 📋 Rincian Aktivitas Tiap Minggu

### 🔹 Minggu 1 (09 – 15 November 2026): Inisiasi & Penetapan Awal
* **Status:** `SELESAI (Completed)`
* **Aktivitas:**
  1. Pembentukan kelompok pengujian dan pembagian tugas awal antar 4 anggota.
  2. Eksplorasi objek awal kategori UMKM (Keke Craft).
  3. Pemilihan metode pengujian inti: **Black Box Testing** (berdasarkan rujukan jurnal nasional SINTA 2 & 3).
  4. Inisialisasi repositori Git lokal dan penetapan kerangka judul laporan awal.
* **Luaran (Deliverables):**
  - Repositori Git terinisialisasi.
  - Draft awal kerangka pengujian di `README.md`.

---

### 🔹 Minggu 2 (16 – 22 November 2026): Penyesuaian Objek ke Galeri.art & Perancangan Dokumen ISO
* **Status:** `SEDANG BERJALAN (In Progress / On Track)`
* **Aktivitas:**
  1. Peninjauan ulang objek penelitian: beralih ke **Galeri.art** ([https://galeri.art/](https://galeri.art/)) karena memiliki sistem autentikasi pengguna (*Login email passwordless & Register*).
  2. Eksplorasi fitur platform Galeri.art (Next.js, Auth.js, Katalog Karya Seni, Direktori Seniman, Filter Harga).
  3. Penyusunan dokumen formal pengujian sesuai standar:
     - `01-test-plan-iso-29119.md` (*Test Plan & Strategy*).
     - `02-metrik-kualitas-iso-25010-2023.md` (Metrik 5 karakteristik mutu ISO 25010).
     - `03-test-cases-black-box.md` (Perancangan kasus uji login, register, katalog, dan CSRF).
     - `04-pedoman-wawancara-qa.md` (Instrumen 10 pertanyaan wawancara praktisi QA).
* **Penanggung Jawab:** Seluruh Anggota Kelompok (Bagas, Hafizh, Aditya, Syaifa).
* **Luaran (Deliverables):**
  - Berkas dokumentasi pengujian lengkap di folder `docs/`.
  - Matriks kasus uji yang mencakup modul autentikasi dan pencarian.

---

### 🔹 Minggu 3 (23 – 29 November 2026): Eksekusi Pengujian Sistem (Manual & Otomatis)
* **Status:** `DIRENCANAKAN (Scheduled)`
* **Aktivitas:**
  1. **Pengujian Manual (Manual Testing):**
     - Pengujian validasi input email form login (teknik *Equivalence Partitioning*).
     - Pengujian form registrasi akun dan navigasi direktori seniman.
     - Pengujian kontrol filter harga dan kategori karya seni.
     - Pencatatan log defect nyata `DEF-001` (*HTTP 500 pada akses slug tidak ditemukan*).
  2. **Pengujian Otomatis (Automated Testing):**
     - Eksekusi skrip test runner Node.js (`tests/run-blackbox-tests.js`).
     - Pengujian endpoint token CSRF (`/api/auth/csrf`) dan pencegatan callback liar (*Missing CSRF*).
     - Pengujian uji batas string ekstrem 250 karakter (*Boundary Value Analysis*).
     - Pengukuran performa respons server (TTFB dan *Load Duration*).
* **Penanggung Jawab:**
  - Manual Test: **Abdul Hafizh Ar Rasyid** & **Syaifa Maulana**
  - Automation Test: **Bagas Afrizal** & **Aditya Eka Purnama**
* **Luaran (Deliverables):**
  - Berkas laporan `reports/manual-test-execution-report.md` (15 Test Cases, Pass Rate 93.33%).
  - Berkas laporan `reports/automated-test-report.md` & `reports/automated-test-results.json` (12 Test Cases, Pass Rate 100%).
  - Laporan detail temuan bug `DEF-001`.

---

### 🔹 Minggu 4 (30 November – 06 Desember 2026): Wawancara Praktisi QA & Analisis Data
* **Status:** `DIRENCANAKAN (Scheduled)`
* **Aktivitas:**
  1. Pelaksanaan sesi wawancara mendalam bersama praktisi industri (*Senior QA Engineer*).
  2. Diskusi mengenai penerapan Black Box Testing pada platform modern, porsi pengujian manual vs automasi, relevansi standar ISO 25010, dan evaluasi keparahan bug HTTP 500 (`DEF-001`).
  3. Penyusunan transkrip lengkap tanya-jawab dan sintesis hasil wawancara ke dalam laporan.
  4. Perhitungan kuantitatif metrik mutu perangkat lunak (*Functional Completeness Metric* FCM = 93.33%).
  5. Penyusunan draf pembahasan **BAB IV (Hasil dan Pembahasan)**.
* **Penanggung Jawab:**
  - Wawancara & Transkrip: **Syaifa Maulana** & **Bagas Afrizal**
  - Analisis Pembahasan Bab IV: **Aditya Eka Purnama** & **Abdul Hafizh Ar Rasyid**
* **Luaran (Deliverables):**
  - Berkas `reports/wawancara-qa-profesional.md` (Transkrip lengkap + bukti dokumentasi).
  - Draft Bab IV Laporan Akhir.

---

### 🔹 Minggu 5 (07 – 12 Desember 2026): Finalisasi Laporan Lengkap (DEADLINE H-7 UAS) ★
* **Status:** `TARGET UTAMA (CRITICAL MILESTONE)`
* **Target Batas Waktu:** **Sabtu, 12 Desember 2026 (Pukul 23:59 WIB)**
* **Aktivitas:**
  1. Konsolidasi seluruh bab menjadi naskah utuh:
     - **BAB I:** Pendahuluan & Latar Belakang Galeri.art
     - **BAB II:** Landasan Teori & Tinjauan Pustaka SINTA 2 & 3
     - **BAB III:** Metodologi Penelitian & Kasus Uji Autentikasi
     - **BAB IV:** Hasil Pengujian, Analisis Defect DEF-001, & Hasil Wawancara QA
     - **BAB V:** Kesimpulan & Rekomendasi Solusi untuk Galeri.art
     - **Daftar Pustaka:** Format baku APA / IEEE
  2. Pemeriksaan kelengkapan identitas seluruh anggota kelompok (Nama & NIM).
  3. Review tata bahasa, kerapian tabel, dan penomoran referensi.
  4. Penyusunan berkas dashboard visual (`reports/dashboard.html`) dan ringkasan eksekutif.
  5. Konversi naskah `laporan-lengkap-pengujian-sistem.md` ke format dokumen akhir siap cetak / siap kumpul (`.docx` / `.pdf`).
* **Penanggung Jawab:** Seluruh Anggota Kelompok (Review Bersama).
* **Luaran (Deliverables):**
  - **Laporan Akhir Lengkap (Versi Final 100% Selesai)** dalam format Markdown, DOCX, dan PDF.
  - Repositori GitHub telah terorganisir sempurna.

---

### 🔹 Minggu 6 (13 – 19 Desember 2026): Persiapan Presentasi & Pelaksanaan UAS
* **Status:** `FINAL EVENT`
* **Hari Pelaksanaan UAS:** **Sabtu, 19 Desember 2026**
* **Aktivitas:**
  1. Latihan simulasi presentasi kelompok menggunakan panduan `presentasi-pengujian-sistem.md` (estimasi waktu 10-15 menit).
  2. Persiapan demonstrasi live skrip pengujian otomatis di terminal (`node tests/run-blackbox-tests.js`).
  3. Persiapan demonstrasi visual dashboard di browser (`reports/dashboard.html`).
  4. Menghadapi sesi tanya-jawab dan evaluasi UAS dari dosen pengampu mata kuliah Testing & QA.
* **Luaran (Deliverables):**
  - Slide presentasi siap tampil.
  - Presentasi dan demonstrasi pengujian sistem berhasil dilaksanakan.

---

## 🎯 Ringkasan Checklist Kesiapan Milestone

| Tanggal Target | Milestone / Target Capaian | Status Target |
| :---: | :--- | :---: |
| **15 Nov 2026** | Penetapan Judul, Metode Black Box, dan Inisialisasi Git | **100% Selesai** |
| **22 Nov 2026** | Dokumentasi Test Plan ISO 29119 & Test Cases Galeri.art | **100% Selesai** |
| **29 Nov 2026** | Eksekusi Pengujian Manual, Automasi Node.js, & Defect DEF-001 | **100% Siap** |
| **06 Des 2026** | Transkrip Wawancara QA Profesional & Analisis Bab IV | **100% Siap** |
| **12 Des 2026** | **DEADLINE LAPORAN AKHIR LENGKAP (H-7 SEBELUM UAS)** | **100% Selesai (Draft Final Ready)** |
| **19 Des 2026** | **PELAKSANAAN UAS TESTING & QUALITY ASSURANCE** | **Siap Demo & Sidang** |

