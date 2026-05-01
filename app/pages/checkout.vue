<template>
  <v-container class="py-8">
    <div v-if="!compraExitosa">
      <v-btn
        variant="text"
        color="primary"
        class="mb-6 px-0"
        prepend-icon="mdi-arrow-left"
        to="/carrito"
      >
        Volver al Carrito
      </v-btn>

      <h1 class="text-h4 font-weight-bold text-primary mb-8">Finalizar Compra</h1>

      <v-row>
        <!-- Formulario de Pago -->
        <v-col cols="12" md="8">
          <v-card class="pa-6 mb-6 bg-surface" elevation="2" rounded="lg">
            <h2 class="text-h5 font-weight-bold text-primary mb-4">Método de Pago</h2>
            <v-radio-group v-model="metodoPago" class="mb-4" @update:model-value="limpiarErrores">
              <v-radio label="Tarjeta de Crédito" value="credito" color="primary"></v-radio>
              <v-radio label="Tarjeta de Débito" value="debito" color="primary"></v-radio>
              <v-radio label="Nequi" value="nequi" color="primary"></v-radio>
            </v-radio-group>

            <v-divider class="mb-6"></v-divider>

            <h2 class="text-h5 font-weight-bold text-primary mb-4">Datos de Pago</h2>

            <!-- Alerta de errores -->
            <v-alert
              v-if="erroresValidacion.length > 0"
              type="error"
              variant="tonal"
              class="mb-4"
              rounded="lg"
            >
              <ul class="ma-0 pa-0" style="list-style: none;">
                <li v-for="error in erroresValidacion" :key="error">⚠️ {{ error }}</li>
              </ul>
            </v-alert>

            <v-form ref="form">
              <!-- Campos tarjeta -->
              <div v-if="metodoPago === 'credito' || metodoPago === 'debito'">
                <v-text-field
                  v-model="datosPago.nombre"
                  label="Nombre en la Tarjeta"
                  variant="outlined"
                  color="primary"
                  :error-messages="errores.nombre"
                  @input="errores.nombre = ''"
                ></v-text-field>
                <v-text-field
                  v-model="datosPago.numero"
                  label="Número de Tarjeta (16 dígitos)"
                  variant="outlined"
                  color="primary"
                  maxlength="16"
                  :error-messages="errores.numero"
                  @input="errores.numero = ''"
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="datosPago.vencimiento"
                      label="MM/AA"
                      variant="outlined"
                      color="primary"
                      maxlength="5"
                      placeholder="MM/AA"
                      :error-messages="errores.vencimiento"
                      @input="formatearVencimiento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="datosPago.cvv"
                      label="CVV"
                      variant="outlined"
                      color="primary"
                      type="password"
                      maxlength="4"
                      :error-messages="errores.cvv"
                      @input="errores.cvv = ''"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>

              <!-- Campo Nequi -->
              <div v-if="metodoPago === 'nequi'">
                <v-text-field
                  v-model="datosPago.celular"
                  label="Número de Celular Nequi (10 dígitos)"
                  variant="outlined"
                  color="primary"
                  maxlength="10"
                  :error-messages="errores.celular"
                  @input="errores.celular = ''"
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
              <span class="text-body-1 text-medium-emphasis">Subtotal ({{ cantidadTotal }} artículos)</span>
              <span class="text-body-1 font-weight-bold">{{ total.toLocaleString('es-CO') }} COP</span>
            </div>
            <div class="d-flex justify-space-between mb-4">
              <span class="text-body-1 text-medium-emphasis">Envío</span>
              <span class="text-body-1 font-weight-bold text-success">Gratis</span>
            </div>

            <v-divider class="mb-4"></v-divider>

            <div class="d-flex justify-space-between mb-8">
              <span class="text-h6 font-weight-bold text-primary">Total</span>
              <span class="text-h6 font-weight-bold text-success">{{ total.toLocaleString('es-CO') }} COP</span>
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

    <!-- Vista de Éxito / Factura -->
    <v-row v-else class="justify-center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-8 text-center bg-surface" elevation="4" rounded="xl">
          <v-icon color="success" size="100" class="mb-4">mdi-check-circle</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-2">¡Compra Exitosa!</h1>
          <p class="text-body-1 text-medium-emphasis mb-8">Tu pago ha sido procesado correctamente.</p>

          <v-card variant="outlined" class="text-left mb-8 rounded-lg" color="primary">
            <v-card-text>
              <h3 class="text-h6 font-weight-bold mb-4">Factura #{{ numeroFactura }}</h3>
              <v-divider class="mb-4"></v-divider>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-medium-emphasis">Método de Pago:</span>
                <span class="font-weight-bold text-uppercase">{{ metodoPago }}</span>
              </div>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-medium-emphasis">Fecha:</span>
                <span class="font-weight-bold">{{ new Date().toLocaleDateString('es-CO') }}</span>
              </div>
              <v-divider class="my-4"></v-divider>
              <div class="d-flex justify-space-between">
                <span class="text-h6 text-primary">Monto Pagado:</span>
                <span class="text-h6 font-weight-bold text-success">{{ montoPagado.toLocaleString('es-CO') }} COP</span>
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
import { ref, computed, reactive } from "vue";
import { useProductosStore } from "~/stores/productos";

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

