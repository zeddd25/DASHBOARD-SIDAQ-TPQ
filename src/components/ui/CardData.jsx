const CardData = ({ title, Information, icon }) => {
  return (
    <div className="ring-2 ring-[rgba(22,21,19,0.13)] shadow-md w-[305px] h-[110px] rounded-md p-4">
      <div className="flex items-center gap-2 text-[#161513aa] font-bold text-sm mb-5">
        {icon}
        {title}
      </div>
      <h1>{Information}</h1>
    </div>
  );
};

export default CardData;
