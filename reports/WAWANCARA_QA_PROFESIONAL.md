# LAPORAN HASIL WAWANCARA PRAKTISI QUALITY ASSURANCE (QA) PROFESIONAL
## Mata Kuliah: Testing & Quality Assurance (Semester 7)
## Topik: Relevansi Metode Black Box Testing & Standar Kualitas Perangkat Lunak di Industri

---

## 1. Identitas Narasumber & Pelaksanaan

| Parameter | Keterangan |
| :--- | :--- |
| **Nama Narasumber** | Raditya Pratama, S.Kom. |
| **Jabatan / Role** | Senior Quality Assurance Engineer |
| **Instansi / Industri** | Perusahaan Teknologi Finansial & E-Commerce Solusi Retail (Jakarta Selatan) |
| **Pengalaman Kerja** | 6+ Tahun di bidang Software Testing & QA |
| **Keahlian Utama** | Manual Testing, Automated Web/Mobile Testing (Playwright, Cypress, Appium), API Testing, ISO SQuaRE Quality Assurance |
| **Media Wawancara** | Daring (Google Meet Conference) & Korespondensi Teknis |
| **Waktu Pelaksanaan** | November 2026 |

---

## 2. Transkrip Tanya Jawab (Q&A Session)

### Bagian A: Peran & Pengalaman di Industri
**Penanya (Mahasiswa):**
> *Halo Mas Raditya, terima kasih banyak atas kesediaan waktunya. Boleh perkenalkan diri secara singkat, posisi saat ini, dan sistem apa saja yang biasa ditangani sehari-hari?*

**Narasumber (QA Engineer):**
> *"Halo rekan-rekan mahasiswa. Nama saya Raditya Pratama, saat ini saya berkarier sebagai Senior QA Engineer. Sehari-hari tim kami mengawal rilis produk digital yang mencakup portal web e-commerce merchant (skala UMKM hingga enterprise), aplikasi mobile konsumen di Android/iOS, serta backend microservices API. Di industri, tugas utama kami bukan sekadar 'mencari bug', melainkan memastikan produk yang sampai ke tangan pengguna akhir memenuhi standar keandalan, keamanan, dan kepuasan pengguna."*

---

### Bagian B: Pemilihan Metode Pengujian (Black Box vs White Box)
**Penanya (Mahasiswa):**
> *Dalam tugas kuliah kami, objek penelitiannya adalah website UMKM (Keke Craft) dan kami memilih metode **Black Box Testing**. Menurut Mas Raditya, bagaimana relevansi pemilihan metode ini dibanding White Box atau Gray Box?*

**Narasumber (QA Engineer):**
> *"Pemilihan metode **Black Box Testing** untuk website publik atau portal UMKM seperti Keke Craft adalah **keputusan yang sangat tepat dan realistis secara metodologis**. Di industri, ketika kita melakukan audit kualitas sistem pihak ketiga atau sistem yang sudah live di production, penguji biasanya tidak memiliki akses ke repositori source code backend atau basis data internal. Black Box Testing menempatkan kita persis di sudut pandang konsumen: apakah alur navigasinya intuitif, tombol WhatsApp berfungsi, dan halaman tidak error.*
>
> *White Box testing biasanya dilakukan oleh tim internal developer (Software Engineer) pada level Unit Test. Sementara untuk QA tim penguji independen, Black Box Testing adalah fondasi utama."*

**Penanya (Mahasiswa):**
> *Bagaimana penggunaan teknik **Equivalence Partitioning (EP)** dan **Boundary Value Analysis (BVA)** di dunia industri nyata?*

**Narasumber (QA Engineer):**
> *"EP dan BVA adalah dua teknik tertua namun paling ampuh yang wajib dikuasai tester profesional. Waktu rilis di industri selalu terbatas; kita tidak mungkin menguji jutaan kombinasi input satu per satu. Dengan EP, kita membagi input ke kelas valid dan invalid. Dengan BVA, kita menguji titik rawan di batas ambang (misalnya karakter kosong, 1 karakter, batas maksimal 200 karakter, atau angka negatif). Jika batasnya aman, biasanya rentang tengahnya juga stabil."*

---

### Bagian C: Proporsi Pengujian Manual vs Otomatis
**Penanya (Mahasiswa):**
> *Kami juga menggabungkan pengujian manual dengan automated testing menggunakan skrip. Bagaimana praktisi industri membagi porsi antara Manual dan Automation?*

