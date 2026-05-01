<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-6 text-primary">Sobre Nosotros</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" v-for="miembro in equipo" :key="miembro.id">
        <v-card
          class="mx-auto h-100"
          max-width="344"
          elevation="2"
          rounded="lg"
        >
          <v-img
            height="200px"
            :src="miembro.imagen"
            cover
            class="rounded-t-lg"
          ></v-img>
          <v-card-title class="text-primary font-weight-bold pb-0">{{
            miembro.nombre
          }}</v-card-title>
          <v-card-subtitle
            class="text-medium-emphasis font-weight-medium pt-1 pb-2"
            >{{ miembro.rol }}</v-card-subtitle
          >
          <v-card-text class="text-body-1 text-medium-emphasis">{{
            miembro.descripcion
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-center mb-6 text-primary">Contacto</h2>
        <v-card
          class="mx-auto bg-surface"
          max-width="600"
          elevation="2"
          rounded="lg"
        >
          <v-card-text class="pa-6 text-body-1 text-medium-emphasis">
            <p class="mb-4">Para más información, contáctanos en:</p>
            <div class="d-flex align-center mb-2">
              <Envelope color="primary" class="mr-2 text-primary" style="font-size: 1.25rem;" />
              <span>Email: mc802214@gmail.com</span>
            </div>
            <div class="d-flex align-center mb-2">
              <Phone color="primary" class="mr-2 text-primary" style="font-size: 1.25rem;" />
              <span>Teléfono: +57 3053556160</span>
            </div>
            <div class="d-flex align-center">
              <Map color="primary" class="mr-2 text-primary" style="font-size: 1.25rem;" />
              <span>Dirección: Monteria, Cordoba, Colombia</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { Envelope, Phone, Map } from "@boxicons/vue";

const equipo = [
  {
    id: 1,
    nombre: "Fabio Cantero",
    rol: "Base de datos",
    descripcion:
      "Especialista en arquitectura y optimización de bases de datos. Fabio asegura que toda la información fluya de manera segura, rápida y escalable, permitiendo a nuestra plataforma manejar grandes volúmenes de datos sin despeinarse.",
    imagen: "/natpure-app/imgs/fabio.jpeg",
  },
  {
    id: 2,
    nombre: "Mario Castro",
    rol: "Desarrollador",
    descripcion:
      "Apasionado por la tecnología y la creación de soluciones eficientes. Mario es el cerebro detrás de la lógica de nuestra aplicación, enfocándose siempre en un código limpio, estructurado y de alto rendimiento.",
    imagen: "/natpure-app/imgs/mario.jpeg",
  },
  {
    id: 3,
    nombre: "Andrea Hernandez",
    rol: "Diseñadora",
    descripcion:
      "Con un ojo impecable para el detalle y la estética, Andrea transforma conceptos complejos en interfaces intuitivas y hermosas. Su objetivo principal es asegurar una experiencia de usuario que sea funcional y visualmente espectacular.",
    imagen: "/natpure-app/imgs/andrea.jpeg",
  },
];
</script>

<style></style>
