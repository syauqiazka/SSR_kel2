import Link from 'next/link';
import RenderInfo from '@/components/RenderInfo';
import { ambilSiswa } from '@/lib/api';

// TODO 1 (Tugas 1): Paksa halaman ini dirender pada SETIAP request.
// Petunjuk: export const dynamic = '...';  (pilih nilai yang tepat)


export const metadata = { title: 'SSR | Daftar Siswa' };

export default async function SsrSiswaPage({ searchParams }) {
  // searchParams adalah Promise di Next.js 15+. Dipakai pada Tugas 4.
  const { q } = await searchParams;

  // TODO 2 (Tugas 1): Tulis console.log yang menandai bahwa kode ini berjalan di SERVER.


  // TODO 3 (Tugas 1): Ganti baris di bawah dengan pemanggilan ambilSiswa() memakai await.
  const hasil = { sumber: '(belum diambil)', data: [] };

  // TODO 4 (Tugas 4): Saring hasil.data berdasarkan kata kunci q (huruf besar/kecil diabaikan).
  const tampil = hasil.data;

  return (
    <>
      <h1>SSR | Daftar Siswa</h1>
      <span className="tag">SSR</span>
      <RenderInfo rute="/ssr-siswa" metode="SSR" />
      <p className="badge">Sumber data: {hasil.sumber}</p>

      {/* TODO 5 (Tugas 4): Tambahkan form pencarian (method GET, input name="q"). */}

      {tampil.length === 0 ? (
        <p className="alert">Belum ada data. Selesaikan TODO 3 terlebih dahulu.</p>
      ) : (
        <ul className="list">
          {/* TODO 6 (Tugas 1): Tampilkan setiap siswa dengan tampil.map(...).
              Setiap item: <li key={...}> berisi nama siswa, kelas, dan kota.
              Tugas 3: jadikan nama sebagai <Link href={`/ssr-siswa/${s.id}`}>. */}
        </ul>
      )}
    </>
  );
}
