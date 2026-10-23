---
tags:
  - m365
  - whatsapp
---
> Consideraciones Pre-migración a Sistema de Comunicación Microsoft Teams

**Resumen**. 

Debido al problema registrado en el sistema de comunicación a nivel de la empresa relacionado con la plataforma de WhatsApp al se tomo la decisión de realizar la migración al servicio de Microsoft Teams .

**Antecedentes**.

De manera recurrente se ha presentado una incidencia conocida como "*baneo de WhatsApp*" lo cual es la **suspensión de la cuenta asociada a numero telefónico virtual o VoIP registrado en los sistemas de WhatsApp**, lo cual explica el baneo de la cuenta ya que inflige las políticas de uso descritas en la siguiente entrada (**Insertar Referencia**).

### Consideraciones Previo al Proceso de Migración

> Se debe discriminar los chats que únicamente estén relacionados con temas con flujos de actividades/trabajo interno.

> Se estima que existen 22 cuentas activas en el sistema de WhatsApp para ser migradas al nuevo sistema de comunicación entre ellas muchas reasignadas a diferentes responsables.

**Usuarios**.
- Es necesario que cada usuario activo posea una cuenta empresarial en la organización para gestionar de manera optima la asignación a los grupos, mensajes privados, etc.
- Es necesario definir la organización de origen de las cuentas para evitar duplicados en diferentes organizaciones.
- Es necesario identificar los chats a ser respaldados desde el sistema de comunicación antiguo (WhatsApp) a fin de identificar las conversaciones con alta prioridad de ser respaldadas incluye documentos, multimedia, etc. 

**Grupos**.
- Se debe identificar los conversaciones grupales a respaldados que posean alta prioridad de respaldo.
- Se debe identificar los miembros activos de los grupos a respaldas, debido a la alta posibilidad de cuentas inactivas en el sistema de comunicación antiguo y cuentas inexistentes en la actual organización.
- Es necesario determinar la organización principal que va a gestionar la información asociada a los grupos ya que cada documento, imagen, etc vive únicamente en la organización que fue creada. Esto con el fin de evitar una dispersión de la información entre las organizaciones que colaboran.
- La creación de grupos esta reservada netamente a usuarios con dichos permisos, por lo que es necesario solicitar la creación a un administrador o en su defecto definir los usuarios que puedan realizar dicha acción para asignar los permisos necesarios.

**Chats**.
- Hay que considerar que el historial de chats no implementa la opción de "restaurar chats" por lo que en dado caso de que una cuenta sea elimina de manera permanente la información no tiene posibilidad de ser restaurada.
- No existe actualmente desarrollada un proceso de migración de chats de forma nativa entre WhatsApp y Teams por lo que es menester realizar un proceso de migración automatizado de manera interna, lo cual necesita un proceso de análisis, desarrollo, prueba e integración para evitar perdida de información.
- Debido a que actualmente la implementación de las cuentas de WhatsApp son de tipo personal es necesario realizar una cambio de cuentas de tipo Business para poder acceder a las funcionalidades que ofrece WhatsApp para interactuar con sus sistemas, por lo cual es menester realizar una validación de la cuenta aumentando la complejidad de la organización.

**Conclusión**.

Debido a la cantidad de cuentas actualmente activas y a su historial de ser reasignadas, a demás de involucrar las consideraciones que se deben tener en cuenta para la migración se le asocia una complejidad natural al proceso. Por lo cual es necesario realizar una análisis mucho más detallado para poder estimar un tiempo de migración que permita evitar perdida de información y adaptación de la funcionalidad del sistema anterior (WhatsApp) al nuevo sistema de comunicación (Teams) ya que por la variación de funcionalidades y diseño entre sistemas es imposible adaptar totalmente las funcionalidades de un sistema a otro.