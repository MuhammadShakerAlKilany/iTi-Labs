import { Router } from "express";
import userRouter from "./user.routes";

const route =Router()

route.all("/users",userRouter)
route.all("/tasks",)