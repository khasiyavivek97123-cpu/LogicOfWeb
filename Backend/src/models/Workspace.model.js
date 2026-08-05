import mongoose from "mongoose";
import ROLES from "../constants/roles.constants.js";

const workspaceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 60,
        },

        description: {
            type: String,
            trim: true,
            default: "",
            maxlength: 300,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        members: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },

                role: {
                    type: String,
                    enum: ROLES,
                    default: ROLES.MEMBER,
                },

                joinedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],

        isArchived: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Workspace = mongoose.model("Workspace", workspaceSchema);

export default Workspace;