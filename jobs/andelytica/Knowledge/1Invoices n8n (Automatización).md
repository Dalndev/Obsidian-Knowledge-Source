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

**Limpieza de Datos**

La *Limpieza & Tratamiento* de información registrada en los AR's (Activities Reports) de cada colaborador, debe realizar.
1. Suprimir las filas con las siguientes condiciones.
	1. Filtrar **filas** sin información registrada (Issue, Start Time, Units, End Time)
	2. Filtrar **filas** con valores vacíos en sus celdas.

**Legacy Invoice (Scripts)**

```javascript
function main(workbook: ExcelScript.Workbook) {

    // Get the active cell and worksheet.

    let selectedCell = workbook.getActiveCell();

    let selectedSheet = workbook.getActiveWorksheet();

    // Set fill color to yellow for the selected cell.

    selectedCell.getFormat().getFill().setColor("yellow");

    // TODO: Write code or use the Insert action button below.
}
```