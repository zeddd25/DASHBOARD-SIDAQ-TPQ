import instance from "../../services/api";
import { useStateContext } from "../../context/StateContext";
import { RecapInfo } from "../../components/ui";
import { TbCirclePlus, TbEdit, TbTrashFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

const Kategori = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name_kategori: "",
    name_divisi: "",
    kegiatan: "",
    amanah: "",
  });

  const handleSubmit = (e, categoryType) => {
    e.preventDefault();

    if (!formData[categoryType]) {
      alert("Pastikan semua inputan harus di isi!!!");
      return;
    }

    const nameField = `name_${categoryType}`;

    const formDataToSend = new FormData();
    formDataToSend.append(nameField, formData[categoryType]);

    let apiUrl = "";

    switch (categoryType) {
      case "kategori":
        apiUrl = "/CreateAbsen";
        break;
      case "divisi":
        apiUrl = "/CreateDivisi";
        break;
      case "kegiatan":
        apiUrl = "/Createkegiatan";
        break;
      case "amanah":
        apiUrl = "/CreateAmanah";
        break;
      default:
        apiUrl = "";
    }

    if (!apiUrl) {
      alert("Jenis kategori tidak valid.");
      return;
    }

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formDataToSend,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Refresh data setelah menambahkan subkategori baru
        // getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/IndexAbsen",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData(response.data.categories);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const { open } = useStateContext();

  return (
    <form>
      <div
        className={`min-h-screen py-5 font-poppins ${
          open ? "md:pl-[261px]" : "md:pl-[82px]"
        } duration-500`}
      >
        <RecapInfo title={"Data Kategori"} className={"mt-14"} />
        <div className="p-4 lg:mr-5 lg:p-0">
          {Object.keys(data).map((categoryType) => (
            <div
              key={categoryType}
              className="bg-white border rounded-lg shadow-md mb-4"
            >
              <h2 className="text-white tracking-wider text-lg font-medium bg-gradient-to-r from-purple-600 to-green-400 p-2">
                {categoryType}
              </h2>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">SubKategori</th>
                    <th className="border p-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {data[categoryType].map((subCategory, i) => (
                    <tr key={i} className="border">
                      <td className="border p-2">
                        {subCategory.name_kategori ||
                          subCategory.name_divisi ||
                          subCategory.name_kegiatan ||
                          subCategory.name_amanah}
                      </td>
                      <td className="border p-2 flex justify-center">
                        <button className="text-[#4F4F4F] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                          <TbEdit size={20} />
                        </button>
                        <button className="text-[#4F4F4F] transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                          <TbTrashFilled size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td className="border">
                      <input
                        type="text"
                        placeholder={`Tambah ${categoryType} Baru`}
                        className="rounded p-2 w-full outline-none"
                        value={formData[categoryType]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [categoryType]: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="border p-2 flex justify-center">
                      <button
                        type="submit"
                        onClick={(e) => handleSubmit(e, categoryType)}
                        className="text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
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
    </form>
  );
};

export default Kategori;
