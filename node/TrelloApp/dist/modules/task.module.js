"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["toDo", "doing", "done"],
        required: true
    },
    userId: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    assignTo: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Task", taskSchema);
