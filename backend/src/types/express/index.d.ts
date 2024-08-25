import { TaskDocument } from '../../models/tasks';

declare global {
    namespace Express {
        interface Request {
            task?: Task;
        }
    }
}
