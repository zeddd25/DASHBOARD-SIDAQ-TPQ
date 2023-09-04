import { TbCalendar, TbLock, TbMail, TbUser, TbUserStar, TbUsersGroup, TbVersions } from "react-icons/tb";
import { InputCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";

const TambahSantri = () => {
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

        <div className="border border-[#66BF60] w-full rounded-b-lg p-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm mb-2">Nama</h3>
            <InputCustom
              placeholder={"Muhamad Sholeh Al Atsary"}
              className={
                "focus:ring-0 border-none outline-none w-full md:w-[90%] text-sm font-semibold py-2 px-4"
              }
              icon={<TbUser className="text-2xl text-[#6c7077]" />}
            />
          </div>
          <div>
            <h3 className="text-sm mb-2">Email</h3>
            <InputCustom
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
              type=""
              placeholder={"13-08-2023"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbCalendar className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
          </div>
          <div>
            <h3 className="text-sm mb-2">Jenis Kelamin</h3>
            <div className="flex gap-5 rounded-lg bg-slate-50 py-3 px-4 ">
            <TbUsersGroup className="text-3xl font-semibold text-[#6c7077]" />
            <select name="" id="" className="w-full rounded-lg bg-slate-50 outline-none">
              <option value="">Laki-Laki</option>
              <option value="">Perempuan</option>
              <option value="">Waria</option>
            </select>
            </div>
          </div>
          <div>
            <h3 className="text-sm mb-2">Status</h3>
            <div className="flex gap-5 rounded-lg bg-slate-50 py-3 px-4 ">
            <TbUserStar className="text-3xl font-semibold text-[#6c7077]" />
            <select name="" id="" className="w-full rounded-lg bg-slate-50 outline-none">
              <option value="">Santri</option>
              <option value="">Staff Pondok</option>
            </select>
            </div>
          </div>
          <div>
            <h3 className="text-sm mb-2">Angkatan</h3>
            <InputCustom
              placeholder={"16"}
              className={
                "text-sm font-semibold focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4"
              }
              icon={
                <TbVersions className="text-3xl font-semibold text-[#6c7077]" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahSantri;
