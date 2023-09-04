import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { categoryRoutes } from '../modules/category/category.route';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
