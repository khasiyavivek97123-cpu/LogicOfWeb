import api from "./api.services";

export const createProjectService = async (workspaceId, projectData) => {

    const response = await api.post(
        `/workspaces/${workspaceId}/projects`,
        projectData
    );

    return response.data;
};

export const getProjectsByWorkspaceService = async (workspaceId) => {

    const response = await api.get(
        `/workspaces/${workspaceId}/projects`
    );

    return response.data;
};