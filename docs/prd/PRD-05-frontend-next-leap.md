# PRD-05: Frontend Next Leap (Mahasiswa dan Portal Operation)

**Project:** Next Leap (STACK 2026)
**Versi:** 2.0 (draft)
**Tanggal:** 28 Nov 2026
**Acuan:** layar Stitch (`stitch_portal_mahasiswa_berbasis_login`), `DESIGN.md`, dan brand guidelines Next Leap

---

## 1. Ringkasan

Next Leap memiliki dua permukaan:
- **Sisi mahasiswa:** menampilkan lomba, beasiswa, dan upskilling. Mahasiswa yang sudah login melihat Top Picks yang dipersonalisasi.
- **Portal Operation:** dipakai tim operation untuk memasukkan, meninjau, dan memantau data peluang.

Layout mengikuti layar desain. Keputusan visual yang bertentangan antara brand dan desain ada di PRD-00 (bagian 2.1).

## 2. Tujuan

- Peluang yang cocok terlihat dalam satu layar tanpa banyak klik.
- Tenggat dan status early bird selalu terlihat.
- Mahasiswa tahu apa yang kurang sebelum mendaftar.
- Operation bisa memasukkan, memeriksa, dan memperbaiki data dengan cepat, serta bisa melacak perubahannya.

## 3. Pengguna dan Akses

| Peran | Akses |
|---|---|
| **Pengunjung** | Jelajahi, Competition, Scholarship, Upskilling, dan detail peluang. |
| **Mahasiswa** | Semua yang di atas, plus Top Picks, Peluang tersimpan, dan profil. |
| **Operation** | Portal Operation: Dashboard, Input Peluang, Kelola Data Peluang, Audit Trail. |

Mahasiswa dan operation masuk lewat halaman login yang berbeda (lihat bagian 5.1 dan PRD-01).

## 4. Navigasi

### 4.1 Mahasiswa

Empat item navigasi utama:

| No | Item | Halaman | Tampil untuk |
|---|---|---|---|
| 1 | **Top Picks** | Beranda dengan Top Picks | Mahasiswa login |
| 1 | **Jelajahi** | Beranda dengan Jelajahi | Pengunjung |
| 2 | **Competition** | Daftar lomba | Semua |
| 3 | **Scholarship** | Daftar beasiswa | Semua |
| 4 | **Upskilling** | Daftar webinar dan bootcamp | Semua |

Header:
- **Kiri:** logo Next Leap.
- **Tengah:** empat item navigasi.
- **Kanan, pengunjung:** tombol **Masuk** (sekunder) dan **Daftar** (primer).
- **Kanan, mahasiswa:** avatar lingkaran dengan menu **Profil**, **Peluang tersimpan**, dan **Keluar**.

### 4.2 Portal Operation

| Item | Keterangan |
|---|---|
| Dashboard | Ringkasan dan antrean. |
| Input Peluang | Form lomba, beasiswa, atau upskilling. |
| Kelola Data Peluang | Daftar, filter, dan aksi untuk semua peluang. |
| Audit Trail | Riwayat perubahan. |

Menu "Kelola Akun" dan "Kelola Mahasiswa" dihapus dari v1 (lihat R2 dan R3 di PRD-00). Label "Master Operation" juga dihapus.

## 5. Sisi Mahasiswa

### 5.1 Login Mahasiswa

Mahasiswa masuk dengan **Lanjutkan dengan Google** atau **Lanjutkan dengan Apple**. Halaman ini menampilkan tautan Syarat & Ketentuan dan Kebijakan Privasi, serta tautan "Kembali ke Jelajahi". Tautan "Bukan tim Operation? Masuk sebagai Mahasiswa" di login operation mengarah ke sini.

Panel keunggulan di desain memuat angka dan klaim yang belum terverifikasi (lihat K2 dan K3 di PRD-00). Hanya tampilkan angka yang sudah bisa dibuktikan.

