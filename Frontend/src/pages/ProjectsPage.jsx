import { useEffect, useState } from "react";

import { useWorkspace } from "../context/Workspace.context";

import {
    createProjectService,
    getProjectsByWorkspaceService,
} from "../services/project.service";

const ProjectsPage = () => {

    const { currentWorkspace } = useWorkspace();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const loadProjects = async () => {

        if (!currentWorkspace) {
            setLoading(false);
            return;
        }

        try {

            const response = await getProjectsByWorkspaceService(currentWorkspace._id);

            setProjects(response.data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadProjects();

    }, [currentWorkspace]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSubmitting(true);

        try {

            await createProjectService(currentWorkspace._id, { name, description });

            await loadProjects();

            setName("");
            setDescription("");

        } catch (err) {

            setError(err.response?.data?.message || "Failed To Create Project");

        } finally {

            setSubmitting(false);

        }

    };

    if (!currentWorkspace) {

        return (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-sm text-stone-500">
                You need an active workspace before creating projects. Create or select a workspace first.
            </div>
        );

    }

    return (

        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold tracking-tight text-red-600">
                    Projects
                </h1>

                <p className="mt-2 text-stone-600">
                    Projects inside <span className="font-medium text-stone-900">{currentWorkspace.name}</span>
                </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-stone-900">
                        Create New Project
                    </h2>
                </div>

                {error && (
                    <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="text"
                        placeholder="Project Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition-all duration-200 placeholder:text-stone-400 focus:border-red-600 focus:ring-4 focus:ring-red-600/10"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 outline-none transition-all duration-200 placeholder:text-stone-400 focus:border-red-600 focus:ring-4 focus:ring-red-600/10"
                    />

                    <button
                        type="submit"
                        disabled={submitting}
                        className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {submitting ? "Creating..." : "Create Project"}
                    </button>

                </form>

            </div>

            <div>

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-stone-900">
                        All Projects
                    </h2>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
                        {projects.length} Project{projects.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {loading ? (

                    <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-sm text-stone-500 shadow-sm">
                        Loading projects...
                    </div>

                ) : projects.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-sm text-stone-500">
                        No projects yet in this workspace. Create your first one above.
                    </div>

                ) : (

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                        {projects.map((project) => (

                            <div
                                key={project._id}
                                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                            >

                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-600">
                                    {project.name.charAt(0).toUpperCase()}
                                </div>

                                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-red-600">
                                    {project.name}
                                </h3>

                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
                                    {project.description}
                                </p>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

};

export default ProjectsPage;