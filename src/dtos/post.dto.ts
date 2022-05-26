import { IsString } from 'class-validator';

export class CreatePostDto {

    @IsString()
    public title: string;

    @IsString()
    public author: string;

    @IsString()
    public thumbnail: string;

    @IsString()
    public content: string;

}