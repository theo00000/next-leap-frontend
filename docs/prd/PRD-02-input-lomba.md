# PRD-02: Input Data Lomba oleh Operation

**Project:** Next Leap (STACK 2026)
**Versi:** 2.0 (draft)
**Tanggal:** 28 Nov 2026
**Acuan desain:** `input_data_peluang_next_leap_operation`

---

## 1. Ringkasan

Operation membuat data lomba melalui form "Input Data Peluang Baru" dengan kategori utama **Lomba**. Operation dapat menyimpan draf, melihat pratinjau kartu yang sama dengan yang dilihat mahasiswa, lalu menerbitkan lomba. Lomba yang belum terbit tidak tampil ke mahasiswa.

## 2. Pengguna

| Peran | Keterangan |
|---|---|
| **Operation** | Membuat, mengubah, dan menerbitkan data lomba. |

## 3. User Story

> **Sebagai** operation,
> **saya ingin** menginput data lomba dari poster dan informasi penyelenggara,
> **sehingga** saya dapat menampilkan info lomba kepada mahasiswa.

Cerita pendukung:
- Sebagai operation, saya ingin menyimpan lomba sebagai draf agar bisa dilengkapi nanti.
- Sebagai operation, saya ingin melihat pratinjau kartu sebelum terbit.
- Sebagai operation, saya ingin mengubah lomba yang sudah terbit tanpa kehilangan riwayatnya.

## 4. Kriteria Penerimaan

| No | Kriteria | Detail |
|---|---|---|
| AC-1 | Input poster | Operation mengunggah poster berformat JPG atau PNG. Rasio 4:5 (disarankan 1080 × 1350 px). Ukuran maksimal usulan 5 MB. Sistem menampilkan status "Rasio sesuai" atau peringatan sebelum disimpan. |
| AC-2 | Kategori lomba | Kategori utama tetap **Lomba**. Operation memilih satu sub-kategori: Software Development & Web/AI; UI/UX & Product Design; Business Case & Plan; Paper LKTI & Essay Ilmiah; Innovation Challenge & Hackathon; Finance & Investment; Debat Nasional / Internasional; Olimpiade Sains & Teknologi. |
| AC-3 | Deskripsi | Operation mengisi deskripsi singkat dan syarat umum. Field wajib. Opsional: kriteria penilaian, hadiah dan benefit, serta FAQ. |
| AC-4 | Timeline | Wajib: tanggal buka pendaftaran, tanggal tutup pendaftaran, dan tanggal pelaksanaan atau pengumuman. Opsional: tahapan seleksi (lihat bagian 5). |
| AC-5 | Tema | Operation memilih satu atau lebih tema dari daftar yang dikelola tim, misalnya Teknologi, Kesehatan, Pendidikan, dan SDGs. Minimal satu tema wajib. |
| AC-6 | Pratinjau | Pratinjau kartu selalu sinkron dengan isian form dan sama dengan kartu di Competition dan Top Picks. |

## 5. Field Form

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| Judul resmi program | Teks | Ya | Maksimal 100 karakter. Desain menampilkan penghitung karakter. |
| Nama penyelenggara atau mitra | Teks | Ya | Nama kampus, organisasi, atau perusahaan. |
| Poster | Berkas | Ya | Lihat AC-1. |
| Kategori | Terkunci | Ya | Otomatis "Lomba". |
| Sub-kategori | Pilihan tunggal | Ya | Lihat AC-2. |
| Tema | Pilihan ganda | Ya | Lihat AC-5. |
| Deskripsi singkat dan syarat umum | Teks panjang | Ya | Lihat AC-3. |
| Tanggal buka pendaftaran | Tanggal | Ya | Lihat AC-4. |
| Batas akhir registrasi | Tanggal | Ya | Harus sama atau setelah tanggal buka. |
| Tanggal pelaksanaan atau pengumuman | Tanggal | Ya | Tidak boleh sebelum tanggal buka. |
| Tahapan seleksi | Daftar: nama tahap dan tanggal | Tidak | Tampil di halaman detail sebagai "Jadwal & Tahapan Seleksi". Contoh: Tahap 1, Pengumuman Top 15, Final. |
| Biaya registrasi reguler (Rp) | Angka | Ya | Nilai 0 berarti gratis. Format tampil: `Rp 150.000`. |
| Batas early bird | Tanggal | Tidak | Diisi jika ada harga khusus. |
| Harga early bird (Rp) | Angka | Tidak | Harus lebih rendah dari harga reguler. |
| Status early bird aktif | Checkbox | Tidak | Lihat PRD-05, bagian kartu. |
| Kriteria kelayakan | Grup field | Tidak, tetapi disarankan | Jenjang, semester, rumpun jurusan, IPK minimum, minat, jenis peserta (individu atau tim), dan jumlah anggota tim. Dibutuhkan agar Top Picks bisa menampilkan syarat yang belum terpenuhi. |
| Dokumen persyaratan | Daftar pilihan | Tidak | Misalnya esai, surat rekomendasi, dan berkas tim. Dibutuhkan untuk status kesiapan di peluang tersimpan. |
| Tautan pendaftaran resmi | URL | Ya | Harus berawalan `https://`. |
| Sumber informasi | Pilihan: akun Instagram, website, form | Ya | Untuk verifikasi. Tidak tampil ke mahasiswa. |
| Catatan internal | Teks | Tidak | Tidak tampil ke mahasiswa. |

