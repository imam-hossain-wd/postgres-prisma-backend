import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
const getAllUser = async (options: IPaginationOptions) => {
  const { sortBy, sortOrder, page, limit } = options;
  const userLimit = parseInt(limit);
  const userPage = parseInt(page);
  const skip = userLimit * userPage - userLimit || 0;
  const take = userLimit || 5;
  const result = await prisma.user.findMany({
    orderBy: {
      [sortBy]: sortOrder,
    },
    take,
    skip,
  });

  const count = await prisma.user.count();

  return { result, count };
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateUser = async (id: string, data: User): Promise<User | null> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
