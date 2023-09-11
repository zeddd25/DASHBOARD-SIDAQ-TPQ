import { Link } from "react-router-dom";

const ModalLogout = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div onClick={onClose} className="cursor-pointer absolute inset-0 bg-black opacity-20"></div>
      <div className="ring-1 ring-green-400 z-10 bg-white p-8 h-[279px] flex flex-col justify-between rounded-lg shadow-md">
        {/* Konten modal di sini */}
        <div>
        <h1 className="text-2xl font-semibold mb-4">Konfirmasi Logout</h1>
        <p className="text-gray-600">
          Apakah Anda yakin ingin keluar dari akun Anda?
        </p>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="bg-green-400 text-white hover:bg-[#4ade80b4] w-full transition-all duration-300 ease-in-out py-3 rounded-lg">
          <Link to={"/"}>
            Logout
          </Link>
          </button>
          <button onClick={onClose} className="ring-1 ring-green-400 transition-all duration-300 ease-in-out text-green-400 hover:bg-green-400 hover:text-white w-full  py-3 rounded-lg">Batal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
