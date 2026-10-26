---
tags:
  - microsoft
  - azure
---
## Azure Functions
---
Servicio de computación sin servidor (*serverless*), que permite ejecutar código bajo demanda sin la necesidad de gestionar recursos informáticos.
Las Azure Functions son piezas de código que pueden ser ejecutadas en respuesta a un evento (*trigger*), lo cual las convierte permite tener un sistema **event-driven**
### Trigger
### Bindings (Input & Output)
## Azure Logic Apps
---

## Durable Functions
---

## EWS (Exchange Web Service)
---
## Microsoft Graph
---
### Change notifications

[Set up notifications for changes in resource data - Microsoft Graph \| Microsoft Learn](https://learn.microsoft.com/en-us/graph/change-notifications-overview)

**Change notifications**, permite recibir alertas cuando se produce un cambio, en los recursos que estamos registrados o *interesados* en conocer cualquier acción que produzca un cambio ya sea de **creación, actualización o eliminación**. Estos cambio van a ser notificados al cliente por medio del envío de la información a un **endpoint** definido o especificado por el mismo cliente

Los cambios tienen un modelo **event-driven**, lo cual reaccionar a eventos permitiendo así,
- Reaccionar lo mas pronto a los cambios
- Evitar un polling o consulta recurrente, lo cual causa problema de rendimiento cuando no exista cambios en el servicio.

#### Tipos de Notificación

Existen 3 tipos de notificaciones:

- **Notificación básica**: Los cambios no incluyen la información de dicho cambio, pero si el **id**, del recurso que presento el cambio.
- **Notificación enriquecida**: Los cambios incluyen la información de dicho cambio.
-  **Ciclo de Vida**: Notificación que informa sobre cuando se esta en riesgo de perder una notificación debido al ciclo de vida de la suscripción.

#### Recepción de notificación

Microsoft Graph permite el envío de notificaciones sobre los cambios a los clientes por medio de los siguientes canales.
- **[Webhook](https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks?tabs=http)**:  Es un *HTTP Callback*, defino por el cliente que permite recibir notificaciones de cambios o eventos producidos por un servicio, por medio de una llamada HTTP.
- **[Azure Event Hubs](https://learn.microsoft.com/en-us/graph/change-notifications-delivery-event-hubs?tabs=change-notifications-eventhubs-azure-portal-rbac%2Cchange-notifications-eventhubs-rbac%2Chttp)**: Servicio de ingesta de datos de streaming altamente escalable, junto con un "broker" de eventos para el manejo de millones de eventos por segundo de baja latencia.
- **[Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/subscribe-to-graph-api-events?context=graph%2Fcontext&tabs=http)**: Servicio de enrutamiento de eventos que permite la conexión entre diferentes servicios de Azure por medio de un **publisher** y **suscriptor**.
#### Recursos & Links
---
- [Getting started with Azure Functions \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/functions-get-started?pivots=programming-language-typescript)
- [Explore the EWS Managed API, EWS, and web services in Exchange \| Microsoft Learn](https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/explore-the-ews-managed-api-ews-and-web-services-in-exchange)
- [Automation services in Azure - overview \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/automation/automation-services)
- [Get MIME content of a message using the Outlook mail API - Microsoft Graph \| Microsoft Learn](https://learn.microsoft.com/en-us/graph/outlook-get-mime-message)
- [Overview - Azure Logic Apps \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview)
- [Durable Functions Overview - Azure \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=in-process%2Cnodejs-v3%2Cv1-model&pivots=csharp)
- 