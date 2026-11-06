JOIN queries son utilizadas para combinar filas de dos o mas tablas basado en una relación definida entre ambas. 

> JOINS permite recuperar información de multiples tablas en una sola consulta formando un dataset mas sencillo de entender.

**INNER JOIN**. Retorna solamente las filas donde existe una coincidencia en las columnas especificadas de todas las tablas involucradas en la union. **Si no existe una coincidencia en las columnas unidas la fila se excluye del resultado.**

**LEFT JOIN**. Retorna todas las filas de la tabla ubicada a la izquierda con las filas que coincidan de la tabla de la derecha. **Si no existe coincidencia en la tabla de la derecha el resultado sera definido con un valor de NULL para las columnas de la derecha**.

**RIGTH JOIN**. Retorna todas las filas de la tabla ubicada a la derecha con las filas que coincidan de la tabla de la izquierda. **Si no existe coincidencia en la tabla de la derecha el resultado sera definido con un valor de NULL para las columnas de la izquierda**.

**OUTER JOIN**. Combina los resultados de ambas tablas LEFT y RIGHT, retornando todas las filas de ambas tablas si existe una coincidencia la fila es incluida y en el caso contrario también es incluida pero agregando un valor de tipo NULL en el lugar de la información faltante.

**SELF JOIN**. Join especial que una tabla consigo mismo. 
> Utilizado para comparar filas de la misma tabla, a menudo utilizado cuando existe una relación jerárquica o conexión entre los datos de la misma tabla.

**CROSS JOIN**. Combinación donde se produce un resultado basado en el numero de filas de la primera tabla multiplicado por el numero de filas de la segunda tabla. 