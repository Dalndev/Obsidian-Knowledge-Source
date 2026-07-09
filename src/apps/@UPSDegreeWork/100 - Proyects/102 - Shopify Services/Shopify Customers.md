- Almacena información sobre los consumidores, como detalles del contacto, historial de ordenes, etc. Adicional posee información sobre el estado de la cuente del cliente (Utilizada la información registrada para finalizar la compra).
- No se almacena información sobre tarjetas de crédito, esta es proporcionada al momento de pagar.
- Posee relación con [[Shopify Orders]]
## Estados de cuentas
---
- **Cuentas deshabilitadas**: Clientes pagan como invitados
- **Cuentas opcionales**: Clientes puedes iniciar sesión o pagar como invitados.
- **Cuentas requeridas**: Clientes no pueden pagar hasta que inicie sesión.

Se debe establecer limites de funcionalidad de la app en los [[alcances de acceso API Shopify]].

## Dato JSON de Costumer
---
| Propiedad          | Tipo de Dato | Sub-Atributos                                    |
| ------------------ | ------------ | ------------------------------------------------ |
| Direcciones        | Address[]    | [id, customer_id, address1, address2, city, ...] |
| Divisa             | String       | -                                                |
| Correo Electrónico | String       |  -                                                |
| Nombre de pila     | String       | -                                                 |
| Identificacion     | Number       | -                                                 |
| Ultimo Pedido      | Number       |  -                                                |
| Recuento Pedidos   | Number       |  -                                                |
| Telefono           | String       | -                                                 |
| Estado             | String       | -                                                 |
| Total Gastado      | Double       |   -                                               |


