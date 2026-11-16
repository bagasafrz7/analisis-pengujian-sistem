# METRIK EVALUASI KUALITAS PERANGKAT LUNAK (ISO/IEC 25010:2023)
## Objek Evaluasi: Platform Galeri.art (https://galeri.art/)

---

## 1. Tinjauan Standar ISO/IEC 25010:2023
Standar internasional **ISO/IEC 25010:2023** (*Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*) membagi karakteristik kualitas perangkat lunak menjadi sembilan dimensi utama.

Untuk pengujian platform e-commerce dan kurasi karya seni **Galeri.art** dengan metode **Black Box Testing**, lima karakteristik inti berikut dipilih sebagai tolok ukur evaluasi kualitas sistem:

```
                    ┌────────────────────────────────────────────────────────┐
                    │               ISO/IEC 25010:2023                      │
                    │              Product Quality Model                     │
                    └────────────────────────────────────────────────────────┘
                                               │
      ┌────────────────────┬───────────────────┼────────────────────┬────────────────────┐
      ▼                    ▼                   ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Functional  │   │   Usability  │    │ Performance  │     │ Reliability  │     │   Security   │
│ Suitability  │   │ (Interaction)│    │  Efficiency  │     │(Fault Tol.)  │     │ (CSRF & XSS) │
└──────────────┘   └──────────────┘    └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 2. Definisi Karakteristik & Metrik Pengukuran

### 2.1 Kesesuaian Fungsional (Functional Suitability)
Tingkat di mana fitur platform memenuhi kebutuhan fungsional pengguna dalam berinteraksi, mengelola akun, dan menjelajahi karya seni.
* **Sub-karakteristik:**
  1. *Functional Completeness:* Ketersediaan form login email passwordless, form registrasi, katalog karya seni, filter harga, filter kategori, dan direktori seniman.
  2. *Functional Correctness:* Apakah tombol submit form, link navigasi, dan filter mengembalikan respon data yang benar tanpa galat.
  3. *Functional Appropriateness:* Kesesuaian alur registrasi ke login dan penjelajahan katalog hingga detail produk.
* **Formula Kuantitatif:**
  $$\text{Functional Completeness Metric (FCM)} = 1 - \left( \frac{A}{B} \right)$$
  $$\text{Persentase Kelayakan Fungsional} = \left( \frac{\text{Jumlah Test Case Passed}}{\text{Total Test Case}} \right) \times 100\%$$
  *Di mana $A$ adalah jumlah kasus uji yang gagal dan $B$ adalah total kasus uji yang dieksekusi.*

---

### 2.2 Kemampuan Interaksi / Ketergunaan (Usability / Interaction Capability)
Tingkat kemudahan dan kejelasan antarmuka platform Galeri.art bagi pengguna dan calon pembeli seni.
* **Sub-karakteristik:**
  1. *Appropriateness Recognizability:* Pengguna dengan mudah mengenali tujuan situs sebagai platform kurasi karya seni asli Indonesia.
  2. *Learnability & Operability:* Kemudahan pengisian form login (cukup memasukkan email tanpa perlu menghafal kata sandi yang rumit).
  3. *User Error Protection:* Validasi terhadap format email yang keliru serta pencegahan input yang tidak valid pada filter harga.

---

### 2.3 Efisiensi Kinerja (Performance Efficiency)
Kinerja platform Next.js dalam merespons permintaan pengguna pada kondisi jaringan stabil.
* **Sub-karakteristik:**
  1. *Time Behavior:* Waktu respons pemuatan halaman (*Page Load Time*) dan waktu penerimaan data pertama (*TTFB*).
  2. *Resource Utilization:* Efisiensi ukuran bundel script dan aset gambar WebP terkompresi.
* **Ambang Batas Pengujian:**
  - **Load Duration:** $\le 3.5 \text{ detik}$ (Target Lolos).
  - **Server Response:** Rata-rata respons API $\le 500 \text{ ms}$.

---

### 2.4 Keandalan & Toleransi Kesalahan (Reliability & Fault Tolerance)
Tingkat kemampuan sistem dalam menangani masukan tak terduga tanpa mengalami kegagalan fatal (*crash*).
* **Sub-karakteristik:**
  1. *Fault Tolerance:* Kemampuan sistem menangani parameter query panjang ekstrem (250 karakter) tanpa menimbulkan *timeout*.
  2. *Recoverability & Error Handling:* Sistem seharusnya mengembalikan kode status `404 Not Found` yang ramah ketika pengguna mengakses slug karya seni atau artis yang tidak terdaftar, alih-alih `500 Internal Server Error`.

---

### 2.5 Keamanan (Security Baseline)
Kemampuan sistem dalam melindungi integritas data pengguna dan transmisi informasi akun.
* **Sub-karakteristik:**
  1. *Confidentiality:* Transmisi data diamankan secara menyeluruh menggunakan protokol HTTPS / TLS dengan Secure Cookies.
  2. *Integrity & CSRF Protection:* Proteksi formulir otentikasi melalui *Anti-CSRF Token* (`__Host-authjs.csrf-token` & token unik API).
  3. *Input Sanitization:* Penanganan otomatis terhadap injeksi kode JavaScript mentah (*Cross-Site Scripting - XSS*) pada URL query parameter.

---

## 3. Matriks Target Mutu Pengujian

| Karakteristik ISO 25010:2023 | Parameter yang Diuji | Target Nilai | Metode Pengujian |
| :--- | :--- | :--- | :--- |
| **Functional Suitability** | Fitur Login, Register, Katalog, Filter | $\ge 90\%$ Pass | Manual & Otomatis |
| **Usability** | Desain Form Login & Navigasi | Bebas anomali layout | Heuristic Evaluation |
| **Performance Efficiency** | Page Load Time halaman `/artworks` | $< 3.5$ detik | Node.js Test Runner |
| **Reliability** | Penanganan slug tak ditemukan & BVA Max | Status 404 / Respon aman | Manual & Automated |
| **Security Baseline** | Proteksi CSRF & Sanitasi XSS | Lolos Proteksi | Automated API Testing |
