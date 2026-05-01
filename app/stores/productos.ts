import { defineStore } from 'pinia'

interface Producto {
  id: number
  nombre: string
  descripcionCorta: string
  imagen: string
  descripcionLarga: string
  categoria: string
  precio: number
}

interface ItemCarrito extends Producto {
  cantidad: number
}

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: [
      { id: 1, nombre: 'Sérum Base', descripcionCorta: 'Base sérum con botánicos hidratantes', imagen: '/natpure-app/productos/imagen1.png', descripcionLarga: 'Base natural tipo sérum con ingredientes botánicos que hidratan la piel mientras ofrecen cobertura ligera y luminosa.', categoria: 'naturales', precio: 190000 },
      { id: 2, nombre: 'Base SPF15', descripcionCorta: 'Base con ácido hialurónico y SPF', imagen: '/natpure-app/productos/imagen2.png', descripcionLarga: 'Base facial con ácido hialurónico y protección solar SPF15 natural. Cuida e iguala el tono al mismo tiempo.', categoria: 'naturales', precio: 240000 },
      { id: 3, nombre: 'Vit C INIKA', descripcionCorta: 'Sérum antioxidante con vitamina C', imagen: '/natpure-app/productos/imagen3.png', descripcionLarga: 'Sérum antioxidante con vitamina C de origen natural. Ilumina, unifica y protege la piel del daño oxidativo.', categoria: 'suplementos', precio: 260000 },
      { id: 4, nombre: 'Solar SPF50', descripcionCorta: 'Protector solar mineral orgánico', imagen: '/natpure-app/productos/imagen4.png', descripcionLarga: 'Protector solar de alta protección con filtros minerales y fórmula orgánica. Sin químicos agresivos para la piel.', categoria: 'organicos', precio: 170000 },
      { id: 5, nombre: 'RMS Tinted', descripcionCorta: 'Base sérum con SPF y acabado luminoso', imagen: '/natpure-app/productos/imagen5.png', descripcionLarga: 'Sérum con color y protección SPF30. Unifica el tono con acabado natural y luminoso sin pesar la piel.', categoria: 'naturales', precio: 229000 },
      { id: 6, nombre: 'Skin Tint', descripcionCorta: 'Base ligera con SPF natural', imagen: '/natpure-app/productos/imagen6.png', descripcionLarga: 'Base ultraligera con ingredientes naturales y SPF30. Ideal para uso diario con cobertura suave y fresca.', categoria: 'naturales', precio: 127000 },
      { id: 7, nombre: 'Iba SPF60', descripcionCorta: 'Protector solar con color e hialurónico', imagen: '/natpure-app/productos/imagen7.png', descripcionLarga: 'Protector solar SPF60 con ácido hialurónico y tinte natural. Hidrata, protege y da un tono parejo.', categoria: 'suplementos', precio: 16000 },
      { id: 8, nombre: 'Plum Solar', descripcionCorta: 'Protector solar con té verde antioxidante', imagen: '/natpure-app/productos/imagen8.png', descripcionLarga: 'Protector solar natural SPF50 enriquecido con té verde. Antioxidante, ligero y con color uniforme.', categoria: 'organicos', precio: 54000 },
      { id: 9, nombre: 'Hialurónico', descripcionCorta: 'Sérum hidratante con ácido hialurónico', imagen: '/natpure-app/productos/imagen9.png', descripcionLarga: 'Sérum hidratante puro con ácido hialurónico de origen natural. Rellena, suaviza y retiene la humedad.', categoria: 'suplementos', precio: 79900 },
      { id: 10, nombre: 'Vit C Aruná', descripcionCorta: 'Sérum iluminador natural colombiano', imagen: '/natpure-app/productos/imagen10.png', descripcionLarga: 'Sérum facial iluminador con vitamina C natural. Reduce manchas y da luminosidad con fórmula limpia.', categoria: 'naturales', precio: 79900 },
      { id: 11, nombre: 'Tint Soleil', descripcionCorta: 'Base mineral con protección solar', imagen: '/natpure-app/productos/imagen11.png', descripcionLarga: 'Base mineral de alta cobertura con SPF30 integrado. Protege y perfecciona la piel sin ingredientes sintéticos.', categoria: 'naturales', precio: 349000 },
      { id: 12, nombre: 'Solar Puro', descripcionCorta: 'Protector físico sin químicos agresivos', imagen: '/natpure-app/productos/imagen12.png', descripcionLarga: 'Protector solar físico SPF50+ sin filtros químicos. Apto para pieles sensibles y de uso diario.', categoria: 'organicos', precio: 68500 },
      { id: 13, nombre: 'DD Cream', descripcionCorta: 'Crema con color y protección solar', imagen: '/natpure-app/productos/imagen13.png', descripcionLarga: 'DD Cream orgánica con SPF55. Hidrata, cubre imperfecciones y protege del sol en un solo paso.', categoria: 'organicos', precio: 49000 },
      { id: 14, nombre: 'Kit Mineral', descripcionCorta: 'Kit completo de maquillaje mineral', imagen: '/natpure-app/productos/imagen14.png', descripcionLarga: 'Kit de inicio con maquillaje mineral natural. Incluye base, polvos y más para una rutina limpia y completa.', categoria: 'naturales', precio: 236000 },
    ] as Producto[],
    categoriaActual: 'todos' as string,
    carrito: [] as ItemCarrito[]  // ← este era el problema
  }),

  getters: {
    productosFiltrados: (state) => {
      if (state.categoriaActual === 'todos') return state.productos
      return state.productos.filter(p => p.categoria === state.categoriaActual)
    },
    obtenerProductoPorId: (state) => {
      return (id: number) => state.productos.find(p => p.id === id)
    },
    obtenerSugerencias: (state) => {
      return (idExcluido: number, cantidad: number = 4) => {
        return state.productos
          .filter(p => p.id !== idExcluido)
          .sort(() => 0.5 - Math.random())
          .slice(0, cantidad)
      }
    },
    totalCarrito: (state) => {
      return state.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
    },
    cantidadTotalCarrito: (state) => {
      return state.carrito.reduce((total, item) => total + item.cantidad, 0)
    }
  },

  actions: {
    filtrarCategoria(categoria: string) {
      this.categoriaActual = categoria
    },
    agregarAlCarrito(producto: Producto & { cantidad?: number }) {
      const cantidadAAgregar = producto.cantidad || 1
      const itemExistente = this.carrito.find(item => item.id === producto.id)
      if (itemExistente) {
        itemExistente.cantidad = Math.min(itemExistente.cantidad + cantidadAAgregar, 99)
      } else {
        this.carrito.push({ ...producto, cantidad: Math.min(cantidadAAgregar, 99) })
      }
    },
    actualizarCantidad(id: number, cambio: number) {
      const item = this.carrito.find(item => item.id === id)
      if (item) {
        const nueva = item.cantidad + cambio
        if (nueva > 0 && nueva <= 99) item.cantidad = nueva
      }
    },
    removerDelCarrito(id: number) {
      this.carrito = this.carrito.filter(item => item.id !== id)
    },
    vaciarCarrito() {
      this.carrito = []
    }
  }
})