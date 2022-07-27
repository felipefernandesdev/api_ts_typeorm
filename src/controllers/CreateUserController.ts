import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();
    const { name, email } = request.body;

    if (!name || !email)
      return response.status(400).json({ msg: 'All fields are required!' });

    const user = createUserService.execute({ name, email });
    return response.status(201).json({ user });
  }
}

export { CreateUserController };
