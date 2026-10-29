
Angular es una plataforma de desarrollo web (**colección de frameworks**) para creación aplicaciones SPA (Single page aplication), basado en typescript y mantenido por Google.
- CLI - Comando de Interfaz de Comandos
- Angular Material - Framework de Componentes
- Angular Universal - SSR (Serve-Side Rendering)

*Framework de Estructura*; Por medio de **directivas** manejan, estructuran y agregan funcionalidades extras a elementos del DOM, de una aplicación.
- `ng-if`: Directivas que agrega un condicional, donde ante una condición realiza un render.
- `ng-for`: Directiva que agrega una forma de iteracion, donde ante un array renderiza cada elemento.
- `ng-container`:
- `ng-template`:
- `ng-switch`:

Ademas cada componente de angular separa el html, estilos y lógica en diferentes archivos.
*Para el desarrollo de solucion existe Angular Way, para resolver un problema*

*Módulos*; Medio para estructurar el código de una aplicación en Angular, en donde cada modulo es considerado feature.
- *feature*: Código que provee una funcionalidad a la aplicación.
- *core*: 
- *shared*: Modulo que posee componentes como botones, inputs, que pueden ser compartidos, con el fin de ser utilizados y llamados en diferentes módulos/features de la aplicación.

***Los componentes en angular necesariamente deben estar declarados en módulos, junto con sus dependencias, estilos, lógica, servicios, etc.***

*StandAlone Components*; Son componentes los cuales no necesita ser declarados en un modulo para existir, y cada una de las dependencias necesarios para el componente son declarados en el mismo. 

*Decorators*; Funcionalidad de typescript que permite agregar funcionalidad extra a una clase, función o variable.

*Service*; Fichero en donde existe información la cual es estable y singleton (Única Instancia). Permite almacenar información, debido a que este no se destruye (no volatil) a comparación de un componente. 
## Ventajas
---
- Ofrece una estructura de desarrollo definido
- Permite tener un proyecto robustos
- Ideal para requerimientos bien definidos
- Plataforma opinada (*Comunidad rige el camino del framework*)
## Desventajas
---
- Curva de aprendizaje alta para nuevos desarrolladores
- Requerimientos cambiantes no se adaptan idealmente al framework.
- Verboso, debido a que para realizar una acción como creación de componente es necesario seguir una lógica como (*Módulos, dependencias, declaración, selector, html , ...*)
## Angular 17
---
- Simplificación de curva de aprendizaje
- Actualización & Mejora de documentación
- Optimización de calidad de desarrollo
- Aplicación de ESModules mediante ViteJS
- Signals alternativa a RxJS para compartir información entre componentes
- Signals Componentes, Permite que un componente exista fuera de NgZone
- Directivas son reemplazadas por template syntax, permitiendo que existan mas de una directivas por componente/elemento.
- Actualización de pruebas unitarias de Karma+Jasmin a Jest.
- Actualización de Angular Universal