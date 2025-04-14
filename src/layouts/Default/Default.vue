<template>
  <header>
    <SearchBar v-model="filterText" />
  </header>
  <main class="default__main">
    <router-view />
  </main>
  <footer />
</template>

<script setup lang="ts">
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import {computed, ref, watch} from "vue";
import {usePostStore} from "../../store/post";
import {storeToRefs} from "pinia";

const store = usePostStore();
const {filteredPosts} = storeToRefs(store);

const filterText = ref<string>('');

const computedFilterPosts = computed(() => {
  if (!filterText.value) return store.posts;
  const user = store.users.find(u =>
      u.name.toLowerCase().includes(filterText.value.toLowerCase())
  );

  return user ? store.posts.filter(post => post.userId === user.id) : [];
});

watch(computedFilterPosts, (newValue) => {
  filteredPosts.value = newValue;
}, {deep: true});
</script>

<style scoped lang="scss" src="./Default.scss" />