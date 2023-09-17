import { ButtonCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import InputSearch from "../../components/ui/InputSearch";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Hafalan = () => {
  const { open } = useStateContext();
  // const currentDate = new Date().toISOString().split("T")[0];

  const [surahList, setSurahList] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState("");
  // const [selectedSurahAyahs, setSelectedSurahAyahs] = useState([]);

  useEffect(() => {
    // Memuat daftar surah dari API
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setSurahList(data.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat memuat data Surah:", error);
      });
  }, []);

  // Mengambil daftar ayat untuk surah yang dipilih
  useEffect(() => {
    if (selectedSurah !== "") {
      fetch(`https://api.alquran.cloud/v1/surah/${selectedSurah}`)
        .then((response) => response.json())
        // .then((data) => {
        //   setSelectedSurahAyahs(data.data.ayahs);
        // })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memuat data ayah:", error);
        });
    }
  }, [selectedSurah]);

  const handleCalendarClick = () => {
    const inputDate = document.getElementById("input-date");
    if (inputDate) {
      inputDate.click();
    }
  };

  return (
    <div
      className={`min-h-screen py-5 font-poppins ${
        open ? "md:pl-[261px]" : "md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Input Hafalan Harian Santri"} />
      <div className="flex flex-col w-[500px] m-auto">
        <InputSearch />
        <div className="mt-2 border flex justify-between items-center border-t-green-400 border-l-green-400 border-r-green-400 w-full rounded-t-lg p-3 font-semibold tracking-wider">
          <h1>Data Hafalan</h1>
          <div className="date-input-container flex">
            <input id="input-date" type="date" style={{ display: "none" }} />
            <span className="calendar-icon" onClick={handleCalendarClick}>
              📅
            </span>
          </div>
        </div>
        <div className="border border-green-400 w-full rounded-b-lg p-4 flex flex-wrap justify-between gap-4">
          <div>
            <h3 className="mb-2">Surah</h3>
            <select
              name=""
              id=""
              className="ring-1 ring-green-400 bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none"
              onChange={(e) => setSelectedSurah(e.target.value)}
            >
              <option value="">Pilih Surah</option>
              {surahList.map((surah) => (
                <option key={surah.number} value={surah.number}>
                  {surah.englishName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="mb-2">Jumlah Ayat</h3>
            <input
              type="number"
              className="ring-1 ring-green-400 bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none"
            />
            {/* <select
              name=""
              id=""
              className="ring-1 ring-green-400 bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none"
              disabled={!selectedSurah}
            >
              <option value="">Pilih Jumlah Ayat</option>
              {selectedSurahAyahs.length > 0 &&
                Array.from(
                  { length: selectedSurahAyahs.length },
                  (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  )
                )}
            </select> */}
          </div>
          <div>
            <h3 className="mb-2">Nilai</h3>
            <input
              type="number"
              placeholder="1-100"
              className="ring-1 ring-green-400 bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none"
            />
            {/* <select
              name=""
              id=""
              className="ring-1 ring-green-400 bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none"
            >
              <option value="">Pilih Nilai</option>
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index * 10} value={index * 10}>
                  {index * 10}
                </option>
              ))}
            </select> */}
          </div>
          <div className="w-full">
            <h3 className="mb-2">Keterangan</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="ring-1 ring-green-400 bg-slate-50 w-full p-2 rounded-lg outline-none hover:ring-2 hover:ring-purple-600 transition-all duration-300"
            ></textarea>
          </div>
        </div>
        <ButtonCustom
          value={"Kirimkan"}
          type="submit"
          className={
            "bg-gradient-to-r from-[#9333ea] to-[#4ade80] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-r hover:from-[#9233eabe] hover:to-[#4ade80b4] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-100"
          }
        />
      </div>
    </div>
  );
};

export default Hafalan;
