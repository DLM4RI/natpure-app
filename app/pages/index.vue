<template>
  <v-container>
    <promos-card></promos-card>

    <div v-for="cat in categorias" :key="cat.id" class="mt-8 mb-4">
      <v-row class="mb-2 align-center">
        <v-col>
          <h2 class="text-h5 text-primary font-weight-bold ml-4">
            {{ cat.titulo }}
          </h2>
        </v-col>
        <v-col cols="auto">
          <v-btn
            variant="text"
            color="primary"
            class="text-none"
            :to="'/catalogo'"
            >Ver todo</v-btn
          >
        </v-col>
      </v-row>

      <v-slide-group show-arrows class="pa-2">
        <v-slide-group-item
          v-for="producto in obtenerProductosPorCategoria(cat.id)"
          :key="producto.id"
        >
          <div class="ma-2 tarjeta-wrap">
            <tarjeta
              :producto="producto"
              @agregar-carrito="alAgregarCarrito"
            ></tarjeta>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useProductosStore } from "~/stores/productos";

const productosStore = useProductosStore();

const categorias = [
  { id: "naturales", titulo: "Naturales" },
  { id: "organicos", titulo: "Orgánicos" },
  { id: "suplementos", titulo: "Suplementos" },
];

const obtenerProductosPorCategoria = (categoriaId: string) => {
  return productosStore.productos.filter((p) => p.categoria === categoriaId);
};

const alAgregarCarrito = (producto) => {
  productosStore.agregarAlCarrito(producto);
};
</script>

<style>
/* Ancho de las tarjetas en el carrusel por breakpoint */
.tarjeta-wrap {
  width: calc(50vw - 24px); /* móvil: 2 por fila aprox */
}
@media (min-width: 600px) {
  .tarjeta-wrap { width: 240px; }
}
@media (min-width: 960px) {
  .tarjeta-wrap { width: 280px; }
}
@media (min-width: 1280px) {
  .tarjeta-wrap { width: 300px; }
}
</style>
