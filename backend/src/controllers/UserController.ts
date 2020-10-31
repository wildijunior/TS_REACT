import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Wildi Jr",
    email: "teste@teste.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Wildi Jr",
        email: "teste@teste.com",
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Bem vindo",
      },
    });
    res.send();
  },
};
