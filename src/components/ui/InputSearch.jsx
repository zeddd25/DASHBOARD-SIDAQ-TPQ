import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SantriData from "../../pages/dasboard-pondok/SantriData";

const InputSearch = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Muhammad Andaru Danuarta",
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Williams",
    "William Brown",
  ];

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsSelectOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex">
        <div
          className="bg-[#FCFAFA] ring-[1.5px] ring-green-400 w-full rounded-l-lg px-2 py-[2px] cursor-pointer"
          onClick={handleSelectClick}
        >
          <h3 className="text-[#787E7E]">Santri</h3>
          <h1>{selectedOption || "Pilih Santri"}</h1>
        </div>

        <div className="bg-[#D9D9D9] ring-[1.5px] ring-green-400 w-[59px] rounded-r-lg flex justify-center items-center cursor-pointer">
          <BsChevronDown className="text-4xl" onClick={handleSelectClick} />
        </div>
      </div>

      {isSelectOpen && (
        <div className="absolute top-[calc(100%+5px)] left-0 bg-white border border-grering-green-400 w-full z-10">
          <div className="bg-[#FCFAFA] w-full flex">
            <input
              type="text"
              placeholder="Cari Santri"
              className="ring-1 ring-green-400 w-full outline-none p-3"
            />
            <div className="bg-[#D9D9D9] ring-1 ring-green-400 w-[59px] flex justify-center items-center cursor-pointer">
              <BiSearch className="text-3xl" onClick={handleSelectClick} />
            </div>
          </div>
          <ul className="py-1">
            {SantriData.map((santri, i) => (
              <li
                key={i}
                className="px-2 py-1 cursor-pointer hover:bg-green-400 hover:text-white"
                onClick={() => handleOptionSelect(santri.name)}
              >
                {santri.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputSearch;
