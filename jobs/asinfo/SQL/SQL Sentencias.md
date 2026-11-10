---
tags:
  - interview
  - sql
  - review
---
**SELECT**. Sentencia utilizada para recuperar información de una o más tablas de una base de datos, donde se puede aplicar filtros, ordenamientos y varias operaciones `Joins, Subqueries, Aggregations` sobre la información. 

[PostgreSQL | SELECT](https://www.postgresql.org/docs/current/sql-select.html) | [IBM | SELECT](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=statements-select)

```SQL
SELECT [ALL | DISTINCT] 
    [{* | select_expr [[AS] output_name]}]
    [FROM table_name [* | [AS] alias [{column_alias}]]]
    [WHERE condition]
    [GROUP BY [ALL | DISTINCT] {col_name}]
    [HAVING condition]
    [ORDER BY expression [ASC | DESC]]
    [LIMIT {count | ALL}]
    [OFFSET {start [ROW | ROWS]}]
```

**INSERT**. Sentencia utilizada para agregar nuevas filas de información en una tabla en donde se especifica el valor a insertar en cada columna.

[IBM | INSERT](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=statements-insert) | [PostgreSQL | INSERT](https://www.postgresql.org/docs/18/sql-insert.html)

```SQL
INSERT INTO table_name 
    [AS alias] [( clumn_name [, ...])]
    {DEFAUTL VALUES | VALUES ({ expression | DEFAULT } [, ...]) [, ...] | query}
    [ WHERE condition]
```

**UPDATE**. Sentencia utilizada para modificar valores existentes en una tabla de una o mas filas o columnas mediante la definición de condiciones especificas.

[IBM | UPDATE](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=statements-update) | [PostgreSQL | UPDATE](https://www.postgresql.org/docs/current/sql-update.html)

```SQL
UPDATE table_name [*] [[ AS ] alias]
    SET { column_name = { expresion | DEFAULT }}
    (column_name [, ...]) = [ROW] ({expression | DEFAULT} [, ...]) | (column_name [, ...]) = (sub-SELECT)
    [FROM from_item [, ...]]
    [WHERE condition]
```

**DELETE**. Sentencia utilizada para eliminar filas de una tabla especifica, es menester aplicar la clausula WHERE (condicion) para filtrar las filas a ser eliminadas.

[IBM | DELETE](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=statements-delete) | [PostgreSQL | DELETE](https://www.postgresql.org/docs/current/sql-delete.html)

```SQL
DELETE FROM table_name [*] [[AS] alias]
    [WHERE condition]
```