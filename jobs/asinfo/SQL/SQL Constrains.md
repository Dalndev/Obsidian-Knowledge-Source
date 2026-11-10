---
tags:
  - techreview
  - review
  - sql
---
**PRIMARY KEY**. Identificador único asignado a cada registro de una tabla. Permite que cada registro/fila sea único e identificable evitando duplicidad y asegurando la integridad de la información.

> La PRIMARY KEY esta compuesta de una o mas columnas las cuales deben tener valores únicos sin entradas de tipo NULL.
> La PRIMARY KEY asegura que cada registro puede ser localizado y referenciado con precisión.
> La PRIMARY KEY es utilizado para establecer relaciones entre tablas y mantener la integridad del modelo de datos

**FOREIGN KEY**. Columna o columnas en una tabla que referencia la PRIMARY KEY de otra tabla. La referencia establece un enlace (relación) entre dos tablas garantizando la integridad referencial y mantiene relaciones entre los datos.

> Las FOREIGN KEY garantizan que los valores de la tabla de referencia se correspondan con valores válidos en la tabla referenciada, lo que evita registros huérfanos y mantiene la coherencia de los datos entre las tablas.

**UNIQUE**. Asegura que los valores en una o mas columnas sean diferentes, evita entradas duplicadas manteniendo la integridad de datos al garantizar la unicidad de datos en campos específicos.

**NOT NULL**. Restricción que garantiza que una columna no acepte valores NULL, obliga a que cada fila a ingresar o actualizar tenga un valor diferente a NULL o lanza un error.

**CHECK**. Utilizado para garantizar la integridad de información mediante la definición de una condición que debe ser cumplida para cada fila en la tabla. Permite definir reglas o restricciones personalizadas en los valores a insertar o actualizar para una o mas columnas. 

> CHECK ayuda a mantener la calidad de los datos previniendo la invalidez o inconsistencia en la información.