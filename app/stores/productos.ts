import { defineStore } from 'pinia'

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: [
      {
        id: 1,
        nombre: 'Producto 1',
        descripcionCorta: 'Descripción corta 1',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        descripcionLarga: 'Descripción detallada del producto 1.',
        categoria: 'naturales',
        precio: 10.99
      },
      {
        id: 2,
        nombre: 'Producto 2',
        descripcionCorta: 'Descripción corta 2',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        descripcionLarga: 'Descripción detallada del producto 2.',
        categoria: 'organicos',
        precio: 15.50
      },
      {
        id: 3,
        nombre: 'Producto 3',
        descripcionCorta: 'Descripción corta 3',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/cherry.jpg',
        descripcionLarga: 'Descripción detallada del producto 3.',
        categoria: 'suplementos',
        precio: 8.75
      },
      {
        id: 4,
        nombre: 'Producto 4',
        descripcionCorta: 'Descripción corta 4',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        descripcionLarga: 'Descripción detallada del producto 4.',
        categoria: 'naturales',
        precio: 12.00
      },
      {
        id: 5,
        nombre: 'Producto 5',
        descripcionCorta: 'Descripción corta 5',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/contemplative-woman.jpg',
        descripcionLarga: 'Descripción detallada del producto 5.',
        categoria: 'organicos',
        precio: 20.25
      },
      {
        id: 6,
        nombre: 'Producto 6',
        descripcionCorta: 'Descripción corta 6',
        imagen: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        descripcionLarga: 'Descripción detallada del producto 6.',
        categoria: 'suplementos',
        precio: 9.99
      },
      {
        id: 7,
        nombre: 'Té Verde Natural',
        descripcionCorta: 'Té orgánico de hoja verde',
        imagen: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Té+Verde',
        descripcionLarga: 'Té verde 100% natural, rico en antioxidantes.',
        categoria: 'naturales',
        precio: 5.50
      },
      {
        id: 8,
        nombre: 'Aceite de Coco Orgánico',
        descripcionCorta: 'Aceite puro de coco',
        imagen: 'https://via.placeholder.com/300x200/8BC34A/FFFFFF?text=Aceite+Coco',
        descripcionLarga: 'Aceite de coco virgen orgánico, ideal para cocina y cuidado personal.',
        categoria: 'organicos',
        precio: 12.99
      },
      {
        id: 9,
        nombre: 'Vitamina C Natural',
        descripcionCorta: 'Suplemento de vitamina C',
        imagen: 'https://via.placeholder.com/300x200/FFC107/000000?text=Vitamina+C',
        descripcionLarga: 'Suplemento natural de vitamina C extraído de frutas cítricas.',
        categoria: 'suplementos',
        precio: 8.75
      }
    ],
    categoriaActual: 'todos',
    carrito: []
  }),

  getters: {
    productosFiltrados: (state) => {
      if (state.categoriaActual === 'todos') {
        return state.productos
      }
      return state.productos.filter(producto => producto.categoria === state.categoriaActual)
    },
    obtenerProductoPorId: (state) => {
      return (id: number) => state.productos.find((producto) => producto.id === id)
    },
    obtenerSugerencias: (state) => {
      return (idExcluido: number, cantidad: number = 4) => {
        const sugerencias = state.productos.filter(p => p.id !== idExcluido)
        // Mezclar aleatoriamente y devolver 'cantidad' elementos
        return sugerencias.sort(() => 0.5 - Math.random()).slice(0, cantidad)
      }
    },
    totalCarrito: (state) => {
      return state.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    },
    cantidadTotalCarrito: (state) => {
      return state.carrito.reduce((total, item) => total + item.cantidad, 0)
    }
  },

  actions: {
    filtrarCategoria(categoria) {
      this.categoriaActual = categoria
    },

    agregarAlCarrito(producto) {
      const cantidadAAgregar = producto.cantidad || 1
      const itemExistente = this.carrito.find(item => item.id === producto.id)
      
      if (itemExistente) {
        if (itemExistente.cantidad + cantidadAAgregar <= 99) {
          itemExistente.cantidad += cantidadAAgregar
        } else {
          itemExistente.cantidad = 99
        }
      } else {
        const nuevoItem = { ...producto, cantidad: Math.min(cantidadAAgregar, 99) }
        this.carrito.push(nuevoItem)
      }
    },

    actualizarCantidad(id, cambio) {
      const item = this.carrito.find(item => item.id === id)
      if (item) {
        const nuevaCantidad = item.cantidad + cambio
        if (nuevaCantidad > 0 && nuevaCantidad <= 99) {
          item.cantidad = nuevaCantidad
        }
      }
    },

    removerDelCarrito(id) {
      this.carrito = this.carrito.filter(item => item.id !== id)
    },

    vaciarCarrito() {
      this.carrito = []
    }
  }
})