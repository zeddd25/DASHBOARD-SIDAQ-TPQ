import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { getChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";

const DoughnutChart = () => {
  const { open } = useStateContext();

  const data = {
    labels: ["Alpha", "Sakit", "Izin"],
    datasets: [
      {
        data: [10, 5, 3], // Contoh data Absensi (jumlah siswa)
        backgroundColor: ["#F99494", "#2FBFE7", "#BAEDBD"], // Warna untuk setiap sektor
      },
    ],
  };

  const chartHeight = getChartHeight();

  return (
    <div 
    className={`ring-2 ring-[#16151321] shadow-md w-full lg:w-[536px] my-4 rounded-lg ${
      open ? "w-full lg:w-[536px]" : "w-full lg:w-[595px]"
    } duration-500`}
    >
      <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
        Absensi
      </div>
      <Doughnut data={data} height={chartHeight} className="mx-4 m-auto py-2 lg:m-auto" />
    </div>
  );
};

export default DoughnutChart;
