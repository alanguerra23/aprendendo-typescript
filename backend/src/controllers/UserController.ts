import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Alan Guerra',
    email: 'alanguerra@gmail.com'
  }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      { email: 'alanguerra@gmail.com', name: 'Alan Guerra' }, 
      { subject: 'Bem Vindo', body: 'Boas Vindas!' }
    );

    return res.send()
  }
};
