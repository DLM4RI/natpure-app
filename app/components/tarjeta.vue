<template>
  <v-card
    class="mx-auto mb-4 h-100 d-flex flex-column tarjeta-hover"
    max-width="344"
    elevation="2"
    rounded="lg"
    hover
    color="surface"
  >
    <div style="cursor: pointer" class="overflow-hidden" @click="irADetalles(producto.id)">
      <v-img
        height="200px"
        :src="producto.imagen"
        cover
        class="rounded-t-lg img-hover"
      ></v-img>

      <v-card-title class="text-h6 font-weight-bold text-primary">
        {{ producto.nombre }}
      </v-card-title>
    </div>

    <v-card-subtitle class="text-body-2 mb-2 text-medium-emphasis">
      {{ producto.descripcionCorta }}
    </v-card-subtitle>

    <v-card-text class="flex-grow-1">
      <div class="text-h5 font-weight-bold text-primary">
        {{ producto.precio }}€
      </div>
    </v-card-text>

    <v-card-actions class="pa-4 pt-0">
      <v-btn
        color="primary"
        variant="elevated"
        block
        class="btn-hover"
        @click="emit('agregarCarrito', producto)"
      >
        Agregar al Carrito
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="mostrar">
        <v-divider></v-divider>
        <v-card-text class="pa-4 bg-background text-medium-emphasis">
          {{ producto.descripcionLarga || 'Descripción no disponible.' }}
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions class="justify-center pt-0">
      <v-btn
        icon="mdi-chevron-down"
        v-if="!mostrar"
        @click="mostrar = true"
        color="primary"
      ></v-btn>
      <v-btn
        icon="mdi-chevron-up"
        v-else
        @click="mostrar = false"
        color="primary"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  producto: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['agregarCarrito']);

const mostrar = ref(false);
const router = useRouter();

const irADetalles = (id) => {
  router.push(`/producto/${id}`);
};
</script>

<style scoped>
.tarjeta-hover {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.tarjeta-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 20px -10px rgba(46, 125, 50, 0.3) !important;
}

.img-hover {
  transition: transform 0.5s ease;
}
.tarjeta-hover:hover .img-hover {
  transform: scale(1.05);
}

.btn-hover {
  transition: transform 0.2s ease;
}
.btn-hover:hover {
  transform: scale(1.03);
}
</style>
