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
        <div className="relative w-80 h-80 mx-auto overflow-hidden rounded-full ring-1 ring-[#16151321]">
          <img
            src="https://img.freepik.com/premium-vector/round-avatar-portrait-standing-elementary-student-muslim-boy-flat-style_768258-1765.jpg?w=826"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <TbCameraFilled className="text-4xl text-white opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>

        <div className="text-[#151515] font-bold mt-6">
          <div className="mb-4">
            <h1 className="text-[#66BF60] text-lg font-semibold">Nama :</h1>
            <h2 className="text-xl">Muhamad Sholeh Al Atsary</h2>
          </div>
          <div className="mb-4">
            <h1 className="text-[#66BF60] text-lg font-semibold">Email :</h1>
            <h2 className="text-xl">MuhamadSholeh@gmail.com</h2>
          </div>
          <div className="mb-4">
            <h1 className="text-[#66BF60] text-lg font-semibold">
              Kata Sandi :
            </h1>
            <h2 className="text-xl">********</h2>
          </div>
          <div className="mb-4">
            <h1 className="text-[#66BF60] text-lg font-semibold">
              Tanggal Lahir :
            </h1>
            <h2 className="text-xl">12-10-1994</h2>
          </div>
          <button className="text-white bg-[#66BF60] hover:bg-[#5CAD55] ring-1 ring-[#66BF60] ring-opacity-60 hover:ring-opacity-100 flex items-center gap-2 py-2 px-4 rounded-md mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <TbPencil className="text-xl" />
            EDIT PROFILE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
