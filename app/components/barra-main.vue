<template>
  <v-app-bar color="background" flat class="border-b">
    <v-app-bar-title
      class="font-weight-bold text-h5 text-primary"
    >
      NATPURE
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text="Inicio" color="primary" variant="text" :to="'/'"></v-btn>
    <v-btn text="Catálogo" color="primary" variant="text" :to="'/catalogo'"></v-btn>
    <v-btn text="Sobre Nosotros" color="primary" variant="text" :to="'/sobre-nosotros'"></v-btn>

    <v-btn icon color="primary" to="/carrito">
      <v-badge
        :content="cantidadCarrito"
        :model-value="cantidadCarrito > 0"
        color="error"
      >
        <CartAlt />
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CartAlt } from "@boxicons/vue";
import { useProductosStore } from '~/stores/productos';

const productosStore = useProductosStore();
const cantidadCarrito = computed(() => productosStore.cantidadTotalCarrito);
</script>

<style></style>
