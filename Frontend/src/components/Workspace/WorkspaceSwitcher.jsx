import { useWorkspace } from "../../context/Workspace.context";

const WorkspaceSwitcher = () => {

    const { workspaces, currentWorkspace, setCurrentWorkspace, loading } = useWorkspace();

    const handleChange = (e) => {

        const selected = workspaces.find(
            (workspace) => workspace._id === e.target.value
        );

        if (selected) {
            setCurrentWorkspace(selected);
        }

    };

    if (loading) {

        return (
            <div className="h-10 w-full animate-pulse rounded-lg bg-stone-100" />
        );

    }

    if (workspaces.length === 0) {

        return (
            <p className="text-xs text-stone-400">
                No workspaces yet
            </p>
        );

    }

    return (

        <div className="relative">

            <select
                value={currentWorkspace?._id || ""}
                onChange={handleChange}
                className="w-full cursor-pointer appearance-none rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-800 outline-none transition-colors duration-200 hover:border-red-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
            >
                {workspaces.map((workspace) => (
                    <option key={workspace._id} value={workspace._id}>
                        {workspace.name}
                    </option>
                ))}
            </select>

        </div>

    );

};

export default WorkspaceSwitcher;