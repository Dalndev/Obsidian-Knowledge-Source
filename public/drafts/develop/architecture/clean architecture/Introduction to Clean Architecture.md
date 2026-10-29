---
tags:
  - develop
  - react
  - architecture
  - clean-arch
ref:
---
> Designing is fundamentally about taking things apart... in such a way that they can be put back together. ...Separating things into things that can be composed that's what design is. 
> *Rich Hickey. Design Composition and Performance*

**Architecture & Design**.

- Un objetivo de una arquitectura es **permitir al sistema ser extensible** debido a la naturaleza cambiante de los requisitos del sistema.
	- Permite una integración, modificación y actualización sencilla ante un nuevo requerimiento en el sistema.

---
![[Pasted image 20260525093014.png]]

---

**Clean Architecture**.

- Forma/Manera de separación de responsabilidades y las partes de la funcionalidad en base a la proximidad al dominio de la aplicación.
- Se representa mediante un arquitectura de 3 capas (layers) debido a que la funcionalidad es dividida en capas.

**Domain Layer**.

> Se considera la parte del mundo real que es modelado en nuestro sistema, donde la transformaciones de datos son reflejan las transformaciones en el mundo real. `eg. Actualización del un producto (Nombre Antigua a Nombre Actual) := Transformación de dominio`

- Son las **Entidades** e **Información** que tiene como propósito describir el área (Giro de Negocio) de la aplicación. `eg. Tienda := [Productos, Pedidos, Usuarios, Carrito, ...]`
	- Define el código para realizar la transformación de la información. **Esta depende únicamente de las reglas de ese dominio en concreto**
	  eg. Función de costos, detección de preferencias, etc.

> La estructura de datos de las entidades y la esencia de las transformaciones son independientes del mundo exterior. *Eventos externos pueden desencadenar transformaciones del dominio, pero no definen como se producen o realizan*.

**Application Layer**.

- Define los **use cases** (escenarios del usuario) los cuales son responsables de establecer el proceso a seguir ante la ejecución/inicialización de un evento. `eg. Agregar al Carrito := Describe las acciones a realizar una vez se inicia la acción (Clic)`
  **Procesos**.
	- Enviar una petición HTTP al servicio externo.
	- Realizar la transformación al dominio definido.
	- Actualizar la UI en base a la respuesta recibida.
- Un use case tiene asociado siempre un actor, acción y resultado.

**Ports**.

> Define "el **como** nuestro sistema realiza la comunicación con el mundo exterior". Generalmente un puerto es una **interfaz/contrato** de implementación.

- Ports actúan como una "buffer zone" entre el sistema y la realidad.
	- **Input Ports**. Especifica las propiedades/parámetros de entrada de información al sistema por parte del exterior.
	- **Output Ports**. Especifica las propiedades/parámetros de salida de información del sistema al exterior.

**Adapters**.

> Manera de reducir el acoplamiento de nuestro código y el de los servicios de terceros, permitiendo disminuir la necesidad de modificar un módulo cuando se modifica otro.

- Capa **necesaria** para permitir la compatibilidad de servicios externos con los requisitos/dominio de nuestra aplicación.
- **Driving Adapters**. Adaptadores que **envían** signal a nuestro sistema desde fuentes externas.
  Adaptador con el que generalmente los usuarios interactúan. `eg. Boton de la UI (API Navegador) es administrado por un Driving Adapter, convirtiendo el event en una signal que nuestro sistema gestione`
- **Driven Adapters**. Adaptadores que **reciben** signal desde nuestro sistema o de fuentes internas.
  Adaptador que interactúa con la infraestructura `eg. Interacción con un motor de búsqueda.`

> Mientra más alejado del dominio, más orientado a servicios será la funcionalidad del código.

**Notes**.
- Las entidades son responsables de definir sus propios métodos, atributos y propiedades necesarias para cumplir con un proceso, actividad o función primaria. 

**Referencias**.
- [Alex Bespoyasob, Clean Architecture on Frontend (Post)](https://dev.to/t/typescript)

