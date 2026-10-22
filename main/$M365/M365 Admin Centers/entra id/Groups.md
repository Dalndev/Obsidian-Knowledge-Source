Un grupo es un objeto de directorio utilizado para reunir identidades y administrar colectivamente aspectos como acceso a recursos, licencias, roles, colaboración, correo, teams, channels, inbox, etc.

**Tipos de Grupo**.
- **Grupos de Seguridad**. Se utilizan para administrar el acceso a los recursos compartidos, los cuales pueden ser *políticas de acceso condicional, políticas de Intune, etc*.
- **Grupos de Microsoft 365**. Son grupos que permiten la colaboración entre los usuarios, mediante el aprovisionamiento de recursos asociados como mailbox compartido, dirección de email, sitio de SharePoint, etc.
- **Grupos de Distribución**. Son grupos utilizados para enviar o redirigir correos electrónicos a los miembros mediante una sola dirección. (La administración se realiza desde EAC).
- **Grupos de Distribución Dinámico**. Son grupos que utilizan condiciones/propiedades para determinar a los miembros del grupo.

**Tipos de Asignación**.
- **Asignación Directa**. Asignación enfocada en agregar a un usuario especifico como miembros de un grupo y tener permisos únicos.
- **Asignación Dinámica (Usuarios)**. Asignación mediante la utilización de reglas que realizar la administración de los usuarios de manera automática, donde el sistema examina las reglas para determinar que usuarios se asignan a un recurso específico.
- **Asignación Dinámica (Dispositivos)**. Asignación mediante la utilización de reglas que realizar la administración de los dispositivos de manera automática, donde el sistema examina las reglas para determinar la acción a realizar sobre el miembro del grupo.

> La evaluación de cambios en los grupos no son instantáneos ya que este proceso se realiza de forma asíncrona en un intervalo de tiempo de unas horas a 24 horas dependiendo de la cantidad de usuarios, reglas y carga de procesamiento.