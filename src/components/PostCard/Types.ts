import type {IPost} from "../../store/post/types.ts";

export interface IProps {
    post: IPost;
    author: string;
}