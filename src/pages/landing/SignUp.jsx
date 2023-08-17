import { CiLock, CiUser, CiMail } from "react-icons/ci";
import {
  TbBuildingSkyscraper,
  TbMapPin,
  TbMap,
  TbPhotoPlus,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { ButtonCustom, InputCustom } from "../../components/ui";

const SignUp = () => {
  return (
    <>
      {/* <div className="bg-[#008C74] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full"></div> */}
      <section className="font-poppins h-screen relative flex flex-col lg:flex-row lg:gap-x-20 items-center">
        <div className="w-[50%] h-full overflow-hidden bg-gradient-to-b from-[#66BF60] to-[#2FBFE7] hidden lg:block">
          <div className="mt-[15px] ml-[25px] absolute">
            <img
              className="h-[35px]"
              src="../public/logo-sidaq.png"
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
              Indonesia
            </h1>
          </div>
          <img
            className="opacity-[10%] h-full w-full object-cover"
            src="../public/motif.svg"
            alt="Your Logo"
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
              icon={<CiUser className="text-2xl text-[#333333]" />}
            />
            <InputCustom
              type="email"
              placeholder={"Email"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={<CiMail className="text-2xl text-[#333333]" />}
            />
            <InputCustom
              type="password"
              placeholder={"Kata Sandi"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={<CiLock className="text-2xl text-[#333333]" />}
            />
            <InputCustom
              placeholder={"Alamat Masjid"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none"
              }
              icon={<TbMapPin className="text-2xl text-[#6c7077]" />}
            />

            <div className="border-[#EEEEEE] border-[1px] rounded-lg font-semibold flex items-center px-6 gap-3">
              <TbBuildingSkyscraper className="text-2xl text-[#6c7077]" />
              <select
                className="text-[#9CA3AF] outline-none text-sm w-full bg-transparent py-4"
                name=""
                id=""
              >
                <option value="">Kota/Kabupaten</option>
                <option value="">SOLO</option>
                <option value="">SURABAYA</option>
                <option value="">JAKARTA</option>
              </select>
            </div>

            <div className="border-[#EEEEEE] border-[1px] rounded-lg font-semibold flex items-center px-6 gap-3">
              <TbMap className="text-2xl text-[#6c7077]" />
              <select
                className="text-[#9CA3AF] outline-none text-sm w-full bg-transparent py-4"
                name=""
                id=""
              >
                <option value="">Provinsi</option>
                <option value="">YOGYAKARTA</option>
                <option value="">JAWA TENGAH</option>
                <option value="">JAWA BARAT</option>
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
                  "bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[15px] md:text-[20px] lg:text-[23px] text-white font-[700] my-5 py-2 px-3 md:py-3"
                }
              />
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
