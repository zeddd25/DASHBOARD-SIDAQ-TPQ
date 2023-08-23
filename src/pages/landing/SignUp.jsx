import {
  TbBuildingCottage,
  TbMail,
  TbLock,
  TbMap,
  TbMapPin,
  TbBuildingSkyscraper,
  TbPhotoPlus,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { ButtonCustom, InputCustom } from "../../components/ui";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [regencies, setRegencies] = useState([]);
  const [selectedRegency, setSelectedRegency] = useState("");

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
    fetchRegencies(selectedProvinceId);
  };
  return (
    <>
      {/* <div className="bg-[#008C74] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full"></div> */}
      <section className="font-poppins h-screen relative flex items-center">
        <div className="w-[50%] h-full overflow-hidden bg-gradient-to-b from-[#66BF60] to-[#2FBFE7] hidden lg:block">
          <div className="mt-[15px] ml-[25px] absolute">
            <img
              // className="h-[35px]"
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
          <form className="p-5 bg-transparent flex flex-col gap-2 rounded-xl text-center">
            <div className="w-full flex flex-col items-start mb-10">
              <h1 className="text-4xl font-extrabold mb-2 text-[#333333]">
                Bismillah!
              </h1>
              <h1 className="text-lg font-medium">Daftar Masjid</h1>
            </div>
            <InputCustom
              placeholder={"Nama Masjid"}
              className={
                "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-3 px-4"
              }
              icon={<TbBuildingCottage className="text-2xl text-[#6c7077]" />}
            />
            <InputCustom
              type="email"
              placeholder={"Email"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={<TbMail className="text-2xl text-[#6c7077]" />}
            />
            <InputCustom
              type="password"
              placeholder={"Kata Sandi"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbLock className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
            <InputCustom
              placeholder={"Alamat Masjid"}
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
                onChange={(event) => setSelectedRegency(event.target.value)}
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
              placeholder={"Uploud Foto Masjid"}
              type="file"
              className={
                "text-sm text-[#9CA3AF] font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none cursor-pointer"
              }
              icon={<TbPhotoPlus className="text-2xl text-[#6c7077]" />}
            />

            <Link to={"/"}>
              <ButtonCustom
                value={"Sign Up"}
                className={
                  "w-full bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[20px] md:text-[23px] text-white font-[700] my-5 py-2 px-3 md:py-3 hover:bg-gradient-to-l hover:from-[#2FBFE7] hover:to-[#66BF60]"
                }
              />
            </Link>
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
    </>
  );
};

export default SignUp;
