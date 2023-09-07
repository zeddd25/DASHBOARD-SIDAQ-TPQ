import { useState } from "react";
import { ButtonCustom, InputCustom } from "../../components/ui";
import { TbMail, TbLock } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Pastikan isi semua inputan!", { toastId: "error" });
      return;
    }

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    const config = {
      method: "post",
      url: "/login",
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setIsLoading(true);

        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("name", response.data.user.name);
          sessionStorage.setItem("role", response.data.user.role);

          const userRole = response.data.user.role;

          if (userRole === "admin_pondok") {
            navigate("/dashboard/pondok");
          } else if (userRole === "ust_pondok") {
            navigate("/dashboard/ustadz");
          } else if (userRole === "staff_ust") {
            navigate("/dashboard/staff-ustadz");
          } else if (userRole === "santri_pondok") {
            navigate("/dashboard/santri");
          } else {
            // Navigasi default jika tidak sesuai peran yang ada
            navigate("/");
          }
        } else {
          setIsLoading(false);
          toast.error("Email atau Password salah!", { toastId: "error" });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        if (error.response) {
          // Menangani kesalahan HTTP dari server
          const { data, status } = error.response;
          if (status === 401) {
            alert(data.message);
          } else {
            alert(`Terjadi kesalahan: ${data.message}`);
          }
        } else {
          // Menangani kesalahan jaringan
          alert("Terjadi kesalahan jaringan. Mohon cek koneksi internet Anda.");
        }
      });
  }

  return (
    <>
      {isLoading ? (
        <div className="custom-loader m-auto" />
      ) : (
        <section className="font-poppins h-screen relative flex items-center">
          <div className="w-[50%] h-full overflow-hidden bg-gradient-to-b from-[#00E676] to-[#673AB7] hidden lg:block">
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
            <form
              onSubmit={handleSubmit}
              className="p-5 flex flex-col gap-4 rounded-xl text-center"
            >
              <div className="w-full flex flex-col items-start mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#333333]">
                  Assalamu alaikum!
                </h1>
                <h1 className="text-lg font-medium">Selamat Datang Kembali</h1>
              </div>
              <InputCustom
                type="email"
                value={email}
                placeholder={"Alamat Email"}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  "focus:ring-0 outline-none w-full py-3 px-4 text-sm font-semibold md:w-[90%]"
                }
                icon={<TbMail className="text-2xl text-[#6c7077]" />}
              />
              <InputCustom
                type="password"
                placeholder={"Kata Sandi"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <ButtonCustom
                type="submit"
                value={"Masuk"}
                className={
                  "w-full bg-gradient-to-tl from-[#673AB7] to-[#00E676] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 hover:bg-gradient-to-tl hover:to-[#00e677d5] hover:from-[#683ab7dc]"
                }
              />
              <div className="text-[#667085] font-medium text-sm">
                <h1>
                  Belum memiliki akun Masjid?{" "}
                  <Link to={"/register"}>
                    <span className="text-[#00E676] font-bold text-sm hover:underline hover:underline-offset-2">
                      Daftar
                    </span>
                  </Link>
                </h1>
              </div>
            </form>
          </div>
          <ToastContainer />
        </section>
      )}
    </>
  );
};

export default SignIn;
