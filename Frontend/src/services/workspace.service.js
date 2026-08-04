import api from "./api.services";

export const createWorkspaceService = async (workspaceData) => {

    const response = await api.post(
        "/workspaces",
        workspaceData
    );

    return response.data;
};

export const getAllWorkspacesService = async () => {

    const response = await api.get("/workspaces");

    return response.data;
};