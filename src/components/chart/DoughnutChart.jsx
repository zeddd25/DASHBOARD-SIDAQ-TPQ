import React from "react";
import { Doughnut } from "react-chartjs-2";
import { getChartHeight } from "../../utils/getChartHeight";
import { useStateContext } from "../../context/StateContext";
import { useLocation } from "react-router-dom";

const DoughnutChart = () => {
  const location = useLocation();
  const isPondokPage = location.pathname.includes("/dashboard/pondok");
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isStaffUstadz = location.pathname.includes("/dashboard/staff-ustadz");

  const { open } = useStateContext();

  const optionsPondok = [{ title: "Jenis Kelamin" }];
  const optionsSantri = [{ title: "Absensi" }];

  const dataJenisKelamin = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
          'rgba(74, 222, 128, 0.5)',
        ],
         borderColor: [
          'rgb(147, 51, 234)',
          'rgb(74, 222, 128)',
        ],
        borderWidth: 2 // Warna untuk setiap sektor
      },
    ],
  };

  const dataAbsensi = {
    labels: ["Alpha", "Sakit", "Izin"],
    datasets: [
      {
        data: [10, 5, 3], // Contoh data Absensi (jumlah siswa)
        backgroundColor: [
          'rgba(147, 51, 234, 0.5)',
          'rgba(74, 222, 128, 0.5)',
          'rgba(249, 148, 148, 0.5)',
        ],
         borderColor: [
          'rgb(147, 51, 234)',
          'rgba(74, 222, 128)',
          'rgb(249, 148, 148)',
        ],
        borderWidth: 2 // Warna untuk setiap sektor

      },
    ],
  };

  const chartHeight = getChartHeight();

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
            <Doughnut
              data={dataJenisKelamin}
              height={chartHeight}
              className="mx-24 m-auto py-2"
            />
          </React.Fragment>
        ))}

      {(isSantriPage || isUstadzPage || isStaffUstadz) &&
        optionsSantri.map((item, i) => (
          <React.Fragment key={i}>
            <div className="ring-2 ring-[#16151321] h-[39px] rounded-t-lg pl-5 pt-2">
              {item.title}
            </div>
            <Doughnut
              data={dataAbsensi}
              height={chartHeight}
              className="mx-24 m-auto py-2"
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default DoughnutChart;
