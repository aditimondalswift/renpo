import { Request, Response } from "express";
import { UserService } from "../service/UserService";

const userService = new UserService();

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  static async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {
    const user = await userService.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  }

  static async updateUser(req: Request, res: Response) {
    const user = await userService.updateUser(Number(req.params.id), req.body);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const deleted = await userService.deleteUser(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.status(204).send();
  }
}