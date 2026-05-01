<template>
  <v-container v-if="producto" class="py-8">
    <v-btn
      variant="text"
      color="primary"
      class="mb-6 px-0"
      @click="router.back()"
      prepend-icon="mdi-arrow-left"
    >
      Volver
    </v-btn>

    <!-- Detalles Principales -->
    <v-row>
      <!-- Imagen -->
      <v-col cols="12" md="6">
        <v-card elevation="2" rounded="xl" class="overflow-hidden bg-surface">
          <v-img
            :src="producto.imagen"
            aspect-ratio="1"
            cover
            class="bg-background"
          ></v-img>
        </v-card>
      </v-col>

      <!-- Info -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center pl-md-8">
        <div class="mb-2 text-overline text-medium-emphasis text-uppercase tracking-wide">
          {{ producto.categoria }}
        </div>
        <h1 class="text-h3 font-weight-bold text-primary mb-2">
          {{ producto.nombre }}
        </h1>
        <div class="text-h4 font-weight-bold text-success mb-6">
          {{ producto.precio }}€
        </div>
        
        <p class="text-body-1 text-medium-emphasis mb-6 leading-relaxed">
          {{ producto.descripcionLarga || producto.descripcionCorta || 'Descripción detallada no disponible para este producto.' }}
        </p>

        <v-divider class="mb-6"></v-divider>

        <div class="d-flex align-center mb-6">
          <span class="text-subtitle-1 font-weight-medium mr-4 text-primary">Cantidad:</span>
          <v-btn icon="mdi-minus" variant="tonal" color="primary" size="small" @click="disminuirCantidad"></v-btn>
          <span class="mx-4 text-h6">{{ cantidad }}</span>
          <v-btn icon="mdi-plus" variant="tonal" color="primary" size="small" @click="aumentarCantidad"></v-btn>
        </div>

        <v-btn
          color="primary"
          size="x-large"
          variant="elevated"
          block
          prepend-icon="mdi-cart"
          class="text-none font-weight-bold"
          rounded="lg"
          @click="alAgregarCarrito"
        >
          Agregar al Carrito
        </v-btn>
      </v-col>
    </v-row>

    <!-- Sugerencias -->
    <v-row class="mt-16">
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold text-primary mb-6">También te podría interesar</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="sugerencia in sugerencias"
        :key="sugerencia.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <tarjeta :producto="sugerencia" @agregar-carrito="alAgregarSugerenciaCarrito"></tarjeta>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="py-16 text-center">
    <v-icon size="64" color="medium-emphasis" class="mb-4">mdi-alert-circle-outline</v-icon>
    <h2 class="text-h4 text-primary mb-4">Producto no encontrado</h2>
    <v-btn color="primary" to="/catalogo">Volver al Catálogo</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductosStore } from '~/stores/productos'

const route = useRoute()
const router = useRouter()
const productosStore = useProductosStore()

const productoId = computed(() => Number(route.params.id))

const producto = computed(() => {
  return productosStore.obtenerProductoPorId(productoId.value)
})

const sugerencias = computed(() => {
  return productosStore.obtenerSugerencias(productoId.value, 4)
})

const cantidad = ref(1)

const aumentarCantidad = () => {
  cantidad.value++
}

const disminuirCantidad = () => {
  if (cantidad.value > 1) {
    cantidad.value--
  }
}

const alAgregarCarrito = () => {
  if (producto.value) {
    // Aquí idealmente pasarías también la cantidad
    productosStore.agregarAlCarrito({ ...producto.value, cantidad: cantidad.value })
  }
}

const alAgregarSugerenciaCarrito = (prodSugerido) => {
  productosStore.agregarAlCarrito(prodSugerido)
}
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.1em;
}
.leading-relaxed {
  line-height: 1.6;
}
</style>
