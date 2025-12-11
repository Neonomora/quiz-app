import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-xl font-semibold">Quis Berhadiah Rp.1.000.000</h1>
      <Link href="/quiz" className="text-black bg-white rounded px-2">Klik Disini Untuk Mulai</Link>
    </main>
  );
}
