import { NavLink, Outlet } from "react-router";

import { useAuth } from "../context/Auth.context";
import { useWorkspace } from "../context/Workspace.context";

const DashboardLayout = () => {

    const { user } = useAuth();

    const { currentWorkspace } = useWorkspace();

    const navClass = ({ isActive }) =>
        `flex items-center rounded-lg px-4 py-2 transition-all duration-200 ${
            isActive
                ? "bg-red-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
        }`;

    return (

        <div className="flex min-h-screen bg-gray-50">

            <aside className="w-64 border-r border-gray-200 bg-white shadow-sm">

                <div className="border-b p-6">

                    <h1 className="text-2xl font-bold text-maroon-700">

                        TaskFlow

                    </h1>

                    <p className="mt-2 text-sm text-gray-500">

                        {currentWorkspace
                            ? currentWorkspace.name
                            : "No Workspace"}

                    </p>

                </div>

                <nav className="space-y-2 p-4">

                    <NavLink
                        to="/dashboard"
                        className={navClass}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/workspaces"
                        className={navClass}
                    >
                        Workspaces
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={navClass}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/tasks"
                        className={navClass}
                    >
                        Tasks
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={navClass}
                    >
                        Settings
                    </NavLink>

                </nav>

            </aside>

            <main className="flex flex-1 flex-col">

                <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5 shadow-sm">

                    <div>

                        <h2 className="text-xl font-semibold text-gray-800">

                            Welcome, {user?.name}

                        </h2>

                        <p className="text-sm text-gray-500">

                            {user?.email}

                        </p>

                    </div>

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon-600 text-lg font-semibold text-white">

                            {user?.name?.charAt(0)}

                        </div>

                    </div>

                </header>

                <section className="flex-1 p-8">

                    <Outlet />

                </section>

            </main>

        </div>

    );

};

export default DashboardLayout;