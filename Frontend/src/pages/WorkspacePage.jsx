import { useEffect, useState } from "react";

import {
    createWorkspaceService,
    getAllWorkspacesService,
} from "../services/workspace.service";

import { useAuth } from "../context/Auth.context";

const WorkspacePage = () => {

    const { fetchCurrentUser } = useAuth();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [workspaces, setWorkspaces] = useState([]);

    const [loading, setLoading] = useState(false);

    const loadWorkspaces = async () => {

        try {

            const response = await getAllWorkspacesService();

            setWorkspaces(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadWorkspaces();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await createWorkspaceService({
                name,
                description,
            });

            await fetchCurrentUser();

            await loadWorkspaces();

            setName("");

            setDescription("");

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

    <div className="min-h-screen bg-stone-100 px-6 py-10">

        <div className="mx-auto max-w-7xl space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-red-900">
                    Workspaces
                </h1>

                <p className="mt-2 text-stone-600">
                    Create and manage your workspaces to organize projects and collaborate efficiently.
                </p>
            </div>

            {/* Create Workspace */}
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-stone-900">
                        Create New Workspace
                    </h2>

                    <p className="mt-1 text-sm text-stone-500">
                        Give your workspace a meaningful name and description.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Workspace Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition-all duration-200 placeholder:text-stone-400 focus:border-red-900 focus:ring-4 focus:ring-red-900/10"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition-all duration-200 placeholder:text-stone-400 focus:border-red-900 focus:ring-4 focus:ring-red-900/10"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-xl bg-red-900 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? "Creating..." : "Create Workspace"}
                    </button>

                </form>

            </div>

            {/* Workspace List */}
            <div>

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-semibold text-stone-900">
                        Your Workspaces
                    </h2>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-900">
                        {workspaces.length} Workspace{workspaces.length !== 1 ? "s" : ""}
                    </span>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {

                        workspaces.map((workspace) => (

                            <div
                                key={workspace._id}
                                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                            >

                                <div className="mb-4 flex items-center justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-900">
                                        {workspace.name.charAt(0).toUpperCase()}
                                    </div>

                                </div>

                                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-red-900">
                                    {workspace.name}
                                </h3>

                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
                                    {workspace.description}
                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    </div>

);

};

export default WorkspacePage;