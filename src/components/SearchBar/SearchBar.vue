<template>
  <div class="input-group mt-4 mb-4 w-50 m-auto">
    <span class="input-group-text">
      <i class="bi bi-search" />
    </span>
    <input
        class="form-control"
        type="text"
        :value="model"
        @input="onInput($event)"
        placeholder="Filter by author..."
    />
  </div>
</template>

<script setup lang="ts">
  const model = defineModel<string>({default: ''});

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    model.value = target.value;
  };
</script>

<style lang="scss" scoped src="./SearchBar.scss" />