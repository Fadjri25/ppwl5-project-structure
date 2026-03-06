import { userRepository } from "../repositories/user.repositories";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.types";

export const userService = {
  getAll() {
    return userRepository.findAll().map(u => new UserModel(u));
  },

  create(data: { name: string, role: string }) {
    return userRepository.create(data);
  },

  delete(id: number) {
    // implementasikan delete dari userRepository
    return userRepository.delete(id);
  }
};