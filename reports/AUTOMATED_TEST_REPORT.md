# LAPORAN HASIL EKSEKUSI PENGUJIAN OTOMATIS (AUTOMATED TEST REPORT)
## Framework: Node.js Automated Black Box Test Runner
## Standar Acuan: ISO/IEC 25010:2023 & ISO/IEC/IEEE 29119
## Target URL: https://galeri.art/

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
| **Rata-rata Durasi Per Test** | ~245 ms (< 0.3 detik) |
| **Total Waktu Eksekusi** | ~3.0 detik |

---

## 2. Tabel Rincian Hasil Pengujian Otomatis

| Test ID | Nama Kasus Uji | Kategori ISO 25010 | Durasi (ms) | Status | Hasil Aktual |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `TC-NAV-01` | Homepage Availability & Links | Functional Suitability | 914 ms | **PASS** | Status 200 OK, Elemen navigasi terdeteksi |
| `TC-AUTH-01` | Login Page Availability & Input | Functional Suitability | 67 ms | **PASS** | Status 200 OK, Form login email passwordless aktif |
| `TC-AUTH-02` | Register Page Form & Fields | Functional Suitability | 57 ms | **PASS** | Status 200 OK, Kolom Nama & Email terverifikasi |
| `TC-AUTH-03` | Authentication CSRF Token Generator | Security (Integrity) | 35 ms | **PASS** | Status 200 OK, Token CSRF 64-hex string valid |
| `TC-AUTH-04` | Missing CSRF Protection Callback | Security (Resistance) | 32 ms | **PASS** | Request dicegat, dialihkan ke `error=MissingCSRF` |
| `TC-CAT-01` | Artworks Catalog & Filter Form | Functional Suitability | 554 ms | **PASS** | Status 200 OK, Filter dan input pencarian aktif |
| `TC-CAT-02` | Artists Directory Verification | Functional Suitability | 121 ms | **PASS** | Status 200 OK, Profil seniman nusantara aktif |
| `TC-SRC-01` | Category Query Parameter (EP Valid) | Functional Correctness | 231 ms | **PASS** | Parameter `categoryId` direspon 200 OK |
| `TC-SRC-02` | Max Length Query String (BVA 250 Chars)| Reliability & Robustness | 160 ms | **PASS** | Status 200 OK, Ditangani stabil tanpa timeout |
| `TC-SEC-01` | Input Sanitization against XSS | Security (Integrity) | 227 ms | **PASS** | Tag script dinetralisasi / di-escape secara aman |
| `TC-SEC-02` | HTTPS Protocol & Transport Encryption| Security (Confidentiality)| 355 ms | **PASS** | Koneksi aman HTTPS 200 OK |
| `TC-PERF-01` | Catalog Page Load Performance | Performance Efficiency | 168 ms | **PASS** | Durasi 168 ms (Jauh di bawah batas 3500 ms) |

---

## 3. Analisis Hasil Berdasarkan Karakteristik ISO/IEC 25010:2023

### 3.1 Functional Suitability & Authentication Completeness
Endpoint utama platform Galeri.art (`/`, `/login`, `/register`, `/artworks`, `/artists`) beroperasi dengan kode status HTTP `200 OK`. Keberadaan form login email passwordless dan pendaftaran akun baru melengkapi kebutuhan fungsionalitas pengguna modern.

### 3.2 Security Baseline & CSRF Protection
Pengujian membuktikan bahwa platform Galeri.art memiliki postur keamanan autentikasi yang sangat baik:
- Endpoint `/api/auth/csrf` secara konsisten menghasilkan token CSRF kriptografis unik.
- Permintaan submit otentikasi tanpa menyertakan CSRF token yang sah langsung dicegat dan dialihkan secara aman ke URL `/login?error=MissingCSRF`.
- Karakter injeksi tag script dinetralisasi oleh mekanisme escaping bawaan React/Next.js.

### 3.3 Reliability & Input Robustness (BVA Max 250 Karakter)
Melalui teknik *Boundary Value Analysis*, pengujian otomatis membuktikan bahwa server Next.js dan Nginx pada Galeri.art memiliki ketahanan tinggi terhadap masukan string panjang berulang (250 karakter) tanpa menimbulkan kegagalan *Internal Server Error 500* pada query string.

### 3.4 Performance Efficiency (Time Behavior)
Waktu respons pemuatan halaman katalog karya seni tercatat sangat cepat, yaitu **168 ms (~0.16 detik)** untuk pengujian performa dan rata-rata keseluruhan **245 ms**. Nilai ini jauh melampaui target ambang batas yang ditetapkan ($\le 3.500\text{ ms}$), membuktikan efisiensi kompilasi server-side rendering (SSR) Next.js dan reverse proxy Nginx.
