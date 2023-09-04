import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { barChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";

const BarChart = () => {
  const { open } = useStateContext();
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

  const chartHeight = barChartHeight();

  return (
    <div
      className={`ring-2 ring-[#16151321] shadow-md w-full lg:w-[536px] my-4 rounded-lg ${
        open ? "w-full lg:w-[536px]" : "w-full lg:w-[595px]"
      } duration-500`}
    >
      <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
        Amal Yaumi
      </div>
      <Bar
        data={data}
        options={options}
        height={chartHeight}
        className="mx-4 m-auto py-2"
      />
    </div>
  );
};

export default BarChart;
