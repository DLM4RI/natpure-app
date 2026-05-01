<template>
  <div>
    <v-app-bar color="background" flat class="border-b px-2 px-md-4">
      <!-- Menú de Hamburguesa (Solo Móvil) -->
      <v-app-bar-nav-icon color="primary" class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Título / Logo Clickable -->
      <div 
        class="font-weight-black text-h5 text-primary cursor-pointer tracking-widest d-flex align-center ml-2 ml-md-0" 
        @click="router.push('/')"
      >
        NATPURE
      </div>

      <v-spacer></v-spacer>

      <!-- Menú Centrado (Solo Escritorio) -->
      <div class="d-none d-md-flex align-center justify-center position-absolute w-100" style="left: 0; pointer-events: none;">
        <div style="pointer-events: auto;">
          <v-btn text="Inicio" color="primary" variant="text" class="mx-2 text-none font-weight-medium" to="/"></v-btn>
          <v-btn text="Catálogo" color="primary" variant="text" class="mx-2 text-none font-weight-medium" to="/catalogo"></v-btn>
          <v-btn text="Sobre Nosotros" color="primary" variant="text" class="mx-2 text-none font-weight-medium" to="/sobre-nosotros"></v-btn>
        </div>
      </div>

      <v-spacer></v-spacer>

      <!-- Icono del Carrito -->
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

    <!-- Drawer de Navegación (Solo Móvil) -->
    <v-navigation-drawer v-model="drawer" temporary location="left" class="bg-surface">
      <div class="pa-4 border-b">
        <h2 class="text-h5 font-weight-black text-primary tracking-widest">NATPURE</h2>
      </div>
      <v-list density="compact" nav class="mt-4">
        <v-list-item to="/" title="Inicio" color="primary">
          <template v-slot:prepend><Home class="mr-4 text-medium-emphasis"/></template>
        </v-list-item>
        <v-list-item to="/catalogo" title="Catálogo" color="primary">
          <template v-slot:prepend><Grid class="mr-4 text-medium-emphasis"/></template>
        </v-list-item>
        <v-list-item to="/sobre-nosotros" title="Sobre Nosotros" color="primary">
          <template v-slot:prepend><InfoCircle class="mr-4 text-medium-emphasis"/></template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { CartAlt, Home, Grid, InfoCircle } from "@boxicons/vue";
import { useProductosStore } from '~/stores/productos';

const drawer = ref(false);
const router = useRouter();
const productosStore = useProductosStore();
const cantidadCarrito = computed(() => productosStore.cantidadTotalCarrito);
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.tracking-widest {
  letter-spacing: 0.15em;
}
</style>
