---
tags:
  - m365
  - microsoft
date: 2026-10-21
---
## Modelo administrativo

Un tenant constituye una frontera independiente de:
- Identidades (Usuarios).
- Dominios.
- Licencias y suscripciones.
- Configuraciones de seguridad.
- Datos de Exchange, Teams, SharePoint y OneDrive.
- Auditoría y cumplimiento.
- Roles administrativos.

Microsoft 365 Admin Center modifica configuraciones del tenant seleccionado. En organizaciones con varios tenants, el administrador debe confirmar permanentemente:
1. El nombre del tenant.
2. La cuenta administrativa utilizada.
3. El dominio principal.
4. El entorno sobre el cual se realizará el cambio.

> Una configuración aplicada en un tenant no se replica automáticamente en los demás.
### Controles mínimos de Seguridad

- Habilitar MFA para las cuentas administrativas.
- Utilizar cuentas administrativas separadas de las cuentas de productividad (colaboradores).
- Mantener al menos dos cuentas administrativas de acceso de emergencia.
- Proteger y monitorear las cuentas de emergencia.
- Aplicar acceso condicional cuando se disponga de Microsoft Entra ID P1 o superior.
- Revisar periódicamente las asignaciones administrativas.
- Evitar cuentas administrativas compartidas.
- Registrar formalmente quién autoriza cada cambio privilegiado.
## Secciones principales de Microsoft 365 Admin Center

| Sección                   | Funciones                                                              |
| ------------------------- | ---------------------------------------------------------------------- |
| Inicio                    | Resumen del tenant, alertas, acciones recomendadas y accesos rápidos   |
| Usuarios                  | Usuarios activos, contactos, invitados y usuarios eliminados           |
| Equipos y grupos          | Grupos de Microsoft 365, seguridad, distribución y buzones compartidos |
| Roles                     | Consulta y asignación de roles administrativos                         |
| Recursos                  | Administración general de recursos, sitios y salas                     |
| Facturación               | Suscripciones, productos, licencias, compras y facturas                |
| Configuración             | Dominios, perfil organizacional y parámetros globales                  |
| Informes                  | Adopción, utilización y actividad de servicios                         |
| Estado                    | Estado del servicio y Centro de mensajes                               |
| Soporte                   | Creación y seguimiento de solicitudes                                  |
| Centros de administración | Acceso a las consolas especializadas                                   |

> La interfaz puede cambiar. Cuando una opción no esté visible, se recomienda utilizar **Mostrar todo** o el buscador del portal.

## Administración de usuarios
---
### Alta de usuario

**Ruta habitual**.
`Usuarios → Usuarios activos → Agregar un usuario`

**Procedimiento**.
1. Registrar nombre, apellido y nombre para mostrar.
2. Seleccionar el dominio y definir el UPN (**User Principal Name**).
3. Establecer ubicación de uso.
4. Asignar licencias o grupos de licenciamiento.
5. Definir las aplicaciones habilitadas dentro de la licencia.
6. Asignar roles solamente si son necesarios.
7. Configurar departamento, cargo, oficina y datos de contacto.
8. Entregar las credenciales iniciales mediante un canal seguro.
9. Verificar que el usuario complete el registro de autenticación.
10. Validar acceso a Exchange, Teams, OneDrive y demás servicios.

La ubicación de uso es importante porque condiciona la disponibilidad legal de determinados servicios. Microsoft describe el procedimiento en [Agregar usuarios y asignar licencias](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide).

### Modificación de usuario

Antes de modificar una cuenta, debe determinarse su fuente de autoridad:
- **Usuario cloud-only:** puede modificarse desde Microsoft 365 o Microsoft Entra.
- **Usuario sincronizado desde otro tenant:** los atributos sincronizados deben modificarse en el tenant de origen.

Modificar en el destino una propiedad controlada por sincronización puede producir un error o ser sobrescrito en el siguiente ciclo.

### Baja de usuario

