<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-6 text-primary">Sobre Nosotros</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" v-for="miembro in equipo" :key="miembro.id">
        <v-card class="mx-auto h-100" max-width="344" elevation="2" rounded="lg">
          <v-img height="200px" :src="miembro.imagen" cover class="rounded-t-lg"></v-img>
          <v-card-title class="text-primary font-weight-bold pb-0">{{ miembro.nombre }}</v-card-title>
          <v-card-subtitle class="text-medium-emphasis font-weight-medium pt-1 pb-2">{{ miembro.rol }}</v-card-subtitle>
          <v-card-text class="text-body-1 text-medium-emphasis">{{ miembro.descripcion }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-center mb-6 text-primary">Contacto</h2>
        <v-card class="mx-auto bg-surface" max-width="600" elevation="2" rounded="lg">
          <v-card-text class="pa-6 text-body-1 text-medium-emphasis">
            <p class="mb-4">Para más información, contáctanos en:</p>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-email</v-icon>
              <span>Email: mc802214@gmail.com</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
              <span>Teléfono: +57 3053556160</span>
            </div>
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
              <span>Dirección: Monteria, Cordoba, Colombia</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sección: Tecnologías Usadas -->
    <v-row class="mt-12 mb-8">
      <v-col cols="12">
        <h2 class="text-center text-primary mb-2">Tecnologías Usadas</h2>
        <p class="text-center text-medium-emphasis mb-8">Las herramientas y lenguajes que hacen posible esta plataforma</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col
        v-for="tech in tecnologias"
        :key="tech.nombre"
        cols="6" sm="4" md="3" lg="2"
        class="d-flex justify-center mb-4"
      >
        <div class="tech-card text-center pa-4">
          <div class="tech-icon-wrapper mb-3" :style="{ background: tech.bgColor }">
            <span class="tech-icon" :style="{ color: tech.color }">{{ tech.icono }}</span>
          </div>
          <div class="text-body-2 font-weight-bold text-primary text-truncate">{{ tech.nombre }}</div>
          <div class="text-caption text-medium-emphasis">{{ tech.categoria }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const equipo = [
  {
    id: 1,
    nombre: "Fabio Cantero",
    rol: "Base de datos",
    descripcion: "Especialista en arquitectura y optimización de bases de datos. Fabio asegura que toda la información fluya de manera segura, rápida y escalable, permitiendo a nuestra plataforma manejar grandes volúmenes de datos sin despeinarse.",
    imagen: "/natpure-app/imgs/fabio.jpeg",
  },
  {
    id: 2,
    nombre: "Mario Castro",
    rol: "Desarrollador",
    descripcion: "Apasionado por la tecnología y la creación de soluciones eficientes. Mario es el cerebro detrás de la lógica de nuestra aplicación, enfocándose siempre en un código limpio, estructurado y de alto rendimiento.",
    imagen: "/natpure-app/imgs/mario.jpeg",
  },
  {
    id: 3,
    nombre: "Andrea Hernandez",
    rol: "Diseñadora",
    descripcion: "Con un ojo impecable para el detalle y la estética, Andrea transforma conceptos complejos en interfaces intuitivas y hermosas. Su objetivo principal es asegurar una experiencia de usuario que sea funcional y visualmente espectacular.",
    imagen: "/natpure-app/imgs/andrea.jpeg",
  },
];

const tecnologias = [
  { nombre: "Vue.js 3",    categoria: "Framework",     icono: "⚡",  color: "#42b883", bgColor: "rgba(66,184,131,0.12)" },
  { nombre: "Nuxt 4",      categoria: "Meta-Framework", icono: "🔺",  color: "#00dc82", bgColor: "rgba(0,220,130,0.12)"  },
  { nombre: "TypeScript",  categoria: "Lenguaje",       icono: "📘",  color: "#3178c6", bgColor: "rgba(49,120,198,0.12)" },
  { nombre: "JavaScript",  categoria: "Lenguaje",       icono: "🟨",  color: "#f7df1e", bgColor: "rgba(247,223,30,0.12)" },
  { nombre: "HTML5",       categoria: "Marcado",        icono: "🔶",  color: "#e34f26", bgColor: "rgba(227,79,38,0.12)"  },
  { nombre: "CSS3",        categoria: "Estilos",        icono: "🎨",  color: "#1572b6", bgColor: "rgba(21,114,182,0.12)" },
  { nombre: "Vuetify 3",   categoria: "UI Kit",         icono: "💎",  color: "#1867c0", bgColor: "rgba(24,103,192,0.12)" },
  { nombre: "Pinia",       categoria: "Estado Global",  icono: "🍍",  color: "#f5c518", bgColor: "rgba(245,197,24,0.12)" },
  { nombre: "Vite",        categoria: "Bundler",        icono: "⚡",  color: "#646cff", bgColor: "rgba(100,108,255,0.12)"},
  { nombre: "GitHub Pages",categoria: "Despliegue",     icono: "🐙",  color: "#333",    bgColor: "rgba(0,0,0,0.07)"      },
  { nombre: "Git",         categoria: "Control Versión",icono: "🌿",  color: "#f05032", bgColor: "rgba(240,80,50,0.12)"  },
  { nombre: "Node.js",     categoria: "Entorno",        icono: "🟢",  color: "#339933", bgColor: "rgba(51,153,51,0.12)"  },
];
</script>

<style scoped>
.tech-card {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  width: 120px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.tech-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.14);
}
.tech-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.tech-icon {
  font-size: 1.75rem;
  line-height: 1;
}
</style>
