import { ButtonCustom, InputCustom, RecapInfo } from "../../components/ui";
import { useStateContext } from "../../context/StateContext";
import InputSearch from "../../components/ui/InputSearch";

const DataSantri = () => {
  const { open } = useStateContext();

  return (
    <div
      className={`min-h-screen py-5 font-poppins ${
        open ? "md:pl-[261px]" : "md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Input Data Santri"} />
      <div className="flex flex-col w-[500px] m-auto">
        <InputSearch />
        <div className="mt-2 border border-t-[#66BF60] border-l-[#66BF60] border-r-[#66BF60] w-full rounded-t-lg p-3 font-semibold tracking-wider">
          <h1>Amal sholeh</h1>
        </div>
        <div className="border border-[#66BF60] w-full rounded-b-lg p-4 flex flex-wrap justify-between gap-4">

        <div>
        <h3 className="mb-2">Hafalan</h3>
        <select name="" id="" className="ring-1 ring-[#66BF60] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">27 Juz</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Mutqin</h3>
        <select name="" id="" className="ring-1 ring-[#66BF60] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">20 Juz</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Kedisplinan</h3>
        <select name="" id="" className="ring-1 ring-[#66BF60] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>


        <div className="w-full">
        <h3 className="mb-2">Amanah</h3>
        <select name="" id="" className="ring-1 ring-[#66BF60] bg-slate-50 w-full py-2 px-1 rounded-lg outline-none">
            <option value="">DKM MASJID</option>
        </select>
        </div>

        <div className="w-full">
        <h3 className="mb-2">Fundraising</h3>
        <InputCustom 
        placeholder={"Jumlah Uang Tunai"}
        className={"bg-slate-50"}
        />
        </div>
        </div>
        <ButtonCustom
            value={"Kirimkan"}
            type="submit"
            className={
              "bg-gradient-to-r from-[#2FBFE7] to-[#66BF60] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-l hover:from-[#2FBFE7] hover:to-[#66BF60]"
            }
          />
      </div>
    </div>
  );
};

export default DataSantri;
