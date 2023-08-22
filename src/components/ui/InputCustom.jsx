import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const InputCustom = ({
  type = "text",
  placeholder,
  id,
  className,
  classNameDiv,
  icon,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const showError = false;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      {type === "password" ? (
        <>
          <div
            className={`border-[#EEEEEE] border-[1px] rounded-lg py-2 px-6 flex items-center ${classNameDiv}`}
          >
            {icon}
            <input
              type={isShow ? "text" : "password"}
              placeholder={placeholder}
              className={`${className} bg-transparent text-[#333333]`}
            />
            {isShow ? (
              <BsEyeSlash
                className="text-2xl text-[#6c7077] mr-2 cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              />
            ) : (
              <BsEye
                className="text-2xl text-[#333333] mr-2 cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              />
            )}
          </div>
          {showError && <p className="text-red-700">password not match!</p>}
        </>
      ) : type === "checkbox" ? (
        <div className={`flex items-center ${classNameDiv}`}>
          {icon}
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`${className} bg-transparent text-[#333333]`}
          />
        </div>
      ) : type === "file" ? (
        <div
          className={`border-[#EEEEEE] border-[1px] rounded-lg py-2 px-6 flex ${classNameDiv} items-center text-left`}
        >
          {icon}
          <label
            className={`${className} bg-transparent text-[#333333] cursor-pointer`}
          >
            {selectedFile ? selectedFile.name : placeholder}
            <input
              type="file"
              id={id}
              className="hidden"
              aria-labelledby={id}
              onChange={handleFileChange}
            />
          </label>
        </div>
      ) : (
        <div
          className={`border-[#EEEEEE] border-[1px] rounded-lg py-2 px-6 flex ${classNameDiv} items-center`}
        >
          {icon}
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`${className} bg-transparent text-[#333333]`}
          />
        </div>
      )}
    </div>
  );
};

export default InputCustom;
