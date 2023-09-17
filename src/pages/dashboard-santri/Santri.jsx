import { useStateContext } from "../../context/StateContext";
import {
  BarChart,
  DoughnutChart,
  LineChart,
  RadarChart,
} from "../../components/chart";
import { TbEdit } from "react-icons/tb";
import { CardData, RecapInfo } from "../../components/ui";
import ModalCustom from "../../components/modal/ModalCustom";
import { useState } from "react";

const Santri = () => {
  const [showModal, setShowModal] = useState(false);

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
          open ? "max-w-[1930px] md:pl-[241px]" : "w-full md:pl-16"
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
                <h1>{nameUser}</h1>
              </h1>
            </div>
            <div className="w-full">
              <RecapInfo title={"Rekapan Anda"} />
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:justify-start lg:gap-[10.5px]">
                <CardData
                  title={"Amanah"}
                  icon={<img src="../src/assets/images/amanah.svg" />}
                  Information={"BENDAHARA DKM"}
                />
                <CardData
                  title={"Kedisplinan"}
                  icon={
                    <img
                      src="../src/assets/images/kedisiplinan.svg"
                      alt="icon"
                    />
                  }
                  Information={"90"}
                />
                <CardData
                  title={"Jumlah Hafalan"}
                  icon={
                    <img src="../src/assets/images/hafalan.svg" alt="icon" />
                  }
                  Information={"29 JUZ"}
                />
                <CardData
                  title={"Mutqin"}
                  icon={
                    <img src="../src/assets/images/mutqin.svg" alt="icon" />
                  }
                  Information={"15 JUZ"}
                />
                <CardData
                  title={"Fundraising"}
                  icon={
                    <img
                      src="../src/assets/images/fundraising.svg"
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

export default Santri;
