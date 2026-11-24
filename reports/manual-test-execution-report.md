# LAPORAN HASIL EKSEKUSI PENGUJIAN MANUAL (MANUAL TEST REPORT)
## Metode: Black Box Testing Berbasis ISO/IEC 25010:2023
## Objek Uji: Platform Galeri.art (https://galeri.art/)

---

### Informasi Eksekusi
* **Tanggal Pelaksanaan:** November 2026
* **Lingkungan Pengujian:** macOS Sonoma / Google Chrome v128+ / Apple Safari 17+ / DevTools Responsive Mode
* **Metode:** Black Box Testing (Equivalence Partitioning & Boundary Value Analysis)
* **Status Pengujian:** Selesai (*Completed*)

---

## 1. Matriks Hasil Eksekusi Pengujian Manual

| Test ID | Modul | Deskripsi Kasus Uji | Karakteristik ISO | Status | Catatan / Hasil Observasi |
| :--- | :--- | :--- | :--- | :---: | :--- |
| `TC-NAV-01` | Navigasi | Tautan Beranda (Home) | Functional Suitability | **PASS** | Halaman utama termuat sempurna, logo dan emblem Galeri tampil rapi. |
| `TC-NAV-02` | Navigasi | Tautan Koleksi Karya (`/artworks`) | Functional Suitability | **PASS** | Membuka katalog karya seni nusantara dengan kontrol filter lengkap. |
| `TC-NAV-03` | Navigasi | Tautan Direktori Seniman (`/artists`) | Functional Suitability | **PASS** | Memuat profil dan cerita artisan lokal dari berbagai daerah. |
| `TC-AUTH-01` | Autentikasi | Form Login Email Passwordless (`/login`) | Functional Completeness | **PASS** | Input email aktif, instruksi login OTP tertera jelas, tombol kirim kode siap. |
| `TC-AUTH-02` | Autentikasi | Validasi Format Email Invalid (EP Invalid) | User Error Protection | **PASS** | Peramban menampilkan peringatan format email tidak valid jika '@' tidak ada. |
| `TC-AUTH-03` | Autentikasi | Form Pendaftaran Akun Baru (`/register`) | Functional Completeness | **PASS** | Form registrasi memuat kolom Nama, Email, dan tombol aksi *"Buat Akun"*. |
| `TC-AUTH-04` | Autentikasi | Endpoint CSRF Token Generator | Security (Integrity) | **PASS** | Endpoint `/api/auth/csrf` menghasilkan token unik kriptografis 64-hex string. |
| `TC-AUTH-05` | Autentikasi | Proteksi Permintaan Tanpa CSRF | Security (Resistance) | **PASS** | POST langsung ke callback dicegat dan dialihkan ke `/login?error=MissingCSRF`. |
| `TC-CAT-01` | Katalog | Visualisasi Grid Karya & Harga | Usability & Functional | **PASS** | Gambar karya seni dioptimasi via Next/Image (WebP) dengan badge harga rupiah. |
| `TC-CAT-02` | Katalog | Filter Kategori Karya Seni | Functional Correctness | **PASS** | Filter kategori (tekstil, kriya, perhiasan) berhasil menyaring data karya. |
| `TC-CAT-03` | Katalog | Filter Rentang Harga Min & Max | Functional Correctness | **PASS** | Masukan angka pada Harga Minimum & Maksimum memfilter rentang harga karya. |
| `TC-SRC-01` | Pencarian | Input Pencarian Kata Kunci Normal | Functional Correctness | **PASS** | Input *"Cari di galeri"* merespons masukan kata kunci pencarian. |
| `TC-SRC-02` | Pencarian | Input String Ekstrem (BVA Max 250 Karakter)| Reliability & Robustness | **PASS** | Masukan 250 karakter ditangani tanpa menyebabkan server crash (HTTP 200). |
| `TC-SEC-01` | Keamanan | Sanitasi Injeksi Tag Script (XSS) | Security (Integrity) | **PASS** | Karakter script `<script>` di-escape oleh React/Next.js sehingga tidak dieksekusi mentah. |
| `TC-REL-01` | Keandalan | Penanganan Slug Karya Tidak Ditemukan | Fault Tolerance | <span style="color:red">**FAIL**</span> | **Defect DEF-001:** Mengembalikan galat **HTTP 500** alih-alih halaman ramah **404 Not Found**. |

---

## 2. Log Temuan Defect / Galat Sistem (Defect Log)

Dalam pengujian manual fungsional dan keandalan, ditemukan 1 galat (*defect*) pada penanganan routing dinamis:

### Laporan Defect: `DEF-001`
* **Defect Title:** Unhandled Server Exception (HTTP 500) pada Akses Slug Karya & Seniman yang Tidak Terdaftar
* **Severity:** **Medium / High** (Memengaruhi *Reliability*, *Fault Tolerance*, dan *User Experience*)
* **Priority:** **High**
* **URL Terkait:**
  - `https://galeri.art/artworks/slug-tidak-ditemukan-xyz123`
  - `https://galeri.art/artists/artis-tidak-ditemukan-xyz123`
* **Langkah Mereproduksi (Steps to Reproduce):**
  1. Buka peramban web dan masukkan alamat URL: `https://galeri.art/artworks/item-palsu-acakkk999`.
  2. Buka DevTools Network Tab untuk melihat HTTP Response Header.
  3. Amati tampilan layar dan status kode yang dikembalikan server.
* **Kondisi Aktual (Actual Result):**
  Server merespons dengan status kode **`HTTP 500 Internal Server Error`** dan menyajikan dokumen kosong berantakan tanpa pesan kesalahan yang informatif kepada pengguna.
* **Kondisi yang Diharapkan (Expected Result):**
  Aplikasi Next.js seharusnya memicu penanganan `notFound()` dari fungsi bawaan `next/navigation`, merespons dengan status kode **`HTTP 404 Not Found`**, dan menyajikan antarmuka ramah yang menginformasikan bahwa karya/seniman yang dicari tidak ditemukan serta menyediakan tombol kembali ke beranda.
* **Rekomendasi Perbaikan (Remediation):**
  Pada file page dinamis Next.js (`app/artworks/[slug]/page.tsx` dan `app/artists/[slug]/page.tsx`), tambahkan pengecekan validitas data dari database. Jika query mengembalikan `null`, panggil fungsi `notFound()` untuk merender halaman `not-found.tsx` standar.

---

## 3. Rekapitulasi Metrik Kualitas Manual (ISO/IEC 25010:2023)

$$\text{Functional Completeness Metric (FCM)} = 1 - \left( \frac{1}{15} \right) = 0.933 \text{ (93.33\%)}$$

* **Total Test Cases Manual:** 15 Kasus Uji
* **Passed:** 14 Kasus Uji (93.33%)
* **Failed:** 1 Kasus Uji (6.67% — Defect Penanganan Galat Slug HTTP 500)
* **Kesimpulan Kualitas Fungsional Manual:** Platform Galeri.art memenuhi standar kelayakan fungsional dengan tingkat keberhasilan di atas batas ambang ($\ge 90\%$).
