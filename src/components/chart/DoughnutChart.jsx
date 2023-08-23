import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["Alpha", "Sakit", "Izin"],
    datasets: [
      {
        data: [10, 5, 3], // Contoh data Absensi (jumlah siswa)
        backgroundColor: ["#F99494", "#2FBFE7", "#BAEDBD"], // Warna untuk setiap sektor
      },
    ],
  };

  return (
    <div className="ring-2 ring-[#16151321] shadow-md w-full lg:w-[514px] h-[347px] my-4 rounded-lg">
      <div className="ring-2 ring-[#16151321]  h-[39px] rounded-t-lg pl-5 pt-2">
        Absensi
      </div>
      <Doughnut data={data} className="m-auto" />
    </div>
  );
};

export default DoughnutChart;
