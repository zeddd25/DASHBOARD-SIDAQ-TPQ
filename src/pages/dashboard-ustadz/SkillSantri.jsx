import { ButtonCustom, InputCustom, RecapInfo } from "../../components/ui"
import InputSearch from "../../components/ui/InputSearch"
import { useStateContext } from "../../context/StateContext";

const SkillSantri = () => {
  const { open } = useStateContext();

  return (
    <div
      className={`min-h-screen py-5 font-poppins ${
        open ? "md:pl-[261px]" : "md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Input Skill Santri"} />
      <div className="flex flex-col w-[500px] m-auto">
        <InputSearch />
        <div className="mt-2 border border-t-[#4ade80] border-l-[#4ade80] border-r-[#4ade80] w-full rounded-t-lg p-3 font-semibold tracking-wider">
          <h1>Kemampuan</h1>
        </div>
        <div className="border border-[#4ade80] w-full rounded-b-lg p-4 flex flex-wrap gap-4">

        <div>
        <h3 className="mb-2">Khidmat</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">70</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Leadership</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">75</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Enterpreneur</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Speaking</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Operation</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>
        
        <div>
        <h3 className="mb-2">Mengajar</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Admiristation</h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>

        <div>
        <h3 className="mb-2">Hafalan </h3>
        <select name="" id="" className="ring-1 ring-[#4ade80] bg-slate-50 w-32 py-2 px-1 rounded-lg outline-none">
            <option value="">80</option>
        </select>
        </div>

        
        </div>
        <ButtonCustom
            value={"Kirimkan"}
            type="submit"
            className={
              "bg-gradient-to-r from-[#9333ea] to-[#4ade80] text-[20px] md:text-[23px] text-white font-[700] my-5 py-3 px-3 md:py-3 hover:bg-gradient-to-l hover:from-[#9333ea] hover:to-[#4ade80]"
            }
          />
      </div>
    </div>
  )
}

export default SkillSantri