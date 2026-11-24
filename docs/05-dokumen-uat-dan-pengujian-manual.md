# DOKUMEN USER ACCEPTANCE TESTING (UAT) & PENGUJIAN MANUAL SISTEM
## Berdasarkan Silabus Kuliah Testing & QA (Pertemuan 9)
## Objek Uji: Platform Galeri.art (https://galeri.art/)

---

### Informasi Umum Dokumen
* **Mata Kuliah:** Testing & Quality Assurance Perangkat Lunak (07TPLE004)
* **Dosen Pengampu:** Asep Erlan Maulana, S.Kom., M.Kom.
* **Standar Acuan:** ISO/IEC/IEEE 29119 (*Test Documentation*) & Materi Pertemuan 9 (*User Acceptance Testing*)
* **Berkas Lembar Kerja Excel:** 📊 **[Unduh / Buka Dokumen UAT Format Excel (dokumen-uat-galeri-art.xlsx)](dokumen-uat-galeri-art.xlsx)**
* **Periode Eksekusi:** 
  - **Minggu 3 (23 – 29 November 2026):** Eksekusi Pengujian Fungsional Manual & Validasi Seluruh Alur Fitur
  - **Minggu 4 (30 November – 06 Desember 2026):** Verifikasi Ulang Defect, Regresi Manual & Pengisian Kuesioner Penerimaan
* **Lingkungan Pengujian (*Test Environment*):**
  - **Platform URL:** `https://galeri.art/` (Produksi Live)
  - **Perangkat Keras:** Laptop macOS / Windows 10/11 / Android Mobile / iPhone Safari
  - **Peramban Web (*Browser*):** Google Chrome v128+, Apple Safari v17+, Mozilla Firefox v130+, Microsoft Edge v128+

> **📌 Prinsip Utama Pelaksanaan Pengujian:**  
> Untuk memastikan pemahaman mendalam terhadap alur bisnis (*business flow*), **seluruh anggota kelompok (Bagas, Hafizh, Aditya, Syaifa) menguji KESELURUHAN 21 skenario fitur (End-to-End Flow)** secara mandiri. Kolom *Hasil Pengamatan Aktual*, *Status (PASS/FAIL)*, *Tanggal Uji*, *Lingkungan Uji*, dan *Catatan* sengaja dikosongkan agar masing-masing anggota mengisi hasil pengamatan nyata dari pengujiannya.

---

## 1. Pendahuluan & Alur Pengujian Penuh (End-to-End Flow)

Mengacu pada materi kuliah **Pertemuan 9 (User Acceptance Testing - UAT)**, pengujian penerimaan pengguna dirancang untuk memvalidasi alur operasional perangkat lunak secara menyeluruh dari kacamata pengguna akhir (*real-world user journey*).

