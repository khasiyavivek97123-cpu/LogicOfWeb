import { createContext, useContext, useEffect, useState } from "react";

import {
    getAllWorkspacesService,
    createWorkspaceService
} from "../services/workspace.service";

const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {

    const [workspaces, setWorkspaces] = useState([]);

    const [currentWorkspace, setCurrentWorkspace] = useState(null);

    const [loading, setLoading] = useState(true);

    const fetchWorkspaces = async () => {

        try {

            const response = await getAllWorkspacesService();
            // The backend returns an array of workspaces the user belongs to.
            // Directly set the workspaces list.
            setWorkspaces(response.data);
            // Optionally set the first workspace as the current one (or null if none).
            setCurrentWorkspace(response.data.length > 0 ? response.data[0] : null);

        } catch (error) {

            console.error(error);

            setWorkspaces([]);

            setCurrentWorkspace(null);

        } finally {

            setLoading(false);

        }

    };

        const createWorkspace = async (workspaceData) => {

        const response = await createWorkspaceService(workspaceData);

        await fetchWorkspaces();

        return response;

    };

    useEffect(() => {

        fetchWorkspaces();

    }, []);

    return (

        <WorkspaceContext.Provider
            value={{
                workspaces,
                currentWorkspace,
                loading,
                fetchWorkspaces,
                setCurrentWorkspace,
                createWorkspace,
            }}
        >

            {children}

        </WorkspaceContext.Provider>

    );

};

export const useWorkspace = () => {

    return useContext(WorkspaceContext);

};