# PRD-01: Login Operation

**Project:** Next Leap (STACK 2026)
**Versi:** 2.0 (draft)
**Tanggal:** 28 Nov 2026
**Acuan desain:** `login_operation_next_leap`

---

## 1. Ringkasan

Anggota tim operation masuk ke Portal Operation menggunakan username atau email dan kata sandi. Halaman login ini terpisah dari login mahasiswa, yang memakai Google atau Apple.

## 2. Pengguna

| Peran | Keterangan |
|---|---|
| **Operation** | Anggota tim yang mengelola data peluang, meninjau, dan membaca audit trail. |

Role master operation sudah dibatalkan. Semua akun operation memiliki hak yang sama.

## 3. User Story

> **Sebagai** operation,
> **saya ingin** masuk ke Portal Operation dengan username atau email dan kata sandi,
> **sehingga** saya dapat mengelola data peluang.

## 4. Kriteria Penerimaan

| No | Kriteria | Detail |
|---|---|---|
| AC-1 | Login dengan username atau email | Field menerima username atau email. Placeholder desain: `nama@nextleap.com`. |
| AC-2 | Login dengan kata sandi | Kata sandi disembunyikan. Ada ikon untuk menampilkan. |
| AC-3 | Validasi field kosong | Jika salah satu kosong, tampil pesan: "Mohon lengkapi username/email dan kata sandi kamu." |
| AC-4 | Kredensial salah | Tampil pesan umum tanpa menyebut field mana yang salah. |
| AC-5 | Ingat saya | Checkbox "Ingat saya" memperpanjang sesi di perangkat yang sama. Durasi ditentukan tim. |
| AC-6 | Lupa kata sandi | Tautan "Lupa kata sandi?" tampil. Alur reset di luar v1 (lihat bagian 6). |
| AC-7 | Pindah ke login mahasiswa | Tautan "Masuk sebagai Mahasiswa" mengarah ke halaman login mahasiswa. |
| AC-8 | Akun mahasiswa ditolak | Akun dengan role mahasiswa yang mencoba masuk di sini ditolak dengan pesan umum. |

## 5. Aturan Bisnis

1. Akun operation dibuat oleh tim internal. Tidak ada pendaftaran mandiri.
2. Akun yang dinonaktifkan tidak bisa login, tetapi data yang sudah dibuat tetap tersimpan.
3. Setelah beberapa kali percobaan gagal berturut-turut, login ditunda sementara. Jumlah percobaan dan durasi ditentukan tim (usulan: 5 kali, tunda 5 menit).
4. Kredensial tidak disimpan dalam bentuk teks biasa.
5. Setelah berhasil login, operation diarahkan ke Dashboard Portal Operation.

## 6. Di Luar Lingkup Versi Ini

- Pendaftaran akun operation secara mandiri.
- Alur reset kata sandi lengkap (v1 hanya menampilkan tautan).
- Verifikasi dua langkah (2FA).
- Login operation melalui Google atau Apple.
- Pengelolaan akun operation di dalam portal (lihat PRD-05, bagian R2).

## 7. Pertanyaan Terbuka

1. Siapa yang membuat dan menonaktifkan akun operation? Tanpa menu "Kelola Akun", proses ini dilakukan secara manual atau lewat database.
2. Berapa lama sesi "Ingat saya" berlaku?
3. Apakah 2FA perlu untuk v1? Desain tidak menampilkannya.
4. Berapa batas percobaan gagal yang disepakati?

## 8. Metrik Keberhasilan

- Persentase login operation yang berhasil pada percobaan pertama.
- Tidak ada akses Portal Operation oleh akun mahasiswa.
- Waktu rata-rata dari halaman login sampai Dashboard.