Pengujian fungsional pada platform [Galeri.art](https://galeri.art/) mencakup 6 fase alur lengkap:
1. **Fase 1: Onboarding & Autentikasi Pengguna**
   - Registrasi akun biasa & Registrasi cepat via Google OAuth.
   - Login passwordless email OTP & Login via Google OAuth SSO.
   - Validasi ketahanan form terhadap format email tidak standar (Equivalence Partitioning).
2. **Fase 2: Navigasi & Eksplorasi Seniman Nusantara**
   - Akses beranda utama, responsivitas navigasi header, dan logo Galeri.art.
   - Eksplorasi direktori profil seniman dan perajin lokal nusantara (`/artists`).
   - Akses detail profil seniman, biografi, dan portofolio karya seni buatannya.
3. **Fase 3: Katalog Karya, Pencarian & Penyaringan Produk**
   - Eksplorasi katalog galeri karya seni nusantara (`/artworks`).
   - Pencarian karya seni berdasarkan kata kunci (*Search Bar*).
   - Penyaringan dinamis berdasarkan kategori produk (Tekstil, Kriya, dll).
   - Penyaringan dinamis berdasarkan rentang batas harga (Min & Max).
   - Pengurutan karya seni (*Sorting*: Termurah, Termahal, Terbaru).
4. **Fase 4: Evaluasi Detail Produk, Estimasi Ongkir & Komparasi**
   - Halaman detail produk karya seni (Galeri foto resolusi tinggi, bahan, dimensi, harga).
   - Fitur kalkulator estimasi ongkos kirim berdasarkan kota/kode pos tujuan.
   - Fitur komparasi perbandingan spesifikasi dan harga antar karya seni (*Compare Artworks*).
5. **Fase 5: Transaksi E-Commerce, Keranjang & Detail Pesanan**
   - Penambahan karya seni ke keranjang belanja (*Add to Cart*).
   - Akses dan manajemen keranjang belanja (*View Cart* & rincian subtotal).
   - Alur pemesanan dan pengisian data checkout (*Place Order*).
   - Tampilan halaman detail transaksi pesanan yang telah diorder (*Order Details / Invoice*).
6. **Fase 6: Keandalan Sistem & Penanganan Galat**
   - Penanganan error ketika pengguna mengakses URL slug produk yang tidak ada di database (Temuan Defect `DEF-001` HTTP 500).

---

## 2. Tim Penguji & Pelaksanaan Pengujian Mandiri

Setiap anggota kelompok membuka lembar kerja (sheet) sesuai namanya pada berkas Excel [dokumen-uat-galeri-art.xlsx](dokumen-uat-galeri-art.xlsx) dan menguji seluruh 21 skenario berikut:

| No | Nama Penguji | NIM | Peran Tim | Cakupan Pengujian yang Wajib Diuji |
| :-: | :--- | :---: | :--- | :--- |
| 1 | **Bagas Afrizal** | `231011400204` | Project Lead & Technical Lead | Seluruh 21 Skenario Fitur (End-to-End Flow UAT-01 s.d. UAT-21) |
| 2 | **Abdul Hafizh Ar Rasyid** | `231011403352` | QA Analyst & Tester | Seluruh 21 Skenario Fitur (End-to-End Flow UAT-01 s.d. UAT-21) |
| 3 | **Aditya Eka Purnama** | `231011400988` | Test Scenario Designer & Tester | Seluruh 21 Skenario Fitur (End-to-End Flow UAT-01 s.d. UAT-21) |
| 4 | **Syaifa Maulana** | `231011401802` | Quality Metrics Auditor & Tester | Seluruh 21 Skenario Fitur (End-to-End Flow UAT-01 s.d. UAT-21) |

---

## 3. Matriks Master 21 Kasus Uji UAT Alur Penuh (End-to-End)

Tabel berikut menjadi acuan skenario baku yang dieksekusi secara mandiri oleh masing-masing penguji:

| No | ID Kasus Uji | Modul | Deskripsi Pengujian | Langkah Pengujian | Data Input | Hasil yang Diharapkan | Prioritas | Hasil Pengamatan Aktual | Status | Tanggal Uji | Lingkungan Uji | Catatan / Bukti |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :---: | :--- | :--- |
| 1 | `UAT-01` | Registrasi | Pendaftaran Akun Pengguna Baru Biasa | 1. Buka `https://galeri.art/register`<br>2. Masukkan Nama & Email aktif<br>3. Klik tombol "Buat Akun" | Nama: Penguji<br>Email: `tester.baru@domain.id` | Form menerima input dan memproses pembuatan akun pengguna baru | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 2 | `UAT-02` | Registrasi | Pendaftaran Akun Baru Cepat dengan Google | 1. Buka `https://galeri.art/register`<br>2. Klik tombol "Daftar dengan Google"<br>3. Pilih akun Google | Klik Tombol Google Register | Akun terdaftar otomatis via Google OAuth dan masuk ke sesi | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 3 | `UAT-03` | Autentikasi | Login Pengguna Menggunakan Email (OTP) | 1. Buka `https://galeri.art/login`<br>2. Masukkan alamat email valid<br>3. Klik tombol Masuk | Email: `user.tester@gmail.com` | Halaman login memproses email dan menampilkan instruksi verifikasi OTP | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 4 | `UAT-04` | Autentikasi | Login Menggunakan Akun Google (SSO) | 1. Buka `https://galeri.art/login`<br>2. Klik tombol "Masuk dengan Google"<br>3. Amati dialog OAuth | Klik Tombol Google Login | Pengguna dialihkan ke dialog login Google dan kembali terautentikasi | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 5 | `UAT-05` | Validasi | Validasi Format Email Tidak Standar (EP Invalid) | 1. Buka `https://galeri.art/login`<br>2. Masukkan teks email tanpa '@'<br>3. Klik tombol Masuk | Email: `tester-invalid-domain` | Form menolak kirim dan memunculkan notifikasi validasi simbol '@' | Sedang | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 6 | `UAT-06` | Navigasi | Navigasi Navbar Header & Logo ke Beranda | 1. Buka halaman katalog karya `/artworks`<br>2. Klik logo "Galeri" di navbar header | Klik Logo Galeri | Pengguna diarahkan kembali ke halaman beranda utama (/) secara instan | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 7 | `UAT-07` | List Seniman | Eksplorasi Direktori Seniman (`/artists`) | 1. Klik menu "Seniman" di navbar<br>2. Periksa kartu profil perajin nusantara | URL: `/artists` | Menampilkan direktori kartu seniman lengkap beserta foto dan asal daerah | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 8 | `UAT-08` | Detail Seniman | Halaman Profil Detail Seniman & Portofolio | 1. Pada `/artists`, klik salah satu seniman<br>2. Amati portofolio karyanya | Klik Kartu Seniman | Membuka profil seniman, memuat kisah inspirasi dan daftar karya buatannya | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 9 | `UAT-09` | List Karya | Eksplorasi Katalog Karya Seni (`/artworks`) | 1. Klik menu "Karya" atau buka `/artworks`<br>2. Amati susunan grid kartu karya | URL: `/artworks` | Daftar karya termuat lengkap dengan gambar tajam, judul, perajin, dan harga | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 10 | `UAT-10` | Pencarian | Pencarian Karya Seni Berdasarkan Kata Kunci | 1. Klik search bar di header<br>2. Ketik kata kunci (misal: "Batik")<br>3. Tekan Enter / Cari | Kata Kunci: `"Batik"` | Sistem menyajikan daftar karya seni yang relevan dengan kata kunci | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 11 | `UAT-11` | Filter Karya | Penyaringan Karya Berdasarkan Kategori | 1. Di katalog, pilih filter Kategori (Tekstil)<br>2. Amati pembaruan daftar karya | Kategori: `Tekstil` | Daftar karya secara dinamis tersaring hanya menampilkan kategori terpilih | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 12 | `UAT-12` | Filter Karya | Penyaringan Karya Berdasarkan Rentang Harga | 1. Masukkan batas harga min & max<br>2. Terapkan filter harga | Min: 500rb \| Max: 5jt | Daftar karya tersaring akurat sesuai batasan nominal harga yang diminta | Sedang | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 13 | `UAT-13` | Pengurutan | Fitur Pengurutan Karya Seni (*Sorting*) | 1. Klik dropdown pengurutan<br>2. Pilih "Termurah" lalu "Terbaru" | Opsi: Termurah / Terbaru | Urutan posisi kartu karya seni berganti sesuai kriteria yang dipilih | Sedang | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 14 | `UAT-14` | Detail Karya | Tampilan Halaman Detail Produk Lengkap | 1. Klik salah satu karya seni di katalog<br>2. Amati foto, bahan, dimensi, harga | Klik Kartu Karya | Halaman detail menyajikan galeri foto tajam, spesifikasi teknis, dan harga | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 15 | `UAT-15` | Estimasi Ongkir | Pengecekan Estimasi Ongkos Kirim Produk | 1. Di detail produk, buka bagian Ongkir<br>2. Masukkan kota tujuan<br>3. Klik Cek Ongkir | Kota: `Tangerang Selatan` | Menampilkan perkiraan tarif ongkir, opsi kurir, dan estimasi lama hari kirim | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 16 | `UAT-16` | Komparasi | Fitur Membandingkan Antar Karya (Compare) | 1. Klik tombol "Bandingkan" pada karya 1<br>2. Pilih karya kedua<br>3. Buka jendela komparasi | Pilih 2 Karya Berbeda | Menampilkan tabel komparasi berdampingan (side-by-side) foto, harga, dan bahan | Sedang | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 17 | `UAT-17` | Add to Cart | Menambahkan Karya Seni ke Keranjang Belanja | 1. Pada detail karya yang tersedia<br>2. Klik tombol "Tambah ke Keranjang"<br>3. Amati ikon keranjang header | Klik "Tambah ke Keranjang" | Notifikasi sukses muncul dan angka badge ikon keranjang bertambah 1 | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 18 | `UAT-18` | Keranjang | Kelola Isi Keranjang Belanja (View Cart) | 1. Klik ikon keranjang belanja di navbar<br>2. Periksa rincian item dan subtotal | Akses Halaman Keranjang | Halaman keranjang menampilkan item yang dipilih beserta subtotal harga akurat | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 19 | `UAT-19` | Pemesanan | Alur Checkout & Pembuatan Pesanan Karya | 1. Dari keranjang, klik tombol Checkout<br>2. Isi nama, alamat, no telepon<br>3. Konfirmasi pemesanan | Data Pengiriman Lengkap | Form checkout memproses order dan menerbitkan konfirmasi pesanan baru | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 20 | `UAT-20` | Transaksi | Halaman Detail Transaksi Pesanan yang Diorder | 1. Buka menu riwayat pesanan setelah order<br>2. Periksa detail transaksi yang dibuat | ID Pesanan yang Dibuat | Halaman detail transaksi memuat invoice, tanggal, alamat, rincian karya, dan total | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |
| 21 | `UAT-21` | Keandalan | Penanganan URL Slug yang Tidak Ada (`DEF-001`) | 1. Buka URL: `/artworks/slug-tidak-ada-xyz`<br>2. Buka DevTools Network Tab | URL: `/artworks/slug-tidak-ada-xyz` | Sistem seharusnya menyajikan halaman 404 Not Found ramah, bukan crash HTTP 500 | Tinggi | *(Diisi saat testing)* | *(PASS/FAIL)* | *(Tgl)* | *(Browser/OS)* | *(Bukti)* |

---

## 4. Kuesioner Evaluasi Kepuasan Pengguna Akhir (UAT Usability & Acceptance)

Setelah mengeksekusi seluruh 21 skenario di atas, setiap anggota memberikan penilaian evaluasi (skala Likert 1–5):
*(1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Cukup, 4 = Setuju, 5 = Sangat Setuju)*

| No | Pernyataan Evaluasi Mutu & Kegunaan Sistem Galeri.art | Karakteristik ISO | Skor Bagas (400204) | Skor Hafizh (403352) | Skor Aditya (400988) | Skor Syaifa (401802) | Rata-rata Skor | Kategori Penerimaan |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | Antarmuka pengguna (UI) Galeri.art modern, bersih, dan mudah dipahami di desktop maupun mobile. | Usability | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |
| 2 | Fitur login & register (Email & Google OAuth) berjalan mudah, cepat, dan aman. | Functional Suitability | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |
| 3 | Alur pencarian karya, filter kategori, rentang harga, dan sorting berfungsi akurat dan presisi. | Functional Correctness | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |
| 4 | Fitur komparasi antar karya dan kalkulator estimasi ongkos kirim sangat membantu pengguna. | Usability & Utility | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |
| 5 | Alur penambahan ke keranjang, proses checkout (order), dan tampilan detail transaksi informatif. | Functional Completeness | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |
| 6 | Kecepatan pemuatan gambar/halaman sangat responsif dan penanganan galat error sistem dapat diandalkan. | Performance & Reliability | *[ ]* | *[ ]* | *[ ]* | *[ ]* | *[ Menunggu ]* | *[ Menunggu ]* |

---

## 5. Lembar Aktivitas & Rekam Jejak Anggota Kelompok

Untuk keperluan rekam jejak Git (*commit history*) dan verifikasi kontribusi seluruh anggota:
- 👤 [activity-bagas-afrizal.md](activity-bagas-afrizal.md) — Log Rekam Jejak Progres Project Lead Bagas Afrizal
- 👤 [activity-abdulhafizh.md](activity-abdulhafizh.md) — Catatan Aktivitas Abdul Hafizh Ar Rasyid
- 👤 [activity_adityaeka.md](activity_adityaeka.md) — Catatan Aktivitas Aditya Eka Purnama
- 👤 [activity_syaifamaulana.md](activity_syaifamaulana.md) — Catatan Aktivitas Syaifa Maulana
- 📊 **[dokumen-uat-galeri-art.xlsx](dokumen-uat-galeri-art.xlsx)** — Lembar Kerja Eksekusi UAT Lengkap 21 Kasus Uji Seluruh Anggota Format Excel
