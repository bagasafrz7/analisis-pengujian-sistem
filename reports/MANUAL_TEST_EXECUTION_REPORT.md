# LAPORAN HASIL EKSEKUSI PENGUJIAN MANUAL (MANUAL TEST REPORT)
## Metode: Black Box Testing Berbasis ISO/IEC 25010:2023
## Objek Uji: Website Keke Craft (https://www.galerikeke.com/)

---

### Informasi Eksekusi
* **Tanggal Pelaksanaan:** November 2026
* **Lingkungan Pengujian:** macOS Sonoma / Google Chrome v128+ / Safari 17+ / DevTools Responsive Emulation
* **Metode:** Black Box Testing (Equivalence Partitioning & Boundary Value Analysis)
* **Status Pengujian:** Selesai (*Completed*)

---

## 1. Matriks Hasil Eksekusi Pengujian Manual

| Test ID | Modul | Deskripsi Kasus Uji | Karakteristik ISO | Status | Catatan / Hasil Observasi |
| :--- | :--- | :--- | :--- | :---: | :--- |
| `TC-NAV-01` | Navigasi | Tautan Beranda (Home) | Functional Suitability | **PASS** | Halaman utama termuat sempurna, header dan logo tampil. |
| `TC-NAV-02` | Navigasi | Tautan Produk (Product) | Functional Suitability | **PASS** | Membuka katalog kriya dengan grid rapi. |
| `TC-NAV-03` | Navigasi | Tautan Profil (About Us) | Functional Suitability | **PASS** | Memuat profil sejarah UMKM Keke Craft sejak 2021. |
| `TC-CAT-01` | Katalog | Visualisasi Foto & Nama Produk | Usability & Functional | **PASS** | Gambar tas pandan dirender jelas tanpa *broken image*. |
| `TC-CAT-02` | Katalog | Kelengkapan Dimensi Ukuran Produk | Functional Completeness | <span style="color:red">**FAIL**</span> | **Defect D-01:** Beberapa produk memiliki dimensi kosong (`Dimensi : `). |
| `TC-CTA-01` | Interaksi | Tombol WhatsApp Direct Order | Interoperability | **PASS** | Mengarahkan ke WhatsApp Web / App nomor +62 813-8605-8147. |
| `TC-CTA-02` | Interaksi | Tautan Akun Instagram | Interoperability | **PASS** | Membuka tab profil Instagram `@kekecraft_`. |
| `TC-CTA-03` | Interaksi | Tautan Halaman Facebook | Interoperability | **PASS** | Membuka tautan fanpage Facebook Keke Craft. |
| `TC-SRC-01` | Pencarian | Input Kata Kunci Valid (EP Valid) | Functional Correctness | **PASS** | Menampilkan judul pencarian dan artikel yang sesuai. |
| `TC-SRC-02` | Pencarian | Input Kata Kunci Tidak Ditemukan | User Error Protection | **PASS** | Menampilkan notifikasi ramah: *"Maaf, tidak ada yang sesuai..."*. |
| `TC-SRC-03` | Pencarian | Input String Kosong `?s=` (BVA Min) | Reliability | **PASS** | Server stabil merespons status 200 tanpa galat 500. |
| `TC-SRC-04` | Pencarian | Input String Ekstrem (BVA Max) | Reliability | **PASS** | String panjang ditangani tanpa merusak layout CSS. |
| `TC-SEC-01` | Keamanan | Sanitasi Karakter Script / XSS | Security (Resistance) | **PASS** | Tag `<script>` di-escape menjadi entitas teks HTML aman. |
| `TC-SEC-02` | Keamanan | Enkripsi SSL & Enforce HTTPS | Security (Confidentiality) | **PASS** | Sertifikat TLS aktif dan valid dengan header HSTS. |
| `TC-RSP-01` | Tampilan | Responsivitas Mobile (375px) | Compatibility | **PASS** | Menu navigasi terlipat menjadi hamburger menu, grid adaptif. |

---

## 2. Log Temuan Defect / Galat Sistem (Defect Log)

Dalam pengujian manual fungsional, ditemukan 1 galat (*defect*) pada halaman katalog produk:

### Laporan Defect: `DEF-001`
* **Defect Title:** Informasi Dimensi Ukuran Kosong pada Sebagian Item Katalog Produk
* **Severity:** **Medium** (Memengaruhi *Functional Completeness* dan *User Experience*)
* **Priority:** **Normal**
* **URL Terkait:** `https://www.galerikeke.com/product/`
* **Langkah Mereproduksi (Steps to Reproduce):**
  1. Akses halaman katalog produk di `https://www.galerikeke.com/product/`.
  2. Gulir ke bagian bawah katalog kriya.
  3. Amati informasi deskripsi pada item **"Alexander 02"** dan **"Kotak Tisu Anyaman Pandan kombinasi Batik"**.
* **Kondisi Aktual (Actual Result):**
  Deskripsi hanya menampilkan label teks `"Dimensi : "` tanpa adanya angka ukuran panjang, lebar, dan tinggi produk.
* **Kondisi yang Diharapkan (Expected Result):**
  Menampilkan angka ukuran yang jelas seperti produk lainnya (misal: `"Dimensi : 25 x 15 x 10 cm"`) agar calon pembeli mendapatkan kepastian ukuran sebelum memesan via WhatsApp.
* **Rekomendasi Perbaikan (Remediation):**
  Administrator konten website perlu melengkapi atribut dimensi ukuran pada editor WordPress/Elementor untuk item terkait.

---

## 3. Rekapitulasi Metrik Kualitas Manual (ISO/IEC 25010:2023)

$$\text{Functional Completeness Metric (FCM)} = 1 - \left( \frac{1}{15} \right) = 0.933 \text{ (93.33\%)}$$

* **Total Test Cases Manual:** 15 Kasus Uji
* **Passed:** 14 Kasus Uji (93.33%)
* **Failed:** 1 Kasus Uji (6.67% — Defect Konten Dimensi)
* **Kesimpulan Kualitas Fungsional Manual:** Sistem memenuhi standar kelayakan fungsional dengan tingkat keberhasilan di atas batas ambang ($\ge 90\%$).