## 6. Status dan Alur

Status yang dipakai di dashboard dan kelola data peluang:

| Status | Arti | Tampil ke mahasiswa |
|---|---|---|
| Draf | Disimpan, belum diajukan | Tidak |
| Perlu Tinjau | Diajukan dan menunggu pemeriksaan | Tidak |
| Terbit | Live di aplikasi | Ya |
| Perlu Update | Terbit, lalu ada perubahan tanggal, tautan, atau biaya | Ya, dengan penanda di kartu usulan |
| Disembunyikan | Ditarik dari tampilan tanpa dihapus | Tidak |
| Ditutup | Lewat batas registrasi | Hanya di filter "Ditutup / Arsip" |

Alur:
1. Operation mengisi form, lalu memilih **Simpan Draf** atau **Terbitkan Peluang**.
2. Jika memilih Terbitkan, sistem memeriksa semua field wajib dan tautan.
3. Peninjauan kedua mengikuti keputusan R4 di PRD-00.
4. Setelah terbit, lomba muncul di Competition dan Top Picks yang relevan.
5. Setelah batas registrasi lewat, status menjadi Ditutup dan tidak tampil di Top Picks.

## 7. Aturan Bisnis

1. Draf boleh disimpan dengan field kosong. Terbit wajib semua field wajib terisi.
2. Batas akhir registrasi tidak boleh sebelum tanggal buka pendaftaran.
3. Tanggal pelaksanaan atau pengumuman tidak boleh sebelum tanggal buka pendaftaran.
4. Biaya reguler minimal 0. Nilai 0 ditampilkan sebagai "Gratis".
5. Harga early bird harus lebih rendah dari biaya reguler dan hanya aktif jika batas early bird belum lewat.
6. Tautan pendaftaran harus berawalan `https://`. Pemeriksaan otomatis dilakukan saat terbit. Jika gagal, status menjadi Perlu Update dan operation diberi peringatan.
7. Perubahan tanggal, tautan, atau biaya pada lomba yang sudah terbit mengubah status menjadi Perlu Update (usulan).
8. Sistem memberi peringatan jika nama lomba dan penyelenggara sama dengan lomba lain yang belum ditutup (usulan).
9. Form tidak mengumpulkan data pribadi mahasiswa.

## 8. Di Luar Lingkup Versi Ini

- Input otomatis oleh agen AI (dibahas di PRD terpisah).
- Input beasiswa dan upskilling (PRD-03 dan PRD-04).
- Notifikasi kepada mahasiswa.
- Pendaftaran tim dan pengelolaan anggota tim di dalam aplikasi.

## 9. Pertanyaan Terbuka

1. Apakah terbit membutuhkan peninjau kedua? Lihat keputusan R4.
2. Apakah sub-kategori "UI/UX & Product Design" ditambahkan ke daftar brief? Lihat S4.
3. Apakah kriteria kelayakan wajib untuk lomba, atau cukup disarankan? Jika tidak wajib, bagian "Pengecekan Kualifikasi" di detail tidak bisa diisi untuk lomba tanpa kriteria.
4. Apakah PDF diterima untuk poster? Desain hanya menampilkan JPG dan PNG.
5. Apakah daftar tema sudah final?

## 10. Metrik Keberhasilan

- Waktu rata-rata operation untuk memasukkan satu lomba dari draf sampai terbit.
- Persentase lomba yang lolos pemeriksaan tanpa perbaikan.
- Persentase lomba yang berstatus Perlu Update karena tautan rusak.
- Jumlah lomba terbit per minggu.
