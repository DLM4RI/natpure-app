<template>
  <v-card
    class="mx-auto mb-4 h-100 d-flex flex-column tarjeta-hover border"
    max-width="100%"
    elevation="0"
    rounded="xl"
    color="surface"
  >
    <div
      style="cursor: pointer"
      class="overflow-hidden"
      @click="irADetalles(producto.id)"
    >
      <v-img
        height="220px"
        :src="producto.imagen"
        cover
        class="rounded-t-xl img-hover"
      ></v-img>
      <v-card-title
        class="text-h6 font-weight-black text-primary px-4 pt-4 pb-1 text-truncate"
      >
        {{ producto.nombre }}
      </v-card-title>
    </div>

    <v-card-subtitle
      class="text-body-2 mb-2 px-4 text-medium-emphasis text-truncate"
    >
      {{ producto.descripcionCorta }}
    </v-card-subtitle>

    <v-card-text class="flex-grow-1 px-4 py-2">
      <div class="text-h5 font-weight-black text-primary">
        {{ producto.precio }} COP
      </div>
    </v-card-text>

    <v-card-actions class="px-4 pb-4 pt-0 d-flex flex-column align-stretch">
      <v-btn
        color="primary"
        variant="elevated"
        class="btn-hover text-none font-weight-bold rounded-lg mb-2"
        size="large"
        prepend-icon="mdi-cart-plus"
        @click="emit('agregarCarrito', producto)"
      >
        Agregar al Carrito
      </v-btn>

      <v-btn
        variant="tonal"
        color="medium-emphasis"
        class="text-none rounded-lg btn-hover"
        :append-icon="mostrar ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="mostrar = !mostrar"
      >
        {{ mostrar ? "Ocultar detalles" : "Ver más detalles" }}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="mostrar">
        <v-divider></v-divider>
        <v-card-text
          class="pa-4 bg-background text-medium-emphasis text-body-2"
        >
          {{ producto.descripcionLarga || "Descripción no disponible." }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  producto: { type: Object, required: true },
});

const emit = defineEmits(["agregarCarrito"]);
const mostrar = ref(false);
const router = useRouter();

const irADetalles = (id) => {
  router.push(`/producto/${id}`);
};
</script>

<style scoped>
.tarjeta-hover {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-color: rgba(0, 0, 0, 0.05) !important;
}
.tarjeta-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15) !important;
}
.img-hover {
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.tarjeta-hover:hover .img-hover {
  transform: scale(1.08);
}
.btn-hover {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.btn-hover:active {
  transform: scale(0.96);
}
</style>
