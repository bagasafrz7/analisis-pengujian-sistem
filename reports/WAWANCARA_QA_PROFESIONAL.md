# LAPORAN HASIL WAWANCARA PRAKTISI QUALITY ASSURANCE (QA) PROFESIONAL
## Mata Kuliah: Testing & Quality Assurance (Semester 7)
## Topik: Relevansi Metode Black Box Testing, Autentikasi Modern & Standar Mutu ISO/IEC 25010:2023 pada Platform E-Commerce Seni

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
> *"Halo rekan-rekan mahasiswa. Nama saya Raditya Pratama, saat ini berkarier sebagai Senior QA Engineer. Sehari-hari tim kami mengawal rilis aplikasi e-commerce modern (baik skala retail UMKM hingga enterprise), aplikasi mobile konsumen, serta layanan backend microservices API. Di industri, tugas utama kami adalah memastikan platform yang dirilis memenuhi standar keandalan, keamanan akun pengguna, dan kenyamanan bertransaksi."*

---

### Bagian B: Pemilihan Metode Pengujian & Modul Autentikasi
**Penanya (Mahasiswa):**
> *Dalam tugas kuliah kami, objek penelitiannya adalah platform kurasi karya seni **Galeri.art** (https://galeri.art/) yang memiliki modul autentikasi (login passwordless/OTP dan registrasi akun). Kami memilih metode **Black Box Testing**. Menurut Mas Raditya, bagaimana relevansinya?*

**Narasumber (QA Engineer):**
> *"Pemilihan metode **Black Box Testing** untuk platform web modern seperti Galeri.art adalah **langkah yang sangat tepat**. Dalam audit aplikasi production pihak ketiga, penguji bertindak dari kacamata pengguna luar: apakah halaman login mudah diakses, apakah validasi format email berjalan, dan bagaimana proteksi sistem terhadap akses liar.*
>
> *Khusus untuk sistem yang memiliki fitur login dan registrasi, pengujian Black Box menjadi jauh lebih berbobot dibanding sekadar web profil statis. Penguji dapat menguji alur otentikasi, penanganan token keamanan (seperti CSRF), serta respon sistem saat diberikan masukan yang tidak sah."*

**Penanya (Mahasiswa):**
> *Bagaimana penggunaan teknik **Equivalence Partitioning (EP)** dan **Boundary Value Analysis (BVA)** dalam menguji modul autentikasi dan pencarian?*

**Narasumber (QA Engineer):**
> *"Teknik EP dan BVA adalah instrumen wajib tester profesional. Pada formulir login dan registrasi, EP digunakan untuk memisahkan partisi valid (format email benar `user@domain.com`) dan partisi invalid (string tanpa `@` atau domain). Pada filter pencarian dan rentang harga, BVA digunakan untuk menguji titik kritis batas nilai minimum (0), normal, dan batas panjang string ekstrem (seperti 250 karakter) guna memastikan server tidak mengalami timeout."*

---

### Bagian C: Standar Kualitas ISO 25010 & Analisis Defect DEF-001
**Penanya (Mahasiswa):**
> *Terkait standar kualitas, kami mengacu pada **ISO/IEC 25010:2023**. Apakah standar internasional ini benar-benar diadaptasi di industri teknologi?*

**Narasumber (QA Engineer):**
> *"Sangat relevan. Taksonomi pengujian non-fungsional dan *Quality Gates* di industri perangkat lunak modern selalu berakar pada **ISO/IEC 25010 (SQuaRE)**. Karakteristik seperti Functional Suitability, Performance Efficiency, Usability, Reliability, dan Security adalah pilar yang kami evaluasi setiap rilis sprint."*

**Penanya (Mahasiswa):**
> *Pada pengujian Galeri.art, kami menemukan bahwa saat pengguna mengakses slug karya atau seniman yang tidak ada di basis data (misal: `/artworks/item-palsu-xyz`), server mengembalikan status **HTTP 500 Internal Server Error** alih-alih **HTTP 404 Not Found**. Bagaimana QA memandang temuan ini di industri?*

**Narasumber (QA Engineer):**
> *"Itu temuan defect yang sangat bagus dan bernilai tinggi! Di industri, kasus tersebut diklasifikasikan sebagai **Unhandled Server Exception** dengan severity **Medium to High**. Dampaknya:*
> 1. *Dari sisi pengguna: Pengguna merasa website sedang rusak atau crash.*
> 2. *Dari sisi SEO & Monitoring: Search engine crawler akan mencatatnya sebagai server error yang menurunkan reputasi situs.*
> 3. *Dari sisi Reliability: Menunjukkan tidak adanya fallback `notFound()` pada framework Next.js ketika query database bernilai null.*
> *Temuan seperti ini membuktikan bahwa riset pengujian kalian benar-benar menggali aspek keandalan sistem secara mendalam."*

---

### Bagian D: Saran untuk Mahasiswa Tingkat Akhir
**Penanya (Mahasiswa):**
> *Terakhir Mas, apa saran terbaik untuk mahasiswa semester 7 yang sedang belajar Testing & QA agar siap bersaing di industri teknologi?*

**Narasumber (QA Engineer):**
> *"Fokus pada tiga kompetensi utama: Pertama, pahami konsep dasar pengujian dan perancangan test case yang sistematis. Kedua, pelajari automasi pengujian (skrip Node.js / Playwright / Cypress) dan integrasi CI/CD di GitHub Actions. Ketiga, biasakan mendokumentasikan temuan defect secara profesional (reproducibility steps, expected vs actual). Portofolio pengujian sistem web modern dengan modul login dan laporan defect riil seperti proyek Galeri.art ini akan menjadi nilai tambah luar biasa di mata HRD dan Tech Lead."*

---

## 3. Kesimpulan & Sintesis untuk Laporan Proyek

1. **Validasi Metodologi:** Pemilihan metode *Black Box Testing* dengan teknik *Equivalence Partitioning* dan *Boundary Value Analysis* terbukti sangat relevan untuk menguji fungsionalitas dan otentikasi platform Galeri.art.
2. **Kesesuaian Standar:** Karakteristik mutu *ISO/IEC 25010:2023* terbukti menjadi fondasi baku di dunia industri untuk mengukur kesiapan rilis sebuah perangkat lunak.
3. **Nilai Praktis Temuan Defect:** Temuan unhandled exception HTTP 500 (`DEF-001`) pada slug dinamis Galeri.art memperkuat bukti bahwa pengujian yang dilakukan menghasilkan temuan teknis bernilai perbaikan arsitektur nyata bagi pengembang platform.
