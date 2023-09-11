import React from "react";
import { Bar, Radar } from "react-chartjs-2";
import { radarChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";
import { useLocation } from "react-router-dom";

const RadarChart = () => {
  const location = useLocation();
  const isPondokPage = location.pathname.includes("/dashboard/pondok");
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isStaffUstadz = location.pathname.includes("/dashboard/staff-ustadz");

  const { open } = useStateContext();

  const optionsPondok = [{ title: "Angkatan" }];
  const optionsSantri = [{ title: "Kemampuan" }];

  const dataAngkatan = {
    labels: ["14", "15", "16", "17", "18"],
    datasets: [
      {
        label: "Angkatan",
        data: [40, 50, 60, 70, 40], // Contoh nilai Divisi Santri (kelipatan 10)
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
          'rgba(74, 222, 128, 0.5)',
        ],
        borderColor: [
          'rgb(147, 51, 234)',
          'rgb(74, 222, 128)',
        ],
        borderWidth: 2
      },
    ],
  };

  const dataKemampuan = {
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
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
        ],
         borderColor: [
          'rgb(147, 51, 234)',
        ],
        borderWidth: 2 // Warna untuk setiap sektor
      },
    ],
  };

  const options = {
    indexAxis: "x", // Menyatakan orientasi batang ke vertikal (menyamping)
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

  const optionsRadar = {
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
      {isPondokPage &&
        optionsPondok.map((item, i) => (
          <React.Fragment key={i}>
            <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
              {item.title}
            </div>
            <Bar
              data={dataAngkatan}
              options={options}
              height={chartHeight}
              className="mx-4 m-auto py-2"
            />
          </React.Fragment>
        ))}

      {(isSantriPage || isUstadzPage || isStaffUstadz) &&
        optionsSantri.map((item, i) => (
          <React.Fragment key={i}>
            <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
              {item.title}
            </div>
            <Radar
              data={dataKemampuan}
              options={optionsRadar}
              height={chartHeight}
              className="mx-24 m-auto py-2"
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default RadarChart;
