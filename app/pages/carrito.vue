<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold text-primary mb-8">Tu Carrito de Compras</h1>

    <v-row v-if="carrito.length > 0">
      <v-col cols="12" md="8">
        <v-card v-for="item in carrito" :key="item.id" class="mb-4 pa-4 bg-surface" elevation="2" rounded="lg">
          <v-row align="center">
            <!-- Imagen -->
            <v-col cols="12" sm="3" md="2">
              <v-img :src="item.imagen" cover height="80" class="rounded"></v-img>
            </v-col>
            
            <!-- Detalles -->
            <v-col cols="12" sm="4" md="4">
              <div class="text-h6 font-weight-bold text-primary">{{ item.nombre }}</div>
              <div class="text-body-2 text-medium-emphasis">Precio Unitario: {{ item.precio.toFixed(2) }}€</div>
            </v-col>

            <!-- Controles de Cantidad -->
            <v-col cols="12" sm="3" md="3" class="d-flex align-center justify-center">
              <v-btn icon="mdi-minus" size="small" variant="tonal" color="primary" @click="actualizarCantidad(item.id, -1)" :disabled="item.cantidad <= 1"></v-btn>
              <span class="mx-4 text-h6 font-weight-bold">{{ item.cantidad }}</span>
              <v-btn icon="mdi-plus" size="small" variant="tonal" color="primary" @click="actualizarCantidad(item.id, 1)" :disabled="item.cantidad >= 99"></v-btn>
            </v-col>

            <!-- Total Item y Remover -->
            <v-col cols="12" sm="2" md="3" class="d-flex align-center justify-space-between">
              <div class="text-h6 font-weight-bold text-primary">{{ (item.precio * item.cantidad).toFixed(2) }}€</div>
              <v-btn icon="mdi-delete" variant="text" color="error" @click="removerItem(item.id)"></v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Resumen Lateral -->
      <v-col cols="12" md="4">
        <v-card class="pa-6 bg-surface" elevation="2" rounded="lg">
          <h2 class="text-h5 font-weight-bold text-primary mb-6">Resumen de la Orden</h2>
          
          <div class="d-flex justify-space-between mb-4">
            <span class="text-body-1 text-medium-emphasis">Artículos ({{ cantidadTotal }})</span>
            <span class="text-body-1 font-weight-bold">{{ total.toFixed(2) }}€</span>
          </div>
          
          <v-divider class="mb-4"></v-divider>
          
          <div class="d-flex justify-space-between mb-8">
            <span class="text-h6 font-weight-bold text-primary">Total a Pagar</span>
            <span class="text-h5 font-weight-bold text-success">{{ total.toFixed(2) }}€</span>
          </div>

          <v-btn color="primary" size="x-large" block variant="elevated" rounded="lg" to="/checkout" class="font-weight-bold">
            Proceder al Pago
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Estado Vacío -->
    <v-row v-else class="text-center py-16">
      <v-col cols="12">
        <v-icon size="80" color="medium-emphasis" class="mb-6">mdi-cart-outline</v-icon>
        <h2 class="text-h4 text-primary mb-4">Tu carrito está vacío</h2>
        <p class="text-body-1 text-medium-emphasis mb-8">¡Añade algunos productos fantásticos antes de proceder al pago!</p>
        <v-btn color="primary" size="large" to="/catalogo" variant="elevated">Explorar Catálogo</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useProductosStore } from '~/stores/productos'

const productosStore = useProductosStore()

const carrito = computed(() => productosStore.carrito)
const total = computed(() => productosStore.totalCarrito)
const cantidadTotal = computed(() => productosStore.cantidadTotalCarrito)

const actualizarCantidad = (id: number, cambio: number) => {
  productosStore.actualizarCantidad(id, cambio)
}

const removerItem = (id: number) => {
  productosStore.removerDelCarrito(id)
}
</script>

<style scoped></style>
