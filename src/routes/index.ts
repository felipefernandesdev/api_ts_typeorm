import { Request, Response, Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    msg: 'Welcome to API, read user guide documentation, use a lot',
  });
});

router.post('/users', createUserController.handle);

export { router };

