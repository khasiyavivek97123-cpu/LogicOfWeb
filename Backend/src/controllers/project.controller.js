import {
    createProjectService,
    getProjectsByWorkspaceService,
} from "../services/project.service.js";

export const createProject = async (req, res) => {

    try {

        const { workspaceId } = req.params;

        const project = await createProjectService(
            req.body,
            workspaceId,
            req.user._id
        );

        return res.status(201).json({

            success: true,

            message: "Project Created Successfully",

            data: project,

        });

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message,

        });

    }

};

export const getProjectsByWorkspace = async (req, res) => {

    try {

        const { workspaceId } = req.params;

        const projects = await getProjectsByWorkspaceService(
            workspaceId,
            req.user._id
        );

        return res.status(200).json({

            success: true,

            data: projects,

        });

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message,

        });

    }

};