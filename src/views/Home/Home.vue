<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="post in filteredPosts" :key="post.id">
        <PostCard :post="post" :author="getAuthorName(post.userId)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {usePostStore} from "../../store/post";
import PostCard from "../../components/PostCard/PostCard.vue";
import {storeToRefs} from "pinia";

const postStore = usePostStore();
const {users, filteredPosts} = storeToRefs(postStore);
const { fetchPostsAndUsers } = postStore;

const getAuthorName = (userId: number) => {
  return users.value.find(u => u.id === userId)?.name || 'Undefined author';
};

onMounted(() => {
  fetchPostsAndUsers()
});
</script>

<style scoped lang="scss" src="./Home.scss" />