Tambien conocidas como **nested queries** o **inner queries** son consultas SQL embebidas en otra consulta. Pueden ser utilizadas en varias sentencias SQL como **SELECT**, **FROM**, **WHERE** y **HAVING**.
> Permiten recuperar y manipular datos complejos al dividir las consultas complejas en partes más manejables. Útiles para crear criterios dinámicos, realizar cálculos o comparar conjuntos de resultados.

**NESTED**. 
Consultas embebidas junto con otra consulta SQL (*Consulta dentro de otra Consulta*) donde el **resultado de la consulta interna es utilizado por la consulta externa** 

> La consulta externa depende del resultado devuelto por la consulta interna para completar su propia operación.

**CORRELATED**. 
Es una subconsulta que hace referencia a columnas de la consulta externa en su clausula **WHERE**. *Utilizada para realizar comparaciones, cálculos, validaciones o filtros para registros entre tablas*

> Es evaluada una vez por cada fila procesada en la consulta externa.

> Existe porque depende de la consulta externa y no puede ejecutarse independientemente de ella, ya que la subconsulta está correlacionada con la consulta externa al utilizar su columna en su cláusula WHERE.

```SQL
SELECT * FROM t1 WHERE column1 = ANY (SELECT column1 FROM t2 WHERE t2.column2 = t1.column2);
```

**Implementaciones**.
- 