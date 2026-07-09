---
tags:
  - develop
---
**Server-Sent Events (SSE)**. Transmisión ligera y unidireccional, en donde solamente el servidor envía una notificación de actualización al cliente que se encuentra en un modo de "listening".
- Ideal para transmisión de datos en vivo
- Pros.
	- Ligero, implementa HTTP/1.1
	- Funciona sin la interferencia de la mayoría de servidores proxy.
	- Soporte para la funcionalidad de reconexión automática.
- Cons.
	- Solo implementa una via de comunicación (unidireccional).
	- Soporte limitado para ciertos entornos de producción.
	- Posee menor capacidad control.
**WebSocket's**. Conexión Bi-direccional y Full-duples, donde tanto como cliente y servidor envían paquetes de información en la comunicación
- Pros.
	- Comunicación Bi-direccional.
	- Comunicación en tiempo real.
	- Comunicación de baja latencia.
	- Posibilidad de escalado mediante brokers de comunicación como (Kafka, Redis, etc.)
- Cons.
	- Existe la posibilidad de que no funcione correctamente con un servidor proxy.
	- Posee mas complejidad para escalar.
	- Es "Stateful", por lo que la conexión es persistente.
**Long Polling**. Solución de legado implementada como alternativa, en donde el cliente realiza una petición de verificación de actualización de datos al servidor.
- Realiza una verificación o solicita actualizaciones al sistema en un tiempo dado.
- Pros.
	- Facilidad de implementación REST
- Cons.
	- Alta latencia
	- Realiza solicitudes innecesarias
	- Baja escalabilidad

**Resumen**.

---

| Feature     | Long Polling     | SSE              | WebSockets     |
| ----------- | ---------------- | ---------------- | -------------- |
| Protocol    | HTTP             | HTTP/1.1         | WebSocket      |
| Direction   | Cliente/Servidor | Servidor/Cliente | Bi-direccional |
| Complexity  | Bajo             | Media            | Alta           |
| Latency     | Alto             | Baja             | Muy Baja       |
| Scalability | Bajo             | Media            | Muy Alta       |
