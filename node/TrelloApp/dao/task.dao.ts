import { Schema } from "mongoose";
import { Task, TaskAdd, TaskDaoInterface, TaskUpdate, TaskWithUserData } from "../interfaces/task.interface";
import taskModule from "../modules/task.module";
export default class TaskDao implements TaskDaoInterface{
   
   async addTask(task: TaskAdd): Promise<Task> {
      return await taskModule.create(task)
      
    }
   async updateTask(id: Schema.Types.ObjectId, task: TaskUpdate): Promise<Task|null> {
        return await taskModule.findByIdAndUpdate(id,task,{new:true})
    }
    async  deleteTask(id: Schema.Types.ObjectId): Promise<Task |null> {
       return await taskModule.findByIdAndDelete(id)
   }
   async getAllTask(): Promise<[] | Task[]> {
       return await taskModule.find()
   }
   async getAllTaskWithUserData(): Promise<[] | TaskWithUserData[]> {
    return await taskModule.find().populate("userId")
   }
    
}