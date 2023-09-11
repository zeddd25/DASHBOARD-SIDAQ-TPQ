import React, { useState } from "react";
import { TbHome, TbUser, TbSettings, TbUserPlus, TbTablePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Di sini Anda dapat menambahkan logika navigasi sesuai dengan tab yang dipilih
  };

  // santri
  const isSantriPage = location.pathname.includes("/dashboard/santri");
  const isSantriProfilePage = location.pathname.includes(
    "/dashboard/profile/santri"
  );
  const isSantriPengaturanPage = location.pathname.includes(
    "/dashboard/pengaturan/santri"
  );

  // ustadz
  const isUstadzPage = location.pathname.includes("/dashboard/ustadz");
  const isUstadzProfilePage = location.pathname.includes(
    "/dashboard/profile/ustadz"
  );
  const isUstadzDataSantriPage = location.pathname.includes(
    "/dashboard/input-data-santri/ustadz"
  );
  const isUstadzSkillSantriPage = location.pathname.includes(
    "/dashboard/input-skill-santri/ustadz"
  );
  const isUstadzTambahSantriPage = location.pathname.includes(
    "/dashboard/input-tambah/ustadz"
  );

  const menusSantri = [
    { link: "/dashboard/santri", icon: TbHome },
    { link: "/dashboard/profile/santri", icon: TbUser },
    { link: "/dashboard/pengaturan/santri", icon: TbSettings },
  ];

  const menusUstadz = [
    { name: "dashboard", link: "/dashboard/ustadz", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/ustadz", icon: TbUser },
    {
      name: "Tambah Santri",
      link: "/dashboard/input-tambah/ustadz",
      icon: TbUserPlus,
      gap: true,
    },
    {
      name: "Input Data Santri",
      link: "/dashboard/input-data-santri/ustadz",
      icon: TbTablePlus,
    },
    {
      name: "Input Skill Santri",
      link: "/dashboard/input-skill-santri/ustadz",
      icon: TbTablePlus,
    },
  ];

  return (
    <div className="font-poppins bg-gradient-to-r from-green-400 to-purple-600 p-2 fixed bottom-0 left-0 w-full flex justify-between md:hidden">
      {(isSantriPage || isSantriProfilePage || isSantriPengaturanPage) &&
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
    </div>
  );
};

export default BottomBar;
