import { Router } from "express";

import {
    createWorkspace,
    getAllWorkspaces,
} from "../controllers/workspace.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.post("/", createWorkspace);

router.get("/", getAllWorkspaces);

export default router;