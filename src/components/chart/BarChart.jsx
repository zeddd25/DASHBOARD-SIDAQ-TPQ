import React from "react";  
import { Bar } from "react-chartjs-2";
import { barChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";
import { useLocation } from "react-router-dom";

const BarChart = () => {
  const location = useLocation();
  const isPondokPage = location.pathname.includes("/dashboard/pondok");
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isStaffUstadz = location.pathname.includes("/dashboard/staff-ustadz");

  const { open } = useStateContext();

  const optionsPondok = [{ title: "Divisi Santri" }];
  const optionsSantri = [{ title: "Amal Yaumi" }];

  const dataDivisi = {
    labels: ["Programmer", "Multimedia", "Marketing", "Manajer"],
    datasets: [
      {
        label: "Divisi",
        data: [40, 50, 60, 70], // Contoh nilai Divisi Santri (kelipatan 10)
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
          'rgba(74, 222, 128, 0.5)',
        ],
         borderColor: [
          'rgb(147, 51, 234)',
          'rgb(74, 222, 128)',
        ],
        borderWidth: 2 // Warna batang
      },
    ],
  };

  const dataAmalYaumi = {
    labels: ["Tahajud", "ODOJ", "STW", "Majelis"],
    datasets: [
      {
        label: "Amal Yaumi",
        data: [80, 70, 90, 85], // Contoh nilai Amal Yaumi (kelipatan 10)
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
          'rgba(74, 222, 128, 0.5)',
        ],
         borderColor: [
          'rgb(147, 51, 234)',
          'rgb(74, 222, 128)',
        ],
        borderWidth: 2 // Warna batang
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
      {isPondokPage &&
        optionsPondok.map((item, i) => (
          <React.Fragment key={i}>
            <div
              className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2"
            >
              {item.title}
            </div>
            <Bar
              data={dataDivisi}
              options={options}
              height={chartHeight}
              className="mx-4 m-auto py-2"
            />
          </React.Fragment>
        ))}

      {(isSantriPage || isUstadzPage || isStaffUstadz) &&
        optionsSantri.map((item, i) => (
          <React.Fragment key={i}>
            <div
              className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2"
            >
              {item.title}
            </div>
            <Bar
              data={dataAmalYaumi}
              options={options}
              height={chartHeight}
              className="mx-4 m-auto py-2"
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default BarChart;
