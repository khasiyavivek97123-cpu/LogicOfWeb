import {
    createWorkspaceService,
    getAllWorkspacesService,
} from "../services/workspace.service.js";

export const createWorkspace = async (req, res) => {

    try {

        const workspace = await createWorkspaceService(
            req.body,
            req.user._id
        );

        return res.status(201).json({

            success: true,

            message: "Workspace created successfully.",

            data: workspace,

        });

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message,

        });

    }

};

export const getAllWorkspaces = async (req, res) => {

    try {

        const workspaces = await getAllWorkspacesService(
            req.user._id
        );

        return res.status(200).json({

            success: true,

            data: workspaces,

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};