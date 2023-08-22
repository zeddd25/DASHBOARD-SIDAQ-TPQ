import { RiLogoutCircleRLine } from "react-icons/ri";
import ModalLogout from "../modal/ModalLogout";
import { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="font-poppins bg-[#FCFAFA] w-full h-[95px] flex items-center justify-between px-12">
      <div>
        <h1 className="text-[#424242] text-sm">
          <span className="font-semibold">Masjid Sumber Solusi</span> <br /> di
          setiap lini kehidupan Permasalahan Pendidikan, Ekonomi, Sosial,
          Budaya, bahkan Teknologi.
        </h1>
      </div>

      <div>
        <button
          className="bg-[#66BF60] flex justify-evenly items-center text-white text-sm font-semibold w-32 h-10 rounded-lg hover:bg-[#66bf60da]"
          onClick={handleLogoutClick}
        >
          <RiLogoutCircleRLine className="text-xl" />
          Logout
        </button>
      </div>
      {showModal && <ModalLogout onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
