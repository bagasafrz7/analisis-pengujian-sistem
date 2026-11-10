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

## 🗺️ Roadmap Tahapan Pengerjaan

- [x] **Tahap 1: Penetapan Judul & Objek Penelitian** *(Commit #1)*
- [ ] **Tahap 2: Penyusunan Dokumentasi QA (ISO Standard Testing)**
  - Test Plan & Test Strategy (ISO/IEC/IEEE 29119)
  - Identifikasi Karakteristik Mutu (ISO/IEC 25010:2023)
  - Penyusunan Test Scenarios & Test Cases
- [ ] **Tahap 3: Eksekusi Pengujian Sistem**
  - Pengujian Manual (*Manual Test Execution & Defect Reporting*)
  - Pengujian Otomatis (*Automated E2E Test Suite*)
- [ ] **Tahap 4: Wawancara Praktisi QA Profesional**
  - Penyusunan daftar pertanyaan wawancara
  - Transkrip & hasil *insight* industri QA
- [ ] **Tahap 5: Finalisasi Laporan & Unggah Repositori GitHub**
