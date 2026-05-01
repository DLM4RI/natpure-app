<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-6 text-primary">Catálogo de Productos</h1>
      </v-col>
    </v-row>
    <v-row>
      <!-- Sidebar de Filtros -->
      <v-col cols="12" md="3">
        <v-card flat class="border rounded-lg bg-surface">
          <v-card-title class="text-h6 font-weight-bold text-primary border-b">
            Categorías
          </v-card-title>
          <v-list bg-color="transparent">
            <v-list-item
              v-for="cat in categorias"
              :key="cat.valor"
              :active="categoriaActiva === cat.valor"
              color="primary"
              @click="alFiltrarCategoria(cat.valor)"
              class="rounded-lg mb-1 mx-2"
            >
              <v-list-item-title>{{ cat.texto }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Cuadrícula de Productos -->
      <v-col cols="12" md="9">
        <manejador-cards>
          <v-col
            v-for="producto in productosFiltrados"
            :key="producto.id"
            cols="12"
            sm="6"
            md="6"
            lg="4"
          >
            <tarjeta
              :producto="producto"
              @agregar-carrito="alAgregarCarrito"
            ></tarjeta>
          </v-col>
        </manejador-cards>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useProductosStore } from "~/stores/productos";

const productosStore = useProductosStore();

const categorias = [
  { texto: "Todos", valor: "todos" },
  { texto: "Naturales", valor: "naturales" },
  { texto: "Orgánicos", valor: "organicos" },
  { texto: "Suplementos", valor: "suplementos" },
];

const categoriaActiva = computed(() => productosStore.categoriaActual);
const productosFiltrados = computed(() => productosStore.productosFiltrados);

const alAgregarCarrito = (producto) => {
  productosStore.agregarAlCarrito(producto);
};

const alFiltrarCategoria = (categoria) => {
  productosStore.filtrarCategoria(categoria);
};
</script>

<style></style>
