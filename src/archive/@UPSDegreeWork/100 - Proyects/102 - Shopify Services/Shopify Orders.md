Es un pedido de una solicitud de un cliente para comprar uno o mas productos en la tienda, en donde se pueden realizar las siguientes acciones:
- **Crear Pedido**: En donde no se recopila información de pago y transacción.
- **Recuperar Pedido**
- **Actualizar Pedido**:
- **Eliminar Pedido**:
*No se permite realizar pedido mediante la API, pero si cambiar articulo o cantidades*.

Una vez se haya realizado el pago del pedido resultara en una [[Shopify Transaction]], ademas de tener relacion directa con [[Shopify Products]] y [[Shopify Customers]]
## Recurso Pedido
---
| Propiedad            | Tipo de Dato | Sub-Atributos                                 |
| -------------------- | ------------ | --------------------------------------------- |
| app_id               |  number            |  -                                             |
| billing_address      | Address             |  -                                             |
| cancel_reason        |  string            |  -                                             |
| cart_token           | string             |  -                                             |
| checkout_token       | string             |  -                                             |
| confirmation_number  |  number            |  -                                             |
| customer             |  Customers            | [id, email, first_name, ...]                  |
| fulfillments         |  Fullfillment            | [order_id, status, tracking_company, ...]     |
| line_items           |              | [id, product_id, price, quantity, title, ...] |
| origin_location      |              | [id, country_code, name, address1, ...]       |
| order_number         | number             |-                                               |
| gateway              | string             |  -                                             |
| payment_gateway_name | string             |  -                                             |
| source_name          |  string            | -                                              |
| token                |  string            |  -                                             |
| user_id              |  number            |  -                                             |
| current_total_price  |  double            |  -                                             |
| id                   | number             |  -                                             |
| nombre               |  string            |  -                                             |
| number               |  number            |  -                                             |
| process_at           |  date            | -                                              |
| processing_method    | string             |  -                                             |
| shipping_address     |  Address            | -                                             |
| total_weight         |  double            |  -                                             |
| referring_site       |  string            |  -                                             |
| id_user                     |  number            | -                                              |

