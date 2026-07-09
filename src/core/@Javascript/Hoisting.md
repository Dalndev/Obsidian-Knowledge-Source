---
tags:
  - develop
  - js
---
- El hosting es la acción del interprete de trasladar las declaraciones de *funciones, variables, clases o imports*, al *top* de su **scope**, con el fin de priorizar la ejecución del código, en términos técnicos "*las funciones son asignadas en memoria durante la fase de compilación*".
	- Permite usar los valores de las variables antes de su declaración.
	- Permite referencia una variable antes de la declaración.
	- La declaración de la variable provoca cambia su comportamiento en su **scope**, antes de la linea de la declaración.
	- Los efectos secundarios son producidos antes de la evaluación del código que la contiene.
- El hosting hace que todas las [[Declaración de Variables]] con **var** o **function** sean asignadas en memoria antes de la ejecución del código u otra sentencia.
- Solo las **declaraciones de variables** producen hosting, mas no la inicializacion de la misma.
- *let*, *const* y *class* no poseen **non-hosting**, esto por **temporal dead zone**, que prohíbe el uso de la variable antes de su declaración.
- Los módulos tienen **hoisting**, esto con el fin de dejar disponibles todas las variables antes de la ejecución del código actual, ademas todos los efectos secundarios del modulo son ejecutados antes del código actual.

```js
str = 'Hoisting';
console.log(str); // = Hoisting

var str;
```

```js
console.log(sqrt(5)); // = 25

function sqrt(n) return n * n;
```

```js
console.log(str); // TypeError

var str2 = 'Hoisting';
```

- El hosting afecta de diferente a las funciones en base a su tipo de declaración, en este ámbito tenemos dos grupos las funciones **declaradas** y **expresadas**, aparte de las **anónimas** y **arrow functions**.
	- Las funciones declaradas aplican hoisting para se invocadas.
	- Las funciones expresadas, no poseen hoisting, aunque la variable a la que se le asigna en dado que sea con la sentencia **var** si aplicar el hoisting, pero no se le asignara la función, esto debido al [[Orden de Precedencia]].

```js
hoisted(); // = Hello World!

function hoisted() {
	console.log("Hello World!")
}
```

```js
expression(); // = TypeError: expression is not a function

var expression = function() {
	console.log("Hello?")
}
```

