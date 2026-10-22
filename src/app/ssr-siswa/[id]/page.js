import Link from 'next/link';
import { notFound } from 'next/navigation';
import RenderInfo from '@/components/RenderInfo';
import { ambilSiswaById } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function DetailSiswaPage({ params }) {
  // TODO 1 (Tugas 3): Ambil id dari params.
  // Ingat: di Next.js 15+, params adalah Promise. Apa yang harus ditambahkan?
  const id = '1';

  // TODO 2 (Tugas 3): Panggil ambilSiswaById(id) dengan await.
  const siswa = null;

  // TODO 3 (Tugas 3): Jika siswa tidak ada (null), panggil notFound().

  if (!siswa) {
    return <p className="alert">Belum ada data. Selesaikan TODO 1 sampai 3.</p>;
  }

  return (
    <>
      <h1>{siswa.nama}</h1>
      <span className="tag">SSR</span>
      <RenderInfo rute={`/ssr-siswa/${id}`} metode="SSR" />
      <ul>
        <li>Email: {siswa.email}</li>
        <li>Kota: {siswa.kota}</li>
        <li>Kelas: {siswa.kelas}</li>
      </ul>
      <p><Link href="/ssr-siswa">Kembali ke daftar</Link></p>
    </>
  );
}
