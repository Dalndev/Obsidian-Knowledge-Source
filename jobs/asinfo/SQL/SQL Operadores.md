---
tags:
  - interview
  - sql
  - review
---
Símbolos o palabras reservadas empleadas para ejecutar operaciones de **recuperación & modificación** en la información. Empleados para construir filtros, comparadores, y manipular datos.

Operadores **Aritméticos**.
Permiten realizar operaciones matematicas sobre valores numericos.

- `+` Suma
- `-` Resta
- `*` Multiplicacion
- `/` Division
- `%` Modulo

Operadores **Comparación**.
Permiten comparar dos expresiones y evaluar condiciones

- `=` Igual a
- `<> | !=` Diferente de
- `>` Mayor que
- `<` Menor que
- `>=` Mayor o igual que
- `<=` Menor o igual que

Operadores **Lógicos**.
Permiten combinar expresiones condicionales
- `AND` Todas las condiciones deben cumplirse
- `OR` Al menos una condicion debe cumplirse
- `NOT` Niega una condicion

Operadores **Filtrado & Pertenencia**.
- `IN` Coincide con algun valor del conjunto
- `NOT IN` No coincide con los valores indicados
- `BETWEEN` Esta dentro de un rango inclusivo
- `NOT BETWEEN` Esta fuera del rango
- `LIKE` Coincide mediante patron
	- `%` Cero o mas caracteres `Ana%`
	- `_` Exactamente un caracter `An_`
- `NOT LIKE` Niega la coincidencia
- `IS NULL` Comprueba el valor nulo
- `IS NOT NULL` Comprueba que no sea nulo

Operadores de **Conjunto**
- `UNION` Combina resultados eliminando duplicados
- `UNION ALL` Combina resultados conservando duplicados
- `INTERSECT` Devuelve filas comunes
- `INTERSECT ALL` Conserva multiplicidades en las intersecciones
- `EXCEPT` Devuelve filas de la primera consulta que no aparecen en la segunda
- `EXCEPT ALL` Diferencia de conjuntos conservando multiplicidades

Operadores de **Subconsultas**
- `EXISTS` Comprueba si una subconsulta devuelve al menos una fila
- `NOT EXISTS` Comprueba si una subconsulta no devuelve ninguna fila
- `IN (subquery)` Comprueba pertenencia a los resultados
- `NOT IN (subquery)` Comprueba no pertenencia, con precaucion ante NULL
- `ANY` Compara contra al menos un valor de la subconsulta
- `ALL` Compara contra todos los valores de la subconsulta

Operadores para **NULL**
- `IS NULL` Identifica Nulos
- `IS NOT NULL` Identifica no nulos
- `IS DISTINCT FROM` Comparacion que considera nulos como valores comparables
- `IS NOT DISTINCT FROM | <=>` Igualdad segura ante nulos
- `IS TRUE` Comprueba que la expresion sea verdadera
- `IS FALSE` Comprueba que la expresion sea falsa
- `IS UNKNOWN` Comprueba un resultado desconocido