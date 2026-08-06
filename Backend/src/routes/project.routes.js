import { Router } from "express";

import {
    createProject,
    getProjectsByWorkspace,
} from "../controllers/project.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.use(verifyJWT);

router.post("/:workspaceId/projects", createProject);

router.get("/:workspaceId/projects", getProjectsByWorkspace);

export default router;