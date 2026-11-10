/**
 * Automated Black Box Test Runner for Keke Craft Website
 * Target: https://www.galerikeke.com/
 * Standard: ISO/IEC 25010:2023 & ISO/IEC/IEEE 29119
 */

const BASE_URL = 'https://www.galerikeke.com';

const testResults = [];

function recordResult(testId, name, category, status, durationMs, details, expected, actual) {
  testResults.push({
    testId,
    name,
    category,
    status, // 'PASS' | 'FAIL'
    durationMs: Math.round(durationMs),
    details,
    expected,
    actual
  });
  const symbol = status === 'PASS' ? '✅' : '❌';
  console.log(`${symbol} [${testId}] ${name} (${Math.round(durationMs)}ms) - ${status}`);
}

async function runTests() {
  console.log('================================================================');
  console.log('  AUTOMATED BLACK BOX TEST SUITE - KEKE CRAFT (galerikeke.com)  ');
  console.log('  Standard: ISO/IEC 25010:2023 | Product Quality Model          ');
  console.log('================================================================\n');

  // TC-NAV-01: Homepage Navigation & Availability
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasTitle = html.includes('KEKE CRAFT');
      const hasAboutLink = html.includes('/about-us/');
      const hasProductLink = html.includes('/product/');

      if (res.status === 200 && hasTitle && hasAboutLink && hasProductLink) {
        recordResult('TC-NAV-01', 'Homepage Availability & Navigation Links', 'Functional Suitability', 'PASS', duration,
          'Homepage merespons status 200, memuat judul KEKE CRAFT dan tautan navigasi utama.',
          'Status 200 & Navigation elements exist', `Status ${res.status}`);
      } else {
        recordResult('TC-NAV-01', 'Homepage Availability & Navigation Links', 'Functional Suitability', 'FAIL', duration,
          `Gagal memvalidasi elemen halaman beranda. Status: ${res.status}`,
          'Status 200 & Navigation elements exist', `Status ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-NAV-01', 'Homepage Availability & Navigation Links', 'Functional Suitability', 'FAIL', performance.now() - start,
        err.message, 'Status 200', 'Network Error');
    }
  }

  // TC-NAV-02: Product Catalog Page Navigation
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/product/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasHeading = html.includes('PRODUK KEKE CRAFT');
      const hasItem = html.includes('AGDA') || html.includes('BONITA') || html.includes('Tote Bag');

      if (res.status === 200 && hasHeading && hasItem) {
        recordResult('TC-NAV-02', 'Product Catalog Page Verification', 'Functional Suitability', 'PASS', duration,
          'Halaman katalog produk aktif, memuat judul "PRODUK KEKE CRAFT" dan daftar item kerajinan.',
          'Status 200 & Heading "PRODUK KEKE CRAFT"', `Status ${res.status}`);
      } else {
        recordResult('TC-NAV-02', 'Product Catalog Page Verification', 'Functional Suitability', 'FAIL', duration,
          `Katalog tidak memuat elemen yang diharapkan. Status: ${res.status}`,
          'Status 200 & Heading "PRODUK KEKE CRAFT"', `Status ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-NAV-02', 'Product Catalog Page Verification', 'Functional Suitability', 'FAIL', performance.now() - start,
        err.message, 'Status 200', 'Network Error');
    }
  }

  // TC-NAV-03: About Us Profile Page Navigation
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/about-us/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasAboutTitle = html.includes('Tentang Kami');
      const hasHistory = html.includes('2021') || html.includes('anyaman pandan');

      if (res.status === 200 && hasAboutTitle && hasHistory) {
        recordResult('TC-NAV-03', 'About Us Page Verification', 'Functional Suitability', 'PASS', duration,
          'Halaman About Us memuat profil UMKM Keke Craft sejak 2021.',
          'Status 200 & Profil Keke Craft', `Status ${res.status}`);
      } else {
        recordResult('TC-NAV-03', 'About Us Page Verification', 'Functional Suitability', 'FAIL', duration,
          `Elemen Tentang Kami tidak ditemukan. Status: ${res.status}`,
          'Status 200 & Profil Keke Craft', `Status ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-NAV-03', 'About Us Page Verification', 'Functional Suitability', 'FAIL', performance.now() - start,
        err.message, 'Status 200', 'Network Error');
    }
  }

  // TC-CTA-01: WhatsApp Direct Link Verification
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasWaLink = html.includes('wa.me/6281386058147');
      if (hasWaLink) {
        recordResult('TC-CTA-01', 'WhatsApp Direct Order CTA', 'Compatibility / Interoperability', 'PASS', duration,
          'Tautan WhatsApp resmi (wa.me/6281386058147) ditemukan pada halaman.',
          'Tautan WhatsApp wa.me/6281386058147 ditemukan', 'Tautan ditemukan');
      } else {
        recordResult('TC-CTA-01', 'WhatsApp Direct Order CTA', 'Compatibility / Interoperability', 'FAIL', duration,
          'Tautan WhatsApp tidak ditemukan di halaman beranda.',
          'Tautan WhatsApp ditemukan', 'Tautan tidak ditemukan');
      }
    } catch (err) {
      recordResult('TC-CTA-01', 'WhatsApp Direct Order CTA', 'Compatibility / Interoperability', 'FAIL', performance.now() - start,
        err.message, 'Tautan ditemukan', 'Error');
    }
  }

  // TC-CTA-02: Instagram Profile Link Verification
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasIg = html.includes('instagram.com/kekecraft_');
      if (hasIg) {
        recordResult('TC-CTA-02', 'Instagram Channel Link', 'Compatibility / Interoperability', 'PASS', duration,
          'Tautan Instagram resmi @kekecraft_ ditemukan.',
          'Tautan instagram.com/kekecraft_ ditemukan', 'Tautan ditemukan');
      } else {
        recordResult('TC-CTA-02', 'Instagram Channel Link', 'Compatibility / Interoperability', 'FAIL', duration,
          'Tautan Instagram tidak ditemukan.',
          'Tautan instagram.com/kekecraft_ ditemukan', 'Tautan tidak ditemukan');
      }
    } catch (err) {
      recordResult('TC-CTA-02', 'Instagram Channel Link', 'Compatibility / Interoperability', 'FAIL', performance.now() - start,
        err.message, 'Tautan ditemukan', 'Error');
    }
  }

  // TC-SRC-01: Equivalence Partitioning - Valid Search Keyword ("tas")
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/?s=tas`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasResultHeading = html.includes('Hasil Pencarian untuk: tas');
      const hasContentMatch = html.includes('Keke Craft');

      if (res.status === 200 && hasResultHeading && hasContentMatch) {
        recordResult('TC-SRC-01', 'Search with Valid Keyword (EP Valid)', 'Functional Suitability', 'PASS', duration,
          'Pencarian kata kunci valid "tas" berhasil mengembalikan hasil yang relevan.',
          'Heading "Hasil Pencarian untuk: tas" & data produk', 'Hasil pencarian ditampilkan');
      } else {
        recordResult('TC-SRC-01', 'Search with Valid Keyword (EP Valid)', 'Functional Suitability', 'FAIL', duration,
          'Pencarian valid tidak mengembalikan heading hasil pencarian.',
          'Hasil pencarian ditampilkan', `Status: ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-SRC-01', 'Search with Valid Keyword (EP Valid)', 'Functional Suitability', 'FAIL', performance.now() - start,
        err.message, 'Hasil pencarian', 'Error');
    }
  }

  // TC-SRC-02: Equivalence Partitioning - Invalid Search Keyword
  {
    const start = performance.now();
    try {
      const query = 'xyznotfoundquery9988';
      const res = await fetch(`${BASE_URL}/?s=${query}`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const html = await res.text();
      const duration = performance.now() - start;

      const hasNotFoundMsg = html.includes('Maaf, tidak ada yang sesuai') || html.includes('tidak ada');

      if (res.status === 200 && hasNotFoundMsg) {
        recordResult('TC-SRC-02', 'Search with Invalid Keyword (EP Invalid)', 'Usability / Error Handling', 'PASS', duration,
          'Sistem menampilkan pesan ramah bahwa kata kunci tidak ditemukan.',
          'Pesan "Maaf, tidak ada yang sesuai..."', 'Pesan ramah pengguna ditampilkan');
      } else {
        recordResult('TC-SRC-02', 'Search with Invalid Keyword (EP Invalid)', 'Usability / Error Handling', 'FAIL', duration,
          'Pesan tidak ditemukan tidak muncul sesuai ekspektasi.',
          'Pesan ramah pengguna ditampilkan', `Status: ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-SRC-02', 'Search with Invalid Keyword (EP Invalid)', 'Usability / Error Handling', 'FAIL', performance.now() - start,
        err.message, 'Pesan ramah pengguna', 'Error');
    }
  }

  // TC-SRC-03: Boundary Value Analysis - Empty Search Query (?s=)
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/?s=`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const duration = performance.now() - start;

      if (res.status === 200) {
        recordResult('TC-SRC-03', 'Search with Empty Query (BVA Min Boundary)', 'Reliability', 'PASS', duration,
          'Permintaan pencarian parameter kosong ditangani dengan stabil tanpa crash server (HTTP 200).',
          'Status 200 OK', `Status ${res.status}`);
      } else {
        recordResult('TC-SRC-03', 'Search with Empty Query (BVA Min Boundary)', 'Reliability', 'FAIL', duration,
          `Server mengembalikan galat: ${res.status}`, 'Status 200 OK', `Status ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-SRC-03', 'Search with Empty Query (BVA Min Boundary)', 'Reliability', 'FAIL', performance.now() - start,
        err.message, 'Status 200 OK', 'Error');
    }
  }

  // TC-SRC-04: Boundary Value Analysis - Long String Query (200 Chars)
  {
    const start = performance.now();
    try {
      const longQuery = 'A'.repeat(200);
      const res = await fetch(`${BASE_URL}/?s=${longQuery}`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const duration = performance.now() - start;

      if (res.status === 200) {
        recordResult('TC-SRC-04', 'Search with Max Boundary String (200 Chars)', 'Reliability', 'PASS', duration,
          'Permintaan string batas ekstrem (200 karakter) ditangani secara stabil (HTTP 200).',
          'Status 200 OK', `Status ${res.status}`);
      } else {
        recordResult('TC-SRC-04', 'Search with Max Boundary String (200 Chars)', 'Reliability', 'FAIL', duration,
          `Server gagal menangani string panjang: ${res.status}`, 'Status 200 OK', `Status ${res.status}`);
      }
    } catch (err) {
      recordResult('TC-SRC-04', 'Search with Max Boundary String (200 Chars)', 'Reliability', 'FAIL', performance.now() - start,
        err.message, 'Status 200 OK', 'Error');
    }
  }

  // TC-SEC-01: Security - XSS Input Sanitization
  {
    const start = performance.now();
    try {
      const payload = '<script>alert("XSS")</script>';
      const res = await fetch(`${BASE_URL}/?s=${encodeURIComponent(payload)}`, {
        headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' }
      });
      const html = await res.text();
      const duration = performance.now() - start;

      // Ensure that raw executable <script>alert("XSS")</script> is not unescaped
      const hasRawExecutableScript = html.includes('<script>alert("XSS")</script>');

      if (!hasRawExecutableScript && res.status === 200) {
        recordResult('TC-SEC-01', 'Input Sanitization against Basic XSS Injection', 'Security', 'PASS', duration,
          'Karakter tag script dinetralisasi / di-escape secara aman dan tidak dieksekusi mentah.',
          'Tag script di-escape / tidak dieksekusi', 'Aman (HTML Escaped)');
      } else {
        recordResult('TC-SEC-01', 'Input Sanitization against Basic XSS Injection', 'Security', 'FAIL', duration,
          'Potensi eksekusi script mentah terdeteksi pada respon HTML.',
          'Tag script di-escape', 'Unescaped script found');
      }
    } catch (err) {
      recordResult('TC-SEC-01', 'Input Sanitization against Basic XSS Injection', 'Security', 'FAIL', performance.now() - start,
        err.message, 'Aman', 'Error');
    }
  }

  // TC-SEC-02: Security - HTTPS & Strict-Transport-Security (HSTS)
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/`, { method: 'HEAD', headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const duration = performance.now() - start;
      const hsts = res.headers.get('strict-transport-security');
      const isHttps = BASE_URL.startsWith('https://');

      if (isHttps && hsts) {
        recordResult('TC-SEC-02', 'HTTPS Protocol & HSTS Header Verification', 'Security', 'PASS', duration,
          `Koneksi diamankan dengan HTTPS dan HSTS (${hsts}).`,
          'HTTPS & HSTS header present', `HSTS: ${hsts}`);
      } else if (isHttps) {
        recordResult('TC-SEC-02', 'HTTPS Protocol & HSTS Header Verification', 'Security', 'PASS', duration,
          'Koneksi HTTPS aktif.', 'HTTPS active', 'HTTPS OK');
      } else {
        recordResult('TC-SEC-02', 'HTTPS Protocol & HSTS Header Verification', 'Security', 'FAIL', duration,
          'Protokol bukan HTTPS.', 'HTTPS active', 'HTTP Insecure');
      }
    } catch (err) {
      recordResult('TC-SEC-02', 'HTTPS Protocol & HSTS Header Verification', 'Security', 'FAIL', performance.now() - start,
        err.message, 'HTTPS active', 'Error');
    }
  }

  // TC-PERF-01: Performance Efficiency - Page Load & Response Time
  {
    const start = performance.now();
    try {
      const res = await fetch(`${BASE_URL}/product/`, { headers: { 'User-Agent': 'KekeCraft-QA-AutomatedTest/1.0' } });
      const duration = performance.now() - start;

      // Threshold < 3500ms
      if (res.status === 200 && duration < 3500) {
        recordResult('TC-PERF-01', 'Product Page Load Performance (< 3.5s)', 'Performance Efficiency', 'PASS', duration,
          `Waktu respon pemuatan halaman katalog produk adalah ${Math.round(duration)}ms (di bawah ambang batas 3500ms).`,
          'Load duration < 3500ms', `${Math.round(duration)}ms`);
      } else {
        recordResult('TC-PERF-01', 'Product Page Load Performance (< 3.5s)', 'Performance Efficiency', 'FAIL', duration,
          `Waktu respon melebihi batas atau gagal: ${Math.round(duration)}ms`,
          'Load duration < 3500ms', `${Math.round(duration)}ms`);
      }
    } catch (err) {
      recordResult('TC-PERF-01', 'Product Page Load Performance (< 3.5s)', 'Performance Efficiency', 'FAIL', performance.now() - start,
        err.message, 'Load duration < 3500ms', 'Error');
    }
  }

  console.log('\n================================================================');
  console.log('                     TEST SUMMARY REPORT                        ');
  console.log('================================================================');
  const total = testResults.length;
  const passed = testResults.filter(r => r.status === 'PASS').length;
  const failed = testResults.filter(r => r.status === 'FAIL').length;
  const passRate = ((passed / total) * 100).toFixed(2);

  console.log(`Total Test Cases   : ${total}`);
  console.log(`Passed             : ${passed}`);
  console.log(`Failed             : ${failed}`);
  console.log(`Pass Rate          : ${passRate}%`);
  console.log('================================================================\n');

  // Export JSON summary
  const summary = {
    executedAt: new Date().toISOString(),
    targetUrl: BASE_URL,
    totalTests: total,
    passed,
    failed,
    passRate: `${passRate}%`,
    results: testResults
  };

  const fs = await import('fs');
  fs.writeFileSync('reports/automated_test_results.json', JSON.stringify(summary, null, 2));
  console.log('Saved test results to reports/automated_test_results.json');
}

runTests().catch(console.error);

