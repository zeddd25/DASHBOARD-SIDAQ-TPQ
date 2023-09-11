import React, { useState } from "react";
import ModalAdd from "../../components/modal/ModalAdd";
import { RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import { TbAlertCircle, TbEdit, TbSearch, TbTrashFilled } from "react-icons/tb";
import SantriData from "./SantriData";

const AllDataSantri = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk nilai pencarian

  const { open } = useStateContext();

  // Fungsi untuk menangani penutupan modal
  const handleCancel = () => {
    setShowModal(false);
  };

  // Fungsi untuk mencari data berdasarkan nama santri
  const filteredSantriData = SantriData.filter((santri) =>
    santri.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Santri"} className={"mt-14"} />
        <div className="relative mr-5 overflow-x-auto">
          <div className="flex items-center justify-between pb-4">
            <div className="relative  flex w-96 flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out  focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(147, 51, 234)] focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                value={searchTerm} // Nilai pencarian
                onChange={(e) => setSearchTerm(e.target.value)} // Fungsi penanganan perubahan nilai pencarian
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-purple-600 text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <TbSearch className="text-lg" />
              </button>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white tracking-wider uppercase bg-gradient-to-r from-purple-600 to-green-400">
              <tr>
                <th scope="col" className="px-3">
                  No
                </th>
                <th scope="col" className="px-6 py-5">
                  NAMA SANTRI
                </th>
                <th scope="col" className="px-6 py-5">
                  Amanah
                </th>
                <th scope="col" className="px-6 py-5">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-8 py-5">
                  Tanggal Lahir
                </th>
                <th scope="col" className="px-6 py-5">
                  Alamat
                </th>
                <th scope="col" className="px-8 py-5">
                  Status
                </th>
                <th scope="col" className="px-9 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSantriData.map((santri, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-gray-700 hover:bg-gradient-to-r hover:bg-slate-50"
                >
                  <td className="w-4 p-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 whitespace-nowrap"
                  >
                    <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                      <img
                        src="../../src/assets/images/foto-formal.jpeg" // Ganti dengan sumber gambar yang sesuai
                        alt={santri.name}
                      />
                    </div>
                    <div className="pl-3">
                      <h1 className="text-sm font-semibold">{santri.name}</h1>
                      <h3 className="font-normal">{santri.email}</h3>
                    </div>
                  </th>
                  <td className="px-6 py-4">{santri.job}</td>
                  <td className="px-6 py-4">{santri.gender}</td>
                  <td className="px-6 py-4">{santri.birth_date}</td>
                  <td className="px-6 py-4 ">{santri.address}</td>
                  <td className="px-6 py-4">
                    <div
                      className={`flex items-center gap-4 ${
                        santri.status_id === 1
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          santri.status_id === 1 ? "bg-red-500" : "bg-green-500"
                        } mr-2`}
                      ></div>
                      <h1>
                        {santri.status_id === 1 ? "Tidak Aktif" : "Aktif"}
                      </h1>
                    </div>
                  </td>
                  <td className="px-6 py-4 gap-2">
                    <div className="flex text-[#4F4F4F]">
                      <TbAlertCircle className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                      <TbEdit className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                      <TbTrashFilled className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && <ModalAdd onClose={handleCancel} />}
    </>
  );
};

export default AllDataSantri;
