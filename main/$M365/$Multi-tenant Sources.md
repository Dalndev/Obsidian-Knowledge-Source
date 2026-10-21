---
tags:
  - m365
  - architecture
date: 2026-10-20
metadata:
---
**Topología Full-Mesh**

Una topología full-mesh es una Multi-tenant Organization (**MTO**) donde cada tenant (organización) sincroniza sus usuarios internos directamente en los demás tenants, ya sea de manera unidireccional o bidireccional.

> Una integración MTO permite una colaboración intuitiva entre los diferentes tenants por ejemplo, encontrar usuarios, iniciar chat, reuniones y acceder a recursos de manera intuitiva y sencilla.

Para realizar la sincronización de usuarios entre tenants (**Cross-tenant Synchronization**) es necesario un servicio de aprovisionamiento encargado de gestionar la **creación**, **actualización** y **eliminación** de usuarios entre los tenants.

![[Pasted image 20261020143016.png]]
*Figura. Topología Full-Mesh implementada a nivel empresarial.*

**Enlaces de Interes**.
- [Topologies for cross-tenant collaboration](https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-topology)
- [What is cross-tenant synchronization?](https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-overview)
- [Plan for multitenant organizations in Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/enterprise/plan-multi-tenant-org-overview?view=o365-worldwide)
- [Synchronize users in multitenant organizations in Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/enterprise/sync-users-multi-tenant-orgs?view=o365-worldwide)
  
- [Configure cross-tenant synchronization](https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure?pivots=same-cloud-synchronization)
- [Plan for meetings with external participants in Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/plan-meetings-external-participants)
- [Manage multitenant org settings](https://learn.microsoft.com/en-us/microsoft-365/enterprise/manage-multitenant-org-settings?view=o365-worldwide)
- [Multitenant org FAQ](https://learn.microsoft.com/en-us/microsoft-365/enterprise/multitenant-org-faq?view=o365-worldwide)
- [Manage external meetings and chat with people and organizations using Microsoft identities](https://learn.microsoft.com/en-us/microsoftteams/trusted-organizations-external-meetings-chat?tabs=organization-settings)