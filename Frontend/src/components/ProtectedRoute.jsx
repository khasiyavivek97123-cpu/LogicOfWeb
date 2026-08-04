import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/Auth.context";
import Loader from "./common/Loader";


const ProtectedRoute = () => {

    const { loading, isAuthenticated } = useAuth();

    if (loading) {
        return (
            <Loader
                text="Authenticating..."
                subText="Checking your Session"
            />
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    

    return <Outlet />;
};

export default ProtectedRoute;