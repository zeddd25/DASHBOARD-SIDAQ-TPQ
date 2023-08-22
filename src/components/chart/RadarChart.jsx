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
        data: [70, 80, 60, 75, 85, 90], // Contoh nilai kemampuan (kelipatan 10)
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
    <div className="ring-2 ring-[#16151321] shadow-md w-[512px] h-[347px] my-4 rounded-lg">
      <div className="ring-2 ring-[#16151321]  tracking-wide h-[39px] rounded-t-lg p-2">
        Kemampuan
      </div>
      <Radar data={data} options={options} className="m-auto mt-4" />
    </div>
  );
};

export default RadarChart;
