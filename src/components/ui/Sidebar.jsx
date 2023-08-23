import {
  TbHome,
  TbUser,
  TbSettings,
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import React from "react";

const Sidebar = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: TbHome },
    { name: "Profile", link: "/", icon: TbUser },
    { name: "Setting", link: "/", icon: TbSettings },
  ];

  const { open, setOpen } = useStateContext();

  return (
    <section className="font-poppins flex">
      {/* SIDEBAR */}
      <div
        className={`fixed bg-gradient-to-b from-[#66BF60] to-[#2FBFE7] min-h-screen ${
          open ? "w-[241px]" : "w-16"
        } duration-500 text-white capitalize px-3`}
      >
        <div className="py-3 flex justify-end">
          {open ? (
            <TbLayoutSidebarLeftCollapse
              size={38}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <TbLayoutSidebarLeftExpand
              size={38}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div
          className={`overflow-hidden rounded-full m-auto ${
            open ? "w-[75px] h-[75px]" : "w-[33px] h-[33px]"
          } duration-500`}
        >
          <img src="../src/assets/images/foto-formal.jpeg" alt="" />
        </div>

        <div
          className={`text-white font-semibold w-full text-center tracking-wide mt-2 ${
            open ? "text-lg" : "hidden"
          } duration-500`}
        >
          <h1>Santri</h1>
        </div>

        <div className="mt-8 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } h-[40px] group flex items-center text-sm gap-3.5 font-semibold tracking-wide p-2 hover:bg-[#ffffff7a]
              rounded-md`}
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
