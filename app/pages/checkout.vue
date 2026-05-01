<template>
  <v-container class="py-8">
    <div v-if="!compraExitosa">
      <v-btn
        variant="text"
        color="primary"
        class="mb-6 px-0"
        to="/carrito"
      >
        <template v-slot:prepend>
          <ArrowBack />
        </template>
        Volver al Carrito
      </v-btn>

      <h1 class="text-h4 font-weight-bold text-primary mb-8">
        Finalizar Compra
      </h1>

      <v-row>
        <!-- Formulario de Pago -->
        <v-col cols="12" md="8">
          <v-card class="pa-6 mb-6 bg-surface" elevation="2" rounded="lg">
            <h2 class="text-h5 font-weight-bold text-primary mb-4">
              Método de Pago
            </h2>

            <v-radio-group v-model="metodoPago" class="mb-4">
              <v-radio
                label="Tarjeta de Crédito"
                value="credito"
                color="primary"
              ></v-radio>
              <v-radio
                label="Tarjeta de Débito"
                value="debito"
                color="primary"
              ></v-radio>
              <v-radio label="Nequi" value="nequi" color="primary"></v-radio>
            </v-radio-group>

            <v-divider class="mb-6"></v-divider>

            <h2 class="text-h5 font-weight-bold text-primary mb-4">
              Datos de Pago
            </h2>
            <v-form ref="form" @submit.prevent="procesarPago">
              <div v-if="metodoPago === 'credito' || metodoPago === 'debito'">
                <v-text-field
                  v-model="datosPago.nombre"
                  label="Nombre en la Tarjeta"
                  variant="outlined"
                  color="primary"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="datosPago.numero"
                  label="Número de Tarjeta"
                  variant="outlined"
                  color="primary"
                  required
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="datosPago.vencimiento"
                      label="MM/AA"
                      variant="outlined"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="datosPago.cvv"
                      label="CVV"
                      variant="outlined"
                      color="primary"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>

              <div v-if="metodoPago === 'nequi'">
                <v-text-field
                  v-model="datosPago.celular"
                  label="Número de Celular (Nequi)"
                  variant="outlined"
                  color="primary"
                  required
                ></v-text-field>
              </div>
            </v-form>
          </v-card>
        </v-col>

        <!-- Resumen -->
        <v-col cols="12" md="4">
          <v-card class="pa-6 bg-surface" elevation="2" rounded="lg">
            <h2 class="text-h5 font-weight-bold text-primary mb-6">Resumen</h2>

            <div class="d-flex justify-space-between mb-4">
              <span class="text-body-1 text-medium-emphasis"
                >Subtotal ({{ cantidadTotal }} artículos)</span
              >
              <span class="text-body-1 font-weight-bold"
                >{{ total.toFixed(2) }} COP</span
              >
            </div>
            <div class="d-flex justify-space-between mb-4">
              <span class="text-body-1 text-medium-emphasis">Envío</span>
              <span class="text-body-1 font-weight-bold text-success"
                >Gratis</span
              >
            </div>

            <v-divider class="mb-4"></v-divider>

            <div class="d-flex justify-space-between mb-8">
              <span class="text-h6 font-weight-bold text-primary">Total</span>
              <span class="text-h5 font-weight-bold text-success"
                >{{ total.toFixed(2) }} COP</span
              >
            </div>

            <v-btn
              color="primary"
              size="x-large"
              block
              variant="elevated"
              rounded="lg"
              class="font-weight-bold"
              @click="procesarPago"
              :loading="procesando"
              :disabled="total === 0"
            >
              Confirmar y Pagar
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Vista de Factura (Éxito) -->
    <v-row v-else class="justify-center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-8 text-center bg-surface" elevation="4" rounded="xl">
          <CheckCircle color="success" class="mb-4 text-success" style="font-size: 6.25rem;" />
          <h1 class="text-h3 font-weight-bold text-primary mb-2">
            ¡Compra Exitosa!
          </h1>
          <p class="text-body-1 text-medium-emphasis mb-8">
            Tu pago ha sido procesado correctamente.
          </p>

          <v-card
            variant="outlined"
            class="text-left mb-8 rounded-lg"
            color="primary"
          >
            <v-card-text>
              <h3 class="text-h6 font-weight-bold mb-4">
                Detalles de Factura #{{ numeroFactura }}
              </h3>
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-medium-emphasis">Método de Pago:</span>
                <span class="font-weight-bold text-uppercase">{{
                  metodoPago
                }}</span>
              </div>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-medium-emphasis">Fecha:</span>
                <span class="font-weight-bold">{{
                  new Date().toLocaleDateString()
                }}</span>
              </div>
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-space-between">
                <span class="text-h6 text-primary">Monto Pagado:</span>
                <span class="text-h6 font-weight-bold text-success"
                  >{{ montoPagado.toFixed(2) }} COP</span
                >
              </div>
            </v-card-text>
          </v-card>

          <v-btn color="primary" size="large" variant="elevated" to="/" block>
            Volver a la Tienda
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useProductosStore } from "~/stores/productos";


const router = useRouter();
const productosStore = useProductosStore();

const total = computed(() => productosStore.totalCarrito);
const cantidadTotal = computed(() => productosStore.cantidadTotalCarrito);

// Estado del formulario
const metodoPago = ref("credito");
const datosPago = ref({
  nombre: "",
  numero: "",
  vencimiento: "",
  cvv: "",
  celular: "",
});

// Estado de la transacción
const procesando = ref(false);
const compraExitosa = ref(false);
const montoPagado = ref(0);
const numeroFactura = ref("");

const procesarPago = () => {
  // Simulación de validación mínima (podría ser más estricta)
  if (total.value === 0) return;

  procesando.value = true;

  // Simular retraso de red
  setTimeout(() => {
    montoPagado.value = total.value;
    numeroFactura.value = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    compraExitosa.value = true;
    procesando.value = false;

    // Vaciar el carrito después de la compra
    productosStore.vaciarCarrito();
  }, 1500);
};
</script>

<style scoped></style>