**Kriteria:**
- Setelah login pertama, mahasiswa diarahkan ke onboarding.
- Setelah login berikutnya, mahasiswa diarahkan ke Top Picks.

### 5.2 Onboarding

Halaman "Selamat Datang di Next Leap" dengan progres pengisian dan estimasi waktu "hanya butuh 2 menit".

| Bagian | Field | Keterangan |
|---|---|---|
| Informasi akademik | Asal perguruan tinggi | Pencarian dari daftar kampus. |
| | Jenjang | S1, D4, atau D3. |
| | Jurusan atau program studi | Teks bebas dengan contoh. |
| | Semester | Rentang: Sem 1–2, 3–4, 5–6, 7–8. |
| | IPK terakhir | Opsional. Skala 4.00. Desain menulis "Opsional untuk beasiswa". |
| Fokus minat | Minat | Chip pilihan: UI/UX Design, AI & Machine Learning, Business Case, Software Engineering, Product Management, Riset Ilmiah & LKTI, Debat & Model UN. Mahasiswa bisa menambah minat sendiri. |
| Jenis peluang | Checkbox | Kompetisi, Beasiswa, Upskilling. Bisa lebih dari satu. |
| CV atau resume | Unggah berkas | Opsional. PDF atau DOCX, maksimal 5 MB. Lihat bagian 10. |

Tombol:
- **Simpan & Lihat Rekomendasi Top Picks**
- **Lewati dulu, atur nanti di profil**
- **Simpan & Lanjut Nanti** di bagian atas

**Kriteria:**
- Jenjang, jurusan, dan semester wajib diisi sebelum Top Picks bisa dipersonalisasi.
- Mahasiswa yang melewati onboarding tetap masuk, dan Top Picks menampilkan ajakan melengkapi profil.
- Data akademik tersimpan dan dipakai hanya untuk pencocokan.

### 5.3 Beranda: Top Picks (login)

| Elemen | Keterangan |
|---|---|
| Sapaan | "Halo, [nama]!" dengan kalimat ajakan. |
| Ringkasan profil | Kampus, jenjang, jurusan, semester, dan minat. Tombol "Perbarui Minat & Data". |
| Kelengkapan profil | Persentase dan item yang belum diisi. |
| Filter | Semua rekomendasi, Lomba, Beasiswa, Upskilling. |
| Grid kartu | Kartu Top Picks sesuai bagian 7. |
| Peluang tersimpan | Lihat bagian 5.5. |

Top Picks memuat peluang yang masih terbuka, diurutkan dari yang paling cocok. Peluang yang sudah ditutup tidak tampil.

### 5.4 Beranda: Jelajahi (pengunjung)

| Elemen | Keterangan |
|---|---|
| Hero | Judul, deskripsi singkat, dan tombol Masuk. |
| Ajakan | "Masuk atau daftar gratis untuk membuka Top Picks." |
| Daftar | Campuran peluang terbaru dari semua jenis, diurutkan dari yang paling baru diterbitkan. |
| Tombol "Lihat semua" | Membuka halaman kategori. |

Hero memakai klaim yang belum diverifikasi, misalnya "No. 1 di Indonesia" dan "200+ Peluang" (lihat K2 dan K3). Hapus atau ganti dengan angka nyata.

### 5.5 Peluang Tersimpan

Bagian di beranda dan halaman tersendiri (dari menu profil). Setiap item menampilkan:
- Jenis peluang dan hitung mundur tenggat.
- Nama peluang dan tanggal tenggat.
- **Status kesiapan**.

Status kesiapan dihitung dari data kelayakan dan dokumen persyaratan:

| Status | Syarat |
|---|---|
| Siap daftar | Semua kriteria dan dokumen terpenuhi. |
| Kurang dokumen | Ada dokumen yang belum disiapkan. Tampilkan daftar dokumennya. |
| Kurang kriteria | Ada kriteria yang belum terpenuhi. Tampilkan kriterianya. |
| Tenggat dekat | Kurang dari 7 hari, terlepas dari kesiapan. |

