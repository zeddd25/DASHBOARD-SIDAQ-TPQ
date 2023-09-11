import { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { RecapInfo } from "../../components/ui";
import { TbAdCircle, TbCirclePlus, TbEdit, TbPlus, TbTrashFilled } from "react-icons/tb";

const Kategori = () => {
  const [kategoriData, setKategoriData] = useState([
    {
      id: 1,
      judul: "Absen",
      subKategori: ["Hadir", "Sakit", "Izin"],
      newSubKategori: "",
    },
    {
      id: 2,
      judul: "Amanah",
      subKategori: ["Kesehatan", "DKM Masjid"],
      newSubKategori: "",
    },
    {
      id: 3,
      judul: "Kegiatan",
      subKategori: ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya", "Odoj"],
      newSubKategori: "",
    },
    {
      id: 4,
      judul: "Divisi",
      subKategori: ["Programmer", "Multimedia", "Marketing"],
      newSubKategori: "",
    },
  ]);

  const handleEditSubKategori = (kategoriId, subKategoriIndex) => {
    // Implementasi logika edit subkategori di sini
    console.log(
      `Edit Subkategori: Kategori ID ${kategoriId}, Index ${subKategoriIndex}`
    );
  };

  const handleDeleteSubKategori = (kategoriId, subKategoriIndex) => {
    // Implementasi logika hapus subkategori di sini
    console.log(
      `Hapus Subkategori: Kategori ID ${kategoriId}, Index ${subKategoriIndex}`
    );
  };

  const handleTambahSubKategori = (kategoriId) => {
    // Implementasi logika tambah subkategori di sini
    console.log(`Tambah Subkategori: Kategori ID ${kategoriId}`);
  };
  const { open } = useStateContext();

  return (
    <>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Kategori"} className={"mt-14"}/>
        <div className="p-4 lg:mr-5 lg:p-0">
          {kategoriData.map((kategori) => (
            <div
              key={kategori.id}
              className="bg-white borderrounded-lg shadow-md mb-4"
            >
              <h2 className="text-white tracking-wider text-lg font-medium bg-gradient-to-r from-purple-600 to-green-400 p-2">
                {kategori.judul}
              </h2>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Subkategori</th>
                    <th className="border p-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {kategori.subKategori.map((subKategori, index) => (
                    <tr key={index} className="border">
                      <td className="border p-2">{subKategori}</td>
                      <td className="border p-2 flex justify-center">
                        <button
                          className="text-[#4F4F4F] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                          onClick={() =>
                            handleEditSubKategori(kategori.id, index)
                          }
                        >
                          <TbEdit size={20} />
                        </button>
                        <button
                          className="text-[#4F4F4F] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                          onClick={() =>
                            handleDeleteSubKategori(kategori.id, index)
                          }
                        >
                          <TbTrashFilled size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border">
                      <input
                        type="text"
                        placeholder="Tambah Subkategori Baru"
                        className="rounded p-2 w-full outline-none"
                        value={kategori.newSubKategori}
                        onChange={(e) =>
                          setKategoriData((prevData) =>
                            prevData.map((k) =>
                              k.id === kategori.id
                                ? { ...k, newSubKategori: e.target.value }
                                : k
                            )
                          )
                        }
                      />
                    </td>
                    <td className="border p-2 flex justify-center">
                      <button
                        className="text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        onClick={() => handleTambahSubKategori(kategori.id)}
                      >
                        <TbCirclePlus size={25} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Kategori;