La baja debe tratarse como un proceso controlado:
1. Bloquear el inicio de sesión.
2. Revocar sesiones y tokens.
3. Restablecer la contraseña si existe riesgo de acceso.
4. Retirar roles administrativos.
5. Conservar o transferir el correo.
6. Transferir los archivos de OneDrive.
7. Revisar pertenencia a grupos, Teams y aplicaciones.
8. Configurar respuesta automática o reenvío, si está autorizado.
9. Aplicar las políticas de retención correspondientes.
10. Retirar las licencias cuando los datos estén protegidos.
11. Eliminar la cuenta solamente al finalizar el proceso.

**Una cuenta eliminada permanece recuperable aproximadamente 30 días.** La eliminación permanente no se puede revertir. Si el usuario se origina en Active Directory local, la baja debe realizarse desde la fuente autorizada. Véase [Proceso de eliminación de exempleados](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee-step-7).

> Eliminar una licencia, eliminar una cuenta y eliminar los datos no son operaciones equivalentes. La retención debe definirse antes de retirar licencias o borrar identidades.
## Administración de licencias
---

Las licencias pueden asignarse:
- Directamente a un usuario.
- Mediante grupos.
- Durante la creación del usuario.
- Desde **Facturación → Licencias**.
- Mediante Microsoft Graph o PowerShell para procesos automatizados.

> Para entornos medianos o grandes se recomienda utilizar licenciamiento basado en grupos, debido a que reduce asignaciones manuales y facilita la baja automática.

Controles recomendados:
- Documentar qué perfil laboral corresponde a cada licencia.
- Evitar asignaciones directas cuando ya exista licenciamiento por grupo.
- Revisar errores de asignación.
- Controlar la disponibilidad de licencias antes de procesos masivos.
- Revisar servicios individuales habilitados dentro de cada producto.
- Conciliar mensualmente licencias compradas, asignadas y utilizadas.
- No retirar una licencia sin evaluar su impacto sobre Exchange, OneDrive, Teams, archivo y retención.

