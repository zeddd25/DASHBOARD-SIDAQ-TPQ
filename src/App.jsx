import { SteteContext } from "./context/StateContext"
import Routing from "./routes"


const App = () => {

  return (
    <SteteContext>
      <Routing/>
    </SteteContext>
  )
}

export default App