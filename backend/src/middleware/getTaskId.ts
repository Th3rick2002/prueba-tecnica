import {NextFunction, Request, Response} from "express";
import Task from "../models/tasks";


async function getTaskID(req: Request, res: Response, next: NextFunction) {
    try{
        const task = await Task.findById(req.params.id)
        if(!task){
            res.status(404).send({error: 'Task not found'})
        }

        res.locals.task = task;
        next()
    }catch (error: any) {
        res.status(500).send({error: error.message});
    }
}

export default getTaskID;