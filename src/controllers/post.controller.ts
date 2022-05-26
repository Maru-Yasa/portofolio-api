import PostService from '@/services/post.service';
import { NextFunction, Request, Response } from 'express';
import { Post } from '@/interfaces/post.interface';
import { CreatePostDto } from '@/dtos/post.dto';
import { logger } from '@/utils/logger';

class PostController {
  public PostService = new PostService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        status : 'success',
        msg : "Hello Post",
        data : {}
      });
    } catch (error) {
      next(error);
    }
  };

  public findAllPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts:Post[] = await this.PostService.findAllPost();
      res.status(200).json({
        status : 'success',
        msg : 'success fetch all post',
        data : posts
      });
    } catch (error) {
      next(error);
    }
  };

  public findPostById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId: String = req.query.id as String;
      const post: Post = await this.PostService.findPostById(postId);
      res.status(200).json({
        status : 'success',
        msg : 'success fetch post with id' + postId,
        data : post
      });
    } catch (error) {
      next(error)
    }
  };

  public createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postData: CreatePostDto = req.body;
      const newPost: Post = await this.PostService.createPost(postData);
      res.status(200).json({
        status : 'success',
        msg : 'success create post',
        data : newPost
      });
    } catch (error) {
      next(error);
    }
  };

  public updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId: String = req.query.id as String;
      const postData: CreatePostDto = req.body;
      const newPost: Post = await this.PostService.updatePost(postId, postData);
      res.status(200).json({
        status : 'success',
        msg : 'success update post',
        data : newPost
      });
    } catch (error) {
      next(error);
    }
  };

  public deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId: String = req.query.id as String;
      const deletedPost: Post = await this.PostService.deletePost(postId);
      res.status(200).json({
        status : 'success',
        msg : 'success delete post',
        data : deletedPost
      });
    } catch (error) {
      next(error);
    }
  };

}

export default PostController;
