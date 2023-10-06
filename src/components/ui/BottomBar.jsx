import React, { useState } from "react";
import {
  TbHome,
  TbUser,
  TbTablePlus,
  TbUserPlus,
  TbSettings,
  TbCategory,
  TbAlertCircle,
  TbUserBolt,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Di sini Anda dapat menambahkan logika navigasi sesuai dengan tab yang dipilih
  };

  // PUSAT
  const isPusatPage = location.pathname.includes("/dashboard/pusat");
  const isPusatProfilePage = location.pathname.includes(
    "dashboard/profile/pusat"
  );
  const isMasjidDataPage = location.pathname.includes("/data-masjid/pusat");
  const isPusatInformationPage = location.pathname.includes(
    "/dashboard/informasi/pusat"
  );

  // PONDOK
  const isPondokPage = location.pathname.includes("/dashboard/pondok");
  const isPondokProfilePage = location.pathname.includes(
    "/dashboard/profile/pondok"
  );
  const isPondokDataUstadz = location.pathname.includes(
    "/dashboard/data-ustadz/pondok"
  );
  const isPondokDataSantri = location.pathname.includes(
    "/dashboard/data-santri/pondok"
  );
  const isPondokDataKategori = location.pathname.includes(
    "/dashboard/data-Kategori/pondok"
  );

  // SANTRI
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isSantriProfilePage = location.pathname.includes(
    "/dashboard/profile/santri"
  );
  const isSantriToDoListPage = location.pathname.includes(
    "/dashboard/todolist/santri"
  );

  // USTADZ
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isUstadzProfilePage = location.pathname.includes(
    "/dashboard/profile/ustadz"
  );
  const isUstadzHafalanSantriPage = location.pathname.includes(
    "/dashboard/input-hafalan-santri/ustadz"
  );
  const isUstadzDataSantriPage = location.pathname.includes(
    "/dashboard/input-data-santri/ustadz"
  );
  const isUstadzSkillSantriPage = location.pathname.includes(
    "/dashboard/input-skill-santri/ustadz"
  );
  const isUstadzTambahSantriPage = location.pathname.includes(
    "/dashboard/input-tambah-santri/ustadz"
  );

  // STAFF USTADZ
  const isStaffUstadzPage = location.pathname.includes(
    "/dashboard/staff-ustadz"
  );
  const isStaffUstadzProfilePage = location.pathname.includes(
    "/dashboard/profile/staff-ustadz"
  );
  const isStaffUstadzAbsensiSantriPage = location.pathname.includes(
    "/dashboard/input-absensi-santri/staff-ustadz"
  );

  const menusPusat = [
    { name: "dashboard", link: "/dashboard/pusat", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/pusat", icon: TbUser },
    {
      name: "Masjid",
      link: "/dashboard/data-masjid/pusat",
      icon: TbHome,
      gap: true,
    },
    {
      name: "Informasi",
      link: "/dashboard/informasi/pusat",
      icon: TbAlertCircle,
      gapLong: true,
    },
  ];

  const menusPondok = [
    { name: "dashboard", link: "/dashboard/pondok", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/pondok", icon: TbUser },
    {
      name: "Data Ustadz",
      link: "/dashboard/data-ustadz/pondok",
      icon: TbUserBolt,
    },
    {
      name: "Data Santri",
      link: "/dashboard/data-santri/pondok",
      icon: TbUser,
    },
    {
      name: "Kategori",
      link: "/dashboard/data-Kategori/pondok",
      icon: TbCategory,
    },
  ];

  const menusSantri = [
    { link: "/dashboard/santri", icon: TbHome },
    { link: "/dashboard/profile/santri", icon: TbUser },
    { link: "/dashboard/todolist/santri", icon: TbSettings },
  ];

  const menusUstadz = [
    { name: "dashboard", link: "/dashboard/ustadz", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/ustadz", icon: TbUser },
    {
      name: "Input Data Santri",
      link: "/dashboard/input-tambah-santri/ustadz",
      icon: TbUserPlus,
    },
    {
      name: "Input Hafalan Harian",
      link: "/dashboard/input-hafalan-santri/ustadz",
      icon: TbTablePlus,
    },
    {
      name: "Input Amal Sholeh",
      link: "/dashboard/input-data-santri/ustadz",
      icon: TbTablePlus,
    },
    {
      name: "Input Skill",
      link: "/dashboard/input-skill-santri/ustadz",
      icon: TbTablePlus,
    },
  ];

  const menusStaffUstadz = [
    { name: "dashboard", link: "/dashboard/staff-ustadz", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/staff-ustadz", icon: TbUser },
    {
      name: "Input Absensi Santri",
      link: "/dashboard/input-absensi-santri/staff-ustadz",
      icon: TbTablePlus,
    },
  ];

  return (
    <div className="font-poppins bg-gradient-to-r from-green-400 to-purple-600 p-2 fixed bottom-0 left-0 w-full flex justify-between md:hidden">
      {(isPusatPage ||
        isPusatProfilePage ||
        isPusatInformationPage ||
        isMasjidDataPage) &&
        menusPusat.map((menu, i) => (
          <Link to={menu.link} key={i}>
            <button
              className={`text-white flex flex-col items-center focus:outline-none p-1 px-2 ${
                location.pathname === menu.link
                  ? "bg-[#ffffff7a] rounded-md"
                  : "text-white" // Ubah kondisi ini
              }`}
              onClick={() => handleTabClick(menu.link)} // Ubah tab yang aktif
            >
              <div>{React.createElement(menu.icon, { size: "26" })}</div>
            </button>
          </Link>
        ))}
      {(isPondokPage ||
        isPondokProfilePage ||
        isPondokDataUstadz ||
        isPondokDataSantri ||
        isPondokDataKategori) &&
        menusPondok.map((menu, i) => (
          <Link to={menu.link} key={i}>
            <button
              className={`text-white flex flex-col items-center focus:outline-none p-1 px-2 ${
                location.pathname === menu.link
                  ? "bg-[#ffffff7a] rounded-md"
                  : "text-white" // Ubah kondisi ini
              }`}
              onClick={() => handleTabClick(menu.link)} // Ubah tab yang aktif
            >
              <div>{React.createElement(menu.icon, { size: "26" })}</div>
            </button>
          </Link>
        ))}
      {(isSantriPage || isSantriProfilePage || isSantriToDoListPage) &&
        menusSantri.map((menu, i) => (
          <Link to={menu.link} key={i}>
            <button
              className={`text-white flex flex-col items-center focus:outline-none p-1 px-2 ${
                location.pathname === menu.link
                  ? "bg-[#ffffff7a] rounded-md"
                  : "text-white" // Ubah kondisi ini
              }`}
              onClick={() => handleTabClick(menu.link)} // Ubah tab yang aktif
            >
              <div>{React.createElement(menu.icon, { size: "26" })}</div>
            </button>
          </Link>
        ))}
      {(isUstadzPage ||
        isUstadzProfilePage ||
        isUstadzHafalanSantriPage ||
        isUstadzDataSantriPage ||
        isUstadzSkillSantriPage ||
        isUstadzTambahSantriPage) &&
        menusUstadz.map((menu, i) => (
          <Link to={menu.link} key={i}>
            <button
              className={`text-white flex flex-col items-center focus:outline-none p-1 px-2 ${
                location.pathname === menu.link
                  ? "bg-[#ffffff7a] rounded-md"
                  : "text-white" // Ubah kondisi ini
              }`}
              onClick={() => handleTabClick(menu.link)} // Ubah tab yang aktif
            >
              <div>{React.createElement(menu.icon, { size: "26" })}</div>
            </button>
          </Link>
        ))}
      {(isStaffUstadzPage ||
        isStaffUstadzProfilePage ||
        isStaffUstadzAbsensiSantriPage) &&
        menusStaffUstadz.map((menu, i) => (
          <Link to={menu.link} key={i}>
            <button
              className={`text-white flex flex-col items-center focus:outline-none p-1 px-2 ${
                location.pathname === menu.link
                  ? "bg-[#ffffff7a] rounded-md"
                  : "text-white" // Ubah kondisi ini
              }`}
              onClick={() => handleTabClick(menu.link)} // Ubah tab yang aktif
            >
              <div>{React.createElement(menu.icon, { size: "26" })}</div>
            </button>
          </Link>
        ))}
    </div>
  );
};

export default BottomBar;
