import { model, Schema, Document } from 'mongoose';
import { Post } from '@interfaces/post.interface';

const postSchema: Schema = new Schema({
    title : {
        type: String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    thumbnail : {
        type : String,
    },
    content : {
        type : String
    }
}, {timestamps: true});

const postModel = model<Post & Document>('Post', postSchema);

export default postModel;
