# SPESIFIKASI TEST SCENARIOS & TEST CASES
## Objek Uji: Platform Galeri.art (https://galeri.art/)
## Metode: Black Box Testing (Equivalence Partitioning & Boundary Value Analysis)
## Standar Acuan: ISO/IEC/IEEE 29119 & ISO/IEC 25010:2023

---

## 1. Ringkasan Modul Pengujian

| Modul | Kode | Deskripsi Pengujian |
| :--- | :--- | :--- |
| **Autentikasi Pengguna** | `MOD-AUTH` | Pengujian form Login passwordless, Register, dan proteksi CSRF |
| **Navigasi & Tata Letak** | `MOD-NAV` | Pengujian menu utama, header, dan struktur navigasi situs |
| **Katalog Karya Seni** | `MOD-CAT` | Pengujian tampilan katalog karya seni dan direktori seniman |
| **Filter & Pencarian** | `MOD-FLT` | Pengujian filter kategori, rentang harga, dan parameter query |
| **Keamanan & Validasi** | `MOD-SEC` | Pengujian sanitasi input XSS dan pengujian proteksi token CSRF |
| **Keandalan & Error Handling** | `MOD-REL` | Pengujian respon terhadap slug tidak ditemukan dan masukan ekstrem |
| **Performa & Responsif** | `MOD-RSP` | Pengujian waktu muat dan responsivitas tampilan perangkat *mobile* |

---

## 2. Rincian Kasus Uji (Test Cases)

### Modul 1: Autentikasi Pengguna (MOD-AUTH)

#### TC-AUTH-01: Verifikasi Ketersediaan & Struktur Halaman Login
* **Karakteristik ISO:** *Functional Suitability (Functional Completeness)*
* **Prasyarat:** Pengguna mengakses peramban web pada alamat `https://galeri.art/login`.
* **Langkah Pengujian:**
  1. Akses halaman `https://galeri.art/login`.
  2. Periksa keberadaan form input email, teks instruksi *"Kami mengirim kode masuk ke email Anda. Tidak perlu kata sandi."*, tombol *"Kirim kode masuk"*, dan tautan pendaftaran *"Daftar"*.
* **Hasil yang Diharapkan:** Halaman login berhasil dimuat dengan status HTTP 200, elemen form email tersedia dan aktif.

#### TC-AUTH-02: Validasi Format Email pada Form Login (EP - Invalid Partition)
* **Karakteristik ISO:** *Usability (User Error Protection)*
* **Teknik:** Equivalence Partitioning (Input format email invalid).
* **Langkah Pengujian:**
  1. Masukkan string tanpa domain atau simbol at (misal: `pengguna-tanpa-email`) ke kolom email.
  2. Klik tombol *"Kirim kode masuk"*.
* **Hasil yang Diharapkan:** Peramban/sistem memvalidasi atribut `type="email"` dan menampilkan pesan peringatan validasi peramban (*"Please include an '@' in the email address"*).

#### TC-AUTH-03: Verifikasi Ketersediaan & Struktur Halaman Register
* **Karakteristik ISO:** *Functional Suitability (Functional Completeness)*
* **Prasyarat:** Pengguna membuka `https://galeri.art/register`.
* **Langkah Pengujian:**
  1. Akses halaman `https://galeri.art/register`.
  2. Amati elemen antarmuka: input *"Nama"*, input *"Email"*, dan tombol *"Buat Akun"*.
* **Hasil yang Diharapkan:** Form registrasi tampil lengkap, input nama dan email dapat menerima masukan teks, status HTTP 200.

#### TC-AUTH-04: Verifikasi Pembangkitan Token CSRF Keamanan Auth
* **Karakteristik ISO:** *Security (Integrity & Non-repudiation)*
* **Langkah Pengujian:**
  1. Lakukan request GET ke endpoint API CSRF `https://galeri.art/api/auth/csrf`.
* **Hasil yang Diharapkan:** Server merespon status 200 dengan payload JSON berisi properti `csrfToken` sepanjang minimal 32 karakter hexadecimal.

#### TC-AUTH-05: Proteksi Permintaan Otentikasi Tanpa Token CSRF
* **Karakteristik ISO:** *Security (Resistance)*
* **Langkah Pengujian:**
  1. Kirim permintaan POST langsung ke `/api/auth/callback/credentials` tanpa menyertakan token CSRF yang valid.
