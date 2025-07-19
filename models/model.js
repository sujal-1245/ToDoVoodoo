import mongoose, { Schema } from "mongoose";

const ToDoSchema = new Schema ({
    task:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Todo = mongoose.model("ToDo",ToDoSchema)

export default Todo