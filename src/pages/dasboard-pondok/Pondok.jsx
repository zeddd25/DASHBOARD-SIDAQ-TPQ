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
import InputSearch from "../../components/ui/InputSearch";
import SantriData from "./SantriData";

const Pondok = () => {
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const { open } = useStateContext();

  return (
    <>
      <div
        className={`min-h-screen w-full font-poppins m-auto ${
          open ? "max-w-[1930px] md:pl-[241px]" : "w-full md:pl-16"
        } duration-500`}
      >
        <main>
          <div className="w-full px-4 flex flex-col gap-4 mt-3">
            <div>
              <h1 className="text-black text-2xl lg:text-4xl font-bold leading-snug">
                {" "}
                <span className="text-2xl font-thin">
                  Assalamualaikum,👋🏻
                </span>{" "}
                <br />
                Masjid Pemuda Peradaban
              </h1>
            </div>
            <div className="w-full">
              <RecapInfo title={"Rekapan"} />
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:justify-start lg:gap-[10.5px]">
                <CardData
                  title={"Ustadz"}
                  icon={<img src="../src/assets/images/ustadz.png" />}
                  Information={"33"}
                />
                <CardData
                  title={"Santri"}
                  icon={
                    <img src="../src/assets/images/santri.png" alt="icon" />
                  }
                  Information={"102"}
                />
                <CardData
                  title={"Bangunan"}
                  icon={
                    <img src="../src/assets/images/bangunan.png" alt="icon" />
                  }
                  Information={"7"}
                />
                <CardData
                  title={"Fundraising"}
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
                <CardData
                  title={"Saldo"}
                  icon={<img src="../src/assets/images/saldo.png" alt="icon" />}
                  Information={"22.251.529,00 Rupiah"}
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

export default Pondok;
