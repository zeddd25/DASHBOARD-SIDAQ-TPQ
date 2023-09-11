import {
  TbUser,
  TbLock,
  TbMail,
  TbCalendar,
  TbPhotoPlus,
  TbVersions,
  TbUsersGroup,
} from "react-icons/tb";
import { ButtonCustom, InputCustom, RecapInfo } from "../../components/ui";
import instance from "../../services/api"; // Pastikan Anda mengimpor instance dengan benar
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ModalAddSantri = ({ onClose }) => {
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

    const { name, email, password, gender, tgl_lahir, gambar, angkatan } =
      formData;

    // Validasi isi inputan
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
    data.append("angkatan", angkatan);
    data.append("gambar", gambar);

    const authToken = localStorage.getItem("token");

    instance
      .post("/register/santri", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Pendaftaran Santri berhasil!", { toastId: "success" });
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
              <div>
                <h1 className="text-4xl font-extrabold text-[#333333]">
                  بسم الله الرحمن الرحيم
                </h1>
              </div>
              <div className="w-full flex gap-4">
                <RecapInfo title={"From Tambah Santri"} className={"mb-0"} />
                <div className="mt-1">
                  <img src="../../src/assets/images/santri.png" />
                </div>
              </div>
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Nama</h3>
              <InputCustom
                name="name"
                onChange={handleInputChange}
                placeholder={"Muhamad Sholeh Al Atsary"}
                className={
                  "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-2 px-4"
                }
                icon={<TbUser className="text-2xl text-[#6c7077]" />}
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Email</h3>
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
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Kata Sandi</h3>
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
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Tanggal Lahir</h3>
              <InputCustom
                name="tgl_lahir"
                onChange={handleInputChange}
                placeholder={"2003/25/10"}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
                }
                icon={
                  <TbCalendar className="text-3xl font-semibold text-[#6c7077]" />
                }
              />
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Jenis Kelamin</h3>
              <div className="w-full flex items-center justify-between ring-1 ring-[#EEEEEE] rounded-md py-3 px-4">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={
                    "text-sm font-semibold focus:ring-0 border-none outline-none w-full "
                  }
                >
                  <option value="Pilih jenis kelamin">
                    Pilih jenis kelamin
                  </option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <TbUsersGroup className="text-3xl font-semibold text-[#6c7077]" />
              </div>
            </div>
            <div className="text-[#333333] tracking-wide text-start">
              <h3 className="mb-1">Angkatan</h3>
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

export default ModalAddSantri;
