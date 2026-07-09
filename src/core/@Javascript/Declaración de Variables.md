---
tags:
  - js
  - develop
---

- Una variable es una **declaración** de una referencia en memoria en la cual se puede almacenar o **asignar** un valor de tipo primitivo como strings, number, booleans o de tipo complejo como arreglos u objetos.
- La palabras reservadas para la declaración de variables son: *var*, *let*, *const*.
	- **var**: La sentencia *var* declara una variable en el **scope global** o **scope function**, que permite re-asignaciones de valores. 
	- **let**: La sentencia let declara una variable re-asignable con un block-scope.
	- **const**: La sentencia const declara una variable con un scope de bloque, donde cuyo valor de tipo primitivo no puede ser re-asignado o re-declarado.

``` js
// var test = undefinend; Var declaration & initialization by hosting.

if (true) var test = true; // assignment || reassignment

console.log(test) // using
```

``` js
let x = 1; // Declaration of x variable on global scope.

if(x === 1) {
	let x = 2; // Declaration of a new variable inside the block function scope

	console.log(x) // 2
}

console.log(x) // 1 
```

```js
const PI = 3.1416

PI = 0.314 // TypeError: invalid assignment to const
```