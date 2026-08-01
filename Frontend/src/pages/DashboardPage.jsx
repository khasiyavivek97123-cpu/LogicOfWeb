import { useAuth } from "../context/Auth.context";

const DashboardPage = () => {

    const { user } = useAuth();

    return (

        <div>

            <h1>Dashboard</h1>

            <hr />

            <h2>Welcome {user?.name}</h2>

            <p>Email : {user?.email}</p>

            <p>Role : {user?.role}</p>

        </div>

    );

};

export default DashboardPage;