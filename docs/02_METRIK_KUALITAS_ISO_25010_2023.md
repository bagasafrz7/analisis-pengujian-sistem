# METRIK EVALUASI KUALITAS PERANGKAT LUNAK (ISO/IEC 25010:2023)
## Objek Evaluasi: Website Keke Craft (https://www.galerikeke.com/)

---

## 1. Tinjauan Standar ISO/IEC 25010:2023
Standar **ISO/IEC 25010:2023** (*Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model*) merupakan pembaruan resmi atas standar ISO/IEC 25010:2011 yang diterbitkan pada akhir tahun 2023. Standar ini membagi karakteristik kualitas produk perangkat lunak ke dalam sembilan dimensi utama.

Untuk pengujian situs web UMKM **Keke Craft** dengan metode **Black Box Testing**, lima karakteristik inti berikut dipilih sebagai tolok ukur evaluasi kualitas sistem:

```
                    ┌────────────────────────────────────────────────────────┐
                    │               ISO/IEC 25010:2023                      │
                    │              Product Quality Model                     │
                    └────────────────────────────────────────────────────────┘
                                               │
      ┌────────────────────┬───────────────────┼────────────────────┬────────────────────┐
      ▼                    ▼                   ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Functional  │   │   Usability  │    │ Performance  │     │Compatibility │     │   Security   │
│ Suitability  │   │ (Interaction)│    │  Efficiency  │     │              │     │  (Baseline)  │
└──────────────┘   └──────────────┘    └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 2. Definisi Karakteristik & Metrik Pengukuran

### 2.1 Kesesuaian Fungsional (Functional Suitability)
Tingkat di mana fungsionalitas sistem memenuhi kebutuhan pengguna dalam konteks penggunaan spesifik.
* **Sub-karakteristik:**
  1. *Functional Completeness:* Seberapa lengkap fitur katalog kriya, halaman profil, dan navigasi tersedia.
  2. *Functional Correctness:* Apakah tombol aksi (WhatsApp CTA, media sosial, tautan navigasi) mengarahkan pengguna ke tujuan yang benar tanpa galat.
  3. *Functional Appropriateness:* Kesesuaian alur interaksi pengguna dalam menjelajahi produk hingga menghubungi penjual.
* **Formula Pengukuran Kuantitatif:**
  $$\text{Functional Completeness Metric (FCM)} = 1 - \left( \frac{A}{B} \right)$$
  $$\text{Persentase Kelayakan Fungsional} = \left( \frac{\text{Jumlah Test Case Passed}}{\text{Total Test Case}} \right) \times 100\%$$
  *Di mana $A$ adalah jumlah fungsi yang gagal/hilang dan $B$ adalah total fungsi yang diuji.*

---

### 2.2 Kemampuan Interaksi / Ketergunaan (Interaction Capability / Usability)
Tingkat kemudahan dan kenyamanan pengguna saat berinteraksi dengan antarmuka situs Keke Craft.
* **Sub-karakteristik:**
  1. *Appropriateness Recognizability:* Pengguna dapat langsung mengenali bahwa situs adalah galeri produk kriya anyaman pandan.
  2. *Learnability & Operability:* Kemudahan navigasi katalog dan kejelasan penempatan tombol kontak.
  3. *User Error Protection:* Ketahanan sistem terhadap masukan pencarian yang tidak valid atau karakter tidak terduga tanpa menimbulkan *crash* antarmuka.
  4. *Aesthetics & User Engagement:* Kerapian tata letak grid produk dan visualisasi foto kerajinan.
* **Metrik Evaluasi:**
  Evaluasi berbasis *Heuristic Usability Checklist* (Skala Likert 1-5) dan pengujian respon pesan pencarian kosong/tidak ditemukan.

---

### 2.3 Efisiensi Kinerja (Performance Efficiency)
Kinerja sistem dalam merespons permintaan pengguna dalam kondisi operasional normal.
* **Sub-karakteristik:**
  1. *Time Behavior:* Waktu respons server (TTFB - *Time to First Byte*) dan total waktu pemuatan halaman (*Page Load Time*).
  2. *Resource Utilization:* Ukuran total payload aset (HTML, CSS, JS, Gambar katalog WebP/JPEG) yang diunduh per halaman.
* **Standar Ambang Batas (Benchmarking Google Lighthouse & W3C):**
  - **TTFB (Time to First Byte):** $\le 0.8 \text{ detik}$ (Baik), $> 1.8 \text{ detik}$ (Perlu Optimasi).
  - **Total Page Load Time:** $\le 3.0 \text{ detik}$ pada koneksi stabil.
  - **Lighthouse Performance Score:** Target $\ge 70/100$ untuk situs skala UMKM.

---

### 2.4 Kompatibilitas (Compatibility)
Kemampuan sistem web untuk beroperasi secara konsisten di berbagai perangkat dan peramban web (*cross-browser & cross-platform*).
* **Sub-karakteristik:**
  1. *Co-existence:* Situs tidak saling mengganggu dengan ekstensi browser standar.
  2. *Interoperability:* Integrasi tautan dengan aplikasi pihak ketiga (WhatsApp Web / Mobile App, Instagram App).
* **Metrik Evaluasi:**
  - Pengujian responsivitas pada 3 breakpoint layar: Desktop ($\ge 1200\text{px}$), Tablet ($768\text{px} - 1024\text{px}$), dan Mobile Smartphone ($\le 480\text{px}$).
  - Uji keselarasan render di 3 engine peramban: Chromium (Google Chrome / Edge), Gecko (Mozilla Firefox), dan WebKit (Apple Safari).

---

### 2.5 Keamanan Tingkat Klien (Security Baseline)
Kemampuan sistem dalam melindungi data transmisi dan mencegah eksploitasi antarmuka publik.
* **Sub-karakteristik:**
  1. *Confidentiality & Integrity:* Penggunaan protokol terenkripsi HTTPS/TLS yang valid.
  2. *Input Sanitization:* Penanganan karakter berbahaya pada query string URL (`/?s=<script>...`) guna mencegah kerentanan dasar *Reflected Cross-Site Scripting* (XSS).
* **Metrik Evaluasi:**
  - Status sertifikat SSL/TLS (Masa berlaku dan algoritma enkripsi).
  - Pemeriksaan respons sanitasi HTML pada hasil pencarian karakter khusus.

---

## 3. Matriks Target Mutu Pengujian

| Karakteristik ISO 25010:2023 | Parameter yang Diuji | Target Nilai | Metode Pengujian |
| :--- | :--- | :--- | :--- |
| **Functional Suitability** | Eksekusi seluruh Test Case Black Box | $\ge 90\%$ Pass | Manual & Otomatis |
| **Usability** | Navigasi halaman & respon form pencarian | Bebas galat navigasi | Manual Heuristic |
| **Performance Efficiency** | Page Load Time halaman beranda & katalog | $< 3.5$ detik | DevTools & Automated Script |
| **Compatibility** | Tampilan Desktop & Mobile | $100\%$ Responsif | Visual Cross-Device Audit |
| **Security Baseline** | Sertifikat SSL & Sanitasi Query XSS | Lolos (HTTPS Enforced) | Automated HTTP & Parameter Test |
