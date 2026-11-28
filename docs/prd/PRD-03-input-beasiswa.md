# PRD-03: Input Data Beasiswa oleh Operation

**Project:** Next Leap (STACK 2026)
**Versi:** 2.0 (draft)
**Tanggal:** 28 Nov 2026
**Acuan desain:** `input_data_peluang_beasiswa_next_leap_operation`

---

## 1. Ringkasan

Operation membuat data beasiswa melalui form "Input Data Peluang Baru" dengan kategori utama **Beasiswa**. Alur draf, pratinjau, dan terbit sama dengan PRD-02. Beasiswa yang belum terbit tidak tampil ke mahasiswa.

## 2. Pengguna

| Peran | Keterangan |
|---|---|
| **Operation** | Membuat, mengubah, dan menerbitkan data beasiswa. |

## 3. User Story

> **Sebagai** operation,
> **saya ingin** menginput data beasiswa dari poster dan informasi penyelenggara,
> **sehingga** saya dapat menampilkan info beasiswa kepada mahasiswa.

## 4. Kriteria Penerimaan

| No | Kriteria | Detail |
|---|---|---|
| AC-1 | Input poster | JPG atau PNG, rasio 4:5 (disarankan 1080 × 1350 px), maksimal 5 MB. Sama dengan AC-1 PRD-02. |
| AC-2 | Deskripsi beasiswa | Deskripsi lengkap dan persyaratan umum. Field wajib. |
| AC-3 | Timeline beasiswa | Wajib: tanggal buka pendaftaran dan tanggal tutup pendaftaran. Tanggal tutup tidak boleh sebelum tanggal buka. Desain hanya menampilkan satu tanggal; field tanggal buka perlu ditambahkan. |
| AC-4 | Tipe beasiswa | Operation memilih satu sub-kategori: Funding Kuliah On-Going; Student Exchange; Funding Kuliah Luar Negeri; Beasiswa Riset / Tugas Akhir (lihat S5 di PRD-00). |

## 5. Field Form

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| Judul resmi program beasiswa | Teks | Ya | Maksimal 100 karakter. |
| Nama institusi atau yayasan pemberi | Teks | Ya | Contoh: Djarum Foundation, Kemendikbudristek. |
| Poster | Berkas | Ya | Lihat AC-1. |
| Kategori | Terkunci | Ya | Otomatis "Beasiswa". |
| Tipe beasiswa (sub-kategori) | Pilihan tunggal | Ya | Lihat AC-4. |
| Deskripsi lengkap dan persyaratan umum | Teks panjang | Ya | Lihat AC-2. |
| Tanggal buka pendaftaran | Tanggal | Ya | Lihat AC-3. |
| Batas akhir registrasi | Tanggal | Ya | Lihat AC-3. |
| Tanggal pengumuman | Tanggal | Tidak | Tidak boleh sebelum tanggal buka. |
| Nilai atau tunjangan | Teks | Tidak | Contoh: "Rp 1.000.000 per bulan selama 1 tahun" atau "Full funded". |
| Jenjang yang diterima | Pilihan ganda: D3, D4, S1, S2, S3 | Ya | Dibutuhkan untuk pengecekan kelayakan di Top Picks. Desain menampilkan D1–S1 di kartu, perlu disamakan. |
| Semester | Rentang: Sem 1–2, 3–4, 5–6, 7–8 | Tidak | Dibutuhkan jika ada syarat semester. |
| IPK minimum | Angka (skala 4.00) | Tidak | Kosong jika tidak disyaratkan. |
| Rumpun jurusan | Pilihan ganda | Tidak | Dibutuhkan jika ada syarat jurusan. |
| Minat | Pilihan ganda | Tidak | Dipakai untuk pencocokan minat. |
| Negara tujuan | Teks | Ya untuk Student Exchange dan Funding Kuliah Luar Negeri | Tidak wajib untuk tipe lain. |
| Dokumen persyaratan | Daftar pilihan | Tidak | Misalnya esai, surat rekomendasi, transkrip, sertifikat bahasa. Dipakai untuk status kesiapan. |
| Tautan pendaftaran resmi | URL | Ya | Harus berawalan `https://`. |
| Sumber informasi | Pilihan: akun Instagram, website, form | Ya | Untuk verifikasi. |
| Catatan internal | Teks | Tidak | Tidak tampil ke mahasiswa. |

Beasiswa tidak memiliki biaya pendaftaran, sehingga tidak ada field harga.

## 6. Status dan Alur

Status sama dengan PRD-02, bagian 6. Setelah batas akhir registrasi lewat, status otomatis menjadi **Ditutup**.

## 7. Aturan Bisnis

1. Draf boleh disimpan dengan field kosong. Terbit wajib semua field wajib terisi.
2. Tanggal tutup pendaftaran tidak boleh sebelum tanggal buka.
3. Tanggal pengumuman, jika diisi, tidak boleh sebelum tanggal buka.
4. Negara tujuan wajib diisi untuk tipe Student Exchange dan Funding Kuliah Luar Negeri.
5. Tautan pendaftaran harus berawalan `https://`. Pemeriksaan otomatis dilakukan saat terbit, sama dengan PRD-02.
6. Perubahan tanggal, tautan, atau syarat pada beasiswa yang sudah terbit mengubah status menjadi Perlu Update.
7. Form tidak mengumpulkan data pribadi mahasiswa.

## 8. Di Luar Lingkup Versi Ini

- Input lomba dan upskilling (PRD-02 dan PRD-04).
- Input otomatis oleh agen AI.
- Notifikasi kepada mahasiswa.
- Verifikasi kelayakan otomatis, misalnya lewat data akademik. Desain menampilkan "Terverifikasi otomatis via SIAK-NG", tetapi integrasi itu tidak ada dalam rencana (lihat K1 di PRD-00).

## 9. Pertanyaan Terbuka

1. Apa arti "On-Going" pada Funding Kuliah? Desain menulis "Angkatan 41 (On-Going S1)", yang menunjukkan setiap angkatan punya tenggat sendiri. Jika benar, setiap angkatan diinput sebagai beasiswa terpisah. Jika tidak, apakah program tanpa tenggat perlu aturan kedaluwarsa khusus?
2. Apakah field jenjang, semester, IPK, dan rumpun wajib untuk semua beasiswa, atau hanya untuk yang punya syarat?
3. Apakah satu beasiswa boleh punya lebih dari satu tipe?
4. Apakah "Beasiswa Riset / Tugas Akhir" masuk ke daftar (S5)?
5. Apakah peninjauan kedua wajib? Lihat R4 di PRD-00.

## 10. Metrik Keberhasilan

- Waktu rata-rata operation untuk memasukkan satu beasiswa dari draf sampai terbit.
- Persentase beasiswa yang lolos pemeriksaan tanpa perbaikan.
- Jumlah beasiswa terbit per minggu, per tipe.
- Persentase beasiswa yang berstatus Ditutup tanpa pernah diperbarui.
