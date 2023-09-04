import { useState } from "react";
import {
  TbBuildingCottage,
  TbMail,
  TbLock,
  TbMapPin,
  TbBuildingSkyscraper,
  TbPhotoPlus,
  TbMap,
} from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCustom, InputCustom } from "../../components/ui";
import { useEffect } from "react";
import instance from "../../services/api";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const SignUp = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [regencies, setRegencies] = useState([]);
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gambar: null,
    email: "",
    password: "",
    role: "",
    provinsi: "",
    kabupaten: "",
    alamat_masjid: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const fetchRegencies = async (provinceId) => {
    try {
      const response = await fetch(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`
      );
      const data = await response.json();
      setRegencies(data.kota_kabupaten);
    } catch (error) {
      console.error("Error fetching regencies:", error);
    }
  };

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    setSelectedProvince(selectedProvinceId);
    setSelectedRegency(""); // Reset selected regency when province changes
    fetchRegencies(selectedProvinceId);

    // Update formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      provinsi: selectedProvinceId,
      kabupaten: "", // Reset kabupaten when province changes
    }));
  };

  const handleRegencyChange = (event) => {
    const selectedRegencyId = event.target.value;
    setSelectedRegency(selectedRegencyId);

    // Update formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      kabupaten: selectedRegencyId,
    }));
  };

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
    setSelectedFileName(file.name); // Menyimpan nama file yang dipilih
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    const {
      name,
      email,
      password,
      alamat_masjid,
      provinsi,
      kabupaten,
      gambar,
    } = formData;

    const role = "admin_pondok";

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      role === "" ||
      alamat_masjid === "" ||
      provinsi === "" ||
      kabupaten === "" ||
      gambar === null
    ) {
      Swal.fire({
        icon: "error",
        title: "Kesalahan!",
        text: "Pastikan isi semua inputan!",
      });
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("role", role);
    data.append("alamat_masjid", alamat_masjid);
    data.append("provinsi", provinsi);
    data.append("kabupaten", kabupaten);
    data.append("gambar", gambar);

    instance
      .post("/register", data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        Swal.fire({
          icon: 'success',
          title: "Berhasil!",
          text: "Pendaftaran akun Anda telah berhasil dilakukan. Namun, akun Anda saat ini masih dalam tahap validasi oleh administrator kami. Setelah proses validasi selesai, Anda akan menerima pemberitahuan melalui email yang telah terdaftar. Terima kasih atas kesabaran dan pengertiannya.",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: "Gagal!",
          text: "Pendaftaran gagal. Silakan coba lagi nanti.",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      {isLoading ? ( 
        <div className="custom-loader m-auto" />
      ) : (
        <section className="font-poppins h-screen relative flex items-center">
          <div className="w-[50%] h-full overflow-hidden bg-gradient-to-b from-[#66BF60] to-[#2FBFE7] hidden lg:block">
            <div className="mt-[15px] ml-[25px] absolute">
              <img
                style={{ height: 50 }}
                src="../src/assets/images/logo-sidaq.svg"
                alt="../public/.png"
              />
            </div>
            <div className="text-white w-[358px] mt-[268px] ml-[108px] absolute">
              <h1 className="font-semibold text-6xl tracking-widest">
                Sidaq TPQ Indonesia
              </h1>
              <h1 className="text-sm font-semibold tracking-widest">
                SiDAQ adalah gerakan nasional <br /> memberantas buta huruf Al
                Qur’an, <br />
                mencetak 23 juta penghafal Al Qur’an dan <br /> membangun 6.236
                Rumah/Pondok Qur’an di 114 kawasan untuk mensurgakan <br />{" "}
                Indonesia.
              </h1>
            </div>
            <img
              className="opacity-[10%] h-full w-full object-cover"
              src="../src/assets/images/motif.svg"
              alt="background-motif"
            />
          </div>
          <div className="max-w-[98%] md:w-[70%] lg:w-[400px] mx-auto">
            <form
              className="p-5 bg-transparent flex flex-col gap-2 rounded-xl text-center"
              onSubmit={handleFormSubmit}
            >
              <div className="w-full flex flex-col items-start mb-10">
                <h1 className="text-4xl font-extrabold mb-2 text-[#333333]">
                  Bismillah!
                </h1>
                <h1 className="text-lg font-medium">Daftar Masjid</h1>
              </div>
              <InputCustom
                name="name"
                placeholder={"Nama Masjid"}
                onChange={handleInputChange}
                className={
                  "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-3 px-4"
                }
                icon={<TbBuildingCottage className="text-2xl text-[#6c7077]" />}
              />
              <InputCustom
                type="email"
                placeholder={"Email"}
                name="email"
                onChange={handleInputChange}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
                }
                icon={<TbMail className="text-2xl text-[#6c7077]" />}
              />
              <InputCustom
                type="password"
                placeholder={"Kata Sandi"}
                name="password"
                onChange={handleInputChange}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
                }
                icon={
                  <TbLock className="text-3xl font-semibold text-[#6c7077]" />
                }
              />
              <InputCustom
                placeholder={"Alamat Masjid"}
                name="alamat_masjid"
                onChange={handleInputChange}
                placeholderImage={setFormData ? setFormData.name : ""}
                className={
                  "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 "
                }
                icon={<TbMapPin className="text-2xl text-[#6c7077]" />}
              />
              <div className="border-[#EEEEEE] border-[1px] rounded-lg font-semibold flex items-center px-6 gap-3">
                <TbBuildingSkyscraper className="text-2xl text-[#6c7077]" />
                <select
                  className="text-[#9CA3AF] outline-none text-sm w-full bg-transparent py-4"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                >
                  <option>Pilih Provinsi</option>
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

              <div className="border-[#EEEEEE] border-[1px] rounded-lg font-semibold flex items-center px-6 gap-3">
                <TbMap className="text-2xl text-[#6c7077]" />
                <select
                  className="text-[#9CA3AF] outline-none text-sm w-full bg-transparent py-4"
                  value={selectedRegency}
                  onChange={handleRegencyChange}
                >
                  <option>Pilih Kabupaten/Kota</option>
                  {regencies.map((regency) => (
                    <option
                      className="text-black"
                      key={regency.id}
                      value={regency.id}
                    >
                      {regency.nama}
                    </option>
                  ))}
                </select>
              </div>

              <InputCustom
                type="file"
                name={"gambar"}
                onChange={handleFileChange}
                placeholder={
                  selectedFileName ? selectedFileName : "Uploud Foto Masjid"
                }
                className={
                  "text-sm text-[#9CA3AF] font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none cursor-pointer"
                }
                icon={<TbPhotoPlus className="text-2xl text-[#6c7077]" />}
              />

              <ButtonCustom
                value={"Sign Up"}
                type="submit"
                className={
                  "w-full bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-l hover:from-[#2FBFE7] hover:to-[#66BF60]"
                }
              />
              <div className="text-[#667085] font-medium text-sm">
                <h1>
                  Sudah memiliki akun Masjid?{" "}
                  <Link to={"/"}>
                    <span className="text-[#66BF60] font-bold text-sm hover:underline hover:underline-offset-2">
                      Masuk
                    </span>
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
