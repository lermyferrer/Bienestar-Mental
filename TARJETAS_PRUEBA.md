# Tarjetas de Prueba para Pagos

## ⚠️ Importante
Actualmente el sitio **NO procesa pagos reales**. Los formularios son simulados. Para usar estas tarjetas necesitas integrar una pasarela de pago real.

---

## 💳 Mercado Pago (Colombia)

Mercado Pago es la opción más popular en Latinoamérica y está disponible en Colombia.

### Tarjetas de Prueba para Aprobación

**Visa:**
- Número: `4509 9535 6623 3704`
- CVV: `123`
- Fecha: Cualquier fecha futura (ej: `12/25`)
- Nombre: Cualquier nombre válido
- Documento: Cualquier documento válido

**Mastercard:**
- Número: `5031 7557 3453 0604`
- CVV: `123`
- Fecha: Cualquier fecha futura
- Nombre: Cualquier nombre válido

**American Express:**
- Número: `3711 803032 57522`
- CVV: `1234`
- Fecha: Cualquier fecha futura

### Tarjetas de Prueba para Rechazo

**Tarjeta Rechazada por Fondos Insuficientes:**
- Número: `4509 9535 6623 3705`
- CVV: `123`
- Fecha: Cualquier fecha futura

**Tarjeta Rechazada por Tarjeta Inválida:**
- Número: `4000 0000 0000 0002`
- CVV: `123`
- Fecha: Cualquier fecha futura

**Tarjeta Rechazada por Tarjeta Vencida:**
- Usa una fecha de vencimiento pasada (ej: `01/20`)

### Nota
Para usar estas tarjetas en modo de prueba con Mercado Pago:
1. Crea una cuenta de prueba en Mercado Pago
2. Obtén tus `Access Token` de prueba (no de producción)
3. Configura el ambiente de prueba en tu integración

---

## 💳 Stripe (Colombia)

Stripe está disponible en Colombia y es muy popular para pagos internacionales.

### Tarjetas de Prueba para Aprobación

**Visa - Pago Exitoso:**
- Número: `4242 4242 4242 4242`
- CVV: Cualquier 3 dígitos (ej: `123`)
- Fecha: Cualquier fecha futura (ej: `12/25`)
- Código Postal: Cualquier código válido (ej: `110111`)

**Visa - Requiere Autenticación 3D Secure:**
- Número: `4000 0025 0000 3155`
- CVV: Cualquier 3 dígitos
- Fecha: Cualquier fecha futura

**Mastercard:**
- Número: `5555 5555 5555 4444`
- CVV: Cualquier 3 dígitos
- Fecha: Cualquier fecha futura

**American Express:**
- Número: `3782 822463 10005`
- CVV: `1234`
- Fecha: Cualquier fecha futura

### Tarjetas de Prueba para Rechazo

**Tarjeta Rechazada:**
- Número: `4000 0000 0000 0002`
- CVV: Cualquier 3 dígitos
- Fecha: Cualquier fecha futura

**Tarjeta con Fondos Insuficientes:**
- Número: `4000 0000 0000 9995`
- CVV: Cualquier 3 dígitos
- Fecha: Cualquier fecha futura

### Nota
Para usar Stripe en modo de prueba:
1. Crea una cuenta en Stripe
2. Usa las `API keys` de prueba (empiezan con `pk_test_` y `sk_test_`)
3. No se procesarán pagos reales en modo de prueba

---

## 💳 PayU (Colombia)

PayU es muy popular en Colombia y Latinoamérica.

### Tarjetas de Prueba

**Visa - Aprobada:**
- Número: `4097 4400 0000 0008`
- CVV: `321`
- Fecha: Cualquier fecha futura (ej: `12/25`)
- Nombre: Cualquier nombre

**Mastercard - Aprobada:**
- Número: `5454 5454 5454 5454`
- CVV: `321`
- Fecha: Cualquier fecha futura

### Tarjetas de Prueba para Rechazo

**Tarjeta Rechazada:**
- Número: `4097 4400 0000 0002`
- CVV: `321`
- Fecha: Cualquier fecha futura

