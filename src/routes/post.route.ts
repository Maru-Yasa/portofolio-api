import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PostController from '@/controllers/post.controller';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreatePostDto } from '@/dtos/post.dto';

class PostRoute implements Routes {
  public path = '/api/v1/post';
  public router = Router();
  public PostController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.PostController.findAllPost)
    this.router.get(`${this.path}`, this.PostController.findPostById)
    this.router.post(`${this.path}/create`, authMiddleware, validationMiddleware(CreatePostDto, 'body', true), this.PostController.createPost);
    this.router.put(`${this.path}/update`, authMiddleware, validationMiddleware(CreatePostDto, 'body', true), this.PostController.updatePost);  
    this.router.delete(`${this.path}/delete`, authMiddleware, this.PostController.deletePost);  
  }
}

export default PostRoute;
