import {Router, Request, Response, NextFunction} from 'express';
import Task from '../models/tasks'
import getTaskId from '../middleware/getTaskId'

const router = Router();

router.get('/',  async (req: Request, res: Response) => {
        try {
            const task = await Task.find();
            res.json(task)
        }catch (error: any) {
            res.status(500).send({error: error.message});
        }
});

router.post('/',  async (req: Request, res: Response) => {
    const task = new Task(req.body);

    try{
        const newTask = await task.save();
        res.status(201).json(newTask)
    }catch (error: any) {
        res.status(400).send({error: error.message});
    }
})

router.put('/:id',  async (req: Request, res: Response) => {
    const task = res.locals.task;

    if (!task) {
        return res.status(404).send({ error: 'Task not found' });
    }

    task.name = req.body.name || task.name;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;

    try{
        const updateTask = await task.save()
        res.json(updateTask)
    }catch (error: any) {
        res.status(400).send({error: error.message});
    }
})

router.delete('/:id', getTaskId, async (req: Request, res: Response) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(task == null){
            res.status(404).send({error: 'Task not found'})
        }
        res.json({message: 'Task deleted successfully'})
    }catch (error: any) {
        res.status(500).send({error: error.message});
    }
})

export default router;