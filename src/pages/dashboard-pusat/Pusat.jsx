import { useStateContext } from "../../context/StateContext";
import {
  BarChart,
  DoughnutChart,
  LineChart,
  RadarChart,
} from "../../components/chart";
import { TbEdit } from "react-icons/tb";
import { CardData, RecapInfo, } from "../../components/ui";
import ModalCustom from "../../components/modal/ModalCustom";
import { useState } from "react";
import InputSearch from "../../components/ui/InputSearch";


const Pusat = () => {
  const [showModal, setShowModal] = useState(false)
  
  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const { open } = useStateContext();
  const nameUser = localStorage.getItem("name");

  return (
    <>
      <div
        className={`min-h-screen w-full font-poppins m-auto ${
          open ? "max-w-[1930px] md:pl-[241px]": "w-full md:pl-16"
        } duration-500`}
        >
        <main>
          <div className="w-full px-4 flex flex-col gap-4 mt-5">
          <div>
              <h1 className="text-black text-2xl lg:text-4xl font-bold leading-snug">
                {" "}
                <div className="flex gap-2 text-2xl font-thin">
                  <h1>Assalamualaikum,</h1>
                  <div>
                    <img src="../src/assets/images/tangan.svg" alt="icon" />
                  </div>
                </div>{" "}
                <h1>Admin Pusat {nameUser}</h1>
              </h1>
            </div>
            <div className="w-full">
              <div className="w-full  items-center gap-2">
              <div className="w-full mb-3">
                <InputSearch />
              </div>
              <RecapInfo title={"Rekapan Masjid"} />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:justify-start lg:gap-[10.5px]">
                <CardData
                  title={"Masjid"}
                  icon={<img src="../src/assets/images/masjid.svg" />}
                  Information={"20"}
                />
                <CardData
                  title={"Ustadz"}
                  icon={
                    <img
                      src="../src/assets/images/ustadz.svg"
                      alt="icon"
                    />
                  }
                  Information={"90"}
                />
                <CardData
                  title={"Santri"}
                  icon={
                    <img src="../src/assets/images/santri.svg" alt="icon" />
                  }
                  Information={"509"}
                />
                <CardData
                  title={"Fundraising"}
                  icon={
                    <img src="../src/assets/images/fundraising.svg" alt="icon" />
                  }
                  Information={"151.529,00 Rupiah"}
                />
                <CardData
                  title={""}
                  icon={
                    <img
                      src="../src/assets/images/Fundraising.png"
                      alt="icon"
                    />
                  }
                  edit={
                    <div className="w-full flex justify-end">
                      <TbEdit
                        className="text-3xl cursor-pointer"
                        onClick={handleUpdate}
                      />
                    </div>
                  }
                  Information={"151.529,00 Rupiah"}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <LineChart />
              <div className="flex flex-wrap gap-4 justify-center lg:gap-[11px]">
                <RadarChart />
                <BarChart />
                <DoughnutChart />
              </div>
                {showModal && <ModalCustom onClose={handleCancel} />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Pusat;
