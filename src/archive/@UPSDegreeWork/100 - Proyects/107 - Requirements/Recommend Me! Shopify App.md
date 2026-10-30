---

---
# Identificación de problema

Se busca generar recomendaciones de productos personalizadas para los clientes de un e-commerce basado en Shopify. Las recomendaciones serán generadas en base al historial de compras de cada cliente que se posea almacenada en la infraestructura que provee shopify y ademas en base al historial que se almacenara en un sistema de información persistente. Adicional todas estas recomendaciones deberán ser enviadas mediante correo electrónico a los cliente, cuyos correos estén registrados y acepten marketing por correo electrónico.

**Fundamentos**:
- Se busca mejorar la experiencia del cliente, por medio de las recomendaciones personalizadas las cuales pueden ayudar a encontrar productos de interés que satisfagas sus necesidades.
- Se busca generar mas ventas, basado en las recomendaciones personalizadas permitiendo tener una mayor conversión y retención de clientes en la tienda en linea con el fin de generar mas interés para en los productos.
# Requerimientos
---
## Requisitos (Funcionales)

- Generar una aplicación en Shopify que se encargue de generar las recomendaciones de productos.
- La aplicación debe conectarse a la API de Shopify para obtener el historial de compras de los clientes.
- La aplicación debe registrar el historial generado una vez se haya agregado o instalado la aplicación a la tienda.
- La aplicación debe usar un algoritmo de recomendación para generar las recomendaciones personalizadas de cada cliente que se tenga el historial de compras.
- Las recomendaciones deben ser enviadas mediante correo electrónico a los clientes que tengan aceptados el marketing por correo electrónico.
## Requisitos (No Funcionales)

- La aplicación debe manejar la privacidad de los datos de los clientes que se vayan registrando
- La aplicación debe ser escalable, con el fin de manejar un gran numero de clientes
- La aplicación debe ser extensible, con el fin de agregar mas funcionalidades para mejorar tanto la experiencia de usuario y el interés de este mismo en la tienda en linea para generar un aumento en la conversión de ventas.
- La aplicación debe ser fácil de usar por parte de los administradores, con una interfaz intuitiva.
- La aplicación debe manejar un mismo estilo de diseño basado en el panel de administrador de Shopify
- La aplicación debe poseer un panel de métricas que informe de los correos enviados por medio del servicio de AWS SES.
# Diseño
---
## Arquitectura de Software
- 
## Diagramas UML
- 
# Tecnologías
---
- 
# Mantenimiento
---
- 