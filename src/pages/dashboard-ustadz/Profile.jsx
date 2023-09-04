import { TbCameraFilled, TbPencil } from "react-icons/tb";
import { RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";

const Profile = () => {
  const { open } = useStateContext();

  return (
    <section
      className={`font-poppins py-5 px-5 ${
        open ? "md:pl-[261px]" : "w-full md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Profile"} />
      <div className="flex flex-col p-4 max-w-md mx-auto bg-white rounded-lg ring-1 ring-[#16151321] shadow-md ">
        <TbCameraFilled className="text-3xl text-black" />
        <div className="w-80 h-80 relative overflow-hidden rounded-full ring-1 ring-[#16151321] mx-auto">
          <img
            src="https://img.freepik.com/premium-vector/round-avatar-portrait-standing-elementary-student-muslim-boy-flat-style_768258-1765.jpg?w=826"

            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        <div className="text-[#151515] font-bold flex flex-col  value">
          <div>
            <h1>Nama :</h1>
            <h2>Ustadz Muhamad Sholeh Al Atsary</h2>
            <h1>Email :</h1>
            <h2>MuhamadSholeh@gmail.com</h2>
            <h1>Kata Sandi :</h1>
            <h2>********</h2>
            <h1>Tanggal Lahir :</h1>
            <h2>12-10-1994</h2>
          </div>
          <div>
            <button className="text-[#66BF60] ring-1 ring-[#66BF60] flex items-center gap-2 py-4 px-5 rounded-lg mt-4">
              <TbPencil className="text-xl" />
              EDIT PROFILE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