* **Hasil yang Diharapkan:** Server menolak otentikasi liar dan mengalihkan (*redirect*) ke URL `/login?error=MissingCSRF`.

---

### Modul 2: Navigasi Menu & Header (MOD-NAV)

#### TC-NAV-01: Verifikasi Navigasi Beranda ke Katalog Karya (/artworks)
* **Karakteristik ISO:** *Functional Suitability (Functional Correctness)*
* **Langkah Pengujian:**
  1. Dari beranda `https://galeri.art/`, klik menu *"Koleksi karya"* atau tombol jelajah karya.
* **Hasil yang Diharapkan:** Peramban diarahkan ke `https://galeri.art/artworks`, menampilkan grid karya seni kriya nusantara, status HTTP 200.

#### TC-NAV-02: Verifikasi Navigasi ke Halaman Direktori Seniman (/artists)
* **Karakteristik ISO:** *Functional Suitability (Functional Correctness)*
* **Langkah Pengujian:**
  1. Klik menu *"Seniman & artisan"* pada navigasi.
* **Hasil yang Diharapkan:** Membuka `https://galeri.art/artists`, menampilkan daftar artisan lokal (misal: Tabita Quilts, Princessories, Wastra Tunggal).

---

### Modul 3: Katalog & Filter Pencarian (MOD-FLT)

#### TC-FLT-01: Filter Katalog Berdasarkan ID Kategori (EP Valid)
* **Karakteristik ISO:** *Functional Correctness*
* **Langkah Pengujian:**
  1. Akses URL katalog dengan parameter kategori: `https://galeri.art/artworks?categoryId=db165d31-ee33-48e5-9477-96028e31e54a`.
* **Hasil yang Diharapkan:** Halaman menampilkan koleksi karya yang telah difilter sesuai kategori yang dipilih tanpa galat rendering.

#### TC-FLT-02: Pengujian Masukan Batas Ekstrem pada Parameter Query (BVA Max)
* **Karakteristik ISO:** *Reliability & Robustness*
* **Teknik:** Boundary Value Analysis (Panjang karakter query = 250 karakter).
* **Langkah Pengujian:**
  1. Akses `https://galeri.art/artworks?q=` disertai string panjang berulang sebanyak 250 karakter.
* **Hasil yang Diharapkan:** Server tetap stabil merespon status 200 OK tanpa mengalami *crash* atau *gateway timeout*.

---

### Modul 4: Keandalan & Penanganan Galat (MOD-REL)

#### TC-REL-01: Penanganan Akses Slug Karya Seni Tidak Ditemukan
* **Karakteristik ISO:** *Reliability (Fault Tolerance & Recoverability)*
* **Langkah Pengujian:**
  1. Masukkan URL karya seni dengan slug acak yang tidak terdaftar: `https://galeri.art/artworks/slug-tidak-ditemukan-xyz123`.
  2. Amati kode status respons HTTP dan tampilan antarmuka.
* **Hasil yang Diharapkan:** Sistem menampilkan halaman *404 Not Found* yang ramah pengguna.
* **Hasil Aktual:** Server mengalami galat *Internal Server Error (HTTP 500)* tanpa halaman error yang informatif (**Defect `DEF-001`**).

---

### Modul 5: Keamanan & Performa (MOD-SEC & MOD-PERF)

#### TC-SEC-01: Sanitasi Masukan Karakter Khusus / Basic XSS
* **Karakteristik ISO:** *Security (Integrity)*
* **Langkah Pengujian:**
  1. Masukkan payload script `<script>alert('QA')</script>` ke parameter query pencarian karya.
* **Hasil yang Diharapkan:** Tag script dinetralisasi / di-escape secara aman oleh mekanisme React/Next.js sehingga tidak dieksekusi mentah pada peramban klien.

#### TC-PERF-01: Pengukuran Waktu Muat Halaman Katalog (/artworks)
* **Karakteristik ISO:** *Performance Efficiency (Time Behavior)*
* **Langkah Pengujian:**
  1. Ukur durasi unduh dokumen lengkap halaman `/artworks`.
* **Hasil yang Diharapkan:** Durasi pemuatan dokumen berada di bawah ambang batas $< 3.5\text{ detik}$ (Hasil aktual tercatat ~554 ms).
