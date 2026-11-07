---
tags:
  - techreview
  - review
  - sql
---
Tambien conocidas como **nested queries** o **inner queries** son consultas SQL embebidas en otra consulta. Pueden ser utilizadas en varias sentencias SQL como **SELECT**, **FROM**, **WHERE** y **HAVING**.
> Permiten recuperar y manipular datos complejos al dividir las consultas complejas en partes más manejables. Útiles para crear criterios dinámicos, realizar cálculos o comparar conjuntos de resultados.

**NESTED**. 
Consultas embebidas junto con otra consulta SQL (*Consulta dentro de otra Consulta*) donde el **resultado de la consulta interna ejecutado de manera prioritaria es utilizado por la consulta externa** 

> La consulta externa depende del resultado devuelto por la consulta interna para completar su propia operación.

eg.

```SQL
SELECT *
FROM departments
WHERE id IN (
    SELECT department_id
    FROM employees
    WHERE id IN (
        SELECT employee_id
        FROM projects
    )
);
```

**CORRELATED**. 
Es una subconsulta que hace referencia a columnas de la consulta externa en su clausula **WHERE**. *Utilizada para realizar comparaciones, cálculos, validaciones o filtros para registros entre tablas*

> Es evaluada una vez por cada fila procesada en la consulta externa.

> Una sentencia depende de la consulta externa y no puede ejecutarse independientemente de ella, ya que la subconsulta está correlacionada con la consulta externa al utilizar su columna en su cláusula WHERE.

Egs.

```SQL
SELECT * 
FROM t1 
WHERE column1 = ANY (
    SELECT column1 
    FROM t2 
    WHERE t2.column2 = t1.column2
);
```

- EXISTS, NOT EXISTS

``` SQL
SELECT
    u.id,
    u.name
FROM users u
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.user_id = u.id
);
```

- Funciones de Agregacion (SUM, COUNT, AVG, MIN, MAX) 

``` SQL
SELECT
    u.id,
    u.name
FROM users u
WHERE (
    SELECT SUM(o.total)
    FROM orders o
    WHERE o.user_id = u.id
) > 200;
```

- Columnas Calculadas (SELECT)

```SQL
SELECT
    u.id,
    u.name,
    (
        SELECT COUNT(*)
        FROM orders o
        WHERE o.user_id = u.id
    ) AS total_orders
FROM users u;
```