Desain menampilkan contoh seperti "Berkas Siap Buka", "Kurang Esai & Rekom Lengkapi", dan "Kupon Berlaku Daftar". Label itu perlu disamakan dengan tabel di atas.

### 5.6 Halaman Kategori: Competition, Scholarship, Upskilling

Berisi semua peluang yang terbit dari jenis tersebut. Tidak dipersonalisasi.

| Halaman | Filter |
|---|---|
| **Competition** | Sub-kategori, tema, dan status tenggat. |
| **Scholarship** | Tipe beasiswa dan status tenggat. |
| **Upskilling** | Jenis (Bootcamp atau Webinar), format pelaksanaan (Online, Offline, Hybrid), bidang kompetensi, tanggal pelaksanaan, dan status tenggat. |

Aturan umum:
- Filter bisa dikombinasikan. Hasil berubah tanpa memuat ulang halaman.
- Di mobile, filter berada dalam bar horizontal yang bisa digulir dan menempel di atas. Chip yang aktif memakai `#101828` dengan teks putih, atau garis `#FFA500`.
- Urutan default: tenggat terdekat lebih dulu.
- Peluang yang sudah ditutup disembunyikan secara default, dengan opsi untuk menampilkannya.

### 5.7 Detail Peluang

Berlaku untuk semua jenis. Urutan dari atas ke bawah:

1. Breadcrumb (Beranda / Competition / nama peluang) dan tombol kembali.
2. Poster, dengan label jenis dan tenggat.
3. Judul, penyelenggara, dan badge **Mitra Terverifikasi** (definisi di bagian 9.1).
4. Harga: harga reguler dicoret, harga early bird, dan persentase diskon.
5. Ringkasan: hadiah, format peserta, format pelaksanaan, dan rumpun.
6. **Pengecekan kualifikasi**: "X dari Y terpenuhi", daftar kriteria, dan daftar yang belum terpenuhi dengan tombol tindak lanjut (misalnya "Lengkapi dokumen tim").
7. **Jadwal & tahapan**: daftar tahap beserta tanggalnya.
8. Tab: Tentang, Tema & Kategori, Kriteria Penilaian, Hadiah & Benefit, FAQ.
9. Bar tindakan tetap di bawah (mobile): tombol **Daftar** dan tombol simpan.

Untuk pengunjung, bagian 6 diganti ajakan untuk masuk.

Bar tindakan tetap memakai latar putih dengan transparansi 80% dan blur (`DESIGN.md`).

## 6. Kartu Peluang

Dipakai di Top Picks, Jelajahi, dan semua halaman kategori.

| Elemen | Aturan |
|---|---|
| Kontainer | Latar `#FFFFFF`, border 1px `#EBF2FF`, radius 16px, padding 16px. |
| Poster | Rasio tetap sesuai keputusan V5. Radius 12px. Ada placeholder jika belum ada poster. |
| Label jenis | Pill di pojok kiri atas poster. Lomba: latar `#0057FF`, teks putih. Beasiswa: latar `#FFA500`, teks `#101828`. Upskilling: latar `#00B5D8`, teks `#101828`. |
| Tenggat | Pill di pojok kanan atas. Muncul sebagai "Sisa X Hari" jika kurang dari 7 hari, latar `#FB2C36`, teks putih. |
| Sudah tutup | Pill latar `#555555`, teks "Sudah Tutup". |
| Judul | Maksimal dua baris. Font heading (lihat V1). |
| Penyelenggara | Teks sekunder `#555555`. |
| Harga | Harga reguler dicoret, harga early bird dengan format Rp, dan persentase diskon. Gratis: tampilkan "Gratis". |
| Alasan kecocokan | Hanya di Top Picks. Kontainer latar `#FFEFD7`, teks `#101828`, dengan ikon dan parameter profil. Contoh: "Sesuai jurusan Sistem Informasi, Semester 5". |
| Tombol simpan | Ikon bookmark, ukuran sentuh minimal 40px, selalu terlihat. |

