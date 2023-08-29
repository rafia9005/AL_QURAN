import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import auth from "../lib/firebase/init";

export default function index() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/auth/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const [surah, setSurah] = useState(null);

  useEffect(() => {
    fetch("https://quran-api.santrikoding.com/api/surah/1")
      .then((response) => response.json())
      .then((data) => setSurah(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Al-Quran</h1>
        {surah ? (
          <div>
            <h1>{surah.nama}</h1>
            <p>Nama Latin: {surah.namaLatin}</p>
            <p>Jumlah Ayat: {surah.jumlahAyat}</p>
            <p>Tempat Turun: {surah.tempatTurun}</p>
            <p>Arti: {surah.arti}</p>
            <p>Deskripsi: {surah.deskripsi}</p>
            <audio src={surah.audio} controls />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <a
          href="/auth/logout"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
