Subsets de SQL para definir y gestionar las estructuras "**database objects**". Permite a los administradores y desarrolladores definir el schema de una base, relacionales entre tablas, etc.

**CREATE**. Sentencia utilizada para definir y crear una una tabla en una base de datos. Es necesario especificar propiedades como `Table Name, Column Names, Data Types, Constraints, Primary Keys, Foreign Keys`
  > Establece la estructura de la tabla y define como la información va ha ser almacenada y organizada.

**ALTER**. Utilizada para modificar la estructura de una tabla existente. Ya sea agregando, eliminando o modificando columnas
**DROP**. Remueve una tabla y la información de manera permanente de una base datos. La operación elimina completamente la estructura e información a menos de que exista un respaldo.
**TRUNCATE**. Remueve todas las filas de una tabla, reseteando la tabla a su estado inicial (Estado Vacío), pero mantiene la estructura (columnas, restricciones, etc.)