Alasan kecocokan tercantum di `DESIGN.md` tetapi tidak tampak di layar Top Picks (lihat L1 di PRD-00).

## 7. Aturan Umum

1. Peluang yang sudah lewat batas akhir registrasi tidak tampil di Top Picks. Jika dibuka dari halaman lain, tampil label "Sudah Tutup".
2. Harga dan tanggal di kartu sama dengan yang ada di detail.
3. Persentase diskon dihitung otomatis.
4. Peluang yang belum terbit tidak pernah tampil ke pengunjung atau mahasiswa.
5. Pratinjau di Portal Operation harus sama dengan kartu di sisi mahasiswa.

## 8. Portal Operation

### 8.1 Dashboard

Menampilkan ringkasan 30 hari terakhir.

| Blok | Isi |
|---|---|
| Ringkasan | Total peluang terbit, dengan rincian per jenis. |
| Tenggat | Jumlah peluang dengan tenggat kurang dari 7 hari. |
| Antrean | Jumlah berkas yang menunggu pemeriksaan, berkas yang kurang, dan yang siap tayang. |
| Kualitas | Persentase tautan yang lolos pemeriksaan otomatis. |
| Early bird | Jumlah early bird yang aktif. |
| Kecepatan kurasi | Rata-rata waktu dari draf sampai terbit. Desain menulis target di bawah 30 menit. |
| Daftar prioritas | Peluang yang tenggatnya dekat atau berstatus perlu tindakan, dengan aksi Kelola dan Cek Log. |

Blok "Student Engagement" di desain (views dan saved) membutuhkan pencatatan event di sisi mahasiswa. Blok ini masuk ke v1 hanya jika pencatatan event disiapkan sejak awal.

### 8.2 Input Peluang

Form dijelaskan di PRD-02, PRD-03, dan PRD-04. Pemilihan kategori utama (Lomba, Beasiswa, Upskilling) menentukan field yang tampil. Tombol di header:
- **Simpan Draf**
- **Terbitkan Peluang**

Pratinjau kartu berada di sisi kanan dan diperbarui secara langsung.

### 8.3 Kelola Data Peluang

| Elemen | Aturan |
|---|---|
| Ringkasan | Total peluang per kategori, dan jumlah draf. |
| Pencarian | Berdasarkan judul, ID, atau penyelenggara. |
| Filter status | Semua, Diterbitkan, Draf / Tinjau, Segera Berakhir, Ditutup / Arsip. |
| Urutan | Tenggat terdekat, terbaru dibuat, paling banyak dilihat. |
| Pilih banyak | Checkbox per baris. |
| Aksi per baris | Sembunyikan atau tampilkan, edit, dan hapus. |
| Ekspor | Unduh daftar sesuai filter. |

**ID peluang** mengikuti format `#OPP-{TAHUN}-{L|B|U}{NOMOR}`. Contoh: `#OPP-2026-L089` untuk lomba, `B` untuk beasiswa, dan `U` untuk upskilling.

**Definisi aksi:**
- **Sembunyikan:** peluang tidak tampil ke mahasiswa, tetapi data dan riwayatnya tersimpan. Bisa ditampilkan kembali.
- **Hapus:** peluang dihapus dari daftar aktif. Riwayat di audit trail tetap ada. Aksi ini butuh konfirmasi.

### 8.4 Audit Trail

Mencatat semua perubahan data peluang.

| Kolom | Isi |
|---|---|
| Waktu | Tanggal dan jam. |
| Petugas | Nama operation. |
| Tindakan | Tambah Data, Edit Data, Hapus Data, Hide Data, Unhide Data. |
| Entitas | Jenis, ID, dan judul peluang. |
| Rincian | Ringkasan perubahan. Detail menampilkan nilai sebelum dan sesudah. |

