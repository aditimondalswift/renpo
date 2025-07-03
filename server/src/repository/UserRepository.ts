import { AppDataSource } from "../config/db";
import { User } from "../entity/User";

export const userRepository = AppDataSource.getRepository(User);