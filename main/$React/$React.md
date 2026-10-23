---
aliases:
tags:
  - react
  - develop
---
- Librería enfocado al desarrollo de aplicaciones SPA ([[Single Page Application]]) mediante CSR ([[Client Side Rendering]]) la cual esta basada en **componentes**.
  
- Implementa un arquitectura [[MVVM]] (Model, View, View-Model);
	- **View**. Entrega al cliente lo actualmente se esta renderizado en la pantalla del navegador en una aplicación web.
	- **Model**. Espacio de la aplicación para almacenar los valores de las variables implementadas a nivel de código.
	- **Controller**. Espacio que contiene la lógica de negocio necesario para realizar las modificaciones en los valores del modelo.

> Los componentes visuales (View) en React posee la capacidad de modificar la información de las variables (Model), este proceso es conocido como [[Dual-Binding]]. `... model -> view -> model`

> Funcionalidades & Características adicionales o propias del negocio, como enrutamiento (navegación), validaciones de datos, etc. Es integrado mediante un conjunto de librerías de 3ro, tal como Zod, React Router. Siempre que se tenga la necesidad de implementarlas.

**Consideraciones para Implementación de React**.

- Ofrece una aplicación **simple**, únicamente se integran las funcionalidades que se requieran. Evitando el **overload** (paquetes extras sin utilizar) y disminuyendo el peso de los builders finales de la aplicación.
- Permite **prototipado**...