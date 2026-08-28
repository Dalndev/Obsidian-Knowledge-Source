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

**Consideraciones**.
- No deben existir filtros activos en las plantillas definidas en los...
- Los sheets considerados "Plantillas" se encuentra en estado `hide` ...
- Los registros de actividades deben estar con la información completa...
- El workbook no debe estar abierto en ningún cliente (Escritorio, Web) durante la ejecución del workflow ya que provoca un lock state al momento de la modificación del archivo.
- \*Los colaboradores deben tener asignados un Schedule (Horario) con sus correspondiente Horario & Departamento (Area) `Worksheet := Horarios`
- Las unidades registradas deben ser validadas bajo las siguientes restricciones
	- Las unidades deben ser diferentes de 0

**Códigos de Errores**.

**I/O**.
C000. Workbook is not loaded, Indica que...
C001. Filter button found, Indica que...

**Worksheet**
C101. Worksheet already exists in workbook, Indica que ...
C102. Worksheet name is required, Indica que...
C103. Worksheet name characters max length, Indica que...
C104. Worksheet name invalid characters, Indica que...

**Table**
C201. Table invalid range, Indica que...
C202. Table range not supported, Indica que...

**Cells**
C301. Invalid cell direction exception, Indica que...

**Templates**
C401. Template worksheet not exists, Indica que...
C402. Template table not exists, Indica que..

## Addons

**Colaboradores**.
- Camari A. Salas
- Jonathan C. Nasimba
- Erika L. Ulloa
- Maria M. Escandon
- Alejandro J. Mera
- Cristhian M. Nasimba
- Joffre A. Condor
- Stalin D. Pillajo
- Andre G. Martinez
- Andres M. Chavez
- Galo W. Zarabia
- 