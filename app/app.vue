<template>
  <v-app class="bg-background">
    <barra-main @abrir-carrito="onAbrirCarrito"></barra-main>
    <v-main>
      <NuxtPage />
    </v-main>
    <footer-main></footer-main>
  </v-app>
</template>

<script lang="ts" setup>
const onAbrirCarrito = () => {
  console.log("Abrir carrito desde app global");
};
</script>

<style></style>
