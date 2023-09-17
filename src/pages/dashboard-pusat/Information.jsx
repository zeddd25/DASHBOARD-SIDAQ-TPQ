import { TbBuildingCottage, TbUserPlus } from "react-icons/tb";
import { useStateContext } from "../../context/StateContext";

const Information = () => {
  const { open } = useStateContext();

  return (
    <>
      <div
        className={`text-[#4F4F4F] h-screen w-full font-poppins m-auto ${
          open ? "max-w-[1930px] md:pl-[241px]" : "w-full md:pl-16"
        } duration-500`}
      >
        <div className="px-4 lg:w-full lg:flex lg:flex-col lg:items-center">
          <div className="font-semibold mt-[106px]">
            <h1 className="text-4xl">
              Selamat datang di dashboard Anda, Jaringan TPQ Sidaq{" "}
            </h1>
            <h3 className="text-lg mt-3">Sidaq/sidaq.org/@sidaq.id</h3>
          </div>

          <div className="font-medium flex flex-col gap-6 mt-16">
            <div className="flex gap-6">
              <TbUserPlus className="bg-[#EFF3FA] rounded-xl p-2 text-5xl text-primary" />
              <div className="flex flex-col gap-3 justify-center w-[540px]">
                <h1 className="text-2xl font-medium">Tambahkan admin lain</h1>
                <h6 className="text-sm font-normal">
                  Mewujudkan pengelolaan masjid yang professional dan
                  bertanggungjawab serta Mengembangkan program dan syiar Islam.
                </h6>
              </div>
            </div>

            <div className="flex gap-6">
              <TbBuildingCottage className="bg-[#EFF3FA] rounded-xl p-2 text-5xl text-primary" />
              <div className="flex flex-col gap-3 justify-center w-[540px]">
                <h1 className="text-2xl font-medium">Tambahkan Masjid</h1>
                <h6 className="text-sm font-normal">
                  Mewujudkan pengelolaan masjid yang professional dan
                  bertanggungjawab serta Mengembangkan program dan syiar Islam.
                </h6>
              </div>
            </div>

            <div className="flex gap-6">
              <TbUserPlus className="bg-[#EFF3FA] rounded-xl p-2 text-5xl text-primary" />
              <div className="flex flex-col gap-3 justify-center w-[540px]">
                <h1 className="text-2xl font-medium">Tambahkan Santri</h1>
                <h6 className="text-sm font-normal">
                  Mewujudkan pengelolaan masjid yang professional dan
                  bertanggungjawab serta Mengembangkan program dan syiar Islam.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