// Errores por campo
const errores = reactive({
  nombre: "",
  numero: "",
  vencimiento: "",
  cvv: "",
  celular: "",
});

// Lista de errores global para el alert
const erroresValidacion = ref<string[]>([]);

// Estado de la transacción
const procesando = ref(false);
const compraExitosa = ref(false);
const montoPagado = ref(0);
const numeroFactura = ref("");

const limpiarErrores = () => {
  errores.nombre = "";
  errores.numero = "";
  errores.vencimiento = "";
  errores.cvv = "";
  errores.celular = "";
  erroresValidacion.value = [];
};

const formatearVencimiento = () => {
  errores.vencimiento = "";
  let v = datosPago.value.vencimiento.replace(/\D/g, "");
  if (v.length >= 2) v = v.slice(0, 2) + "/" + v.slice(2, 4);
  datosPago.value.vencimiento = v;
};

const validar = (): boolean => {
  const lista: string[] = [];

  if (metodoPago.value === "credito" || metodoPago.value === "debito") {
    if (!datosPago.value.nombre.trim()) {
      errores.nombre = "Campo requerido";
      lista.push("El nombre en la tarjeta es obligatorio.");
    }
    if (!/^\d{16}$/.test(datosPago.value.numero)) {
      errores.numero = "Debe tener exactamente 16 dígitos";
      lista.push("El número de tarjeta debe tener 16 dígitos.");
    }
    if (!/^\d{2}\/\d{2}$/.test(datosPago.value.vencimiento)) {
      errores.vencimiento = "Formato MM/AA inválido";
      lista.push("La fecha de vencimiento debe tener formato MM/AA.");
    }
    if (!/^\d{3,4}$/.test(datosPago.value.cvv)) {
      errores.cvv = "CVV inválido (3-4 dígitos)";
      lista.push("El CVV debe tener entre 3 y 4 dígitos.");
    }
  }

  if (metodoPago.value === "nequi") {
    if (!/^\d{10}$/.test(datosPago.value.celular)) {
      errores.celular = "Debe tener exactamente 10 dígitos";
      lista.push("El número de celular debe tener 10 dígitos.");
    }
  }

  erroresValidacion.value = lista;
  return lista.length === 0;
};

const procesarPago = () => {
  if (total.value === 0) return;
  if (!validar()) return;

  procesando.value = true;

  setTimeout(() => {
    montoPagado.value = total.value;
    numeroFactura.value = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    compraExitosa.value = true;
    procesando.value = false;
    productosStore.vaciarCarrito();
  }, 1500);
};
</script>

<style scoped></style>
