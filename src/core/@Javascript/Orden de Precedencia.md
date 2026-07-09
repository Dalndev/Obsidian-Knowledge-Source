---
tags:
  - js
  - develop
---
## Orden de Precedencia

El orden de precedencia es la orden en que el interprete ejecuta las sentencias de declaración y asignación, hay dos puntos claves que son:
- *La asignación de variables tiene prioridad sobre la declaración de funciones*
- *La declaración de funciones tiene prioridad sobre la declaración de variables.*

Esto quiere decir que la declaración de funciones aplican hoisting sobre la declaración de variables pero no sobre la asignación.

```js
var double = 22;

function double(num) {
	return (num*2); 
}

console.log(typeof double) // = number
```

```js
var double;

function double(num) {
	return (num*2);
}

console.log(typeof double) // = function
```

```js
// var expression = undefined;

expression(); // TypeError: expression is not a function

var expression = function hoisting() {
	console.log("Hello?")
}

console.log(typeof expression) // = undefined
```

