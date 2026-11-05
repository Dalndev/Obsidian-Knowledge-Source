---
tags:
  - interview
  - sql
  - review
---
**Revisión Técnica (SQL)**.

**SQL (Operadores)**.
Símbolos o palabras reservadas empleadas para ejecutar operaciones de **recuperación & modificación** en la información. Empleados para construir filtros, comparadores, manipulación de datos.

- Operadores **Aritméticos**. `+`, `-`, `*`. `/` (Cálculos Matemáticos)
- Operadores **Comparación**. `=`, `!=`, `<`, `>` (Comparación de Valores)
- Operadores **Lógicos**. `AND`, `OR`, `NOT` (Combina Multiples Condiciones)
- Operadores **Conjunto**. `UNION`, `INTERSECT`, `EXCEPT` (Combina multiples Queries)

**SQL (Sentencias)**.
- **SELECT**. Utilizada para recuperar información de una o más tablas de una base de datos, en donde se puede aplicar filtros, ordenamientos y varias operaciones `Joins, Subqueries, Aggregations` sobre la información. 
- **INSERT**. Utilizado para agregar nuevas filas de información en una tabla donde se especifica el valor a insertar en cada columna. 
- **UPDATE**. Modifica valores existentes en una tabla de una o mas filas o columnas mediante la definición de condiciones especificas.
- **DELETE**. Elimina filas de una tabla especifica, es menester aplicar la clausula WHERE para filtrar las filas a ser eliminadas.

**SQL DML (Data Manipulation Language)**.
Subset de SQL utilizados para gestionar datos en los `database objects`. Las sentencias DML operan en la información almacenada mas no en la estructura de la tablas.

- **FROM**. Especifica las tablas desde las que se va a recuperar la información, indica a la base de datos desde que dataset se va a ejecutar la consulta. 
  > La clausula **FROM** es obligatoria en cualquier sentencia SQL ya que sin ella no se puede determinar desde que tabla se recupera la información.
- **WHERE**. Permite filtrar las filas recuperadas de una consulta mediante la definición de una condición. 
  > La clausula **WHERE** recupera la información que cumplen ciertos criterios.
- **JOINs**. Combina información de una o mas tablas basada en un relación existente entre las mismas. Entre las más utilizadas tenemos `INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN`.
- **GROUP BY**. Clausula utilizada para agrupar datos idénticos mediante recopilación de varios registros y agrupa resultados en una o más columnas
  > Clausula utilizada en conjunto con funciones de agregación `COUNT, SUM, AVG` para ejecutar cálculos en cada grupo de filas.
- **ORDER BY**. Clausula utilizada para ordenar los resultados de una consulta. Es posible cambiar el tipo de ordenamiento ya sea ascendente `ASC` o descendente `DESC`.
  > La cláusula puede ordenar por valores numéricos, de fecha o de texto, y se pueden ordenar varias columnas incluyéndolas en la cláusula ORDER BY, cada una con su propia dirección de ordenación.
- **HAVING**. Clausula que filtra los resultados de un sentencia **GROUP BY**, operando sobre grupos en lugar de filas individuales
> Se utiliza HAVING para especificar las condiciones que debe cumplir el grupo para ser incluido en el conjunto de resultados final.

**SQL DDL (Data Definition Language)**.
Subsets de SQL para definir y gestionar las estructuras "database objects". Permite a los administradores y desarrolladores definir el schema de una base, relacionales entre tablas, etc.

- **CREATE**. Sentencia utilizada para definir y crear una una tabla en una base de datos. Es necesario especificar propiedades como `Table Name, Column Names, Data Types, Constraints, Primary Keys, Foreign Keys`
  > Establece la estructura de la tabla y define como la información va ha ser almacenada y organizada.
- **ALTER**. Utilizada para modificar la estructura de una tabla existente. Ya sea agregando, eliminando o modificando columnas
- **DROP**. Remueve una tabla y la información de manera permanente de una base datos. La operación elimina completamente la estructura e información a menos de que exista un respaldo.
- **TRUNCATE**. Remueve todas las filas de una tabla, reseteando la tabla a su estado inicial (Estado Vacío), pero mantiene la estructura (columnas, restricciones, etc.)

**SQL Data Constrains**.
- **PRIMARY KEY**. Identificador único asignado a cada registro de una tabla. Permite que cada registro/fila sea único e identificable evitando duplicidad y asegurando la integridad de la información.
> La PRIMARY KEY esta compuesta de una o mas columnas las cuales deben tener valores únicos sin entradas de tipo NULL.
> La PRIMARY KEY asegura que cada registro puede ser localizado y referenciado con precisión.
> La PRIMARY KEY es utilizado para establecer relaciones entre tablas y mantener la integridad del modelo de datos

- **FOREIGN KEY**. Columna o columnas en una tabla que referencia la PRIMARY KEY de otra tabla. La referencia establece un enlace (relación) entre dos tablas garantizando la integridad referencial y mantiene relaciones entre los datos.
> Las FOREIGN KEY garantizan que los valores de la tabla de referencia se correspondan con valores válidos en la tabla referenciada, lo que evita registros huérfanos y mantiene la coherencia de los datos entre las tablas.

- **UNIQUE**. Asegura que los valores en una o mas columnas sean diferentes, evita entradas duplicadas manteniendo la integridad de datos al garantizar la unicidad de datos en campos específicos.
- **NOT NULL**. Restricción que garantiza que una columna no acepte valores NULL, obliga a que una columna
- **CHECK**.

**SQL JOIN Queries**.
- **INNER JOIN**.
- **LEFT JOIN**.
- **RIGTH JOIN**.
- **OUTER JOIN**.
- **SELF JOIN**.
- **CROSS JOIN**.
  
**SQL Subqueries**.
- **NESTED**.
- **CORRELATED**.

**SQL Transactions**.
- **ACID**.
- **BEGIN**.
- **COMMIT**.
- **ROLLBACK**.
- **SAVEPOINT**.

**SQL Indexes**.
- 