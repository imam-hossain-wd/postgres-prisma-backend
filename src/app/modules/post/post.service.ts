import { Post } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data
  });
  return result;
};

const getAllPost = async (options: IPaginationOptions): Promise<Post[]> => {
  const { sortBy, sortOrder, page, limit } = options;
  const userLimit = parseInt(limit);
  const userPage = parseInt(page);
  const skip = userLimit * userPage - userLimit || 0;
  const take = userLimit || 5;
  const result = await prisma.post.findMany({
    skip,
    take,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  return result;
};
const getSinglePost = async (id: string): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updatePost = async (id: string, data: Post): Promise<Post | null> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deletePost = async (id: string): Promise<Post | null> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

export const postService = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
};
