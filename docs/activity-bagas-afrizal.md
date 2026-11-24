# Catatan Aktivitas: Bagas Afrizal

## Identitas
* **Nama Lengkap:** Bagas Afrizal
* **NIM:** `231011400204`
* **Peran Tim:** Project Lead
* **Mata Kuliah:** Testing & Quality Assurance Perangkat Lunak (07TPLE004)
* **Dosen Pengampu:** Asep Erlan Maulana, S.Kom., M.Kom.
* **Objek Penelitian:** Platform Galeri.art (https://galeri.art/)

---

## Log Aktivitas Proyek

* **09 November 2026:**
  - Membentuk kelompok pengujian sistem (Bagas Afrizal, Abdul Hafizh Ar Rasyid, Aditya Eka Purnama, Syaifa Maulana).
  - Melakukan riset awal pemilihan objek penelitian UMKM (Keke Craft).
  - Menetapkan metode pengujian utama yang digunakan: Black Box Testing dengan rujukan jurnal nasional terakreditasi SINTA 2 & 3.

* **10 November 2026:**
  - Melakukan inisialisasi repositori Git lokal dan menghubungkan ke remote GitHub (`bagasafrz7/analisis-pengujian-sistem`).
  - Membuat commit pertama (*first commit*) repositori dan menyusun kerangka awal berkas `README.md`.

* **16 November 2026:**
  - Melakukan evaluasi terhadap objek penelitian sebelumnya dan memutuskan beralih ke platform **Galeri.art** (https://galeri.art/) karena menyediakan sistem autentikasi lengkap (login email, Google OAuth, registrasi), katalog kurasi seni, dan transaksi e-commerce.
  - Menyusun dokumen rencana dan strategi pengujian berstandar **ISO/IEC/IEEE 29119** (`docs/01-test-plan-iso-29119.md`).
  - Merancang taksonomi dan formula evaluasi mutu perangkat lunak berdasarkan standar **ISO/IEC 25010:2023** (`docs/02-metrik-kualitas-iso-25010-2023.md`).
  - Merancang spesifikasi kasus uji Black Box dengan teknik *Equivalence Partitioning* (EP) dan *Boundary Value Analysis* (BVA) (`docs/03-test-cases-black-box.md`).
  - Menyusun panduan instrumen pertanyaan wawancara untuk praktisi QA profesional (`docs/04-pedoman-wawancara-qa.md`).
  - Mengembangkan skrip otomatisasi pengujian Black Box berbasis Node.js Native API (`tests/run-blackbox-tests.js`).
  - Melakukan pengujian sistem dan mencatat temuan bug riil **`DEF-001`** (galat HTTP 500 pada akses slug dinamis yang tidak terdaftar di database).
  - Menyusun draf naskah akademik laporan Bab I s.d. Bab V (`laporan-lengkap-pengujian-sistem.md`) dan slide presentasi sidang UAS (`presentasi-pengujian-sistem.md`).

* **17 November 2026:**
  - Mengonfigurasi pipeline CI/CD pengujian otomatis menggunakan GitHub Actions (`.github/workflows/qa-tests.yml`).
  - Mengoordinasikan seluruh anggota kelompok untuk melakukan kloning repositori ke komputer masing-masing.

* **18 November 2026:**
  - Merancang timeline kerja proyek dari awal hingga target selesai H-7 UAS (12 Desember 2026) dan pelaksanaan UAS (19 Desember 2026).
  - Membuat visualisasi jadwal dan Gantt Chart resmi dalam format PDF Landscape A4 (`timeline/timeline-qa-galeri-art.pdf`) serta lembar kerja Excel interaktif (`timeline/timeline-qa-galeri-art.xlsx`).
  - Melakukan merge kontribusi catatan aktivitas anggota ke branch utama.

* **24 November 2026:**
  - Melakukan audit menyeluruh kesesuaian repositori terhadap 16 pertemuan silabus perkuliahan dari Dosen Pengampu **Asep Erlan Maulana, S.Kom., M.Kom.**
  - Menstandarisasi seluruh penamaan berkas proyek menjadi format *kebab-case* bersih tanpa garis bawah (`_`).
  - Memperbarui master `README.md` sebagai pusat kendali eksekutif yang memuat ringkasan proyek, audit silabus perkuliahan, dan tautan langsung ke berkas-berkas penting.
  - Memetakan seluruh fitur platform Galeri.art (Login & Register Email/Google, List Karya, List Seniman, Detail Karya, Estimasi Ongkir, Komparasi Karya, Add to Cart, Order/Checkout, dan Detail Transaksi).
  - Membuat dokumen lembar kerja UAT interaktif dalam format Microsoft Excel (`docs/dokumen-uat-galeri-art.xlsx`) dengan 6 sheet (Ringkasan, 4 sheet anggota dengan dropdown PASS/FAIL dan formula rekapitulasi otomatis, serta kuesioner penerimaan sistem).
  - Menyusun dokumen master UAT (`docs/05-dokumen-uat-dan-pengujian-manual.md`) dengan mengosongkan kolom hasil uji agar setiap anggota kelompok dapat melakukan pengujian manual secara mandiri di website Galeri.art.
  - Merapikan berkas catatan aktivitas personal agar fokus pada rekam jejak pelaksanaan proyek.
