import { CreatePostDto } from "@/dtos/post.dto";
import { HttpException } from "@/exceptions/HttpException";
import postModel from "@/models/post.model";
import { isEmpty } from "@/utils/util";
import { Post } from '@interfaces/post.interface';

class PostService {

    public post = postModel;

    public async findAllPost(): Promise<Post[]> {
        const post : Post[] = await this.post.find();
        return post;
    }

    public async findPostById(postId: String): Promise<Post>{

        if(isEmpty(postId)) throw new HttpException(400, "Post Id required");
        const post : Post = await this.post.findById(postId);
        if(!post) throw new HttpException(400, `Post id with id ${postId} not found`);
        return post;
    }

    public async createPost(postData: CreatePostDto): Promise<Post>{
        if(isEmpty(postData)) throw new HttpException(400, "Post data required");
        const newPost = await this.post.create(postData);
        return newPost;
    }

    public async updatePost(postId: String, postData: CreatePostDto): Promise<Post>{
        if(isEmpty(postId)) throw new HttpException(400, "Post Id required");
        const findPost: Post = await this.post.findById(postId);
        if(!findPost) throw new HttpException(400, `Post id with id ${postId} not found`)
        const newPost: Post = await this.post.findByIdAndUpdate(postId, postData);
        return newPost;
    }

    public async deletePost(postId: String): Promise<Post>{
        if(isEmpty(postId)) throw new HttpException(400, "Post Id required");
        const findAndDelete: Post = await this.post.findByIdAndDelete(postId);
        if(!findAndDelete) throw new HttpException(400, `Post id with id ${postId} not found`);
        return findAndDelete;
    }

}

export default PostService;