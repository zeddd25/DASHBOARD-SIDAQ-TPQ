import { StateContext } from "./context/StateContext"
import Routing from "./routes"


const App = () => {

  return (
    <StateContext>
      <Routing/>
    </StateContext>
  )
}

export default App