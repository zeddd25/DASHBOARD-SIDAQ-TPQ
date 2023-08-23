import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const RadarChart = () => {
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
        max: 100,
      },
    },
  };

  return (
    <div className="ring-2 ring-[#16151321] shadow-md w-full lg:w-[514px] h-[347px] my-4 rounded-lg">
      <div className="ring-2 ring-[#16151321]  tracking-wide h-[39px] rounded-t-lg pl-5 pt-2">
        Kemampuan
      </div>
      <Radar data={data} options={options} width={325} className="m-auto" />
    </div>
  );
};

export default RadarChart;
