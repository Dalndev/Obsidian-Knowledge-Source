### Consideraciones

- Al momento de crear un **multitenant** en una organización esta se definida como "owner" y los tenants invitados se definen como "members".
- Solamente un "administrador global" puede crear un **multitenant** y de igual forma solo este puede unir a una organización **multitenant**.

## Topologías  para "Colaboración" entre "Tenants"

- **Hub and Spoke**. Topología basada en un *"hub" central el cual establece relaciones de confianza directas de colaboración con cada tenant o "spoke", pero estos últimos no tiene relaciones de colaboraciones con el hub central*.
  
  Existen dos patrones en la topología Hub and Spoke
	- *Centrado en Aplicaciones*. Se centra en la integración de las aplicaciones implementadas en los tenants correspondientes, en los tenants que asociados.
	- *Centrado en usuario*. Se centra en la integración de los usuarios entre los diferentes tenants que forman parte.
- **Mesh**
	- Lorem...
- **Just-in-time**
	- Lorem...