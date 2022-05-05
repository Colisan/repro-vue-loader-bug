<script setup lang="ts">
    import { toto } from './index';

    const greeting= 'Hello ' + toto + ' !';
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
