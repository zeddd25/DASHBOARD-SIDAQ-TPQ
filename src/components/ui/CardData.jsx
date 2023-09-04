import { useStateContext } from "../../context/StateContext";

const CardData = ({ title, Information, icon, edit }) => {
  const { open } = useStateContext();

  return (
    <div
      className={`ring-2 ring-[rgba(22,21,19,0.13)] shadow-md h-[110px] rounded-md p-4 ${
        open ? "w-full lg:w-[317.6px]" : "w-full lg:w-[353px]"
      } duration-500`}
    >
      <div className="flex items-center gap-2 text-[#161513aa] font-bold text-sm mb-5">
        {icon}
        {title}
        {edit}
      </div>
      <h1>{Information}</h1>
    </div>
  );
};

export default CardData;
