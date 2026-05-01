<template>
  <v-container>
    <v-card flat rounded="xl" class="overflow-hidden">
      <v-carousel
        cycle
        interval="5000"
        hide-delimiter-background
        show-arrows="hover"
        height="auto"
        class="rounded-xl"
      >
        <v-carousel-item
          v-for="(item, i) in promos"
          :key="i"
          :src="item.src"
          cover
          :aspect-ratio="16/5"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script setup>
const promos = [
  { src: '/imgs/header-imgs.png' },
  { src: '/imgs/promocion-1.png' },
  { src: '/imgs/rebajas-1.png' }
];
</script>

<style></style>