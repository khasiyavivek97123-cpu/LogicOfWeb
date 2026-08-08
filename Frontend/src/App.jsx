import { Routes, Route } from "react-router";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import WorkspacePage from "./pages/WorkspacePage";
import ProjectsPage from "./pages/ProjectsPage";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route element={<ProtectedRoute />}>

                <Route element={<DashboardLayout />}>

                    <Route
                        path="/dashboard"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="/workspaces"
                        element={<WorkspacePage />}
                    />

                    <Route
                        path="/projects"
                        element={<ProjectsPage />}
                    />

                </Route>

            </Route>

        </Routes>

    );

}

export default App;