import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Context.Provider
      value={{ showModal, setShowModal, isShowPopup, setIsShowPopup,open, setOpen }}
    >
      {children}
    </Context.Provider>
  );
};  

export const useStateContext = () => useContext(Context);
