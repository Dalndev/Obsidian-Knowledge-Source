---
tags:
  - techreview
  - review
  - sql
---
JOIN queries son utilizadas para combinar filas de dos o mas tablas basado en una relación definida entre ambas. 

[PostgreSQL | Queries Table Expressions](https://www.postgresql.org/docs/current/queries-table-expressions.html) | [IBM | Outer Join Syntax](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=extensions-odbc-outer-join-syntax)

> JOINS permite recuperar información de multiples tablas en una sola consulta formando un dataset mas sencillo de entender.

```SQL
T1 {[INNER] | {LEFT | RIGHT | FULL} [OUTER]} JOIN T2 ON boolean
T1 {[INNER] | {LEFT | RIGHT | FULL} [OUTER]} JOIN T2 USIN (join column list)
```

**INNER JOIN**. Retorna solamente las filas donde existe una coincidencia en las columnas especificadas de todas las tablas involucradas en la union. **Si no existe una coincidencia en las columnas unidas la fila se excluye del resultado.**

```SQL
SELECT * FROM T1 INNER JOIN T2 ON T1.column = T2.column
```

**LEFT JOIN**. Retorna todas las filas de la tabla ubicada a la izquierda con las filas que coincidan de la tabla de la derecha. **Si no existe coincidencia en la tabla de la derecha el resultado sera definido con un valor de NULL para las columnas de la derecha**.

```SQL
SELECT * FROM T1 LEFT JOIN T2 ON T1.column = T2.column
```

**RIGTH JOIN**. Retorna todas las filas de la tabla ubicada a la derecha con las filas que coincidan de la tabla de la izquierda. **Si no existe coincidencia en la tabla de la derecha el resultado sera definido con un valor de NULL para las columnas de la izquierda**.

```SQL
SELECT * FROM T1 RIGHT JOIN T2 ON T1.column = T2.column
```

**OUTER JOIN**. Combina los resultados de ambas tablas LEFT y RIGHT, retornando todas las filas de ambas tablas si existe una coincidencia la fila es incluida y en el caso contrario también es incluida pero agregando un valor de tipo NULL en el lugar de la información faltante.

```SQL
SELECT * FROM T1 FULL OUTER JOIN T2 ON T1.column = T2.column
```

**SELF JOIN**. Join especial que una tabla consigo mismo. 
> Utilizado para comparar filas de la misma tabla, a menudo utilizado cuando existe una relación jerárquica o conexión entre los datos de la misma tabla.

```SQL
SELECT columns FROM Table T1 JOIN Table T2 ON WHERE condition
```

**CROSS JOIN**. Combinación donde se produce un resultado basado en el numero de filas de la primera tabla multiplicado por el numero de filas de la segunda tabla.

```SQL
SELECT * FROM t1 CROSS JOIN t2
```