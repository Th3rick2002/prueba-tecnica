import {Document, Schema, model} from 'mongoose';

interface Task {
    name: string;
    description: string;
    status: string;
}

export const TaskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: false,
        required: true
    }
})

const Task = model("Task", TaskSchema);

export default Task;