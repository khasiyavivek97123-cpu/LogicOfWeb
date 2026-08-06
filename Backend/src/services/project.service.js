import Project from "../models/Project.model.js";
import Workspace from "../models/Workspace.model.js";

export const createProjectService = async (
    projectData,
    workspaceId,
    userId
) => {

    const { name, description } = projectData;

    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
        throw new Error("Workspace Not Found");
    }

    const isMember = workspace.members.some(
        (member) => member.user.toString() === userId.toString()
    );

    if (!isMember) {
        throw new Error("You Are Not A Member Of This Workspace");
    }

    const existingProject = await Project.findOne({
        workspace: workspaceId,
        name,
    });

    if (existingProject) {
        throw new Error("A Project With This Name Already Exists In This Workspace");
    }

    const project = await Project.create({
        name,
        description,
        workspace: workspaceId,
        createdBy: userId,
    });

    return project;

};

export const getProjectsByWorkspaceService = async (workspaceId, userId) => {

    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
        throw new Error("Workspace Not Found");
    }

    const isMember = workspace.members.some(
        (member) => member.user.toString() === userId.toString()
    );

    if (!isMember) {
        throw new Error("You Are Not A Member Of This Workspace");
    }

    const projects = await Project.find({
        workspace: workspaceId,
        isArchived: false,
    }).sort({ createdAt: -1 });

    return projects;

};