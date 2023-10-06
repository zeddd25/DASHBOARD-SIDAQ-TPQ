import { ButtonCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";

const AbsensiSantri = () => {
  const { open } = useStateContext();

  return (
    <div
      className={`min-h-screen py-5 font-poppins ${
        open ? "md:pl-[261px]" : "md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Input Absensi Santri"} />

      <div className="flex flex-col mt-4 overflow-x-scroll lg:overflow-auto">
        <div className="m-auto flex flex-col">
          <div className="w-full flex items-cente">
            <select
              name=""
              id=""
              className="ring-1 ring-prito-primary rounded-lg px-5 py-2 my-2 bg-slate-50 border-none outline-none transition-colors"
            >
              <option value="">Subuh</option>
              <option value="">Dzuhur</option>
              <option value="">Ashar</option>
              <option value="">Maghrib</option>
              <option value="">Isya</option>
            </select>
          </div>
          <div className="ring-1 ring-prito-primary align-middle inline-block min-w-fit shadow overflow-hidden sm:rounded-xl border-b border-gray-200">
            <table>
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-10  py-3 border-b border-gray-200 bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Nama Santri
                  </th>
                  <th className="px-24 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Kehadiran
                  </th>
                  <th className="px-14 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-20 py-3 border-b border-gray-200 bg-gray-50">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      1
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      2
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-center leading-5 text-gray-500">
                      3
                    </div>
                  </td>
                  <td className="px-10 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="object-cover h-10 w-10 rounded-full"
                          src="../../src/assets/images/foto-formal.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          Muhamad Andaru
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-20 py-2 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">
                      <select
                        name=""
                        id=""
                        className="px-4 py-2 mb-3 bg-slate rounded-lg border-none outline-none transition-colors"
                      >
                        <option value="">Hadir</option>
                        <option value="">Alpha</option>
                        <option value="">Sakit</option>
                        <option value="">Izin</option>
                      </select>
                    </div>
                  </td>

                  <td className="px-14 py-2 whitespace-no-wrap border-b border-gray-200 text-gray-500">
                    <h1>30-08-2023</h1>
                  </td>

                  <td className="px-20 py-2 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                    <button
                      //   onClick={() => handleDelete(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ButtonCustom
            value={"Kirimkan"}
            type="submit"
            className={
              "bg-gradient-to-r from-secondary to-primary text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-r hover:from-[#9233eabe] hover:to-[#4ade80b4] transition-all duration-300 ease-in-out active:scale-105"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AbsensiSantri;
