<script setup></script>

<template>
  <v-footer color="surface" class="border-t d-flex flex-column pa-0 mt-8">
    <v-container class="py-12">
      <v-row>
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-left d-flex flex-column justify-center mb-6 mb-md-0"
        >
          <h1
            class="text-h3 font-weight-black text-primary mb-2 tracking-widest"
          >
            NATPURE
          </h1>
          <p class="text-medium-emphasis text-body-1">
            Productos 100% naturales y orgánicos para mejorar tu estilo de vida.
          </p>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          class="text-center text-md-left mb-6 mb-sm-0"
        >
          <h3 class="text-h6 font-weight-bold text-primary mb-4">
            Enlaces Rápidos
          </h3>
          <div class="d-flex flex-column align-center align-md-start">
            <v-btn
              variant="text"
              color="medium-emphasis"
              class="text-none px-0"
              to="/"
              >Inicio</v-btn
            >
            <v-btn
              variant="text"
              color="medium-emphasis"
              class="text-none px-0"
              to="/catalogo"
              >Catálogo</v-btn
            >
            <v-btn
              variant="text"
              color="medium-emphasis"
              class="text-none px-0"
              to="/sobre-nosotros"
              >Sobre Nosotros</v-btn
            >
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="text-center text-md-left">
          <h3 class="text-h6 font-weight-bold text-primary mb-4">Contacto</h3>
          <div class="d-flex align-center justify-center justify-md-start mb-3">
            <v-icon color="primary" class="mr-3">mdi-email</v-icon>
            <span class="text-body-1 text-medium-emphasis"
              >mc802214@gmail.com</span
            >
          </div>
          <div class="d-flex align-center justify-center justify-md-start mb-3">
            <v-icon color="primary" class="mr-3">mdi-phone</v-icon>
            <span class="text-body-1 text-medium-emphasis">+57 3053556160</span>
          </div>
          <div class="d-flex align-center justify-center justify-md-start">
            <v-icon color="primary" class="mr-3">mdi-map-marker</v-icon>
            <span class="text-body-1 text-medium-emphasis"
              >Monteria, Cordoba, Colombia</span
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="bg-primary w-100 text-center py-4">
      <span class="text-white text-body-2 font-weight-medium">
        &copy; {{ new Date().getFullYear() }} NATPURE. Todos los derechos
        reservados.
      </span>
    </div>
  </v-footer>
</template>

<style scoped>
.tracking-widest {
  letter-spacing: 0.15em;
}
</style>
