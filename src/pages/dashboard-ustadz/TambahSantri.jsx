import React, { useState } from "react";
import {
  TbCalendar,
  TbLock,
  TbMail,
  TbPhotoPlus,
  TbUser,
  TbUsersGroup,
  TbVersions,
} from "react-icons/tb";
import { ButtonCustom, InputCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import instance from "../../services/api";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer dan toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS Toastify

const TambahSantri = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gambar: null,
    email: "",
    password: "",
    role: "santri_pondok",
    tgl_lahir: "",
    gender: "Pilih jenis kelamin",
    angkatan: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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

    const { name, email, password, gender, tgl_lahir, gambar, angkatan } = formData;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      formData.role === "" ||
      gender === "Pilih jenis kelamin" ||
      tgl_lahir === "" ||
      angkatan === "" ||
      gambar === null
    ) {
      toast.error("Pastikan isi semua inputan!"); // Menggunakan toast.error
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
    data.append("angkatan", angkatan);

    const authToken = localStorage.getItem("token");

    instance
      .post("/register/santri", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Pendaftaran akun Anda berhasil!"); // Menggunakan toast.success
      })
      .catch((error) => {
        console.log(error);
        toast.error("Pendaftaran gagal. Silakan coba lagi nanti!"); // Menggunakan toast.error
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const { open } = useStateContext();

  return (
    <div
      className={`min-h-screen py-5 font-poppins ${
        open ? "md:pl-[261px]" : "md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Input Tambah Santri"} />

      <div className="flex flex-col w-[900px] m-auto">
        <div className="border border-t-[#66BF60] border-l-[#66BF60] border-r-[#66BF60] w-full rounded-t-lg p-4 font-semibold tracking-wider">
          <h1>Data Santri</h1>
        </div>

        <form onSubmit={handleFormSubmit} className="border border-[#66BF60] w-full rounded-b-lg p-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm mb-2">Nama</h3>
            <InputCustom
              name="name"
              onChange={handleInputChange}
              placeholder={"Nama Santri"}
              className={
                "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-2 px-4"
              }
              icon={<TbUser className="text-2xl text-[#6c7077]" />}
            />
          </div>
          <div>
            <h3 className="text-sm mb-2">Email</h3>
            <InputCustom
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder={"muhamadsholeh@gmail.com"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-2 px-4"
              }
              icon={<TbMail className="text-2xl text-[#6c7077]" />}
            />
          </div>
          <div>
            <h3 className="text-sm mb-2">Kata Sandi</h3>
            <InputCustom
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder={"minimal karakter 8+"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbLock className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
          </div>
          <div>
            <h3 className="text-sm mb-2">Tanggal Lahir</h3>
            <InputCustom
              name="tgl_lahir"
              onChange={handleInputChange}
              placeholder={"2000-10-10"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbCalendar className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
          </div>
          <div className="w-full flex items-center justify-between ring-1 ring-[#EEEEEE] rounded-md py-3 px-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full "
              }
            >
              <option value="Pilih jenis kelamin">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <TbUsersGroup className="text-3xl font-semibold text-[#6c7077]" />
          </div>
          <div>
            <h3 className="text-sm mb-2">Angkatan</h3>
            <InputCustom
              type="number"
              name="angkatan"
              onChange={handleInputChange}
              placeholder={"16"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbVersions className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
          </div>
          <InputCustom
            type="file"
            name={"gambar"}
            onChange={handleFileChange}
            placeholder={selectedFileName ? selectedFileName : "Uploud Foto Wajah"}
            className={
              "text-sm text-[#9CA3AF] font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none cursor-pointer"
            }
            icon={<TbPhotoPlus className="text-2xl text-[#6c7077]" />}
          />
          <ButtonCustom
            value={"Daftar"}
            type="submit"
            className={
              "w-full bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-l hover:from-[#2FBFE7] hover:to-[#66BF60]"
            }
          />
        </form>
      </div>
      <ToastContainer /> {/* Tambahkan ToastContainer di komponen Anda */}
    </div>
  );
};

export default TambahSantri;
