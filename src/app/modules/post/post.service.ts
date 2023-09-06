import { Post } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      category: true,
      author: true,
    },
  });
  return result;
};

const getAllPost = async (): Promise<Post[]> => {
  const result = await prisma.post.findMany();
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
