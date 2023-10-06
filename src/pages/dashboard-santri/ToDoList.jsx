import { RecapInfo } from "../../components/ui"
import Todolist from "../../components/ui/Todolist"
import { useStateContext } from "../../context/StateContext";

const ToDoList = () => {
  const { open } = useStateContext();
  
  return (
    <section
      className={`font-poppins py-5 px-5 ${
        open ? "md:pl-[261px]" : "w-full md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"To do List"} className={"mt-14"} />
      <Todolist />
      </section>
  )
}

export default ToDoList