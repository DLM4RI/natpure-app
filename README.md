# 🌿 NATPURE

> Plataforma de e-commerce para productos 100% naturales y orgánicos, desarrollada como proyecto académico.

🔗 **Demo en vivo:** [dlm4ri.github.io/natpure-app](https://dlm4ri.github.io/natpure-app)

---

## 👥 Equipo de Desarrollo

| Nombre | Rol | Descripción |
|--------|-----|-------------|
| **Fabio Cantero** | Base de Datos | Especialista en arquitectura y optimización de bases de datos. Garantiza que la información fluya de forma segura y escalable. |
| **Mario Castro** | Desarrollador | Responsable de la lógica de la aplicación. Enfocado en código limpio, estructurado y de alto rendimiento. |
| **Andrea Hernández** | Diseñadora | Transforma conceptos en interfaces intuitivas y atractivas, asegurando una experiencia de usuario visual y funcionalmente impecable. |

---

## 📋 Descripción del Proyecto

**NatPure** es una tienda en línea de productos naturales y orgánicos. Permite a los usuarios explorar un catálogo de productos, ver detalles individuales, agregar productos al carrito y gestionar su compra.

El proyecto fue desarrollado con tecnologías modernas del ecosistema Vue y desplegado de forma estática en GitHub Pages.

---

## ✨ Funcionalidades

- **Catálogo de productos** con filtrado por categoría (Naturales, Orgánicos, Suplementos)
- **Página de detalle** por producto con descripción completa y selector de cantidad
- **Carrito de compras** con gestión de cantidades y resumen del pedido
- **Página de checkout** con formulario de confirmación
- **Sugerencias de productos** relacionados en cada detalle
- **Página Sobre Nosotros** con equipo y tecnologías usadas
- Diseño **responsive** adaptado a móvil y escritorio

---

## 🛠️ Tecnologías Usadas

### Frontend
| Tecnología | Categoría | Descripción |
|------------|-----------|-------------|
| Vue.js 3 | Framework | Framework progresivo para interfaces de usuario |
| Nuxt 4 | Meta-Framework | Generación estática y enrutamiento automático |
| TypeScript | Lenguaje | Tipado estático para mayor robustez del código |
| JavaScript | Lenguaje | Lógica dinámica del cliente |
| HTML5 | Marcado | Estructura semántica de la aplicación |
| CSS3 | Estilos | Estilos y animaciones personalizadas |

### UI & Estado
| Tecnología | Categoría | Descripción |
|------------|-----------|-------------|
| Vuetify 3 | UI Kit | Componentes Material Design para Vue |
| Pinia | Estado Global | Manejo centralizado del carrito y productos |

### Herramientas
| Tecnología | Categoría | Descripción |
|------------|-----------|-------------|
| Vite | Bundler | Compilación rápida y optimizada |
| Node.js | Entorno | Entorno de ejecución para el desarrollo |
| Git | Control de Versiones | Gestión del historial del proyecto |
| GitHub Pages | Despliegue | Hosting estático gratuito |

---

## 📁 Estructura del Proyecto

```
natpure-app/
├── app/
│   ├── components/        # Componentes reutilizables
│   │   ├── tarjeta.vue    # Tarjeta de producto
│   │   ├── navbar.vue     # Barra de navegación
│   │   └── footer-main.vue
│   ├── pages/             # Páginas de la app
│   │   ├── index.vue      # Inicio
│   │   ├── catalogo.vue   # Catálogo completo
│   │   ├── producto/
│   │   │   └── [id].vue   # Detalle de producto
│   │   ├── carrito.vue    # Carrito de compras
│   │   ├── checkout.vue   # Finalizar compra
│   │   └── sobre-nosotros.vue
│   ├── stores/
│   │   └── productos.ts   # Store Pinia (productos + carrito)
│   └── plugins/
│       └── vuetify.ts     # Configuración de Vuetify
├── public/
│   └── productos/         # Imágenes de productos
└── nuxt.config.ts
```

---

## 🚀 Instalación y Uso Local

```bash
# Clonar el repositorio
git clone https://github.com/dlm4ri/natpure-app.git
cd natpure-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000/natpure-app/](http://localhost:3000/natpure-app/) en tu navegador.

---

## 📦 Despliegue en GitHub Pages

```bash
# Generar build estático y desplegar
npx nuxi generate && touch .output/public/.nojekyll && npx gh-pages -d .output/public --dotfiles
```

---

## 📬 Contacto

- 📧 **Email:** mc802214@gmail.com
- 📞 **Teléfono:** +57 3053556160
- 📍 **Ubicación:** Montería, Córdoba, Colombia

---

<p align="center">
  &copy; 2025 NATPURE — Todos los derechos reservados
</p>
