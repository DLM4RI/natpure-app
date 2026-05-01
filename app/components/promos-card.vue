<template>
  <v-container>
    <v-card flat rounded="xl" class="overflow-hidden border" elevation="0" style="border-color: rgba(0,0,0,0.05) !important;">
      <v-carousel
        cycle
        interval="5000"
        hide-delimiter-background
        show-arrows="hover"
        :height="$vuetify.display.smAndDown ? 250 : 400"
        class="rounded-xl"
      >
        <v-carousel-item
          v-for="(item, i) in promos"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script setup>
const promos = [
  { src: '/natpure-app/imgs/header-imgs.png' },
  { src: '/natpure-app/imgs/promocion-1.png' },
  { src: '/natpure-app/imgs/rebajas-1.png' }
];
</script>

<style></style>