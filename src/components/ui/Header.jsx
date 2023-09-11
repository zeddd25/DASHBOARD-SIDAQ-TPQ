import { RiLogoutCircleRLine } from "react-icons/ri";
import ButtonCustom from "./ButtonCustom";
import { useStateContext } from "../../context/StateContext";

const Header = ({ handleLogoutClick }) => {
  const { open } = useStateContext();

  return (
    <div
      className={`font-poppins bg-[#FCFAFA] w-full h-[80px] lg:h-[95px] flex items-center justify-between px-4 ${
        open ? "md:pl-[260px]" : "md:pl-20"
      } duration-500`}
    >
      <div>
        <h1 className="text-[#424242] text-xs lg:text-sm">
          <span className="font-semibold">Masjid Sumber Solusi</span> <br /> di
          setiap lini kehidupan Permasalahan Pendidikan, Ekonomi, Sosial,
          Budaya, bahkan Teknologi.
        </h1>
      </div>

      {/* <div> */}
      <ButtonCustom
        value={"Logout"}
        icon={<RiLogoutCircleRLine className="hidden text-xl md:block" />}
        eventOnClick={handleLogoutClick}
        className={
          " bg-green-400 flex justify-evenly items-center text-white text-sm w-32 h-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#4ade80b4]"
        }
      />
    </div>
  );
};

export default Header;
