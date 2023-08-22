import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ResetPassword, SignIn, SignUp } from "../pages/landing"
import { Santri, Ustadz } from "../pages/dashboard"
import NotFound from "../pages/not-found/NotFound"
import { StateContext } from "../context/StateContext"
// import Sidebar from "../components/ui/Sidebar"

const Routing = () => {
    return (
        <StateContext>
        <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/register' element={<SignUp/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path="/dashboard/santri" element={<Santri />}/>
            <Route path="/dashboard/ustadz" element={<Ustadz />}/>
        </Routes>
        </BrowserRouter>
        </StateContext>
    )
}

export default Routing