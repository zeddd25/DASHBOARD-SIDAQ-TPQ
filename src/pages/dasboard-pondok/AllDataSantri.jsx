import { useState } from "react";
import ModalAdd from "../../components/modal/ModalAdd";
import { RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import { TbAlertCircle, TbEdit, TbSearch, TbTrashFilled } from "react-icons/tb";

const AllDataSantri = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };

  const { open } = useStateContext();

  return (
    <>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Santri"} />
        <div className="relative mr-5 overflow-x-auto">
          <div className="flex items-center justify-between pb-4 bg-white">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <TbSearch className="text-lg"/>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-3 pl-10 text-sm text-gray-900 border-2 border-[#2FBFE7] outline-none rounded-md w-96 bg-gray-50  "
                placeholder="cari Santri berdasarkan nama atau email"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white tracking-wider uppercase bg-gradient-to-r from-[#2FBFE7] to-[#66BF60]">
              <tr>
                <th scope="col" className="px-3">
                  No
                </th>
                <th scope="col" className="px-6 py-5">
                  NAMA SANTRI
                </th>
                <th scope="col" className="px-6 py-5">
                  Position
                </th>
                <th scope="col" className="px-6 py-5">
                  Status
                </th>
                <th scope="col" className="px-9 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-gray-700 hover:bg-gradient-to-r hover:bg-slate-50">
                <td className="w-4 p-4">1</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 whitespace-nowrap"
                >
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                    <img
                      src="../../src/assets/images/foto-formal.jpeg"
                      alt="Jese image"
                    />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm font-semibold">Muhamad Andaru</h1>
                    <h3 className="font-normal">andaru.cuaks@gmail.com</h3>
                  </div>
                </th>
                <td className="px-6 py-4">Santri</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
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
              <tr className="bg-white border-b hover:bg-gradient-to-r hover:bg-slate-50">
                <td className="w-4 p-4">2</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                    <img
                      src="../../src/assets/images/foto-formal.jpeg"
                      alt="Jese image"
                    />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-base font-semibold">Santri</h1>
                    <h3 className="font-normal">andaru.cuaks@gmail.com</h3>
                  </div>
                </th>
                <td className="px-6 py-4">Designer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
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
              <tr className="bg-white border-b hover:bg-gradient-to-r hover:bg-slate-50">
                <td className="w-4 p-4">3</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                    <img
                      src="../../src/assets/images/foto-formal.jpeg"
                      alt="Jese image"
                    />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-base font-semibold ">Muhamad Andaru</h1>
                    <h3 className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </h3>
                  </div>
                </th>
                <td className="px-6 py-4">Santri</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
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
              <tr className="bg-white border-b hover:bg-gradient-to-r hover:bg-slate-50">
                <td className="w-4 p-4">4</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                    <img
                      src="../../src/assets/images/foto-formal.jpeg"
                      alt="Jese image"
                    />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-base font-semibold ">Muhamad Andaru</h1>
                    <h3 className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </h3>
                  </div>
                </th>
                <td className="px-6 py-4">Santri</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
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
              <tr className="bg-white border-b hover:bg-gradient-to-r hover:bg-slate-50">
                <td className="w-4 p-4">5</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                    <img
                      src="../../src/assets/images/foto-formal.jpeg"
                      alt="Jese image"
                    />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-base font-semibold ">Muhamad Andaru</h1>
                    <h3 className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </h3>
                  </div>
                </th>
                <td className="px-6 py-4">Santri</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                    Non aktif
                  </div>
                </td>
                <td className="px-6 py-4 gap-2 text-[#4F4F4F]">
                  <div className="flex">
                    <TbAlertCircle className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                    <TbEdit className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                    <TbTrashFilled className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showModal && <ModalAdd onClose={handleCancel} />}
    </>
  );
};

export default AllDataSantri;
