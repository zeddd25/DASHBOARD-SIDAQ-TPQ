import { RiLogoutCircleRLine } from "react-icons/ri";
import ButtonCustom from "./ButtonCustom";
import { useStateContext } from "../../context/StateContext";

const Header = ({ handleLogoutClick }) => {
  const { open } = useStateContext();

  return (
    <div
      className={`font-poppins bg-[#FCFAFA] w-full h-[80px] flex items-center justify-between px-4 ${
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
          " bg-[#66BF60] flex justify-evenly items-center text-white text-sm font-semibold w-32 h-10 rounded-lg hover:bg-[#66bf60da]"
        }
      />
    </div>
  );
};

export default Header;
