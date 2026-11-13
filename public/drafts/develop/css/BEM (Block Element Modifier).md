---
tags:
  - css
  - notes
  - method
---

- **BEM**
	- **Block**
		- Abstracción de alto nivel de un nuevo componente, ej. `.btn`
		- La abstracción debe de alto nivel es considerado el **elemento padre** 
	- **Element**
		- Elementos hijos incluidos dentro del padre denotados con guiones bajos ej. `.btn__price` para indicar una relación.
	- **Modifier**
		- Elementos que permiten manipular los estilos de un bloque sin infligir cambios a un modulo ajeno. ej. `btn--orange` 