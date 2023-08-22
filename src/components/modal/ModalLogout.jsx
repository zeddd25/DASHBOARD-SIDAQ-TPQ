
const ModalLogout = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div onClick={onClose} className="cursor-pointer absolute inset-0 bg-black opacity-20"></div>
      <div className="ring-2 ring-[#16151321] z-10 bg-white p-8 w-[496px] h-[279px] rounded-lg shadow-md">
        {/* Konten modal di sini */}
        <h1 className="text-2xl font-semibold mb-4">Konfirmasi Logout</h1>
        <p className="text-gray-600">
          Apakah Anda yakin ingin keluar dari akun Anda?
        </p>
        <div className="mt-24 flex justify-center space-x-4">
          <button className="bg-[#66BF60] text-white hover:bg-[#66bf60da]  px-[79px] py-[14px] rounded-lg">
            Logout
          </button>
          <button onClick={onClose} className="ring-2 ring-[#66BF60] text-[#66BF60] px-[79px] py-[14px] rounded-lg">Batal</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
