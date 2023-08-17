import { ButtonCustom, InputCustom } from "../../components/ui";
import { CiLock, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* <div className='bg-indigo-600 h-[20vh]  lg:-mt-[380px] lg:-skew-y-[50deg] w-full'></div> */}
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
          <form className="p-5 flex flex-col gap-4 rounded-xl text-center">
            <div className="w-full flex flex-col items-start mb-10">
              <h1 className="text-4xl font-extrabold mb-2 text-[#333333]">
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
              icon={<CiMail className="text-2xl text-[#333333]" />}
            />
            <InputCustom
              type="password"
              placeholder={"Kata Sandi"}
              className={
                "border-[#EEEEEE]focus:ring-0 outline-none w-full py-3 px-4 text-sm font-semibold md:w-[90%]"
              }
              icon={<CiLock className="text-2xl text-[#333333]" />}
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
                  "bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[15px] md:text-[20px] lg:text-[23px] text-white font-[700] my-5 py-2 px-3 md:py-3"
                }
              />
            </Link>
            <div className="text-[#667085] font-medium text-sm">
              <h1>
                Belum memiliki akun Masjid?{" "}
                <Link to={"/register"}>
                  <span className="text-[#66BF60] font-bold text-sm">
                    Daftar
                  </span>
                </Link>
              </h1>
            </div>
            {/* <div className='h-[1.7px] w-full flex justify-center relative bg-[#008C74] before:absolute before:content-["OR"] before:bg-white before:text-[12px] before:w-10 before:-top-[10px] before:font-[600]'></div> */}
            {/* <Link to={'/register'}><ButtonCustom value={'Sign Up'} className={'border-[#008C74] border-2 text-[15px] md:text-[20px] lg:text-[23px] bg-white rounded-[20px] text-[#008C74] font-[700] my-5 py-2 px-3 md:py-3'}/></Link> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
