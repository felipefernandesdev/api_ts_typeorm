import { Request, Response } from 'express';

class CreateUserController {
  handle(request: Request, response: Response) {
    const { name, email } = request.body;
    if (!name)
      return response
        .status(400)
        .json({ error: 'Bad request', msg: 'Name is required!' });
    if (!email)
      return response
        .status(400)
        .json({ error: 'Bad request', msg: 'Email is required!' });
    
    response.json({ name, email });
  }
}

export { CreateUserController };