Aturan:
1. Log tidak bisa diubah atau dihapus oleh operation.
2. Filter: kategori, tindakan, tanggal, dan pencarian berdasarkan ID atau nama petugas.
3. Ekspor log sesuai filter.
4. Log tidak real-time di v1. Halaman dimuat ulang lewat tombol "Segarkan". Desain menulis "Live Sync", dan ini perlu disesuaikan dengan kemampuan implementasi.

Catatan: audit trail sebelumnya di luar lingkup, lalu masuk ke desain. Keputusan S1 di PRD-00 perlu dikonfirmasi.

## 9. Kepercayaan dan Verifikasi

### 9.1 Mitra Terverifikasi

Badge "Mitra Terverifikasi" hanya tampil jika penyelenggara sudah diverifikasi oleh tim. Proses verifikasi yang diusulkan: operation mencatat sumber resmi penyelenggara (akun Instagram, website, atau surat), lalu menandai penyelenggara sebagai terverifikasi di catatan internal. Jika belum diverifikasi, badge tidak tampil.

### 9.2 Pemeriksaan Tautan

Saat terbit, sistem memeriksa tautan pendaftaran. Hasilnya tercatat di dashboard. Jika tautan gagal, peluang berstatus Perlu Update dan tidak naik ke urutan teratas.

## 10. Onboarding dan Privasi

- Data akademik dipakai hanya untuk pencocokan dan tidak dibagikan ke pihak ketiga.
- CV bersifat opsional. Jika ada fitur analisis CV (desain menulis "Algoritma Next Leap akan mencocokkan kualifikasi pengalamanmu"), perlu persetujuan eksplisit dan penjelasan penggunaan. Usulan: CV tidak masuk v1 sampai alur persetujuan siap.
- Mahasiswa bisa menghapus data profil dan CV dari halaman profil.
- Tautan Syarat & Ketentuan dan Kebijakan Privasi wajib tersedia di login dan onboarding.

## 11. Prinsip Desain

- **Mobile first.** Mayoritas mahasiswa membuka aplikasi dari ponsel.
- **Tenggat selalu terlihat.** Tanggal tidak tersembunyi di balik klik tambahan.
- **Jujur.** Alasan kecocokan menyebut data profil yang dipakai. Klaim angka hanya yang bisa dibuktikan.
- **Tidak menyesatkan.** Peluang yang sudah tutup tidak tampil seolah masih terbuka.
- **Bahasa.** Bahasa Indonesia dengan sapaan "kamu". Istilah umum seperti early bird dan Top Picks boleh tetap dipakai.

## 12. Spesifikasi Visual

### 12.1 Warna

| Token | Hex | Pemakaian |
|---|---|---|
| Primer | `#FFA500` | Tombol primer, chip aktif, eyebrow, dan kata kunci headline. |
| Bayangan tombol | `#B36D00` (lihat V4) | Bayangan bawah 4px tanpa blur. |
| Aksen biru | `#0057FF` | Label Lomba, tombol sekunder (lihat V3), logo. |
| Aqua | `#00B5D8` | Label Upskilling. |
| Latar hero | `#F8FBFF` | Latar hero. |
| Garis grid | `#EBF2FF` | Border kartu dan grid hero. |
| Latar kartu | `#FFFFFF` | Kartu, halaman, dan tombol sekunder. |
| Teks utama | `#101828` | Judul dan teks utama. |
| Teks sekunder | `#555555` | Deskripsi, metadata, dan label tutup. |
| Tenggat | `#FB2C36` | Pill tenggat dan pesan kesalahan. |
| Latar alasan kecocokan | `#FFEFD7` | Kontainer alasan kecocokan. |

Aturan:
- Hanya mode terang.
- Headline memakai `#101828` dengan satu kata kunci `#FFA500`. Paragraf tidak diwarnai.
- Warna aqua dan oranye memakai teks `#101828`.

### 12.2 Tipografi

