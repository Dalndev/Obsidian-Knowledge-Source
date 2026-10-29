Es el resultado del intercambio de dinero, en donde se encuentra involucrado un [[Shopify Orders]].
Existen 5 tipos de transacciones:
- **Autorización**: Es el monto reservado de la fuente del titular de la tarjeta, la cual no cambia de manos hasta que se capture la autorización
- **Venta**: Autorización y captura en un solo paso
- **Captura**: Transferencia de dinero que se reservo en la etapa de autorización
- **Anulación**: Cancelación de la autorización o captura pendiente.
- **Reembolso**: Devolución parcial de los fondos capturados del titular, es realizado solo después de procesada la captura.

*Un pedido puede tener más de una transacción de autorización asociada. Esto puede suceder cuando se edita un pedido o cuando se agrega al pedido una venta adicional posterior a la compra. Para recibir una notificación cuando se edite un pedido, suscríbase al webhook OrderEdit.*

## Recurso Transaction
---
| Propiedad           | Tipo de Dato | Sub-Atributos                               |
| ------------------- | ------------ | ------------------------------------------- |
| amount              |              |                                             |
| authorization       |              |                                             |
| currency            |              |                                             |
| gateway             |              |                                             |
| id                  |              |                                             |
| kind                | Kind         | [autorization, capture, sale, void, refund] |
| order_id            |              |                                             |
| parent_id           |              |                                             |
| source_name         |              |                                             |
| status              |              |                                             |
| total_unsettled_set |              |                                             |
|                     |              |                                             |
