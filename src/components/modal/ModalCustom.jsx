import { TbPhotoPlus } from "react-icons/tb";
import { InputCustom, RecapInfo } from "../ui";

const ModalCustom = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        onClick={onClose}
        className="cursor-pointer absolute inset-0 bg-black opacity-20"
      ></div>

      <div className="mx-4 ring-1 ring-[#66BF60] z-10 bg-white px-8 py-6 flex flex-col gap-4 rounded-lg shadow-md">
        <RecapInfo title={"Update Fundraising"} />
        <div>
          <h1>Jumlah Uang</h1>
          <InputCustom className={"w-full"} placeholder={"151.529,00 Rupiah"} />
          <h1>Tanggal</h1>
          <InputCustom
            className={"w-full"}
            placeholder={"tangal"}
            type="date"
          />
          <h1>Foto Bukti Transfer</h1>
          <div
            className="rounded-lg cursor-pointer"
            onClick={() => {
              document.querySelector("#input-file").click();
            }}
          >
            <InputCustom
              id={"input-file"}
              className={"hidden w-full bg-indigo-500"}
              icon={
                <TbPhotoPlus className="text-9xl text-[#5E6366] h-56 m-auto" />
              }
              type="file"
            />
          </div>
        </div>
          <div className="text-white flex justify-between gap-1">
            <button className="bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] px-12 py-2 rounded-full">Batal</button>
            <button className="bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] px-12 py-2 rounded-full">Update</button>
          </div>
      </div>
    </div>
  );
};

export default ModalCustom;
