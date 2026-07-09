---
tags:
  - clean-arch
  - architecture
  - develop
---
**Ventajas de la Arquitectura**.

Separación del Dominio, 
- La funcionalidad principal se encuentra aislada y reunida en un solo lugar (Dominio).
- La funcionalidad es independiente, por lo que es sencillo realizar test. Menos dependencias, es menos infraestructura, mocks y stubs necesarios para el testeo.
- Permite determinar si la funcionalidad se ajusta a las expectativas del negocio.

Casos de Uso Independientes,
- Casos de uso son descritos de manera separada, permitiéndonos definir son los servicios de 3ro necesario para nuestro caso de uso.
- Permite adaptar servicios externos a nuestras necesidades de negocio, dándonos libertad para cualquier servicio externo.

Servicios externos Reemplazables,
- Gracias a los adaptadores, los servicios son reemplazables siempre que la interfaz no tenga modificaciones.

**Costos de Implementación**.

Tiempo de Implementación, 
- El diseño e implementación de un adaptador requiere mas esfuerzo, que netamente llamar al servicio externo directamente.
- Debido al desconomiento de requerimientos y limitaciones en las interacciones entre módulos del sistema, es necesario dejar un margen de ampliación para preveer cambios en el sistema. 

Verbosidad Asociada,
- Implementaciones exhaustivas en green projects puede ser excesivo ya que aumentar la barrera del onboarding para nuevos colaboradores.
- Puede ser necesario realizar tradeoffs para ajustarse al presupuesto o al deadline.

Onboardings complejos, 
- Debido a la naturaleza de la arquitectura es necesario conocer la implementación y uso de la misma, lo cual se traduce en capacitaciones o conocimiento previo de los nuevos colaboradores.
- En caso de tener over-engineer en un proyecto inicial integrar nuevos en etapas avanzadas sera mas complejo.

Incrementación del código,
- La implementación genera mas cantidad de código lo que se traduce en un bundle mas grande para el navegador, generando que sea necesario mas tiempo para descargar, parsear e interpretar el código.

**Consideraciones de Implementación**.

En algunos casos puede ser necesario tomar decisiones para controlar la cantidad de código.
- Describir un caso de uso de manera sencilla.
- Acceder a la funcionalidad del dominio desde el adaptador, omitiendo el caso de uso.
- Realizar ajustes en el code splitting.
- ...

**Reducción de Costos**.

> Se puede considerar reducir el tiempo de implementación sacrificando los principios "cleanliness", siempre y cuando los beneficios sea mayores a los costos potenciales

Abstracción de Dominio, Permite entender cual es el diseño a nivel general y como este debería funcionar. Además ayuda a nuevos colaboradores entender el sistema, entidades y como estas se relacionan entre el.
Incluso existe la facilidad de agregar mas capas de ser necesario.

Regla de la Dependencia, La regla es obligatoria debido a la adaptación de los servicios externas a las necesidades de nuestro negocio.