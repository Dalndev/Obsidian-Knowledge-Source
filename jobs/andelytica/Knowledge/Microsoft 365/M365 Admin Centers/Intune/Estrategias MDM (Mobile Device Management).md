
## COPE (Corporate-Owned-Personally-Enabled) -
---
Estrategia de movilidad empresarial en la que la organización **suministra** y es **propietaria** del dispositivo pero **permite que el empleado lo utilice con fines personales**.

- Basado en Contenedorización o Perfiles de Trabajo gestionados por un sistema MDM/UEM
- Se utiliza un registro automatizado de aprovisionamiento para que el dispositivo esta en administración desde que se enciende por primera vez el equipo.
- Se divide el almacenamiento en dos parcelas lógicas, *Perfil de Trabajo*; Cifrado y controlado por la empresa, *Perfil Persona*; Privado para el usuario y utilizado para la gestión de información personal.
## BYOD (Bring-Your-Own-Device)*
---
Estrategia de movilidad donde la organización **permite que los colaboradores utilicen sus dispositivos personales** para acceder a recursos, aplicaciones y datos de la empresa.

- Gestión de Aplicaciones Móviles (MAM). La empresa realiza la administración de aplicaciones de trabajo (Outlook, Teams, etc.)
- Acceso Condicional. Se verifica la "salud" del dispositivo antes de realizar una aplicación de políticas para evitar el acceso a recursos de la organización.
- Se implementa una **Política de Uso Aceptable** (AUP*). Contrato donde el empleado acepte que la empresa puede borrar remotamente las aplicaciones de trabajo.
## CYOD (Choose-Your-Own-Device) -
---
Estrategia intermedia que busca combinar la libertad del usuario (BYOD) con el control y la seguridad de la empresa (COPE). Donde la organización presenta un catálogo limitado de dispositivos pre-aprobados. El empleado elige su preferido, pero la empresa es la propietaria y encargada de la administración.

- El dispositivo se inscribe automáticamente en el sistema de gestión, y al ser propiedad de la empresa se aplica un perfil de "Supervisión", otorgando control total sobre el SO.
- Se habilitan perfiles de trabajo y personales para permitir el uso privado del equipo sin comprometer la información legal o médica.
## COBO (Corporate-Owned-Business-Only)*
---
Estrategia más restrictiva y segura que existe. Donde la empresa es la dueña del dispositivo y su uso está estrictamente limitado a tareas laborales, lo cual evita las actividades personales, instalación de redes sociales, etc.

- El dispositivo se configura en un estado "Propiedad Total", lo que permite al administrador de TI controlar funciones como impedir el restablecimiento de fábrica manual.
- El dispositivo puede configurarse para que solo ejecute una aplicación
- Se puede instalar aplicaciones aprobadas y distribuidas por la empresa a través de MDM
- Es posible realizar una configuración en el tráfico de salida del equipo para que viaje obligatoriamente por una VPN cifrada hacia la oficina o la nube, garantizando que el acceso a los datos médicos nunca sea por red pública.