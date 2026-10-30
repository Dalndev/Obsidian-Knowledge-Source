## Estructura

**Cabecera/Identificación**.

---
**RUC & Nombre Legal**. Datos del establecimiento que emite (emisor) la factura.
**Numero de Factura**.Implementa el siguiente formato 

```
000-000-000000000

(1ro) 000 := Establecimiento
(2do) 000 := Punto de Emision
(3ro) 000000000 := Secuencial
```

**Clave de Acceso**. Código de 49 dígitos para cada comprobante electrónico
**Numero de Autorización**. Generado por el SRI una vez validado por el servicio.
**Fecha y Hora de Autorización**. Indica cuando se recibió y aprobó el documento
**Ambiente y Emisión**. Indica si la emisión fue "Normal"

**Información Emisor**

---
**Nombre o Razón Social**. Identidad del vendedor
**Identificación**. Número de RUC (Registro Único de Contribuyentes) del vendedor
**Dirección del establecimiento**. Ubicación física del lugar de comerció

**Información Receptor**

---
**Razón Social (Nombres & Apellidos)**. Identidad del comprador 
**Identificación**. Numero de RUC, Cédula o Pasaporte
**Fecha de Emisión**. Día que se realizo la transacción
**Guía de Remisión**. Si la venta implica el traslado de mercadería

**Detalles & Totales**.

---
Valor comercial y carga del producto

**Código**. Identificador principal y auxiliar del producto
**Cantidad**. Unidades vendida
**Descripción**. Nombre del bien o servicio
**Precio Unitario**. Valor ante de impuestos
**Descuento**. Monto restado antes del calculo del IVA
**Precio** Total. Resultado de `(Cantidad * Precio Unitario) - Descuento`

**Sub-Totales e Impuestos**.

---
**Subtotal con IVA (15%)**. Base imponible para producto "grabados"
**Subtotal (0%)**. Productos exentos de IVA
**Subtotal No Objeto de Impuesto**. Rubros no aplican tributos
**ICE**. Impuesto a los Consumo Especiales
**IVA (Monto total)**. Valor calculado del impuesto
**Valor Total**. Suma final que el cliente debe cancelar
**Forma de Pago**. Detalle de forma de pago (Sistema financiero, transferencia, tarjeta de crédito, etc.)
**Firma electronica**. Valida y protege contra alteraciones para cumplir con estándares establecidos por el SRI 
