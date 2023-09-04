import { ButtonCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";

const DataUstadz = () => {
  const { open } = useStateContext();

  return (
    <>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Ustadz"} />
        <div className="relative mr-5 overflow-x-auto">
          <div className="flex items-center justify-between pb-4 bg-white">
            <ButtonCustom 
            value={"Tambah Ustadz"} 
            type="submit" 
            className={"bg-[#66BF60] px-7 py-2 rounded-md text-white"}
            />
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Search htmlFor users"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  NAMA USTADZ
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">1</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="../../src/assets/images/foto-formal.jpeg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      Muhamad Andaru
                    </div>
                    <div className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">React Developer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">2</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="../../src/assets/images/foto-formal.jpeg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      Muhamad Andaru
                    </div>
                    <div className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Designer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">3</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="../../src/assets/images/foto-formal.jpeg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      Muhamad Andaru
                    </div>
                    <div className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">Vue JS Developer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
                  </div>
                </td>
                <td className="px-6 py-4 text-blue-600">
                  <a href="#" className="font-medium hover:underline">
                    Edit user
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">4</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="../../src/assets/images/foto-formal.jpeg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      Muhamad Andaru
                    </div>
                    <div className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">UI/UX Engineer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Aktif
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="w-4 p-4">5</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="../../src/assets/images/foto-formal.jpeg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      Muhamad Andaru
                    </div>
                    <div className="font-normal text-gray-500">
                      andaru.cuaks@gmail.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">SEO Specialist</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                    Non aktif
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataUstadz;
