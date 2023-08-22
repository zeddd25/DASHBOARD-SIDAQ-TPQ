import Sidebar from "../../components/ui/Sidebar";
import { useStateContext } from "../../context/StateContext";
import Footer from "../../components/ui/Footer";
import BarChart from "../../components/chart/BarChart";
import DoughnutChart from "../../components/chart/DoughnutChart";
import LineChart from "../../components/chart/LineChart";
import RadarChart from "../../components/chart/RadarChart";
import CardData from "../../components/ui/CardData";
import RecapInfo from "../../components/ui/RecapInfo";
import Header from "../../components/ui/Header";

const Santri = () => {
  const { open } = useStateContext();

  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main
        className={`w-full font-poppins ${
          open ? "w-[1664px] pl-[241px]" : "w-full pl-12"
        } transition-all`}
      >
        <Header />
        <div className="w-full px-12 flex flex-col gap-4 mt-20">
          <div>
            <h1 className="text-black text-4xl font-bold leading-snug">
              {" "}
              <span className="text-2xl font-thin">
                Assalamualaikum,👋🏻
              </span>{" "}
              <br /> Andaru Danuarta Indrawan
            </h1>
          </div>
          <div className="w-full">
            <RecapInfo />
            <div className=" flex justify-between">
              <CardData
                title={"Amanah"}
                icon={<img src="../src/assets/images/amanah.png" />}
                Information={"BENDAHARA DKM"}
              />
              <CardData
                title={"Kedisplinan"}
                icon={
                  <img src="../src/assets/images/kedisiplinan.png" alt="" />
                }
                Information={"90"}
              />
              <CardData
                title={"Jumlah Hafalan"}
                icon={<img src="../src/assets/images/hafalan.png" alt="" />}
                Information={"29 JUZ"}
              />
              <CardData
                title={"Mutqin"}
                icon={<img src="../src/assets/images/mutqin.png" alt="" />}
                Information={"15 JUZ"}
              />
              <CardData
                title={"Fundraising"}
                icon={<img src="../src/assets/images/Fundraising.png" alt="" />}
                Information={"151.529,00 Rupiah"}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <LineChart />
            <div className="flex justify-between">
              <RadarChart />
              <BarChart />
              <DoughnutChart />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Santri;
