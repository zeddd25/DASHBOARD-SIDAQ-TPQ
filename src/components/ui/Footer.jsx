import { TbChevronUp } from "react-icons/tb";
import { useStateContext } from "../../context/StateContext";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { open } = useStateContext();

  return (
    <div
      className={`font-poppins bg-[#F8F8F8] h-[73px] font-medium text-sm text-center flex justify-center items-center mt-8 mb-14 md:mb-0 ${
        open ? "" : ""
      } duration-500`}
    >
      <h1 className={`font-poppins ${
        open ? "md:pl-[250px]" : ""
      } duration-500`}
      >© 2023 Sidaq Network. All rights reserved. </h1>
      <div className="w-full absolute flex justify-end px-2">
        <button
          className="bg-[#D9D9D9] text-[#F8F8F8] w-10 h-10 rounded-full"
          onClick={handleScrollToTop}
        >
          <TbChevronUp className="text-4xl m-auto" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
