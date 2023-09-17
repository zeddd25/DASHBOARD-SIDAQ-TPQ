import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getChartHeight } from "../../utils/getChartHeight";
import { useLocation } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";

const BarChart = () => {
  const location = useLocation();
  const isPondokPage = location.pathname.includes("/dashboard/pondok");
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isStaffUstadz = location.pathname.includes("/dashboard/staff-ustadz");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const provinsi = [
    "jawa barat",
    "jawa tengah",
    "jakarta",
    "sumatra",
    "kalteng",
    "bali",
  ];
  const weeklyProgress = [20, 40, 30, 70, 60, 80, 90, 100]; // Contoh data hafalan harian perpekan (kelipatan 10)
  const monthlyProgress = [70, 105, 30, 50, 30, 20]; // Contoh data hafalan harian perpekan (kelipatan 10)

  const dataProvinsi = {
    labels: provinsi,
    datasets: [
      {
        label: "Santri by Provinsi",
        data: monthlyProgress,
        backgroundColor: ["rgba(147, 51, 234, 0.5)", "rgba(74, 222, 128, 0.5)"],
        borderColor: ["rgb(147, 51, 234)", "rgb(74, 222, 128)"],
        borderWidth: 2,
      },
    ],
  };

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
        {isPondokPage && (
            <Bar data={dataProvinsi} height={chartHeight} />
        )}
        {(isSantriPage || isUstadzPage || isStaffUstadz) && (
            <Line data={data} height={chartHeight} />
        )}
      </div>
    </div>
  );
};

const DropdownDatePicker = ({ value, onClick }) => (
  <button
    className="bg-white ring-2 ring-[#16151321] px-4 py-2 rounded-md"
    onClick={onClick}
  >
    {value}
  </button>
);

export default BarChart;