Keputusan font ada di V1 (PRD-00). Desain menggunakan:

| Peran | Font | Ukuran | Berat |
|---|---|---|---|
| Hero | Space Grotesk | 64px (mobile 36px) | 700 |
| Section | Space Grotesk | 36px (mobile 28px) | 700 |
| Judul kartu | Space Grotesk | 22–24px | 600 |
| Body | Plus Jakarta Sans | 20px (16px untuk kartu) | 400 |
| Eyebrow | Plus Jakarta Sans | 12–13px, huruf kapital, `#FFA500` | 600–700 |
| Label tombol | Plus Jakarta Sans | 16px | 700 |
| Pill dan badge | Plus Jakarta Sans | 12–13px | 600 |

Font dimuat dari Google Fonts (sesuai desain). Jika brand memilih Chillax dan Synonym, font dimuat dari Fontshare.

### 12.3 Spasi, Radius, dan Komponen

- Satuan dasar 8px.
- Margin mobile 16px. Tablet 32px. Desktop 64px dengan lebar maksimal 1280px.
- Radius: tombol primer 12px, tombol sekunder 8px, pill penuh, kartu dan modal 16px.
- Tombol primer: latar `#FFA500`, teks `#101828`, bayangan `0 4px 0 0 #B36D00`. Saat ditekan, tombol turun 4px dan bayangan hilang.
- Tombol sekunder: latar putih, border 2px `#0057FF` (lihat V3), teks `#0057FF`, bayangan `0 4px 0 0` sesuai V4.
- Input: tinggi 48px, radius 8px, border 1px `#E2E8F0`. Fokus: border 2px `#FFA500`. Pesan galat di bawah field, warna `#FB2C36`, dengan ikon peringatan.
- Ukuran sentuh minimal 40px, sebaiknya 48px.
- Bayangan kartu tidak dipakai. Gunakan border. Bayangan ringan hanya untuk filter melayang dan modal: `0 8px 24px -4px rgba(16,24,40,0.08)`.

### 12.4 Aksesibilitas

- Teks `#101828` di atas `#FFA500` memenuhi kontras WCAG AA (sekitar 9:1 dari nilai hex). Teks putih di atas `#FFA500` tidak memenuhi (sekitar 2:1), sehingga tidak dipakai.
- Teks putih di atas `#00B5D8` tidak memenuhi (sekitar 2.4:1). Gunakan `#101828`.
- Fokus keyboard: outline 2px `#0057FF` dengan offset 2px.

## 13. Di Luar Lingkup Versi Ini

- Notifikasi push dan pengingat H-3 (keputusan S2 di PRD-00).
- Analisis CV otomatis (lihat bagian 10).
- Integrasi dengan sistem akademik kampus (SIAK-NG atau lainnya).
- Chatbot Ace AI.
- Mode gelap.
- Aplikasi native iOS dan Android.
- Portal Kampus Partner.
- Manajemen akun operation dan mahasiswa di dalam portal.

## 14. Pertanyaan Terbuka

Keputusan lengkap ada di PRD-00. Pertanyaan khusus frontend:
1. Apakah Top Picks dan Jelajahi tetap tampil sebagai satu halaman dengan dua kondisi? Desain saat ini memisahkannya, dan Anda sudah menetapkan Jelajahi hanya untuk pengunjung.
2. Apakah "Peluang tersimpan" juga muncul sebagai item navigasi? Desain menaruhnya di beranda dan menu profil.
3. Apakah "Tier 1 Priority" dipakai? Lihat K5.

## 15. Metrik Keberhasilan

- Waktu dari login sampai mahasiswa membuka detail satu peluang.
- Persentase mahasiswa yang menyimpan minimal satu peluang dari Top Picks.
- Persentase mahasiswa yang melengkapi profil saat onboarding.
- Persentase peluang yang lolos pemeriksaan tautan saat terbit.
- Skor usability dari pengujian dengan lima sampai delapan mahasiswa.
