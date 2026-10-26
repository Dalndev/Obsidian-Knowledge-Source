---
aliases:
  - Automatización ARs 2 Invoice
tags:
  - m365
  - ars
---
**Requisitos**
- La Tabla Excel no debe incluir la contabilización de las "**Horas Totales (Unidades)**" registradas en los AR's
- La Tabla Excel en cada **AR/Sheet** para el registro de actividades del mes en curso debe estar identificado (Properties) con el siguiente formato `Table_<Month (MMMM)>`
- En dado caso, de que un colaborador deje de estar asociado a la empresa en necesario marcar el AR asociado al colaborador con **DNU** (Do not use) al principio del archivo, ya que este permite filtrar los ARs que no se van a la factura final.
- El workbook no debe estar abierto en ningún cliente (Escritorio, Web) durante la ejecución del workflow ya que provoca un lock state al momento de la modificación del archivo.
- \*Los colaboradores deben tener asignados un Schedule (Horario) con sus correspondiente Horario & Departamento (Area) `Worksheet := Horarios`
- Las unidades registradas deben ser validadas bajo las siguientes restricciones
	- Las unidades deben ser diferentes de 0 y mayores a 0
	  
**Restricciones**
Las propiedades de los archivos de datos fuentes deben ser consistentes en cada uno de los de los archivos existentes, la variación en uno de estos provocaria que el flujo falla.
- ARs (Excel). Table Name
- ARs (Excel). Sheet Name

Durante la ejecución del flujo es necesario que los archivos no se encuentren abiertos por los clientes, debido a que se puede dar un estado `lock`.

**Limpieza de Datos**
La *Limpieza & Tratamiento* de información registrada en los AR's (Activities Reports) de cada colaborador, debe realizar.
1. Suprimir las filas con las siguientes condiciones.
	1. Filtrar **filas** sin información registrada (Issue, Start Time, Units, End Time)
	2. Filtrar **filas** con valores vacíos en sus celdas.
2. Solventar las filas con las siguientes condiciones.
	1. Realizar ajustes en las unidades registradas con valores negativos cuando se presente en la columna F (Units).

**Consideraciones**.
- No deben existir filtros activos en las plantillas definidas en los...
- Los sheets considerados "Plantillas" se encuentra en estado `hide` ...
- Los registros de actividades deben estar con la información completa...

**Códigos de Errores**.

**I/O**.
C000. Workbook is not loaded, Indica que no se ingreso ningún Workbook en el sistema. `Es necesario cargar un workbook en el cual trabajar`
C001. Filter button found, Indica que existe defino un botón para filtrado que no esta asociado a una tabla (Table). `Es necesario remover cualquier referencia o definición de Filter (Sort & Filter) de los Worksheets`
C002. File is not load, Indica que no se ingreso información de ningún tipo en el sistema. `Es necesario cargar información en el sistema`

**Worksheet**
C101. Worksheet already exists in workbook, Indica que ya existe un Worksheet con el nombre a utilizar para la creación de un nuevo Worksheet. `Puede ser utilizado para continuar con la siguiente creación/procesamiento de los worksheets o ars` 
C102. Worksheet name is required, Indica que que no existe un nombre definido para la nueva inicialización del Worksheet a crear. `Es necesario proporcionar un nombre al worksheet.`
C103. Worksheet name characters max length, Indica que se excedió la cantidad de caracteres permitidos para la definición del nombre en el worksheet. `Es necesario ajustar/dismunir la cantidad de caracteres utilizados.` 
C104. Worksheet name invalid characters, Indica que se definieron caracteres no permitidos en el nombre a utilizar para el nuevo worksheet. `Es necesario evitar caracteres especiales en la definición del nombre`
C105. Worksheet not exists. Indica que...

**Table**
C200. Table not exists, Indica que...
C201. Table invalid range, Indica que el rango utilizado no se encuentra registrado información para ser procesada.

**Cells**
C301. Invalid cell direction exception, Indica que la dirección de la celda referenciada no existe o esta mal formulada.

**Templates (Business)**
C401. Template worksheet not exists, Indica que no existe la plantilla (worksheet) con el identificador utilizado. `P1. Es necesario, crear la plantilla o revisar el nombre con el cual se encuentra definido el worksheet implementado a manera de plantilla.`
C402. Template table not exists, Indica que la plantilla (table) con el identificador utilizado. `P1. Es necesario, crear la plantilla o revisar el nombre con el cual se encuentra definido la table en el worksheet implementado a manera de plantilla.`
C403 . Table Range Not Supported Exception, Indica que la información (data) de los datos debe estar definidos entre A:D y la definición de las formulas debe estar entre E:M, para su correcto procesamiento. `P1. Es necesario mantener la distribución de la información tal y como se encuentra definido, ya que al modificarlo esto genera errores en el procesamiento de la información.`

**Activities (Business)**
C501. Activities not exists, Indica que no existen actividades registradas en el worksheet actual.
C502. Invalid activity number, Indica que existe un valor numérico invalida ej. negativos o ceros

**Collaborator (Business)**
C601. Collaborator name not exists, Indica que...

**Schedule (Business)**
C701. Schedule Worksheet not exists, Indica que...
C702. Schedule not found, Indica que...
C703. Invalid schedule, Indica que...

**Visual Basic (VBA)**


**Próximos Pasos**.
- Implementar discriminación para colaboradores con relaciones en EE.UU