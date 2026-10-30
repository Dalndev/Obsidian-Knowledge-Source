> Application Registration es el punto de entrada para las aplicaciones que usan la plataforma para la autenticación mediante Microsoft.

*Application Registration es el proceso de definir la identidad de una aplicación en la organización para acceder a los recursos de identidad de los usuarios asociados en el tenant.* 

El proceso de registro establece una **relación unidireccional de confianza** entre la aplicación y el proveedor de identidad de Microsoft para poder acceder a las siguientes características.
- Realizar una autenticación/autorización segura por parte de los usuarios en el sistema y/o aplicación desarrollada.
- Acceder a servicios APIs o Microsoft Graph por parte del sistema.
- Exponer una API propia del sistema, en los sistema de Microsoft.

> **Estas características impiden realizar migraciones de la aplicación a un tenant completamente diferente una vez registrado**.

Microsoft Entra ID representa las aplicaciones mediante objetos de aplicación (Application Object) y entidades de servicios (Principal Service).

**Application Object (Plantilla)**. Es la definición principal de la aplicación y es registrada en el tenant original (home tenant), posee propiedades esenciales que permiten identificar la aplicación en la organización, ejemplo.
- **Client ID**. Identificador de la aplicación, también conocido como *AppID* o *Application ID*.
- **Directory ID**. Identifica el tenant al que pertenece.
- **Redirect URIs**. Endpoint donde Entra ID devuelve el flujo posterior a la autenticación y recuperación de la identidad del usuario.

## **Authentication**.

- **Credentials**. Permiten demostrar la identidad de la aplicación en el sistema, esto puede ser mediante Managed Identity, Federated Identity Credential, Certificates, `Client Secrets`.
- **API Permissions**. Permite definir que APIs puede consumir la aplicación del sistema como Microsoft Graph, Azure Key Vault, SharePoint.
	- **Delegate**. La aplicación actúa e interactúa con Microsoft a nombre del usuario.
	- **Application**. La aplicación actúa con Microsoft con su propia identidad, sin usuario.
	  *Generalmente requieren consentimiento administrativo y pueden otorgar acceso amplio al tenant.*

**Credenciales Principales**.
- **Managed Identity**. Implementado cuando se ejecuta un servicio en Azure, en donde Azure asigna y rota credenciales de acceso de manera automática.
- **Federated Identity Credential**. Permite confiar en tokens emitidos por plataformas como GitHub Actions, CI/CD, Proveedores mediante OIDC.
- **Certificates**. El sistema conserva una clave privada y se registra la pública en Entra ID.
- **Client Secrets**. Contraseña asignada a la aplicación para el acceso a los servicios de Microsoft.

**Flujos de Autenticación Principales**.
- [**Authorization Code Flow + PKCE**](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow). Implementado en SPA, moviles, web, escritorio donde PKCE permite proteger el código de autorización.
- **Client Credentials Flow**. Utilizado cuando no existe un usuario conectado, enfocado para sistemas.
- **On-Behalf-Of (OBO)**. Utilizado cuando una API Middleware gestiona el token de autenticación/autorización del usuario para realizar solicitudes a otra API tercera conservando el contexto de accedo/delegado.
- **Device Code Flow**. Utilizado para dispositivos con entrada limitada.
- **Implicit Flow, Resource Owner Password Credentials (ROPC)**.

**Service Principal (Instancia)**. Es la instancia local de la aplicación dentro del tenant (Enterprise Applications)

> App Registration define lo que la aplicación es; Enterprise Application controla lo que esa aplicación puede hacer dentro de un tenant.

**Declaración & Consentimiento**.

> Agregar un permiso (Declaración) a la aplicación, no necesariamente le concede acceso. El permiso se vuelve efectivo cuando existe un consentimiento y se crea un otorgamiento al Service.

**Consentimiento**. Autoriza y permite a la aplicación utilizar determinados permisos.
- **Consentimiento de Usuario**. Utilizados en permisos delegados de bajo impacto ejm. Leer información básica del perfil del usuario.
- **Consentimiento Administrativo**. Administrador concede permisos a la organización.
- **Consentimiento por Tenant**. El consentimiento es administrado por separado en los tenants consumidores.

## **Expose API**

**Scopes**. Permisos delegados que una aplicación puede solicitar para realizar acciones el sistemas propietarios.

**App Roles**. Roles definidos por la aplicación para recuperar determinados Scopes en el sistema.

**Enlaces**.
- [Register applications | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- [Authenticate users for Zero Trust | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/user-authentication)
- [Acquire authorization to access resources | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/acquire-application-authorization-to-access-resources)
- [Develop delegated permissions strategy | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/developer-strategy-delegated-permission)
- [Develop application permissions strategy | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/developer-strategy-application-permissions)
- [Request permissions that require administrative consent | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/permissions-require-admin-consent)
- [Application identity credentials when there's no user | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/identity-non-user-applications)
- [Overview of permissions and consent in the Microsoft identity platform - Microsoft identity platform | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview)