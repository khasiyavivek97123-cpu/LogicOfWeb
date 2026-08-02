import LoginPage from "./pages/LoginPage"
import { Routes,Route } from "react-router"
import DashboardPage from "./pages/DashboardPage"
import ProtectedRoute from "./components/ProtectedRoute"
import RegisterPage from "./pages/RegisterPage"



function App() {
    
    return(<>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/" element={<DashboardPage/>}/>
            </Route>
        </Routes>

    
    </>)
}

export default App