El portal muestra si la asignación fue directa o mediante grupo y permite revisar errores de procesamiento. Véase [Asignar o retirar licencias](https://learn.microsoft.com/microsoft-365/admin/manage/remove-licenses-from-users?view=o365-worldwide).

## Administración de grupos

| Tipo                                      | Uso principal                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| Grupo de Microsoft 365                    | Colaboración con buzón, calendario, SharePoint, Planner y opcionalmente Teams |
| Grupo de seguridad                        | Asignación de permisos, aplicaciones o licencias                              |
| Grupo de distribución                     | Distribución de correo                                                        |
| Grupo de distribución dinámico            | Distribución calculada mediante atributos                                     |
| Grupo de seguridad habilitado para correo | Permisos y distribución de correo                                             |
| Buzón compartido                          | Dirección funcional utilizada por varias personas                             |

Debe evitarse crear grupos duplicados para el mismo propósito. La creación de un Team normalmente genera un grupo de Microsoft 365 y recursos asociados.

Todo grupo operativo debería contar con:
- Propósito documentado.
- Al menos dos propietarios.
- Convención de nombres.
- Clasificación o etiqueta de sensibilidad cuando corresponda.
- Revisión periódica de miembros.
- Proceso de expiración o renovación.
- Reglas definidas para invitados.

Microsoft documenta las diferencias en [Comparación de tipos de grupos](https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide).
## Dominios y DNS
---

**Ruta**.
`Configuración → Dominios`

El proceso general para incorporar un dominio es.
1. Agregar el dominio en Microsoft 365.
2. Verificar la propiedad mediante un registro TXT.
3. Crear los usuarios y buzones necesarios.
4. Configurar los registros DNS de los servicios.
5. Validar el funcionamiento.
6. Cambiar el dominio predeterminado, si corresponde.
    

**Registros comunes**.
- **TXT:** verificación del dominio y SPF.
- **MX:** recepción de correo.
- **CNAME:** autodiscover y otros servicios.
- **DKIM:** firma de mensajes.
- **DMARC:** política y reporte de autenticación de correo.

La modificación del registro MX puede interrumpir la recepción de correo. Antes del cambio deben existir los usuarios, buzones, dominios aceptados y mecanismos de autenticación correspondientes. Véase [Agregar un dominio personalizado](https://learn.microsoft.com/en-us/microsoft-365/admin/setup/add-domain/).
## Estado del servicio y gestión de cambios
---
### Estado del servicio

**Ruta**.
`Estado → Estado del servicio`

Debe utilizarse para consultar:
- Incidentes activos.
- Avisos de degradación.
- Servicios afectados.
- Usuarios o regiones potencialmente impactados.
- Historial y actualizaciones de Microsoft.
- Acciones que debe ejecutar el cliente.

**Ante una incidencia**.
1. Confirmar si existe un incidente oficial.
2. Identificar servicio, región y alcance.
3. Revisar telemetría local.
4. Comunicar el impacto.
5. Registrar el identificador del incidente de Microsoft.
6. Aplicar mitigaciones documentadas.
7. Validar la recuperación antes de cerrar el caso.

Referencia: [Comprobar el estado de los servicios](https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health?view=o365-worldwide).
### Centro de mensajes
---

**Ruta**.
`Estado → Centro de mensajes`

**El Centro de mensajes anuncia**.
- Nuevas funcionalidades.
- Cambios de comportamiento.
- Retiro de funcionalidades.
- Cambios de seguridad y cumplimiento.
- Fechas de implementación.
- Acciones requeridas por el administrador.

Los mensajes deberían revisarse al menos semanalmente y clasificarse como:

- Informativo.
- Requiere análisis.
- Requiere comunicación.
- Requiere cambio técnico.
- Requiere aprobación de seguridad o cumplimiento.
## Reportes, auditoría y soporte
---
### Reportes

Los reportes de uso permiten revisar adopción y actividad de servicios como Exchange, Teams, SharePoint, OneDrive y aplicaciones de Microsoft 365.

Deben utilizarse para:
- Identificar licencias subutilizadas.
- Detectar usuarios inactivos.
- Evaluar adopción.
- Dimensionar almacenamiento.
- Sustentar renovaciones de licenciamiento.

Los reportes de uso no sustituyen los registros de auditoría. Véase [Reportes de actividad de Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide).
### Soporte

Antes de abrir un caso con Microsoft:
1. Consultar el estado del servicio.
2. Registrar fecha, hora y zona horaria.
3. Identificar usuarios y servicios afectados.
4. Capturar mensajes de error y códigos de correlación.
5. Documentar pruebas realizadas.
6. Determinar si el problema es general o individual.
7. Crear la solicitud desde **Soporte → Nueva solicitud de servicio**.
## Frecuencia operativa recomendada
---

| Frecuencia | Actividades                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------ |
| Diaria     | Revisar incidentes, alertas críticas, errores de aprovisionamiento y solicitudes de soporte      |
| Semanal    | Revisar Centro de mensajes, cambios administrativos, usuarios sin licencia y sincronizaciones    |
| Mensual    | Conciliar licencias, revisar roles, usuarios invitados, grupos sin propietario y utilización     |
| Trimestral | Revisar accesos privilegiados, cuentas de emergencia, políticas, dominios y contactos operativos |
| Semestral  | Ejecutar pruebas de recuperación, revisar documentación y validar procedimientos de baja         |
| Anual      | Revisar arquitectura, licenciamiento, retención, cumplimiento y estrategia multitenant           |
## Control de cambios

Todo cambio administrativo relevante debe registrar:
- Número de solicitud.
- Tenant afectado.
- Objetivo.
- Responsable y aprobador.
- Estado anterior.
- Cambio realizado.
- Fecha y hora.
- Riesgo e impacto.
- Plan de reversión.
- Evidencia de validación.
- Resultado final.

Los cambios de dominio, acceso condicional, roles globales, sincronización, correo y políticas de seguridad deben tratarse como cambios de alto impacto.
## Conclusión

Microsoft 365 Admin Center es la consola de coordinación administrativa del tenant, pero la operación completa depende de varios centros especializados. Su administración debe basarse en mínimo privilegio, separación de funciones, documentación de cambios, monitoreo continuo y procedimientos formales de ciclo de vida.

En entornos multitenant, la principal consideración es que cada tenant continúa siendo una frontera independiente. La experiencia integrada depende de una correcta coordinación de identidades, sincronización, acceso entre tenants, licenciamiento, políticas y propiedad de los recursos.