**Tarjeta con Fondos Insuficientes:**
- Número: `4097 4400 0000 0009`
- CVV: `321`
- Fecha: Cualquier fecha futura

### Nota
Para usar PayU en modo de prueba:
1. Crea una cuenta en PayU Colombia
2. Configura tu cuenta en modo de pruebas
3. Usa las credenciales de ambiente de pruebas (no producción)

---

## 💳 Wompi (Bancolombia)

Wompi es la pasarela de pago de Bancolombia, muy usada en Colombia.

### Tarjetas de Prueba

**Visa - Aprobada:**
- Número: `4242 4242 4242 4242`
- CVV: `123`
- Fecha: Cualquier fecha futura (ej: `12/25`)
- Nombre: Cualquier nombre válido

**Mastercard - Aprobada:**
- Número: `5555 5555 5555 4444`
- CVV: `123`
- Fecha: Cualquier fecha futura

### Tarjetas de Prueba para Rechazo

**Tarjeta Rechazada:**
- Número: `4000 0000 0000 0002`
- CVV: `123`
- Fecha: Cualquier fecha futura

### Nota
Para usar Wompi en modo de prueba:
1. Crea una cuenta en Wompi
2. Configura tu integración con las credenciales de prueba
3. Usa el ambiente de sandbox

---

## 🔒 Datos Comunes para Todas las Pasarelas

Cuando necesites datos adicionales para las pruebas:

**Nombre del Titular:**
- Cualquier nombre válido (ej: `Juan Pérez`, `María García`)

**Tipo de Documento:**
- Cédula de Ciudadanía (CC): Cualquier número válido (ej: `1234567890`)
- Cédula de Extranjería (CE): Cualquier número válido
- Pasaporte (PA): Cualquier número válido

**Fecha de Vencimiento:**
- Formato: `MM/AA` (ej: `12/25` para diciembre de 2025)
- **Importante:** Usa siempre fechas futuras para tarjetas aprobadas

**CVV/CVC:**
- Visa/Mastercard: 3 dígitos (ej: `123`)
- American Express: 4 dígitos (ej: `1234`)

---

## 🚀 Cómo Integrar una Pasarela Real

Para procesar pagos reales necesitas:

1. **Crear cuenta** en la pasarela elegida (Mercado Pago, Stripe, PayU, etc.)
2. **Obtener credenciales** de API (Access Token, Public Key, Secret Key)
3. **Integrar el SDK** de la pasarela en tu sitio
4. **Configurar el backend** para procesar las transacciones de forma segura
5. **Implementar webhooks** para notificaciones de pago
6. **Configurar SSL/HTTPS** (Netlify lo proporciona gratis)

### Ejemplo de Integración Básica con Mercado Pago:

```javascript
// Instalar: npm install mercadopago
const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'TU_ACCESS_TOKEN_DE_PRUEBA'
});

// Crear preferencia de pago
let preference = {
    items: [{
        title: 'Consultoría Legal',
        quantity: 1,
        unit_price: 150000
    }],
    back_urls: {
        success: 'https://tu-sitio.netlify.app/pago-exitoso',
        failure: 'https://tu-sitio.netlify.app/pago-error',
        pending: 'https://tu-sitio.netlify.app/pago-pendiente'
    },
    auto_return: 'approved'
};

mercadopago.preferences.create(preference)
    .then(response => {
        // Redirigir a response.body.init_point
    });
```

---

## ⚠️ Seguridad

**NUNCA:**
- Proceses tarjetas reales directamente desde el frontend
- Guardes números de tarjeta en tu base de datos
- Envíes datos de tarjeta sin HTTPS
- Uses credenciales de producción en código público

**SÍ:**
- Usa tokens o preferencias de pago de la pasarela
- Procesa pagos desde tu backend
- Usa HTTPS siempre
- Valida y sanitiza todos los datos

---

## 📚 Recursos

- **Mercado Pago Docs:** https://www.mercadopago.com.co/developers/es/docs
- **Stripe Docs:** https://stripe.com/docs
- **PayU Docs:** https://developers.payulatam.com/es/docs/
- **Wompi Docs:** https://docs.wompi.co/

