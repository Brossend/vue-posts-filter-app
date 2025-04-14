import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type {IPost, IUser} from "./types.ts";

export const usePostStore = defineStore('postStore', () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    });

    const posts = ref<IPost[]>([]);
    const users = ref<IUser[]>([]);
    const filteredPosts = ref<IPost[]>([]);

    const fetchPostsAndUsers = async () => {
        const [postsRes, usersRes] = await Promise.all([
            api.get<IPost[]>('posts'),
            api.get<IUser[]>('users')
        ]);
        posts.value = postsRes.data;
        users.value = usersRes.data;
    };

    return {
        posts,
        users,
        filteredPosts,
        fetchPostsAndUsers
    }
});