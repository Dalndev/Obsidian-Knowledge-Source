**SELECT**. Utilizada para recuperar información de una o más tablas de una base de datos, en donde se puede aplicar filtros, ordenamientos y varias operaciones `Joins, Subqueries, Aggregations` sobre la información. 

[PostgreSQL | SELECT](https://www.postgresql.org/docs/current/sql-select.html). 
[IBM | SELECT](https://www.ibm.com/docs/es/db2-for-zos/12.0.0?topic=statements-select)

```SQL
SELECT 
    [ALL | DISTINCT] 
    {* | select_expr [ [AS] output_name]}
[FROM table_name [* | [AS] alias [{column_alias}]]]
[WHERE where_condition]
[GROUP BY [ALL | DISTINCT] {col_name}]
[HAVING where_condition]
[ORDER BY {col_name [ASC | DESC]}]
[LIMIT start [ROW | ROWS]]
[OFFSET { FIRST | NEXT} [count] { ROW | ROWS}]
```

**INSERT**. Utilizado para agregar nuevas filas de información en una tabla donde se especifica el valor a insertar en cada columna.

**UPDATE**. Modifica valores existentes en una tabla de una o mas filas o columnas mediante la definición de condiciones especificas.
**DELETE**. Elimina filas de una tabla especifica, es menester aplicar la clausula WHERE para filtrar las filas a ser eliminadas.