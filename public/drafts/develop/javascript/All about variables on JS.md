---
tags:
  - js
  - develop
ref:
---
## Naming Rules

- El nombrar de variables es un punto esencial para entender el código escrito ya sea por uno mismo u otros desarrolladores.
- Varios lenguajes de programación poseen reglas para el nombramiento de las variables con el objetivo de evitar ambigüedad en el programa.
- Las reglas a seguir en el lenguaje de JS para nombrar variables son las siguientes:
	- Los nombres solo pueden contener caracteres alfanuméricos (`a-z, A-Z, 0-9`), guion bajo (`_`) y signo de dolar (`$`).
	- Cualquier otro carácter especial es invalido en el nombre de una variable.
		- Un nombre no puede tener números al inicio `2nd`
		- Un nombre no puede contener espacios `first name`
		- Un nombre no puede ser palabras reservadas `var`

### Tips para el nombramiento

1. El nombre de una variable *debe ser descriptiva*, esto quiere decir que la variable debe dar a entender el contenido del valor almacenado. eg. `firstName = First Name`
2. El nombre de una variable n*o debe ser engorroso* en la descripción. eg. `thefirstnameofuser`
3. Abreviar largas palabras, aveces abreviar palabras largas en términos cortos y sencillos  siempre y cuando esta abreviación sea entendible. eg. `databasename = dbname`
4. Usar **casing conventions**, permite distinguir entre el tipo de variable a implementar. En este contexto existe varios tipos de **casing**, entre los cuales tenemos.
	- **camelCase**: "*Todas las primera letras serán asignada en mayúscula excepto la primera letra de la palabra*".
	- **PascalCase**: "*Todas las primeras letras serán asignadas en mayúscula*"
	- **snake_case**: "*Todas las palabras serán asignadas en minúsculas y separas por un guion bajo* (`_`)"
	- SCREAMING_SNAKE_CASE: "*Todas las letras serán asignadas en mayúsculas y las palabras serán separadas por un guion bajo* (`_`)"

### Convenciones de nombramientos

Javascript posee convenciones al momento de nombrar los diferentes variables, funciones, métodos, clases o componentes. Es considerado un estándar por la comunidad.

**Convención para variables**.

``` js
var firstName = "Robin"; // camelCase
```

**Convención para booleanos**.