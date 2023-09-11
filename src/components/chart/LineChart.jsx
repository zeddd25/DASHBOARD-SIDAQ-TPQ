import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getChartHeight } from "../../utils/getChartHeight";

const LineChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const weeklyProgress = [20, 40, 30, 70, 60, 80, 90, 100]; // Contoh data hafalan harian perpekan (kelipatan 10)

  const data = {
    labels: days,
    datasets: [
      {
        label: "Progress Hafalan Harian",
        data: weeklyProgress,
        fill: false,
        borderColor: "#9333ea",
        tension: 0.1,
      },
    ],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Di sini Anda dapat mengganti data harian berdasarkan tanggal yang dipilih
    // Misalnya, mengambil data dari backend berdasarkan tanggal yang dipilih.
  };

  const chartHeight = getChartHeight();

  return (
    <div className="flex ring-2 ring-[#16151321] shadow-md rounded-md mt-4">
      <div className="w-full flex flex-col items-start p-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          customInput={<DropdownDatePicker />}
        />
        <div className="w-full mt-8 flex justify-center">
        <Line data={data} height={chartHeight} />
        </div>
      </div>
    </div>
  );
};

const DropdownDatePicker = ({ value, onClick }) => (
  <button className="bg-white ring-2 ring-[#16151321] px-4 py-2 rounded-md" onClick={onClick}>
    {value}
  </button>
);

export default LineChart;
