import { useState, useEffect } from "react";
import ModalAdd from "../../components/modal/ModalAdd";
import { ButtonCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import { TbAlertCircle, TbEdit, TbSearch, TbTrashFilled } from "react-icons/tb";
import instance from "../../services/api";

const DataUstadz = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataUstadz, setDataUstadz] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk nilai pencarian

  // Mengambil ID admin dari localStorage
  const id_admin = localStorage.getItem("id_admin");

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `/getUstadzByAdminId/${id_admin}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setDataUstadz(response.data.ustadz_details);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const filteredDataUstadz = dataUstadz.filter((ustadz) =>
    ustadz.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { open } = useStateContext();

  return (
    <>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Ustadz"} className={"mt-14"} />
        <div className="relative mr-5 overflow-x-auto">
          <div className="flex items-center justify-between pb-4">
            <div className="relative  flex w-96 flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(147, 51, 234)] focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={(e) => setSearchTerm(e.target.value)} // Fungsi penanganan perubahan nilai pencarian\
              />

              <button
                className="relative flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-purple-600 text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <TbSearch className="text-lg" />
              </button>
            </div>
            <ButtonCustom
              value={"Tambah Ustadz"}
              type="submit"
              eventOnClick={handleUpdate}
              className={
                "bg-green-400 transition-all duration-300 ease-in-out hover:bg-[#4ade80b4] px-7 py-2 rounded-md text-white"
              }
            />
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white tracking-wider uppercase bg-gradient-to-r from-secondary to-primary">
              <tr>
                <th scope="col" className="px-3">
                  No
                </th>
                <th scope="col" className="px-6 py-5">
                  NAMA USTADZ
                </th>
                <th scope="col" className="px-6 py-5">
                  Tanggal Lahir
                </th>
                <th scope="col" className="px-6 py-5">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-9 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDataUstadz?.map((ustadz, index) => (
                <tr
                  key={ustadz.id}
                  className="bg-white border-b text-gray-700 hover:bg-gradient-to-r hover:bg-slate-50"
                >
                  <td className="w-4 p-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 whitespace-nowrap"
                  >
                    <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                      <img
                        src={`https://13c5-36-81-39-28.ngrok-free.app/${ustadz.gambar}`}
                        alt="Ustadz"
                      />
                    </div>
                    <div className="pl-3">
                      <h1 className="text-sm font-semibold">{ustadz.name}</h1>
                      <h3 className="font-normal">{ustadz.email}</h3>
                    </div>
                  </th>
                  <td className="px-8 py-4">{ustadz.tgl_lahir}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">{ustadz.gender}</div>
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

export default DataUstadz;
