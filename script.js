// Variables globales
let productoActual = null;
let precioActual = 0;

// Función para abrir la pasarela de pago
function abrirPasarelaPago(nombreProducto, precio) {
    productoActual = nombreProducto;
    precioActual = precio;
    
    // Actualizar información en el modal
    document.getElementById('nombreProducto').textContent = nombreProducto;
    document.getElementById('precioProducto').textContent = formatearPrecio(precio);
    
    // Mostrar modal
    document.getElementById('modalPago').style.display = 'flex';
    
    // Ocultar formularios
    document.getElementById('formularioTarjeta').style.display = 'none';
    document.getElementById('formularioPSE').style.display = 'none';
}

// Función para cerrar la pasarela de pago
function cerrarPasarelaPago() {
    document.getElementById('modalPago').style.display = 'none';
    // Limpiar formularios
    document.getElementById('formTarjeta').reset();
    document.getElementById('formPSE').reset();
}

// Función para seleccionar método de pago
function seleccionarMetodo(metodo) {
    // Ocultar todos los formularios
    document.getElementById('formularioTarjeta').style.display = 'none';
    document.getElementById('formularioPSE').style.display = 'none';
    
    // Remover selección de todos los métodos
    document.querySelectorAll('.metodo-pago-card').forEach(card => {
        card.classList.remove('seleccionado');
    });
    
    // Mostrar formulario correspondiente
    if (metodo === 'tarjeta') {
        document.getElementById('formularioTarjeta').style.display = 'block';
        event.currentTarget.classList.add('seleccionado');
    } else if (metodo === 'pse') {
        document.getElementById('formularioPSE').style.display = 'block';
        event.currentTarget.classList.add('seleccionado');
    }
}

// Función para formatear precio
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

// Función para procesar pago con tarjeta
function procesarPagoTarjeta(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData);
    
    // Mostrar loading
    const btnPagar = event.target.querySelector('.btn-pagar');
    const textoOriginal = btnPagar.textContent;
    btnPagar.textContent = 'Redirigiendo a pasarela de pago...';
    btnPagar.disabled = true;
    
    // Simular validación y redirección a pasarela de pago
    setTimeout(() => {
        // En producción real, aquí harías una llamada a tu backend
        // que crea una preferencia/checkout en la pasarela de pago
        // y te devuelve la URL de redirección
        
        // Por ahora, redirigimos a Mercado Pago con parámetros simulados
        // En producción, esto sería generado por la API de la pasarela
        const urlPasarela = generarURLCheckout('tarjeta');
        window.location.href = urlPasarela;
    }, 1500);
}

// Función para procesar pago con Mercado Pago
function procesarPagoPSE(event) {
    event.preventDefault();
    
    // Obtener email si se proporcionó
    const formData = new FormData(event.target);
    const email = formData.get('email') || '';
    
    // Mostrar loading
    const btnPagar = event.target.querySelector('.btn-pagar');
    const textoOriginal = btnPagar.textContent;
    btnPagar.textContent = 'Redirigiendo a Mercado Pago...';
    btnPagar.disabled = true;
    
    // Simular procesamiento y redirección
    setTimeout(() => {
        // En producción real, aquí harías una llamada a tu backend
        // que crea una preferencia en Mercado Pago y te devuelve la URL
        const urlPasarela = generarURLCheckout('mercadopago', email);
        window.location.href = urlPasarela;
    }, 1500);
}

// Función para generar URL de checkout (simulación)
// En producción, esto se haría desde tu backend con la API real de la pasarela
function generarURLCheckout(metodo, email = '') {
    // En producción real, aquí harías una llamada a tu backend/API
    // que crea una preferencia en la pasarela de pago (Mercado Pago, Stripe, etc.)
    // y te devuelve la URL real del checkout
    
    // Por ahora, redirigimos a Mercado Pago Colombia
    // NOTA: En producción, esto debe ser una URL generada por la API de Mercado Pago
    // con un preference_id válido. Ejemplo:
    // https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=XXXX-XXXXXX-XXXX
    
    const baseUrl = 'https://www.mercadopago.com.co';
    
    // Construir parámetros de la transacción para simulación
    // (en producción estos vendrían del backend)
    const params = new URLSearchParams({
        item: encodeURIComponent(productoActual),
        amount: precioActual,
        currency: 'COP'
    });
    
    if (email) {
        params.append('payer_email', email);
    }
    
    // Para simulación, redirigimos a la página principal de Mercado Pago
    // En producción, usarías la URL del checkout real
    if (metodo === 'mercadopago' || metodo === 'tarjeta') {
        // URL de Mercado Pago Colombia
        // En producción real: usaría la URL del checkout generada por la API
        // return `https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=${preferenceId}`;
        
        // Por ahora, redirigimos directamente a Mercado Pago
        return baseUrl;
    }
    
    return baseUrl;
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modalPago');
    if (event.target === modal) {
        cerrarPasarelaPago();
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarPasarelaPago();
    }
});

// Formatear número de tarjeta automáticamente
document.addEventListener('DOMContentLoaded', function() {
    // Agregar formateo de número de tarjeta cuando se cargue el formulario
    const formTarjeta = document.getElementById('formTarjeta');
    if (formTarjeta) {
        const inputTarjeta = formTarjeta.querySelector('input[type="text"]');
        if (inputTarjeta) {
            inputTarjeta.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formattedValue;
            });
        }
        
        // Formatear fecha de vencimiento
        const inputFecha = formTarjeta.querySelector('input[placeholder="MM/AA"]');
        if (inputFecha) {
            inputFecha.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }
    }
});

