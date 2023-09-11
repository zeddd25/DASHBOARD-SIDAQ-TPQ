import {
  TbHome,
  TbUser,
  TbTablePlus,
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
  TbUserPlus,
  TbSettings,
  TbCategory,
} from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import React from "react";

const Sidebar = () => {
  const isActive = (link) => {
    const location = useLocation();
    return location.pathname === link;
  };
  const location = useLocation();

  // PUSAT
  const isPusatPage = location.pathname.includes("/dashboard/pusat");
  const isPusatProfilePage = location.pathname.includes(
    "dashboard/profile/pusat"
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
  const isSantriPengaturanPage = location.pathname.includes(
    "/dashboard/pengaturan/santri"
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
  ];

  const menusPondok = [
    { name: "dashboard", link: "/dashboard/pondok", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/pondok", icon: TbUser },
    {
      name: "Data Ustadz",
      link: "/dashboard/data-ustadz/pondok",
      icon: TbUser,
      gap: true,
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
    { name: "dashboard", link: "/dashboard/santri", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/santri", icon: TbUser },
    {
      name: "Pengaturan",
      link: "/dashboard/pengaturan/santri",
      icon: TbSettings,
    },
  ];

  const menusUstadz = [
    { name: "dashboard", link: "/dashboard/ustadz", icon: TbHome },
    { name: "Profile", link: "/dashboard/profile/ustadz", icon: TbUser },
    {
      name: "Input Data Santri",
      link: "/dashboard/input-tambah-santri/ustadz",
      icon: TbUserPlus,
      gap: true,
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

  let sidebarTitle = "Dashboard";

  if (isPusatPage || isPusatProfilePage) {
    sidebarTitle = "Admin Pusat";
  } else if (
    isPondokPage ||
    isPondokProfilePage ||
    isPondokDataUstadz ||
    isPondokDataSantri
  ) {
    sidebarTitle = "Masjid";
  } else if (isSantriPage || isSantriProfilePage || isSantriPengaturanPage) {
    sidebarTitle = "Santri";
  } else if (
    isUstadzPage ||
    isUstadzProfilePage ||
    isUstadzDataSantriPage ||
    isUstadzHafalanSantriPage ||
    isUstadzSkillSantriPage ||
    isUstadzTambahSantriPage
  ) {
    sidebarTitle = "Ustadz";
  } else if (isStaffUstadzPage) {
    sidebarTitle = "Staff Ustadz";
  }

  const { open, setOpen } = useStateContext();

  return (
    <section className="hidden font-poppins md:flex">
      {/* SIDEBAR */}
      <div
        className={`fixed bg-gradient-to-b from-green-400 to-purple-600 min-h-screen ${
          open ? "w-[241px]" : "w-16"
        } duration-500 text-white capitalize px-3`}
      >
        <div className="py-3 flex justify-end">
          {open ? (
            <TbLayoutSidebarLeftCollapse
              size={38}
              className="cursor-pointer bg-[#B9F6CA] hover:bg-[#69F0AE] rounded-md p-1 transition-all duration-300 ease-in-out"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <TbLayoutSidebarLeftExpand
              size={38}
              className="cursor-pointer bg-[#B9F6CA] hover:bg-[#69F0AE] rounded-md p-1 transition-all duration-300 ease-in-out"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div
          className={`overflow-hidden rounded-full m-auto ${
            open ? "w-[75px] h-[75px]" : "w-[33px] h-[33px]"
          } duration-500`}
        >
          <img src="../../src/assets/images/foto-formal.jpeg" alt="" />
        </div>

        <div
          className={`text-white font-semibold w-full text-center tracking-wide mt-2 ${
            open ? "text-lg" : "hidden"
          } duration-500`}
        >
          <h1>{sidebarTitle}</h1>
          <br />
          <hr className="h-1 text-[#FAFAFA]" />
        </div>

        <div className="mt-8 flex flex-col gap-4 relative">
          {(isPusatPage || isPusatProfilePage) &&
            menusPusat.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu.gap ? "mt-9" : "mt-2"
                } outline-green-400 h-[40px] group flex items-center text-sm gap-3.5 font-medium tracking-wide p-2 transition-all duration-300 ease-in-out ${
                  isActive(menu?.link)
                    ? "bg-[#ffffff7a]"
                    : "hover:bg-[#ffffff7a]"
                } rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}

          {(isPondokPage ||
            isPondokProfilePage ||
            isPondokDataUstadz ||
            isPondokDataSantri ||
            isPondokDataKategori) &&
            menusPondok.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu.gap ? "mt-9" : "mt-2"
                } outline-green-400 h-[40px] group flex items-center text-sm gap-3.5 font-medium tracking-wide p-2 transition-all duration-300 ease-in-out ${
                  isActive(menu?.link)
                    ? "bg-[#ffffff7a]"
                    : "hover:bg-[#ffffff7a]"
                } rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}

          {(isSantriPage || isSantriProfilePage || isSantriPengaturanPage) &&
            menusSantri.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu.gap ? "mt-9" : "mt-2"
                } outline-green-400 h-[40px] group flex items-center text-sm gap-3.5 font-medium tracking-wide p-2 transition-all duration-300 ease-in-out ${
                  isActive(menu?.link)
                    ? "bg-[#ffffff7a]"
                    : "hover:bg-[#ffffff7a]"
                } rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}

          {(isUstadzPage ||
            isUstadzProfilePage ||
            isUstadzDataSantriPage ||
            isUstadzHafalanSantriPage ||
            isUstadzSkillSantriPage ||
            isUstadzTambahSantriPage) &&
            menusUstadz.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu.gap ? "mt-9" : "mt-2"
                } outline-green-400 h-[40px] group flex items-center text-sm gap-3.5 font-medium tracking-wide p-2 transition-all duration-300 ease-in-out ${
                  isActive(menu?.link)
                    ? "bg-[#ffffff7a]"
                    : "hover:bg-[#ffffff7a]"
                } rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}

          {(isStaffUstadzPage ||
            isStaffUstadzProfilePage ||
            isStaffUstadzAbsensiSantriPage) &&
            menusStaffUstadz.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu.gap ? "mt-9" : "mt-2"
                } outline-green-400 h-[40px] group flex items-center text-sm gap-3.5 font-medium tracking-wide p-2 transition-all duration-300 ease-in-out ${
                  isActive(menu?.link)
                    ? "bg-[#ffffff7a]"
                    : "hover:bg-[#ffffff7a]"
                } rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
