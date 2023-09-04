import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { categoryRoutes } from '../modules/category/category.route';
import { profileRoutes } from '../modules/profile/profile.route';
import { postRoutes } from '../modules/post/post.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    routes: userRoutes
  },
  {
    path: "/category",
    routes: categoryRoutes
  },
  {
    path: "/profile",
    routes: profileRoutes
  },
  {
    path: "/post",
    routes: postRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