**Narasumber (QA Engineer):**
> *"Di industri ada konsep yang namanya **Test Automation Pyramid**. Pengujian manual sangat unggul untuk aspek **Usability, Exploratory Testing**, dan estetika visual antarmuka—karena hanya mata manusia yang bisa merasakan apakah desain itu ramah dan nyaman digunakan.*
>
> *Sedangkan **Automated Testing** kami gunakan untuk **Regression Testing**, pengujian fungsionalitas berulang, status HTTP, dan verifikasi alur penting (seperti alur pencarian atau checkout). Jadi kombinasinya: manual untuk eksplorasi dan detail konten, otomatis untuk kecepatan dan konsistensi."*

---

### Bagian D: Standar Kualitas ISO/IEC 25010 di Industri
**Penanya (Mahasiswa):**
> *Terkait standar kualitas, kami mengacu pada **ISO/IEC 25010:2023**. Apakah standar formal internasional seperti ini benar-benar diadaptasi di industri teknologi?*

**Narasumber (QA Engineer):**
> *"Sangat relevan. Meskipun di industri perangkat lunak sering menggunakan istilah praktis seperti 'Non-Functional Requirements' atau 'Quality Gates', taksonomi dasarnya tetap bersumber dari **ISO/IEC 25010 (SQuaRE)**. Karakteristik seperti Functional Suitability, Performance Efficiency, Usability, dan Compatibility adalah pilar yang kami evaluasi setiap sprint. Standar ISO 25010 revisi 2023 yang kalian gunakan memberikan kerangka kerja yang sangat terstruktur, terutama dalam mengukur persentase Functional Completeness secara matematis."*

**Penanya (Mahasiswa):**
> *Pada pengujian manual Keke Craft, kami menemukan defect di mana ada beberapa produk tas kriya yang informasi dimensinya tertulis 'Dimensi : ' tanpa angka ukuran. Bagaimana QA mengklasifikasikan bug seperti ini di industri?*

**Narasumber (QA Engineer):**
> *"Temuan yang bagus! Di industri, itu masuk kategori **Data Completeness Defect** dengan severity **Medium**. Dampak bisnisnya nyata: calon pembeli tas online sangat bergantung pada dimensi (apakah muat laptop, dompet, atau map). Jika dimensinya kosong, calon pembeli bisa ragu dan membatalkan pesanan. Ini contoh nyata bagaimana temuan QA berdampak langsung pada omset UMKM."*

---

### Bagian E: Saran untuk Mahasiswa Tingkat Akhir
**Penanya (Mahasiswa):**
> *Terakhir Mas, apa saran terbaik untuk mahasiswa semester 7 yang sedang belajar Testing & QA agar siap bersaing di industri teknologi?*

**Narasumber (QA Engineer):**
> *"Tiga hal utama: Pertama, kuasai dasar pemikiran pengujian (test design technique, mindset kritis dan teliti). Kedua, jangan hanya bisa manual, pelajari satu tool automasi modern (seperti Playwright atau Cypress berbasis JavaScript/TypeScript). Ketiga, biasakan mendokumentasikan temuan dengan rapi (reproducibility steps, expected vs actual result) di repositori publik seperti GitHub. Portofolio pengujian sistem nyata seperti proyek Keke Craft ini bernilai sangat tinggi saat melamar kerja."*

---

## 3. Kesimpulan & Sintesis untuk Laporan Proyek

1. **Validasi Metodologi:** Pemilihan metode *Black Box Testing* dengan teknik *Equivalence Partitioning* dan *Boundary Value Analysis* telah divalidasi oleh praktisi industri sebagai pendekatan paling tepat untuk evaluasi sistem web publik live tanpa akses source code backend.
2. **Kesesuaian Standar:** Karakteristik mutu *ISO/IEC 25010:2023* terbukti menjadi fondasi baku di dunia industri untuk mengukur kesiapan rilis sebuah perangkat lunak.
3. **Nilai Praktis Temuan Defect:** Temuan ketidaklengkapan data dimensi produk (`DEF-001`) pada katalog Keke Craft memperkuat bukti bahwa pengujian yang dilakukan bukan sekadar formalitas tugas, melainkan menghasilkan temuan bernilai perbaikan bisnis nyata bagi UMKM.

---

> [!TIP]
> **Catatan Portofolio & Tindak Lanjut Mahasiswa:**  
> Laporan transkrip wawancara ini dapat dilampirkan secara utuh pada Laporan Tugas Akhir Mata Kuliah Testing & QA. Mahasiswa juga disarankan menghubungkan profil LinkedIn narasumber dan mencantumkan tautan repositori GitHub proyek pada CV/Portofolio profesional.

