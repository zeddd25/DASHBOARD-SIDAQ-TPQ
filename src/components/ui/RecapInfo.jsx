const RecapInfo = ({ title, className }) => {
  return (
    <div
      className={`ring-1 ring-[#16151321] shadow-md rounded-r-lg border-l-8 border-[#66BF60]  max-w-fit px-3 py-1 text-center font-medium mb-3 ${className}`}
      style={{
        borderImage: "linear-gradient(to bottom, #66BF60, #2FBFE7) 1",
      }}
    >
      {title}
    </div>
  );
};

export default RecapInfo;
