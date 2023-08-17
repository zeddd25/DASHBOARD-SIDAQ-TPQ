import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
        <div
          className={` ${
            open ? "w-60" : "w-20 "
          } bg-gradient-to-b from-[#66BF60] to-[#2FBFE7] h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="../public/images/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-2 items-center">
            <img
              src="./src/assets/logo.svg"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-black font-outfit origin-left font-bold text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Sidaq TPQ
            </h1>
          </div>
          <ul className="pt-6">
            <NavLink to={"/admin"}>
              <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                <img className="w-5 h-5" src="../public/images/dashboard.png" />
                <span
                  className={`${
                    !open && "hidden"
                  } text-black origin-left duration-200`}
                >
                  Dashboard
                </span>
              </li>
            </NavLink>

            <NavLink to={"/allbooksposts"}>
              <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                <img src="../public/images/book-stack.png" />
                <span
                  className={`${
                    !open && "hidden"
                  } text-black origin-left duration-200`}
                >
                  Semua Postingan
                </span>
              </li>
            </NavLink>
            <NavLink to={"/allcategory"}>
              <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                <img src="../public/images/category.png" />
                <span
                  className={`${
                    !open && "hidden"
                  } text-black origin-left duration-200`}
                >
                  Semua Kategori
                </span>
              </li>
            </NavLink>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
              <img src="../public/images/sign-out.png" />
              <button
                to={"/"}
                className={`${
                  !open && "hidden"
                } text-black origin-left duration-200`}
              >
              </button>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
