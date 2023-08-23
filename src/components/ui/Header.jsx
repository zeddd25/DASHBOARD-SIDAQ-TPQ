import { RiLogoutCircleRLine } from "react-icons/ri";
import ButtonCustom from "./ButtonCustom";

const Header = ({ handleLogoutClick }) => {
  return (
    <div className="font-poppins bg-[#FCFAFA] w-full h-[95px] flex items-center justify-between px-12">
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
        icon={<RiLogoutCircleRLine className="text-xl" />}
        eventOnClick={handleLogoutClick}
        className={
          "bg-[#66BF60] flex justify-evenly items-center text-white text-sm font-semibold w-32 h-10 rounded-lg hover:bg-[#66bf60da]"
        }
      />
    </div>
  );
};

export default Header;
