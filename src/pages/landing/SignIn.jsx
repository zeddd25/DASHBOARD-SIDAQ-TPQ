import { ButtonCustom, InputCustom } from "../../components/ui";
import { TbMail, TbLock } from "react-icons/tb";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
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
        <div className="max-w-[98%]  lg:w-[400px] mx-auto">
          <form className="p-5 flex flex-col gap-4 rounded-xl text-center">
            <div className="w-full flex flex-col items-start mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#333333]">
                Assalamu alaikum!
              </h1>
              <h1 className="text-lg font-medium">Selamat Datang Kembali</h1>
            </div>
            <InputCustom
              type="email"
              placeholder={"Alamat Email"}
              className={
                "focus:ring-0 outline-none w-full py-3 px-4 text-sm font-semibold md:w-[90%]"
              }
              icon={<TbMail className="text-2xl text-[#6c7077]" />}
            />
            <InputCustom
              type="password"
              placeholder={"Kata Sandi"}
              className={
                "border-[#EEEEEE]focus:ring-0 outline-none w-full py-3 px-4 text-sm font-semibold md:w-[90%]"
              }
              icon={<TbLock className="text-3xl text-[#6c7077]" />}
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-[#333333] flex items-center gap-x-2 text-[12px] md:text-[14px] font-bold">
                <InputCustom
                  type={"checkbox"}
                  className={"cursor-pointer border-red-500 border-[2px]"}
                  id={"remember"}
                />
                <label htmlFor="remember">ingat saya</label>
              </span>
              <span className="text-[#333333] text-[12px] font-semibold">
                <Link to={"reset-password"}>Lupa Kata Sandi?</Link>
              </span>
            </div>
            <Link to={"main"}>
              <ButtonCustom
                value={"Masuk"}
                className={
                  "bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 hover:bg-gradient-to-l hover:from-[#2FBFE7] hover:to-[#66BF60]"
                }
              />
            </Link>
            <div className="text-[#667085] font-medium text-sm">
              <h1>
                Belum memiliki akun Masjid?{" "}
                <Link to={"/register"}>
                  <span className="text-[#66BF60] font-bold text-sm hover:underline hover:underline-offset-2">
                    Daftar
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

export default SignIn;
