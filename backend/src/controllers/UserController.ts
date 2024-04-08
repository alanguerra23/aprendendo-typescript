import { Request, Response } from 'express';

const users = [
  {
    name: 'Alan Guerra',
    email: 'alanguerra@gmail.com'
  }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  }
};
