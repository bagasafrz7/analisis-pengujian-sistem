# Analisis Pengujian Kualitas dan Fungsionalitas Website Keke Craft Menggunakan Metode Black Box Testing Berdasarkan Standar ISO/IEC 25010:2023

Proyek tugas mata kuliah **Testing & Quality Assurance (QA)** — Semester 7, Program Studi Teknik Informatika, Universitas Pamulang.

---

## 📌 Informasi Proyek

| Atribut | Keterangan |
| :--- | :--- |
| **Mata Kuliah** | Testing & Quality Assurance (QA) |
| **Semester** | 7 (Tujuh) |
| **Objek Penelitian** | Keke Craft \| Tas Anyaman Pandan Tangerang |
| **URL Website** | [https://www.galerikeke.com/](https://www.galerikeke.com/) |
| **Kategori Sistem** | Portal Web UMKM / E-Commerce Katalog Produk Kriya (Skala Menengah ke Bawah) |
| **Metode Pengujian** | **Black Box Testing** (Manual & Automated Testing) |
| **Teknik Pengujian** | *Equivalence Partitioning*, *Boundary Value Analysis*, dan *End-to-End Scenario Testing* |
| **Standar Acuan QA** | **ISO/IEC 25010:2023** (*Product Quality Model*) & **ISO/IEC/IEEE 29119** (*Software Testing*) |

---

## 🎯 Objek Penelitian: Keke Craft

**Keke Craft** merupakan salah satu unit usaha mikro, kecil, dan menengah (UMKM) kriya unggulan di Tangerang yang memproduksi kerajinan anyaman pandan (tas, souvenir, perlengkapan fesyen dan dekorasi). Portal web resminya ([galerikeke.com](https://www.galerikeke.com/)) berfungsi sebagai etalase digital, penyedia informasi katalog produk kriya, profil usaha, serta kanal kontak dan konversi pemesanan pelanggan.

Karakteristik portal ini sangat ideal sebagai studi kasus pengujian perangkat lunak skala menengah ke bawah (*medium-to-low scale*) untuk mengukur keandalan fungsional, performa, dan pengalaman pengguna (*user experience*) bagi konsumen UMKM.

---

## 🔬 Pemilihan Metode: Black Box Testing

Berdasarkan analisis kebutuhan pengujian perangkat lunak:
1. **Objek Pengujian Berupa Sistem Produksi (Live System):** Website diuji langsung dari antarmuka pengguna tanpa akses kode sumber (*source code*) internal maupun basis data backend pengelola.
2. **Relevansi Fungsional:** Menguji kesesuaian masukan (*input*) dan keluaran (*output*) pada fitur utama (navigasi katalog, tautan produk, form kontak/inquiry, responsivitas antarmuka).
3. **Kombinasi Pengujian:**
   - **Manual Testing:** Perancangan Test Matrix, Test Scenario, dan Test Case untuk verifikasi alur pengguna secara manual.
   - **Automated Testing:** Implementasi skrip automasi pengujian (E2E testing) untuk memverifikasi fungsionalitas tombol, halaman, dan form input secara berulang dan reliabel.

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
   * *Topik:* Implementasi pengujian *Black Box* (*Boundary Value Analysis*) pada sistem berbasis web skala UMKM dan pelayanan publik.

---

## 📂 Struktur Dokumentasi & Laporan Pengujian

### 1. Dokumen Rencana & Spesifikasi QA (Folder `docs/`)
- [01_TEST_PLAN_ISO_29119.md](docs/01_TEST_PLAN_ISO_29119.md) — Dokumen Rencana Pengujian (*Test Plan & Test Strategy*) berdasarkan standar ISO/IEC/IEEE 29119-3:2021.
- [02_METRIK_KUALITAS_ISO_25010_2023.md](docs/02_METRIK_KUALITAS_ISO_25010_2023.md) — Karakteristik Mutu Perangkat Lunak (*Product Quality Model*) & Formula Evaluasi Kuantitatif ISO/IEC 25010:2023.
- [03_TEST_CASES_BLACK_BOX.md](docs/03_TEST_CASES_BLACK_BOX.md) — Matriks & Spesifikasi Kasus Uji (*Test Cases*) dengan teknik *Equivalence Partitioning* dan *Boundary Value Analysis*.
- [04_PEDOMAN_WAWANCARA_QA.md](docs/04_PEDOMAN_WAWANCARA_QA.md) — Panduan, instrumen 10 pertanyaan, kriteria narasumber, dan template wawancara praktisi QA profesional.

### 2. Laporan Hasil Eksekusi & Wawancara (Folder `reports/`)
- [MANUAL_TEST_EXECUTION_REPORT.md](reports/MANUAL_TEST_EXECUTION_REPORT.md) — Laporan Hasil Eksekusi Pengujian Manual (15 Test Cases, Pass Rate 93.33%, dan Log Defect `DEF-001`).
- [AUTOMATED_TEST_REPORT.md](reports/AUTOMATED_TEST_REPORT.md) — Laporan Hasil Pengujian Otomatis (12 Test Cases, Pass Rate 100%, rata-rata durasi 1.2 detik).
- [automated_test_results.json](reports/automated_test_results.json) — Data mentah (*raw data*) eksekusi automasi dalam format JSON.
- [WAWANCARA_QA_PROFESIONAL.md](reports/WAWANCARA_QA_PROFESIONAL.md) — Transkrip lengkap dan sintesis wawancara bersama Senior QA Engineer industri teknologi.

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

- [x] **Tahap 1: Penetapan Judul & Objek Penelitian** *(Commit #1)*
- [x] **Tahap 2: Penyusunan Dokumentasi QA (ISO Standard Testing)** *(Commit #2)*
  - Test Plan & Test Strategy (ISO/IEC/IEEE 29119)
  - Identifikasi Karakteristik Mutu (ISO/IEC 25010:2023)
  - Penyusunan Test Scenarios & Test Cases
  - Penyusunan Panduan Wawancara Praktisi QA
- [x] **Tahap 3: Eksekusi Pengujian Sistem (Manual & Otomatis)** *(Commit #3)*
  - Pengujian Manual (*15 Test Cases & Defect Reporting DEF-001*)
  - Pengujian Otomatis (*12 Test Cases dengan Node.js Runner*)
- [x] **Tahap 4: Wawancara Praktisi QA Profesional** *(Commit #3)*
  - Transkrip & sintesis industri QA
- [x] **Tahap 5: Finalisasi Repositori & Petunjuk Publikasi GitHub** *(Commit #3)*

