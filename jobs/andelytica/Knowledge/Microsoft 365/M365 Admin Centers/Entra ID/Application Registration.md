> Application Registration es el punto de entrada para las aplicaciones que usan la plataforma para la autenticación mediante Microsoft.

*Application Registration es el proceso de definir la identidad de una aplicación en la organización para acceder a los recursos de identidad de los usuarios asociados en el tenant.* 

El proceso de registro establece una **relación unidireccional de confianza** entre la aplicación y el proveedor de identidad de Microsoft para poder acceder a las siguientes características.
- Realizar una autenticación/autorización segura por parte de los usuarios en el sistema.
- Acceder a servicios APIs o Microsoft Graph por parte del sistema.
- Exponer una API propia del sistema, en los sistema de Microsoft.

**Estas características impide realizar migraciones de la aplicación a un tenant completamente diferente**.

Microsoft Entra ID representa las aplicaciones mediante objetos de aplicación (Application Object) y entidades de servicios (Principal Service).

**Application Object**. Es la definición principal de la aplicación y es registrada en el tenant original (home tenant), posee propiedades esenciales que permiten identificar la aplicación en la organización, como.
- **Client ID**. Identificador de la aplicación, también conocido como *AppID*, *Application ID*.
- **Directory ID**. Identifica el tenant al que pertenece.
- **Redirect URIs**. Endpoint donde Entra ID devuelve el flujo posterior a la autenticación y recuperación de la identidad del usuario.
- **Credentials**. Permiten demostrar la identidad de la aplicación en el sistema, esto puede ser mediante Managed Identity, Federated Identity Credential, Certificates, **Client Secrets**.
- **Scopes**. Permisos delegados que una aplicación puede solicitar para realizar acciones ...
- **App Roles**. Roles definidos por la aplicación para recuperar determinados Scopes en el sistema ...
- **API Permissions**. Permite definir que APIs puede consumir la aplicación del sistema como Microsoft Graph, Azure Key Vault, SharePoint.
	- **Delegate**. La aplicación actúa e interactúa a nombre del usuario.
	- **Application**. La aplicación actúa con su propia identidad.

**Flujos de Autenticación Principales**.
- **Authorization Code Flow + PKCE**.
- **Client Credentials Flow**.
- **On-Behalf-Of (OBO)**.
- **Device Code Flow**.
- **Implicit Flow, Resource Owner Password Credentials (ROPC)**.

Service Principal. Es la instancia local de la aplicación dentro del tenant

**Enlaces**.
- [Register applications | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)
- [Authenticate users for Zero Trust | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/user-authentication)
- [Acquire authorization to access resources | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/acquire-application-authorization-to-access-resources)
- [Develop delegated permissions strategy | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/developer-strategy-delegated-permission)
- [Develop application permissions strategy | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/developer-strategy-application-permissions)
- [Request permissions that require administrative consent | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/permissions-require-admin-consent)
- [Application identity credentials when there's no user | Microsoft Learn](https://learn.microsoft.com/en-us/security/zero-trust/develop/identity-non-user-applications)