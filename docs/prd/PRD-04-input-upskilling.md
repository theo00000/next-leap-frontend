# PRD-04: Input Data Upskilling oleh Operation

**Project:** Next Leap (STACK 2026)
**Versi:** 2.0 (draft)
**Tanggal:** 28 Nov 2026
**Acuan desain:** `input_data_peluang_upskilling_next_leap_operation`

---

## 1. Ringkasan

Operation membuat data kegiatan upskilling melalui form "Input Data Peluang Baru" dengan kategori utama **Upskilling**. Kegiatan mencakup webinar, bootcamp, dan format lain yang dipilih tim (lihat S3 di PRD-00). Alur draf, pratinjau, dan terbit sama dengan PRD-02.

## 2. Pengguna

| Peran | Keterangan |
|---|---|
| **Operation** | Membuat, mengubah, dan menerbitkan data upskilling. |

## 3. User Story

> **Sebagai** operation,
> **saya ingin** menginput data webinar dan bootcamp dari poster dan informasi penyelenggara,
> **sehingga** saya dapat menampilkan info upskilling kepada mahasiswa.

## 4. Kriteria Penerimaan

| No | Kriteria | Detail |
|---|---|---|
| AC-1 | Input poster | JPG atau PNG, rasio 4:5 (disarankan 1080 × 1350 px), maksimal 5 MB. Sama dengan PRD-02. |
| AC-2 | Deskripsi | Deskripsi singkat, kurikulum, dan benefit. Field wajib. |
| AC-3 | Timeline | Wajib: tanggal pelaksanaan dan batas akhir registrasi. Tanggal buka pendaftaran opsional. Desain tidak memiliki field tanggal pelaksanaan, sehingga perlu ditambahkan. |
| AC-4 | Format program | Operation memilih satu format: Bootcamp Intensif, Webinar / Seminar Interaktif. Workshop Praktikal dan Sertifikasi Profesional dimasukkan jika keputusan S3 disetujui. |
| AC-5 | Bidang kompetensi | Operation memilih satu bidang: Product Management & AI; UI/UX & Product Design; Software Engineering & Web3; Data Science & Machine Learning. |

## 5. Field Form

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| Judul resmi program | Teks | Ya | Maksimal 100 karakter. |
| Nama partner atau penyelenggara | Teks | Ya | Contoh: Binar x Next Leap Academy. |
| Poster | Berkas | Ya | Lihat AC-1. |
| Kategori | Terkunci | Ya | Otomatis "Upskilling". |
| Format program | Pilihan tunggal | Ya | Lihat AC-4. |
| Bidang kompetensi | Pilihan tunggal | Ya | Lihat AC-5. |
| Format pelaksanaan | Pilihan tunggal: Online, Offline, Hybrid | Ya | Menentukan apakah lokasi wajib diisi. |
| Lokasi atau tautan acara | Teks | Ya untuk Offline dan Hybrid | Desain tidak memiliki field ini (lihat D7 di PRD-00). |
| Tanggal pelaksanaan | Tanggal | Ya | Lihat AC-3. |
| Tanggal buka pendaftaran | Tanggal | Tidak | Diisi jika pendaftaran sudah dibuka. |
| Batas akhir registrasi | Tanggal | Ya | Jika kosong, sistem menganggap pendaftaran tutup pada tanggal pelaksanaan. Desain hanya menampilkan field ini. |
| Deskripsi singkat, kurikulum, dan benefit | Teks panjang | Ya | Desain memakai format per sprint atau per sesi. |
| Biaya reguler (Rp) | Angka | Ya | Nilai 0 berarti gratis. Desain menulis "Ketik 0 jika gratis bersertifikat". |
| Harga early bird (Rp) | Angka | Tidak | Harus lebih rendah dari biaya reguler. |
| Batas early bird | Tanggal | Jika ada harga early bird | Setelah tanggal ini, harga reguler yang tampil. |
| Status early bird aktif | Checkbox | Tidak | Untuk menonaktifkan early bird sebelum tanggal batasnya. |
| Dokumen atau syarat | Daftar pilihan | Tidak | Misalnya portofolio, CV. |
| Tautan pendaftaran resmi | URL | Ya | Harus berawalan `https://`. |
| Sumber informasi | Pilihan: akun Instagram, website, form | Ya | Untuk verifikasi. |
| Bukti konfirmasi diskon mitra | Berkas atau teks | Jika ada diskon khusus Next Leap | Lihat aturan 6. Tidak tampil ke mahasiswa. |
| Catatan internal | Teks | Tidak | Tidak tampil ke mahasiswa. |

## 6. Aturan Bisnis

1. Draf boleh disimpan dengan field kosong. Terbit wajib semua field wajib terisi.
2. Batas akhir registrasi tidak boleh setelah tanggal pelaksanaan.
3. Batas early bird tidak boleh setelah batas akhir registrasi.
4. Biaya reguler minimal 0. Nilai 0 ditampilkan sebagai "Gratis".
5. Harga early bird harus lebih rendah dari biaya reguler.
6. Diskon khusus "Next Leap" hanya boleh terbit jika ada bukti konfirmasi dari penyelenggara yang disimpan di catatan internal. Tanpa bukti, field harga early bird dikosongkan.
7. Persentase diskon di kartu dihitung otomatis dari harga reguler dan harga early bird. Operation tidak mengisi persentase secara manual.
8. Format Offline dan Hybrid wajib memiliki lokasi atau tautan acara.
9. Tautan pendaftaran harus berawalan `https://`. Pemeriksaan otomatis dilakukan saat terbit, sama dengan PRD-02.
10. Perubahan tanggal, tautan, atau harga pada kegiatan yang sudah terbit mengubah status menjadi Perlu Update.
11. Form tidak mengumpulkan data pribadi mahasiswa.

## 7. Status dan Alur

Status sama dengan PRD-02, bagian 6. Setelah batas akhir registrasi lewat, status otomatis menjadi **Ditutup**. Kegiatan yang sudah lewat tanggal pelaksanaan tetap berada di arsip.

## 8. Di Luar Lingkup Versi Ini

- Input lomba dan beasiswa (PRD-02 dan PRD-03).
- Input otomatis oleh agen AI.
- Notifikasi kepada mahasiswa, termasuk pengingat early bird.
- Sertifikat atau materi kegiatan.
- Pengelolaan kuota peserta.

## 9. Pertanyaan Terbuka

1. Apakah format Workshop Praktikal dan Sertifikasi Profesional masuk? Lihat S3.
2. Apakah early bird aktif dihitung otomatis dari tanggal, atau hanya lewat checkbox? Desain menampilkan keduanya. Usulan: otomatis dari tanggal, dengan checkbox untuk menonaktifkan lebih awal.
3. Apakah kegiatan gratis tanpa sertifikat tetap masuk?
4. Apakah bidang kompetensi dan format boleh lebih dari satu?
5. Apakah peninjauan kedua wajib? Lihat R4 di PRD-00.

## 10. Metrik Keberhasilan

- Waktu rata-rata operation untuk memasukkan satu kegiatan dari draf sampai terbit.
- Persentase kegiatan yang lolos pemeriksaan tanpa perbaikan.
- Jumlah kegiatan terbit per minggu, per format.
- Persentase kegiatan yang berstatus Ditutup tanpa pernah diperbarui.
