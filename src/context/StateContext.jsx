import { createContext, useContext, useState } from "react";


const Context = createContext()

export const SteteContext = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)
return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup,}}>
        {children}
    </Context.Provider>
)
}

export const useSteteContext= () => useContext(Context)