---
tags:
  - events
  - notifications
  - microsoft
  - azure
---
## Change Notifications
---
- ***Change Notifications***, sigue un modelo event-driven el cual permite a las aplicaciones recibir, procesar y ejecutar acciones (respuestas) sobre los cambios producidos (creación, actualización, eliminación) en los servicios por medio de Microsoft Graph.
- ***Microsoft Graph***, envía una notificación de cambio a un endpoint especificado.
### [Webhooks](Receive change notifications through webhooks)

- Llamada HTTP definida por el cliente, el cual permite la recepción de notificaciones de cambios y eventos de los servicios siempre y cuando existan cambios y la suscripción sea valida.
- **Consideraciones**.
	- Es necesario crear un ***endpoint HTTPS***, además se  habilitarlo para la recepción de peticiones, esto con el fin recibir las notificaciones.
	- Se debe proveer una correcta, consistente y oportuna respuesta HTTP para recibir notificaciones, ya que si no se responde en a tiempo el servicio puede descartar las notificaciones, las cuales no son recuperables.
	- El endpoint debe autenticarse de manera continua en Microsoft Graph, ya sea renovando la suscripción o respondiendo al ciclo de vida de las notificaciones. 
	- Cuando el endpoint responde con un código 2xx la notificación es considerada enviada.
	- Cuando el endpoint responde con cualquier código que no sea 2xx, incluso una respuesta HTML el envío de la notificación se intentara durante un tiempo de 4h.
- **Códigos HTTP**.
	- **200 (OK)**. Se responde con un código 200 cuando se tiene un tiempo máximo de 3s en el tiempo de proceso y respuesta.
	- **200 (Accepted)**. Se responde con un código 202 cuando el tiempo de proceso y respuesta supera los 10s. Se debe persistir la notificación en una cola y enviar la respuesta.
	- **5xx**. Si la notificación no es procesada o agregada a una cola se debe responder con un código 5xx para indicar que existió un error y se ejecuta el reintento.
- **Autenticación**.
	- La creación de una suscripción otorga un token de acceso el cual es enviado al endpoint para validar su validez, este tiene token tiene una duración de 1h.
		- Es necesario realizar una re-autenticación para enviar interrupciones en las notificaciones.
### [Azure Events Hub](https://learn.microsoft.com/en-us/graph/change-notifications-delivery-event-hubs?tabs=change-notifications-eventhubs-azure-portal-rbac%2Cchange-notifications-eventhubs-rbac%2Chttp)

- Servicio de ingesta y distribución de eventos en tiempo real diseñado para escalar.
- El servicio difiere en algunos aspectos de Webhooks.
	- No es necesario exponer una URL ya que las notificaciones son enviadas a al aplicaciones.
	- No es necesario responder a la notificación de validación de URL
	- Es necesario proveer un Event Hub
### [Azure Events Grid](https://learn.microsoft.com/en-us/azure/event-grid/subscribe-to-graph-api-events?context=graph%2Fcontext&tabs=http)

- System key value.
```
http://{functionappname}.azurewebsites.net/admin/host/systemkeys/eventgrid_extension?code={masterkey}
```

## Notifications Types
---
- ***Basic Notification***. Notificación de cambio en el cual no contiene información del recurso. Solamente el id del recurso que presento el cambio, el cual puede ser utilizado para consultar los cambios.
- ***Rich Notification***. Notificación de cambio en el cual información sobre los cambios suscitados en el objeto.
- ***Lifecycle Notifications***. Notificación que informa al cliente cuando esta en peligro de perder una notificación debido al ciclo de vida de la suscripción.
## Triggers and Bindings
---
- Un Trigger provoca la ejecución de una función.
- Un Trigger define como la función es invocada y ejecutada, por lo que es necesario que una función tenga solamente un trigger, ya que este puede pasar información a modo de parámetros especiales a la función.
- El Binding es una forma de conectar de manera declarativa una función con otros recursos, lo cual permite pasar información (Input Binding) o permitir la escritura de información de salida (Output Binding) de la función.

## Suscripciones
---
Lorem...

## Referencia
---
- Guide*. [Set up notifications for changes in resource data](https://learn.microsoft.com/en-us/graph/change-notifications-overview)
- Reference. [Receive change notifications through webhooks](https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks?tabs=http)
- Reference*. [Receive Microsoft Graph API change events through Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/subscribe-to-graph-api-events?tabs=http)
- Reference. [Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)
- Reference. [Azure Event Hubs trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cfunctionsv2%2Cextensionv5&pivots=programming-language-typescript)
- Reference*. [Azure Event Grid trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv3&pivots=programming-language-typescript)
- Reference. [Azure Event Grid bindings for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid?tabs=isolated-process%2Cextensionv3&pivots=programming-language-typescript)
- Guide. [Manually run a non HTTP-triggered function](https://learn.microsoft.com/en-us/azure/azure-functions/functions-create-scheduled-function)
- Guide*. [How to work with Event Grid triggers and bindings in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/event-grid-how-tos?tabs=v2%2Cportal#create-a-subscription)
- Concept. [What is Azure Event Grid?](https://learn.microsoft.com/en-us/azure/event-grid/overview)
- Guide. [Reduce missing subscriptions and change notifications](https://learn.microsoft.com/en-us/graph/change-notifications-lifecycle-events?tabs=http)
- Reference. [Timer trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=python-v2%2Cisolated-process%2Cnodejs-v4&pivots=programming-language-typescript)
- Concept. [Azure Functions scenarios](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scenarios?pivots=programming-language-typescript)
- Concept. [Azure Functions triggers and bindings concepts](https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=isolated-process%2Cnode-v4%2Cpython-v2&pivots=programming-language-typescript)
- Reference. [Use delta query to track changes in Microsoft Graph data](https://learn.microsoft.com/en-us/graph/delta-query-overview)
- Concept. [Partner Events overview for customers - Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/partner-events-overview?WT.mc_id=Portal-Microsoft_Azure_EventGrid)
- Guide. [Subscribe to events published by a partner with Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/subscribe-to-partner-events#register-the-event-grid-resource-provider)
- Reference. [Use the Outlook mail REST API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview?view=graph-rest-1.0)
- Reference. [Microsoft Outlook events](https://learn.microsoft.com/en-us/azure/event-grid/outlook-events)
- Interface. [message resource type](https://learn.microsoft.com/en-us/graph/api/resources/message?view=graph-rest-1.0)
- Interface. [subscription resource type](https://learn.microsoft.com/en-us/graph/api/resources/subscription?view=graph-rest-1.0#properties)
- Reference. [Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)
- Reference. [Microsoft Graph API change notifications](https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0)
- Guide. [Change notifications for Outlook resources in Microsoft Graph](https://learn.microsoft.com/en-us/graph/outlook-change-notifications-overview)
- Guide. [Develop Azure Functions locally using Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-typescript#install-the-azure-functions-core-tools)
- Reference. [Supported languages in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/supported-languages?tabs=isolated-process%2Cv4&pivots=programming-language-typescript#languages-by-runtime-version)
- Reference. [Azure Functions HTTP triggers and bindings overview](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook?tabs=isolated-process%2Cfunctionsv2&pivots=programming-language-typescript)
- Guide. [Code and test Azure Functions locally](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local?pivots=programming-language-typescript#local-settings-file)
- Guide. [QuickStart: Create a function in Azure with TypeScript using Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-**v4**)
- Guide. [QuickStart: Send custom events to web endpoint with the Azure portal and Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart-portal)
- Guide. [Create a TypeScript console app](https://learn.microsoft.com/en-us/graph/tutorials/typescript?tabs=aad&tutorial-step=2)