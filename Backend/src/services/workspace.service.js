import Workspace from "../models/Workspace.model.js";
import User from "../models/User.model.js";

export const createWorkspaceService = async (
    workspaceData,
    userId
) => {

    const { name, description } = workspaceData;

    const existingWorkspace = await Workspace.findOne({
        owner: userId,
        name,
    });

    if (existingWorkspace) {
        throw new Error("Workspace with this name already exists.");
    }

    const workspace = await Workspace.create({

        name,

        description,

        owner: userId,

        members: [
            {
                user: userId,
                role: "OWNER",
            },
        ],

    });

    // Update the user's current workspace
    await User.findByIdAndUpdate(userId, {
        $set: { currentWorkspace: workspace._id }
    });

    return workspace;
};

export const getAllWorkspacesService = async (userId) => {

    const workspaces = await Workspace.find({
        "members.user": userId,
        isArchived: false,
    })
        .populate("owner", "name email")
        .sort({
            createdAt: -1,
        });

    return workspaces;
};