import { useStateContext } from "../../context/StateContext";
import {
  BarChart,
  DoughnutChart,
  LineChart,
  RadarChart,
} from "../../components/chart";
import ModalLogout from "../../components/modal/ModalLogout";
import { TbEdit } from "react-icons/tb";
import { useState } from "react";
import {
  CardData,
  Footer,
  Header,
  RecapInfo,
  Sidebar,
} from "../../components/ui";

const Santri = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const { open } = useStateContext();

  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <div
        className={`min-h-screen w-full font-poppins m-auto ${
          open ? "max-w-[1930px] pl-[241px]" : "w-full pl-12"
        } duration-500`}
      >
        <main>
          <Header handleLogoutClick={handleLogoutClick} />
          <div className="w-full px-12 flex flex-col gap-4 mt-20">
            <div>
              <h1 className="text-black text-2xl lg:text-4xl font-bold leading-snug">
                {" "}
                <span className="text-2xl font-thin">
                  Assalamualaikum,👋🏻
                </span>{" "}
                <br /> Andaru Danuarta Indrawan
              </h1>
            </div>
            <div className="w-full">
              <RecapInfo />
              <div className="flex flex-wrap gap-4 lg:justify-start lg:gap-[10.7px]">
                <CardData
                  title={"Amanah"}
                  icon={<img src="../src/assets/images/amanah.png" />}
                  Information={"BENDAHARA DKM"}
                />
                <CardData
                  title={"Kedisplinan"}
                  icon={
                    <img
                      src="../src/assets/images/kedisiplinan.png"
                      alt="icon"
                    />
                  }
                  Information={"90"}
                />
                <CardData
                  title={"Jumlah Hafalan"}
                  icon={
                    <img src="../src/assets/images/hafalan.png" alt="icon" />
                  }
                  Information={"29 JUZ"}
                />
                <CardData
                  title={"Mutqin"}
                  icon={
                    <img src="../src/assets/images/mutqin.png" alt="icon" />
                  }
                  Information={"15 JUZ"}
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
                    <TbEdit className="text-[26px] lg:ml-28 cursor-pointer" />
                  }
                  Information={"151.529,00 Rupiah"}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <LineChart />
              <div className="flex flex-wrap gap-4 justify-center  lg:gap-[10.7px]">
                <RadarChart />
                <BarChart />
                <DoughnutChart />
              </div>
            </div>
          </div>
          {showModal && <ModalLogout onClose={handleCloseModal} />}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Santri;
