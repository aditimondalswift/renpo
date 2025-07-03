import { userRepository } from "../repository/UserRepository";
import { User } from "../entity/User";

export class UserService {
  async createUser(data: Partial<User>): Promise<User> {
    const user = userRepository.create(data);
    return await userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return await userRepository.find();
  }

  async getUserById(id: number): Promise<User | null> {
    return await userRepository.findOneBy({ id });
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | null> {
    const user = await userRepository.findOneBy({ id });
    if (!user) return null;
    userRepository.merge(user, data);
    return await userRepository.save(user);
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await userRepository.delete(id);
    return result.affected !== 0;
  }
}