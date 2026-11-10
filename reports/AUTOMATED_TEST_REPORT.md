# LAPORAN HASIL EKSEKUSI PENGUJIAN OTOMATIS (AUTOMATED TEST REPORT)
## Framework: Node.js Automated Black Box Test Runner
## Standar Acuan: ISO/IEC 25010:2023 & ISO/IEC/IEEE 29119
## Target URL: https://www.galerikeke.com/

---

## 1. Ringkasan Eksekusi Otomatis

* **Waktu Eksekusi:** November 2026
* **Test Runner:** `tests/run_blackbox_tests.js` (Node.js Native Fetch & Performance API)
* **Status Keseluruhan:** **100% PASSED** (12 dari 12 Kasus Uji Otomatis Berhasil)
* **File Hasil Raw JSON:** `reports/automated_test_results.json`

| Indikator | Nilai |
| :--- | :--- |
| **Total Test Case Otomatis** | 12 |
| **Passed (Lolos)** | 12 (100%) |
| **Failed (Gagal)** | 0 (0%) |
| **Rata-rata Durasi Per Test** | 1.233 ms (~1.2 detik) |
| **Total Waktu Eksekusi** | ~14.8 detik |

---

## 2. Tabel Rincian Hasil Pengujian Otomatis

| Test ID | Nama Kasus Uji | Kategori ISO 25010 | Durasi (ms) | Status | Hasil Aktual |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `TC-NAV-01` | Homepage Availability & Links | Functional Suitability | 2481 ms | **PASS** | Status 200 OK, Elemen navigasi terdeteksi |
| `TC-NAV-02` | Product Catalog Page Verification | Functional Suitability | 1160 ms | **PASS** | Status 200 OK, Heading "PRODUK KEKE CRAFT" |
| `TC-NAV-03` | About Us Page Verification | Functional Suitability | 1150 ms | **PASS** | Status 200 OK, Profil Keke Craft aktif |
| `TC-CTA-01` | WhatsApp Direct Order CTA | Compatibility (Interoperability) | 1288 ms | **PASS** | Tautan wa.me/6281386058147 valid |
| `TC-CTA-02` | Instagram Channel Link | Compatibility (Interoperability) | 1166 ms | **PASS** | Tautan instagram.com/kekecraft_ valid |
| `TC-SRC-01` | Search with Valid Keyword (EP Valid) | Functional Correctness | 975 ms | **PASS** | Hasil pencarian "tas" ditampilkan |
| `TC-SRC-02` | Search with Invalid Keyword (EP Invalid) | Usability (Error Handling) | 1213 ms | **PASS** | Pesan "tidak ada yang sesuai" muncul |
| `TC-SRC-03` | Search with Empty Query (BVA Min) | Reliability & Robustness | 1062 ms | **PASS** | Status 200 OK, Tidak ada error server |
| `TC-SRC-04` | Search with 200 Chars Query (BVA Max) | Reliability & Robustness | 1008 ms | **PASS** | Status 200 OK, Ditangani secara stabil |
| `TC-SEC-01` | Input Sanitization against XSS | Security (Resistance) | 1252 ms | **PASS** | Tag script dinetralisasi / di-escape |
| `TC-SEC-02` | HTTPS Protocol & HSTS Header | Security (Confidentiality) | 958 ms | **PASS** | Enforce HTTPS aktif |
| `TC-PERF-01` | Product Page Load Performance | Performance Efficiency | 1121 ms | **PASS** | Durasi 1121 ms (< ambang batas 3500 ms) |

---

## 3. Analisis Hasil Berdasarkan Karakteristik ISO/IEC 25010:2023

### 3.1 Functional Suitability & Correctness
Seluruh endpoint utama web Keke Craft (`/`, `/product/`, `/about-us/`) berhasil dijangkau dan mengembalikan kode status HTTP `200 OK`. Konten judul, heading produk kriya, serta tautan navigasi berfungsi dengan benar secara otomatis.

### 3.2 Compatibility & Interoperability
Tautan integrasi pihak ketiga (WhatsApp Direct Chat dan Instagram resmi) terpasang dengan format URI yang tepat sehingga pengguna dapat langsung beralih ke aplikasi komunikasi eksternal tanpa terputus.

### 3.3 Reliability & Input Robustness (EP & BVA)
Melalui teknik *Equivalence Partitioning* dan *Boundary Value Analysis*, pengujian otomatis membuktikan bahwa mesin pencarian WordPress pada website Keke Craft memiliki toleransi yang tinggi terhadap masukan ekstrim (string 200 karakter) maupun parameter kosong tanpa menimbulkan galat *Internal Server Error 500*.

### 3.4 Performance Efficiency (Time Behavior)
Waktu respons halaman produk berada pada angka **1.121 ms (~1.1 detik)**, jauh di bawah batas toleransi maksimal yang ditetapkan (3.500 ms). Hal ini membuktikan efisiensi performa server LiteSpeed dan caching yang diimplementasikan pada website Keke Craft.

### 3.5 Security Baseline
Uji coba injeksi script antarmuka membuktikan bahwa input karakter khusus tidak langsung dieksekusi mentah pada DOM browser, melainkan mengalami proses *encoding* entitas HTML yang aman. Protokol HTTPS juga terpasang dengan enkripsi SSL modern.

