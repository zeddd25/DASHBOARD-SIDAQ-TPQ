import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { radarChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";

const RadarChart = () => {
  const { open } = useStateContext();

  const data = {
    labels: [
      "Mengajar",
      "Khidmat",
      "Entrepreneur",
      "Leadership",
      "Speking",
      "Hafalan Quran",
    ],
    datasets: [
      {
        label: "Kemampuan",
        data: [70, 80, 60, 75, 85, 100], // Contoh nilai kemampuan (kelipatan 10)
        backgroundColor: "rgba(47, 191, 231, 0.2)", // Warna area
        borderColor: "#2FBFE7", // Warna garis batas
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 10, // Nilai skala kelipatan 10
        // max: 100,
      },
    },
  };

  const chartHeight = radarChartHeight();

  return (
    <div
      className={`ring-2 ring-[#16151321] shadow-md w-full lg:w-[536px] my-4 rounded-lg ${
        open ? "w-full lg:w-[536px]" : "w-full lg:w-[595px]"
      } duration-500`}
    >
      <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
        Kemampuan
      </div>
      <Radar
        data={data}
        options={options}
        height={chartHeight}
        className="mx-24 m-auto py-2"
      />
    </div>
  );
};

export default RadarChart;
