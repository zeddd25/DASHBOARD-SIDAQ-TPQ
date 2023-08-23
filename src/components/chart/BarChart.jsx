import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["Tahajud", "ODOJ", "STW", "Majelis"],
    datasets: [
      {
        label: "Amal Yaumi",
        data: [80, 70, 90, 85], // Contoh nilai Amal Yaumi (kelipatan 10)
        backgroundColor: "#BAEDBD", // Warna batang
      },
    ],
  };

  const options = {
    indexAxis: "y", // Menyatakan orientasi batang ke vertikal (menyamping)
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="ring-2 ring-[#16151321] shadow-md w-full lg:w-[514px] h-[347px] my-4 rounded-lg">
      <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
        Amal Yaumi
      </div>
      <Bar data={data} options={options} height={190} className="mx-4 m-auto" />
    </div>
  );
};

export default BarChart;
