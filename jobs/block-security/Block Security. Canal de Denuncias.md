---
tags:
  - develop
  - block-security
  - software
---
# Software. Canal de Denuncias
## Notas.
---
- Denuncias.
- ~~Definir los tipos de denuncias existente, en caso de no existir, definir un campo para establecer el acto.
- ~~Opción de "otros" de define como la principal
- ~~Pintar el campo de rojo cuando falte llenar algo en el formulario.
- ~~Guardar en la nuble los datos denunciados
- ~~Exportar el caso en formato CSV, Excel, etc.
- ~~Mostrar un dashboard de hechos denuncias o registrados en la interfaz.
- ~~Alertas de denuncias nuevas, de forma rápida y reservada.
- ~~Enviar notificaciones mediante correo electrónico o algún sistema de mensajería (WhatsApp), al **oficial de cumplimiento**.
- *Parte involucrada, debe ser movida a la sección de datos del denunciado*.
- ~~Desarrollar un dashboard para revisar el estado de los casos: Verde, Rojo, Azul
- ~~Realizar seguimiento de los casos para poder saber el estado (cerrado, revision, abierto). 
- *Como nos vamos a organizar para cerrar los casos y como se van a tener los casos abiertos* 

## Preguntas.
---
- El canal de denuncias debe manejar las denuncias de manera confidencial, pero existen casos en lo que solicitan datos personales como nombres y apellidos. En este caso, ¿es necesario guardar los datos de manera plana o con algún sistema de encriptación?
- En el sistema, el oficial de cumplimiento cumplirá un rol de responsable de denuncia, este mismo contexto, ¿dicho rol tendrá la posibilidad de poseer mas usuario que cumplan con dicha función?
	- Si existe mas de un usuario con el rol de oficial de cumplimiento, ¿cual es el proceso para asignar la denuncia a los diferentes usuarios?
- En el sistema, el oficial de cumplimiento tiene la posibilidad de priorizar casos, además posee un proceso de resolución de denuncia. ¿este proceso estructurado de resolución deberá ser incluido en el sistema?
	- Si existe un proceso para la resolución, ¿cual es dicho proceso?. Explicar cada paso de manera detallada.
	- La priorización de casos, se dará de manera manual por el oficial de cumplimiento, o existe algún parámetro para determinar su prioridad, ej. Tipo de denuncia.
- En el sistema existe usuarios con el rol de "denunciante", los cuales pueden ser considerados usuarios "invitados" (usuarios que tiene acceso al sistema sin la necesidad de registrarse, pero con la opción de hacerlo). En este contexto, ¿es necesario presentar la opción de registro al usuario denunciante?
## Ideas. 
---
- El sistema "Canal de Denuncias", tiene como objetivo optimizar el flujo de trabajo en colaboradores que están asignados como responsables de un "caso de denuncia", en donde se podrá mejorar el proceso seguimiento del caso, en los cuales incluye.

# Revisión. Jueves 05 de Junio 25

- **Consideraciones**.
	- **Canal denuncias**. Depende del tamaño de la empresa a la cual se va a vender la app.
	- **Oficial de Cumplimiento**. Esta interesado en conocer el tipo de denuncia que tiene un caso
	- **Oficial de Cumplimiento**. No tiene la facultad de investigar el caso.
- **Funcionalidades**.
	- Registrar los "*logs*" de las acciones realizadas en el sistema del oficial de cumplimiento.
	- Cuando un caso se de por resulto, este no deberá ser mostrado en el dashboard.
	- Las notificaciones se deben realizar mediante correo electrónico.
	- Agregar el rol "*Atención al cliente*"
		- Realizara el seguimiento/investigación del caso asignado.
			- Tiene la posibilidad de acceder a la información del caso
			- Tiene la posibilidad de conocer el estado del caso.
			- Tiene la funcionalidad de marcar la prioridad del caso.
- **Cambios**.
	- Se diversificaran las funcionalidades del oficial de cumplimiento y serán asignadas a un oficial de atención al cliente.
- **Eliminaciones**.
	- **Remover**. Autoridad de Gobierno
	- ~~**Remover**. Dropdown Parte involucrada
- **Necesitan Explicación**.
	- El app lo manejaría el delegado de atención al cliente