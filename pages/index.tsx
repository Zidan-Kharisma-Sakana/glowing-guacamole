import Head from "next/head";
import { Inter } from "@next/font/google";
import { RHFForm } from "@/components/rhf";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Assesment Talentlytica</title>
        <meta name="description" content="Job Scrapper Tugas Kelompok IAP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <nav className="px-8 z-10 md:px-16 py-4 w-full flex items-center justify-between bg-gray-800 border-gray-400 border-b text-white fixed left-0 top-0">
        <h1 className="md:text-xl font-bold">Assesment Talentlytica</h1>
      </nav>
      <main className="bg-gray-900 text-white min-h-screen w-full p-8 md:p-16 md:pt-8 mt-10">
        <RHFForm />
      </main>
    </>
  );
}
