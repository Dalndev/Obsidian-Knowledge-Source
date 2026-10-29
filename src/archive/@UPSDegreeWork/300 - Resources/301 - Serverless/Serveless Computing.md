Es un servicio donde la infraestructura es invisible y el código se invoca mediante *llamadas las cuales son facturadas*. La invocación o ejecución del código es delegada al proveedor de la nube en donde se **gestiona y aprovisiona la infraestructura** desde los S.O hasta los servidores. 

Serverless es considerado evolución de [[PaaS]] ya que se hace uso de servicios [[BasS]] o [[Cloud Services]]. Pero lo que diferencia a PaaS de Serverless, es que una aplicación usando un enfoque PaaS aparte de especificar los recursos a utilizar esta esta diseñada para aplicaciones de larga duración, la cual siempre estará en ejecución con el fin de atender solicitudes entrantes. Por otra parte FaaS comienza con una solicitud y finaliza al terminar de procesarla, evitando que se consuma recursos si es que no hay ninguna solicitud.

Todo esto genera un nuevo método de escritura e implementacion de aplicación, en donde el enfoque principal es la codificación, permitiendo reducir tiempo de comercialización, costos, complejidad del sistema.

No obstante toda esta delegación de responsabilidad hace que se limite la aplicación y arquitectura de la misma al proveedor seleccionado. [[Dependencia de Proovedor Serverless]].

## Consideraciones de uso
---
***Ventajas***:
- Permite desvincular la entrega de aplicaciones con la administración de la infraestructura, lo cual beneficia en la inversión de actividades de mayor valor como funcionalidades en aplicaciones de alto valor.
- Evita que maquinas virtuales trabajen sin realizar algún computo de importancia de suma importancia.
- Implementado en aplicaciones basadas en eventos sujetas a patrones de trafico impredecibles (No ideales para apps en VM o Contenedores).
- Evita pagar por recursos inactivos en VM
- La capacidad del servidor se ajusta a las necesidades de la demanda de peticiones.

***Desventajas***:
- Aplicaciones con tareas de ejecución prolongadas genera mas costos, que un servidor de VM.
- Complejidad para la implementacion.
- Dependencia del proveedor, no se podrá realizar cambios en la plataforma, proveedor sin tener antes que realizar modificación en la aplicación.
	- Se depende de la disponibilidad de la plataforma y su API. Así como de los costos cambiantes.
- Sobrecarga adicional en llamadas debido a que funciones puedes estar ubicadas en distintos servidores.
- Se produce **arrendamiento múltiple**; Ejecución de un software en el mismo servidor para diferentes clientes causando problemas de seguridad para datos confidenciales.
- Se produce **arranque en frió**; Intervalo de tiempo para que un plataforma escalable maneje la 1ra solicitud de la función, iniciando los recursos internos.
- Se liberan los recursos si no existe solicitudes a la función generando el arranque en frió.
- Algunos proveedores no proporcionan herramientas para probar funciones localmente.

[[301 - Bibliografia]]
