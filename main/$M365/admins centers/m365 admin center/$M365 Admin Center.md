---
tags:
  - m365
date: 2026-10-21
---
La información presentada a continuación, tiene como propósito generar una idea básica para la administración eficiente de la plataforma de **Microsoft 365 admin center**. No obstante cualquier tópico que requiera conocimiento avanzado, es recomendable revisar en la documentación oficial.

---

**M365 Admin Center** es una plataforma centralizada para la **gestion y administración** de los recursos de una organización basada en servicio de la nube, en donde podemos entender como recursos a *usuarios, servicios, aplicaciones, documentos, licencias, dispositivos etc*.

La plataforma permite la administración general del servicio **Business** que ofrece Microsoft para negocios o empresas, por lo que provee una experiencia de administración unificada, con el objetivo de ofrecer sencillez en la administración y responsabilidades IT mas comunes, como la administración de **usuarios**, **grupos**, **administración de suscripciones y facturación**, **administración de credenciales de acceso en usuarios**, **licencias**, **dominios**, **reportes**, **solicitudes de soporte**, **estados de los servicios** etc.

>No contiene todas las configuraciones avanzadas. Funciona como punto de entrada hacia los centros administrativos especializados.

## Conceptos Claves
---

[**M365 Admin Center**](https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/admin-center-overview?view=o365-worldwide)

Plataforma de administración que permite la gestion y supervisión de los **servicios basados en la nube **de Microsoft 365, herramientas y aplicaciones como *Word, Excel, PowerPoint, Teams, One Drive*, etc. 

Entre las principales actividades que se pueden realizar son:

- **Gestion de usuarios**: Creación, modificación y eliminación de *cuentas de usuario*, configuración de *permisos y roles*, gestion de *licencias de Microsoft 365*.
- **Gestion de aplicaciones y servicios**: Configuración y mantenimiento de aplicaciones y servicios incluidos en M365 (*Exchange Online, SharePoint, Teams, etc*).
- **Soporte y resolución de problemas**: Resolución de problemas técnicos relacionados con M365, como sincronización de archivos, integración de aplicaciones, gestion, seguimiento y creación de tickets de soporte, etc.

M365 es una plataforma de administración básica, por lo que brinda las opciones básica o comunes para gestion TI, en cuyo caso se desee administrar de manera mas granular, se debe realizarlo mediante la plataforma de administración especializada. eg. **Administración de MFA de los usuarios se lo realiza en *****M365 Entra ID***.

**Usuarios**

Los usuarios son la entidad que interactúa con los diferentes recursos de la organización pero a parte de la conocer la gestion básica (*crear, gestionar, eliminar*) de los usuarios, es menester comentar las propiedades mas comunes y que poseen mayor importancia en el día a día.

- **Account**: Proporciona información relacionada a la cuenta del usuario, como *alias de emails*, *emails alternativos*, *roles*, *emails*, etc.
- **Licenses and apps**: Proporciona licencias y productos que están asignadas o están disponibles para asignar al usuario.
- **Mail**: Proporciona información básica sobre el mailbox del usuario, como el tamaño utilizado y disponible, permisos de lectura y envió, etc.
- **One Drive**: Proporciona información básica sobre espacio utilizado y disponible, días de retención de archivos eliminados, administración de espacio de almacenamiento, etc.

**Groups**

[Lorem...](https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/office-365-groups?view=o365-worldwide )
[Lorem...](https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide)

En **Microsoft 365**, los grupos son una forma de **gestionar usuarios y recursos** de manera colaborativa, simplificando el acceso compartido a herramientas y servicios como correos, calendarios, archivos y aplicaciones. Además permite tener una mejor eficiencia al momento de asignar políticas y permisos ya que no se lo realiza de manera individual o por usuario, si no que se asigna a un grupo de usuario, con casos de usos o roles similares.

- **M365 Group**: Grupo diseñado para la colaboración y comunicación dentro o fuera de la organización, mediante servicios de colaboración como *SharePoint, Teams*, etc.
- **Distribution List**: Grupo utilizado para la transmisión de información y actualizaciones dentro o fuera de la organización mediante correos. 
- **Security Groups**: Grupos diseñado para la gestion del acceso y administración a recursos de M365, mediante la asignación de permisos o políticas para el acceso a recursos como portales, informes, dispositivos, etc.
- **Mail-enabled security groups**: Similar a los grupos de seguridad, pero con la característica de enviar correos electrónicos a los miembros.

**Roles**

[About Admin Roles](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide&WT.mc_id=365AdminCSH_inproduct) 

Los roles son un conjunto de permisos que se asignan a usuarios para gestionar aspectos específicos de los servicios y recursos de una organización, permitiendo delegar tareas de formar segura y garantizando que los usuarios tengan los privilegios necesarios para realizar la función.

Existen roles administrativos en M365 que permiten gestionar la organización, los cuales son conocidos como **admin roles**, estos permiten asignar permisos a usuarios para delegar tareas de administración en la organización como la gestion de recursos, usuarios, servicios, configuración, etc. de manera controlada.

**Lineamiento de seguridad para asignación de *****admin roles***

Debido a la naturaleza de administración, y al acceso a información o archivos sensibles en la organización hay lineamiento que se debe seguir para mantener la información segura.

- *“**Tener la menor cantidad de administradores globales**”*: Los administradores globales tienen acceso ilimitado a la organización, por lo que pueden bloquear cuentas, reestablecer credenciales, etc. de manera inconsciente.
- “***Asignar al rol la menor cantidad de permisos***“: Significa dar a los administradores solo el acceso necesario para realizar las actividades.
- *“**Requerir MFA para administradores**”*: Permite tener un autenticación mas robusta para verificar la identidad en caso de brechas de seguridad, no se tendrá la posibilidad de alterar configuración en la organización.

**Licencias**

Las licencias de M365 son suscripciones que poseen planes, en donde se ofrecen productos (**servicios o aplicaciones**), las cuales son únicos por usuario. 

Esquema de Licencias en M365

Aquí existen diferentes planes en base al tipo de licencia a adquirir eg. *M365 Business Standard posee la version básica y la version sin Teams*. 

Actualmente los ciclos de facturación están basados de las licencias, se puede desglosar en las siguientes:

- *Suscripción anual* con *facturación mensual* en **1, 3, 6 **meses.
- *Suscripción anual* con *facturación anual* **cada año o cada mes**.
- *Suscripción mensual* con *facturación mensual*.

Cabe mencionar que cada licencia individual es netamente para un usuario especifico, por lo que no se puede asignar la misma licencia a dos usuarios diferentes a la vez, provocando que cada que se quiera reasignar licencias, esta deba ser retira del usuario original. 

*Es importante recordar que cada licencia posee productos asociados **eg. M365 Business Standard & Basic poseen Exchange Online (e-mail)**, por lo que se debe realizar un análisis de los productos que ofrece y si estos mismos pertenecen a una licencia diferente, para evitar adquirir licencias con productos que no se serán usados o están duplicados, con el fin ahorrar costos con ello.*

## Notas

---

- Para realizar la **administración de lo métodos de autenticación (sign-in)** del usuario en la organización como credenciales, multifactor de autenticación, etc. Se debe revisar [M365 Entra ID](https://andelytica-cristhiann.atlassian.net/wiki/spaces/ITR/pages/180027396/M365+Entra+ID).

## Referencias & Documentación

---

[M365 Admin Center](https://www.dev4side.com/en/blog/microsoft-365-admin-center)
