# PEDOMAN & PANDUAN WAWANCARA PRAKTISI QA PROFESIONAL
## Mata Kuliah: Testing & Quality Assurance (Semester 7)
## Objek Evaluasi: Platform Galeri.art

---

## 1. Tujuan Wawancara (Interview Objectives)
1. Memperoleh wawasan praktis (*industry insight*) dari seorang *Quality Assurance (QA) Engineer / Software Tester* profesional mengenai implementasi pengujian perangkat lunak di dunia kerja nyata.
2. Memvalidasi relevansi metode pengujian yang digunakan dalam riset ini (**Black Box Testing**, *Manual Testing*, dan *Automated Testing*) terhadap pengujian aplikasi modern berbasis arsitektur web modern (seperti **Next.js & Auth.js** pada **Galeri.art**).
3. Mengetahui bagaimana standar kualitas (seperti **ISO/IEC 25010**) atau kerangka kerja penjaminan mutu diterapkan dalam siklus pengembangan perangkat lunak (*Software Development Life Cycle - SDLC*).

---

## 2. Profil Kriteria Narasumber yang Ditargetkan
* **Profesi / Jabatan:** QA Engineer, QA Analyst, Software Development Engineer in Test (SDET), QA Lead, atau Tester.
* **Pengalaman Kerja:** Minimal 1–2 tahun di industri teknologi (Startup, Software House, E-Commerce, Korporat IT, atau Konsultan).
* **Keahlian:** Memiliki pengalaman melakukan pengujian fungsional (manual testing), perancangan *test case*, pengujian form otentikasi (login/register/CSRF), serta memahami atau mengoperasikan *automation testing tools* (Playwright, Cypress, Selenium, Postman, JMeter).

---

## 3. Format & Daftar Pertanyaan Wawancara

### Bagian A: Profil & Peran Narasumber
1. Boleh perkenalkan diri secara singkat, posisi saat ini, dan sudah berapa lama berkarier di bidang Quality Assurance?
2. Dalam operasional sehari-hari, sistem atau aplikasi apa saja yang biasa Anda tangani (web, mobile app, API)?

### Bagian B: Metodologi & Pendekatan Pengujian (Black Box vs White Box)
3. Di tempat kerja Anda, metode pengujian apa yang paling sering digunakan antara *Black Box*, *White Box*, atau *Gray Box*? Mengapa metode tersebut yang dipilih?
4. Kapan waktu yang tepat bagi tim QA untuk menggunakan teknik *Equivalence Partitioning* dan *Boundary Value Analysis* saat menyusun *test cases* untuk modul autentikasi (login/register)?
5. Bagaimana cara tim Anda menyeimbangkan antara porsi **Manual Testing** dan **Automated Testing**? Apakah semua skenario perlu diautomasikan?

### Bagian C: Standar Kualitas, Keamanan Auth & ISO 25010 di Industri
6. Apakah di industri ada penerapan standar mutu formal seperti **ISO/IEC 25010** (atau standar sejenis), ataukah industri lebih mengadopsi standar internal perusahaan?
7. Terkait modul autentikasi dan keamanan dasar (seperti proteksi CSRF token dan sanitasi XSS), seberapa penting pengujian ini diuji pada level Black Box oleh tim QA sebelum rilis ke production?
8. Pada pengujian platform Galeri.art, kami menemukan bahwa saat pengguna mengakses slug karya seni yang tidak ada di database, sistem mengembalikan status *HTTP 500 Internal Server Error* alih-alih *HTTP 404 Not Found*. Bagaimana QA mengklasifikasikan keparahan (*severity*) bug seperti ini di industri?

### Bagian D: Evaluasi Kasus & Studi Kasus Platform E-Commerce Seni/Kriya
9. Menurut pengalaman Anda, untuk platform e-commerce kurasi karya seni dan kerajinan lokal (seperti Galeri.art), celah atau kesalahan apa yang paling sering luput dari pengujian?
10. Apa saran dan tips terbaik Anda untuk mahasiswa tingkat akhir yang ingin memulai karier profesional di bidang Quality Assurance?

---

## 4. Format Laporan Transkrip Wawancara (Template)

```markdown
# HASIL TRANSKRIP WAWANCARA PRAKTISI QA

### 1. Data Narasumber
* **Nama Lengkap:** [Nama Narasumber]
* **Jabatan / Role:** [Misal: Senior QA Engineer / QA Analyst]
* **Perusahaan:** [Nama Perusahaan / Bidang Industri]
* **Tanggal Wawancara:** [Tanggal Pelaksanaan]
* **Media Wawancara:** [Google Meet / Zoom / Chat / Wawancara Langsung]

### 2. Ringkasan Tanya Jawab
[Tuliskan tanya jawab lengkap sesuai 10 poin pertanyaan di atas]

### 3. Kesimpulan & Insight Kunci untuk Proyek
[Tuliskan 3-5 poin pembelajaran penting dari narasumber yang mendukung laporan pengujian ini]

### 4. Dokumentasi Bukti Wawancara
[Lampirkan screenshot pertemuan daring atau foto bersama narasumber]
```
