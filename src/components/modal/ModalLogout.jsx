import { Link } from "react-router-dom";

const ModalLogout = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div onClick={onClose} className="cursor-pointer absolute inset-0 bg-black opacity-20"></div>
      <div className="ring-1 ring-[#66BF60] z-10 bg-white p-8 h-[279px] flex flex-col justify-between rounded-lg shadow-md">
        {/* Konten modal di sini */}
        <div>
        <h1 className="text-2xl font-semibold mb-4">Konfirmasi Logout</h1>
        <p className="text-gray-600">
          Apakah Anda yakin ingin keluar dari akun Anda?
        </p>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="bg-[#66BF60] text-white hover:bg-[#66bf60da] w-full  py-3 rounded-lg">
          <Link to={"/"}>
            Logout
          </Link>
          </button>
          <button onClick={onClose} className="ring-1 ring-[#66BF60] text-[#66BF60] w-full  py-3 rounded-lg">Batal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
