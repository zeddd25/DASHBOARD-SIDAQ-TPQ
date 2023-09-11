import { useStateContext } from "../../context/StateContext";

const Pusat = () => {


  const { open } = useStateContext();
  return (
    <div
        className={`min-h-screen w-full font-poppins m-auto ${
          open ? "max-w-[1930px] md:pl-[241px]": "w-full md:pl-16"
        } duration-500`}
        >
        <main>
        
        </main>
        </div>
  )
}

export default Pusat