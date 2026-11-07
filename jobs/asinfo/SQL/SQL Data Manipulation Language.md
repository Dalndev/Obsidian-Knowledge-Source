Subset de SQL utilizados para gestionar datos en los `database objects`. Las sentencias DML operan en la información almacenada mas no en la estructura de la tablas.

**FROM**. Especifica las tablas desde las que se va a recuperar la información, indica a la base de datos desde que dataset se va a ejecutar la consulta. 
  > La clausula **FROM** es obligatoria en cualquier sentencia SQL ya que sin ella no se puede determinar desde que tabla se recupera la información.

**WHERE**. Permite filtrar las filas recuperadas de una consulta mediante la definición de una condición. 
  > La clausula **WHERE** recupera la información que cumplen ciertos criterios.

**JOINs**. Combina información de una o mas tablas basada en un relación existente entre las mismas. Entre las más utilizadas tenemos `INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN`.

**GROUP BY**. Clausula utilizada para agrupar datos idénticos mediante recopilación de varios registros y agrupa resultados en una o más columnas
  > Clausula utilizada en conjunto con funciones de agregación `COUNT, SUM, AVG` para ejecutar cálculos en cada grupo de filas.

**ORDER BY**. Clausula utilizada para ordenar los resultados de una consulta. Es posible cambiar el tipo de ordenamiento ya sea ascendente `ASC` o descendente `DESC`.
  > La cláusula puede ordenar por valores numéricos, de fecha o de texto, y se pueden ordenar varias columnas incluyéndolas en la cláusula ORDER BY, cada una con su propia dirección de ordenación.

**HAVING**. Clausula que filtra los resultados de un sentencia **GROUP BY**, operando sobre grupos en lugar de filas individuales
> Se utiliza HAVING para especificar las condiciones que debe cumplir el grupo para ser incluido en el conjunto de resultados final.