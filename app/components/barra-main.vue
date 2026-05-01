<template>
  <div>
    <v-app-bar color="background" flat class="border-b" elevation="0">
      <!-- Contenedor alineado con el v-container de Vuetify (max 1280px, centrado) -->
      <div class="header-inner d-flex align-center w-100">

        <!-- Hamburguesa (solo móvil) -->
        <v-btn icon color="primary" class="d-md-none mr-1" @click="drawer = !drawer" variant="text">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <!-- Logo -->
        <div
          class="font-weight-black text-h5 text-primary cursor-pointer tracking-widest"
          @click="router.push('/')"
        >
          NATPURE
        </div>

        <!-- Links de navegación (solo escritorio, inmediatamente después del logo) -->
        <div class="d-none d-md-flex align-center ml-8">
          <v-btn text="Inicio"         color="primary" variant="text" class="text-none font-weight-medium" to="/"></v-btn>
          <v-btn text="Catálogo"       color="primary" variant="text" class="text-none font-weight-medium" to="/catalogo"></v-btn>
          <v-btn text="Sobre Nosotros" color="primary" variant="text" class="text-none font-weight-medium" to="/sobre-nosotros"></v-btn>
        </div>

        <!-- Spacer que empuja el carrito a la derecha -->
        <v-spacer></v-spacer>

        <!-- Carrito -->
        <v-btn icon color="primary" to="/carrito" variant="text">
          <v-badge
            :content="cantidadCarrito"
            :model-value="cantidadCarrito > 0"
            color="error"
          >
            <CartAlt />
          </v-badge>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Drawer móvil -->
    <v-navigation-drawer v-model="drawer" temporary location="left" class="bg-surface">
      <div class="pa-4 border-b">
        <h2 class="text-h5 font-weight-black text-primary tracking-widest">NATPURE</h2>
      </div>
      <v-list density="compact" nav class="mt-4">
        <v-list-item to="/" title="Inicio" color="primary" prepend-icon="mdi-home"></v-list-item>
        <v-list-item to="/catalogo" title="Catálogo" color="primary" prepend-icon="mdi-view-grid"></v-list-item>
        <v-list-item to="/sobre-nosotros" title="Sobre Nosotros" color="primary" prepend-icon="mdi-information"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { CartAlt } from "@boxicons/vue";
import { useProductosStore } from "~/stores/productos";

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

/* Alinear el contenido interno con el v-container de Vuetify (max 1280px centrado) */
.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}

@media (min-width: 960px) {
  .header-inner {
    padding: 0 24px;
  }
}
</style>
