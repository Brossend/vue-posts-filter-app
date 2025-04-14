<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title text-primary">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
    </div>
    <div class="card-footer text-muted">
      {{ author }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {IProps} from "./Types.ts";

  defineProps<IProps>();
</script>

<style scoped lang="scss" src="./PostCard.scss" />