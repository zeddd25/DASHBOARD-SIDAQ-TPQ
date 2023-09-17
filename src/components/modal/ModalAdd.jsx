import React, { useState } from "react";
import {
  TbUser,
  TbLock,
  TbMail,
  TbCalendar,
  TbPhotoPlus,
} from "react-icons/tb";
import { ButtonCustom, InputCustom, RecapInfo } from "../../components/ui";
import instance from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const ModalAdd = ({ onClose }) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gambar: null,
    email: "",
    password: "",
    role: "ust_pondok",
    tgl_lahir: "",
    gender: "Pilih jenis kelamin",
    provinsi: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    setSelectedProvince(selectedProvinceId);

    // Update formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      provinsi: selectedProvinceId,
    }));
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await fetch(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      const data = await response.json();
      setProvinces(data.provinsi);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      gambar: file,
    }));
    setSelectedFileName(file.name);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    const { name, email, password, gender, tgl_lahir, gambar, provinsi } =
      formData;

    // Validasi isi inputan
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      formData.role === "" ||
      gender === "Pilih jenis kelamin" ||
      tgl_lahir === "" ||
      provinsi === "" ||
      gambar === null
    ) {
      toast.error("Pastikan isi semua inputan!", { toastId: "error" });
      return;
    }

    // Validasi panjang kata sandi
    if (password.length < 8) {
      toast.error("Kata sandi harus terdiri dari minimal 8 karakter!", {
        toastId: "error",
      });
      return;
    }

    // Validasi ukuran file gambar
    const maxFileSizeMB = 5; // Ukuran maksimal dalam MB
    if (gambar.size > maxFileSizeMB * 1024 * 1024) {
      toast.error(`Ukuran file gambar harus kurang dari ${maxFileSizeMB} MB!`, {
        toastId: "error",
      });
      return;
    }

    // Validasi format file gambar
    const allowedImageFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedImageFormats.includes(gambar.type)) {
      toast.error("Format file gambar harus berupa JPEG, JPG atau PNG!", {
        toastId: "error",
      });
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("role", formData.role);
    data.append("gender", gender);
    data.append("tgl_lahir", tgl_lahir);
    data.append("gambar", gambar);
    data.append("provinsi", provinsi);

    const authToken = localStorage.getItem("token");

    instance
      .post("/register/ustadz", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Pendaftaran Ustadz berhasil!", { toastId: "success" });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Pendaftaran gagal. Silakan coba lagi nanti!", {
          toastId: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="font-poppins fixed inset-0 flex items-center justify-center">
      <div
        onClick={onClose}
        className="cursor-pointer absolute inset-0 bg-black opacity-20"
      ></div>
      <section className="bg-white font-poppins relative rounded-lg flex items-center">
        <div className="mx-auto lg:w-[550px]">
          <form
            className="p-5 bg-transparent flex flex-col gap-2 rounded-xl text-center"
            onSubmit={handleFormSubmit}
          >
            <div className="w-full flex flex-col gap-6 items-center">
              <div className="w-full flex items-center gap-4">
                <RecapInfo title={"From Tambah Ustadz"} />
                <div className="h-full">
                  <img
                    src={"../../src/assets/images/ustadz.png"}
                    alt="Ustadz"
                  />
                </div>
              </div>
              {/* <div>
                <h1 className="text-4xl font-extrabold text-[#333333]">
                  بسم الله الرحمن الرحيم
                </h1>
              </div> */}
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Nama</h1>
              <InputCustom
                name="name"
                placeholder={"Muhamad Sholeh Al Atsary"}
                onChange={handleInputChange}
                className={
                  "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-3 px-4"
                }
                icon={<TbUser className="text-2xl text-[#6c7077]" />}
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Email</h1>
              <InputCustom
                type="email"
                placeholder={"muhamadsholeh@gmail.com"}
                name="email"
                onChange={handleInputChange}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
                }
                icon={<TbMail className="text-2xl text-[#6c7077]" />}
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Kata Sandi</h1>
              <InputCustom
                type="password"
                placeholder={"minimal karakter 8+"}
                name="password"
                onChange={handleInputChange}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
                }
                icon={
                  <TbLock className="text-3xl font-semibold text-[#6c7077]" />
                }
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Tanggal Lahir</h1>
              <InputCustom
                placeholder={"2003/25/10"}
                name="tgl_lahir"
                onChange={handleInputChange}
                placeholderImage={selectedFileName}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 "
                }
                icon={<TbCalendar className="text-2xl text-[#6c7077]" />}
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Provinsi</h1>
              <div className="w-full flex items-center justify-between px-2 ring-1 ring-[#EEEEEE] rounded-md py-1">
              <select
                className="text-sm text-[#6c7077] font-semibold focus:ring-0 border-none outline-none w-full  py-3 px-4"
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                <option value="">Pilih Provinsi</option>
                {provinces.map((province) => (
                  <option
                    className="text-black"
                    key={province.id}
                    value={province.id}
                  >
                    {province.nama}
                  </option>
                ))}
              </select>
              </div>
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Jenis Kelamin</h1>
              <div className="w-full flex items-center justify-between px-2 ring-1 ring-[#EEEEEE] rounded-md py-1">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={
                    "text-sm text-[#6c7077] font-semibold focus:ring-0 border-none outline-none w-full  py-3 px-4"
                  }
                >
                  <option value="Pilih jenis kelamin">
                    Pilih jenis kelamin
                  </option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h1 className="mb-1">Foto Wajah</h1>
              <InputCustom
                type="file"
                name={"gambar"}
                onChange={handleFileChange}
                placeholder={
                  selectedFileName ? selectedFileName : "Uploud Foto Wajah"
                }
                className={
                  "text-sm text-[#9CA3AF] font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none cursor-pointer"
                }
                icon={<TbPhotoPlus className="text-2xl text-[#6c7077]" />}
              />
            </div>
            <ButtonCustom
              value={isLoading ? "Sedang proses..." : "Daftar"}
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-[#9333ea] to-[#4ade80] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-r hover:from-[#9233eabe] hover:to-[#4ade80b4] ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              } transition-all duration-300 ease-in-out transform hover:scale-105`}
            />
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ModalAdd;
