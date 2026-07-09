---
tags:
  - funding
  - villagomez
---

### **Tareas**
---
- **Done**
	- [x] Borrar versiones que **NO** sean a la proporcionada ( `19/06/13` ) ✅ 2025-03-11
	- [x] Optimizar formulas `legacy` ( **versión 4** ), actualizar referencias de columnas en la formulas. ✅ 2025-03-11
	- [x] Analizar **formulas**, **refactorizar** y **optimizar** con el objetivo de que sean compresibles, sencillas para el usuario. `Google SpreadSheet` ✅ 2025-03-11
	- [x] Agregar las formulas relacionadas a ***Payoff***, ***Payoff To Date*** y ***Total Paid off*** a la versión 4 de **Funding**. ✅ 2025-03-11
	- [x] Realizar comprobaciones de las formulas generadas y diseñadas mediante la implementación de datos ya registrados en los diferentes `Google SpreadSheet` relacionados al funding. ✅ 2025-03-11
	- [x] Generar una formula "**Base**", que acute como **ground truth** de la cual se podrá la modificaciones para la optimización de la formula y sera utilizada en diferentes cálculos. ✅ 2025-03-11
- **TO-DO**
	- [ ] Actualizar formulas de ( **Payoff*** ) de **versión 7** a **versión 4**, y mantener las version **Simple**
	- [ ] Seguimiento a **CPA** para la actualización de fechas en **Founding**
	
### **Knowledge**
---

- **Interés Simple**: 
- **Interés Compuesto**: 
- **Valor Futuro**:
- **Caso Abierto**: Es aquel *caso* o *founding* en el que su fecha de pago o **Payoff Date** se encuentra calculado hasta la fecha actual.
- **Honorario**: Es una comisión que se cobra en un contrato de seguro para la administración del seguro ya sea al **inicio y final del caso** 
	- **Nota**: En algunos casos por negociación, dicho valor no es agregado y/o cobrado.
- **Fechas**: Las fechas determinan la operabilidad de la "calculadora" o calculo de las funciones 
	- Existen diferentes fechas implementadas, entre estas se encuentran *fechas de corte* ( **Term Date** ), *fecha de pago* ( **Payoff Date** )
 - **EDATE (Google Sheet)**: Devuelve la fecha basada en los meses anteriores o después.
 - **DATEDIF (Google Sheet)**: Devuelve el numero de días, meses o años entre dos fechas
 - **MOD (Google Sheet)**: Devuelve el modulo the una operaciones.
-  **INT (Google Sheet)**: Redondea un numero al proximo mas cercano
-  **FV (Google Sheet)**: Calcula el valor futuro de una inversion anual basado en un monto constante de pagos periódicos.

### Observaciones & Consideraciones
---
- **Prompt** para análisis de Formulas en Chat-GPT junto con Google SpreadSheets: 
	- *Analiza la hoja de cálculo adjunta VC Funding Master v4 CPA SDP (3) y simule internamente para que pueda darme respuestas precisas y funcionales. Este Excel es una versión descargada de Google Sheets, hay muchos errores en Excel, pero funciona perfectamente en Sheets.*
- Centrarse en la lógica realizada en la hoja "**Totals Optimized**", para el desarrollo de las formulas.
- **Prompt** para generación de lógica, después de pasado 5 años en funding; *El día del aniversario agregar otro año, después de 5 años, cada año después de agrega un año.*
- **Payoff Date**, actúa como *limitador o stop* para los cálculos de las diferentes formulas.
- El calculo de **Payoff Date 5 Years** no puede ser menor de **5 años**, adicional cada aniversario posterior a los 5 años se le agrega un año mas al calculo.
- **Term bucket**, es el periodo de para el calculo de los intereses del funding.
### **Notas**
---
- **Nota 001 - 25 03 11**: Existe una automatización dentro del calculo de periodos ( **buckets** ). eg. En un *bucket de 6 meses*, si desde la fecha inicial **A**, hasta la fecha de pago **B** agregados los periodos, no el día y el mes es menor no se agregan mas periodos de interés, en caso contrario si se supera el día y el mes agregan periodos al calculo de interés.
	- `11/12/2024 [Date] - 05/12/2024 [Date] = 05/12/2024` ( **A** ).
	- `11/12/2024 [Date] - 05/13/2024 [Date] = 11/13/2024` ( **B** ).
-  **Nota 002 - 25 03 11**: El formato de las tablas deben seguir uno en común (*YY-mm-dd , moneda, contabilidad*), y debe seguir el formato de **estilos original** al compartido.
- **Nota 003 - 25 03 011**: Los datos que pueden cambiar ( **variables** ) y estos mismos tienen asignado el color **azul** para identificarlos, y los datos que se mantienen constantes tienen el color **negro**.
- **Nota 004**: Debido a la auditoria, formulas anteriores a la fecha de **septiembre del 2024**, **no se deben corregir**, solo es menester *optimizar la formula pero conservando el error*.
- **Nota 005 - 24 11 20**: Comprobar que la fecha de adición de periodos se realize el "***día de***", ósea que si la fecha del funding es 05/26/2020 con periodos o buckets de 6, este se actualice pasado 6 meses. eg 
	- `05/26/2020 -> 11/26/2020 := Proximo 05/26/2021`

### Villagomez Capital **Funding**
---
#### Nomenclatura Funding V4

- **DOA** ( *Date of Accident* ) -  `Date`
- **FD** ( *Funding Date* ) -  `Date` 
- **TD** ( *Term Date* ) - `Date`
- **Rate** ( *Porcentaje* ) - `Decimal` 
- **TB** ( *Term Bucket* ) - `Number` 
- **CF** ( *Client Funding* ) - `Number` 
- **AF** ( *Application Fee* ) - `CF * 0.1` 
- **CC** ( *Closing Cost* ) - `CF * 0.1` 
- **TF** ( *Total Funded* ) - `CF+AF` 
- **PTD** ( *Payoff To Date* ) - `((TF)_(1+Rate)^x) + CC` 
- **POFY** ( *Payoff 5 Years* ) - `((TF)_(1+Rate)^x) + CC` 
- **TP** (*Total Payoff*) - 

**Nomenclatura Legacy**

- **DOA60MD** ( *DOA 60 Month Date* ) - `EDATE(DOA, DOA60MA)`
- **F60MB** (*Funding 60 Monthiversary Balance*) - `DATEDIF(FD, DOA60MD, "month")`
- **F60MBD** (*Funding 60 Monthiversary Balance Date*) -  `EDATE(FD, F60MB)`
- **60MPB** (*60 Month Payoff Bucket*)

- ~~**DOA60MA** ( *DOA 60 Month Anniversary* ) - `Number`
- ~~**FM** (*Funding Monthiversary*) - `DATEDIF(FD, NOW(), "Month")`
- ~~**FMD** (*Funding Monthiversary Days*) - `DATEDIF(FD, NOW(), "md")`
- ~~**CBM** (*Current Bucket Months*) - `MOD(FM, TB) = 0 ?  FM + TB :  FM - MOD (FM, TB) + TB`
- ~~**CB** (*Current Bucket*) - `CBM/TB`
- ~~**CBD** (*Current Bucket Date*) - `EDATE(FD, CBM)`
- ~~**60MPB** (*60 Month Payoff Bucket*) - `F60MBD < F60MB ?  F60MB + (TB-MOD(F60MB, TB)) :  MOD(F60MB, TB) = 0 ? F60MB : F60MB + (TB - MOD(F60MB, TB))`.

### Nomenclatura Funding v7

- **DOA** (*Date of Accident*) - `Date`
- **FD** (*Finding Date*) - `Date`
- **PD** (*Payoff Date*) - `TODAY(): Optional`
- **Rate**  - `Decimal`
- **TB** (*Term Bucket*) - `Number`
- **CF** (*Client Funding*) - `Number`

- **DD** (*Duration Days*) - `PD-FD`
- **Duration** - `TEXT(DATEDIF(FD, PD, "Y"), "00") & "Y-" &`
- **AF** (*Application Fee*) - `CF*0.1`
- **CC** (*Closing Cost*) - `CF*0.1`
- **TF** (*Total Funded*) - `-(CF+AF)`
- **TD** (*Term Date*) - `EDATE(FD, INT(DATEDIF(FD, PD, "m") / TB) * TB)`
- **PTD** (*Payoff To Date*) - `-(FV(Rate, INT(FD, PD, "m"), 0, -TF) + CC)`
- **PO5Y** (*Payoff 5+ Years*) 

### Logica **Formula Funding**
---

- Formula **Term Date**

```
[Vars] (Term Date)

[Funding Date]
FD := 2020-05-26 [MM]

[Payoff Date]
PO := 2024-01-28 [MM]

[Bucket]
Bucket := 6 [INT]

[Funding Month Anniversay]
[DATEDIF(FD, PO)]
FDA := 44 [INT] (MM)

[greaterThanBucket]
[MOD(FDA, Bucket)]
GB := 0 [INT] (Buckets)

[Eg.]

[Greater than Anniversary (GB = 0)]
Term Date := 44 (FDA) + 6 (Bucket) = 50

[Lowest Anniversay (GB != 0)]
Term Date := 44 (FDA) - 0 (GB) + 6 (Bucket) = 50 
```

- Formula **Payoff Date**

```
[Vars] (Payoff Date)

[Client Funding]
CF := 4605.00 [Decimal]

[Application Fee]
AF := 460.50 [Decimal]

[Closing Cost]
CC := 460.50 [Decimal]

[Total Funded]
TF := 5,065.50 [Decimal]

[Rate]
Rate := 3.50% [Decimal]

[Term Date]
TD := 60 [INT]

[Eg.]

[Payoff Date (Google Spread Sheets)]
PD := FV(3.50 (Rate), 50 (TD), 0, 5,065.50 (TF)) = 12,026.70

[Payoff Date (Future Value)]
PD := 5,065.50 (TF) * (1 + 3.50 (Rate))^50 (TD) = 12,026.70
```

- Formula **Payoff 5 Years**

```
[Vars] (Payoff 5 Years)

[Client Funding]
CF := 4605.00 [Decimal]

[Application Fee]
AF := 460.50 [Decimal]

[Closing Cost]
CC := 460.50 [Decimal]

[Total Funded]
TF := 5,065.50 [Decimal]

[Rate]
Rate := 3.50% [Decimal]

[Day of Accident]
DOA := 2020-03-10 [Date]

[Payoff Date]
PD := 2025-03-11 [Date]

[Funding Date]
FD := 2023-08-10 [Date]

[Buckets]
Buckets := 6 [INT]

[Month DOA Difference]
[DATEDIF(DOA, PD, 'm')]
MonthOA_Diff := 56 [MM]

[Year DOA Difference]
[DATEDIF(DOA, PD, 'y')]
YearOA_Diff := 4 [YY]

[Month DOA Date]
	Months*
	[MonthOA_Diff < 60 = 60]
	[MonthOA_Diff > 60 = 60 + 12 * (YearOA_Diff - 5) + 
		[(DOA + YearOA_Diff) <= PD = 12]
		[(DOA + YearOA_Diff) > PD = 0]
	]
[EDATE(DOA, *Months)]
#La duración de un caso para Funding es de aproximadamente 5 años, por lo que es la fecha minima para el calculo, adicional cuando se supere el umbral de tiempo, es agregado un año cada que se llegue al mismo dia/mes del DOA.
MonthOA_Date := EDATE(2020-03-10 (DOA), 60) = 2025-03-10[MM]

[DOA_Monthy_Anniversary]
[DATEDIF(FD, MonthOA_Date, 'm')]
Doa_Monthy_Anniver := DATEDIF(2023-08-10 (FD), 2025-03-10 (MonthOA_Date), 'm') = 19 [MM]

[Funding Buckets]
	lowestThanDOA*
	OR{EDATE(FD, DOA_Monthy_Anniver) < EDATE(DOA, DOA_Monthy_Anniver)}
		[lowestThanDOA == TRUE = MOD(DOA_Monthy_Anniver, Buckets) <> 0]
		[lowestThanDOA == FALSE = Buckets - MOD(DOA_Monthy_Anniver, Buckets)]

Funding_Buckets := OR(2025-03-10 < 2021-10-10) = 6 - MOD(19, 6) = 5

[Periods]
[DOA_Monthy_Anniver + Funding_Buckets]
Periods := 19 + 5 = 24

[Eg.]

[Payoff Date (Google Spread Sheets)]
PD := FV(3.50 (Rate), 24 (Periods), 0, 5,065.50 (TF)) = 17,937.82

[Payoff Date (Future Value)]
PD := 5,065.50 (TF) * (1 + 3.50 (Rate))^24 (Periods) = 17,937.82

```

- Formula **Payoff 24%**

```
[Total Funded]
TF := 5,065.50 [Decimal]

[Payoff Date]
PD := 2025-03-11 [Date]

[Funding Date]
FD := 2023-08-10 [Date]

[Closing Cost]
CC := 460.50 [Decimal]

P24 := -(((TF * 0.24)/365) * DATEDIF (FD, PD, "D") + (-TF)) + CC

[Eg.]
P24 := -(((5,065.50 * 0.24)/365) * 579 + (-5,065.50)) + 460.50 = 7,454.50
```

- Formula **Payoff x3**

```
[Total Funded]
TF := 5,065.50 [Decimal]

[Closing Cost]
CC := 460.50 [Decimal]

Px3 := -((3 * TF) + CC)

[Eg.]
Px3 := -((3 * 5,065.50) + 460.50)
```
### Formulas Iteradas

``` 
Formula Chat-GPT [No Date]

I2: Total Funded = TF
D2: Rate = R
C2: Funding Date = FD
B2: Date of Accident = DOA
O2: Payoff Date = PF
E2: Term Bucket = TM
H2: Closing Cost = CC

= -(FV(D2, INT(DATEDIF(C2, O2, "m")), 0, -I2) + H2)

TF * (1 + R) ^ (
	DATEDIF(FD, EDATE(DOA, 
		IF(
			DATEDIF(DOA, PF, "m") < 60, 
			60, 
			60 + 12 * (DATEDIF(DOA, PF, "y") [A] - 5) [D] + IF (
				DATE(
					YEAR(DOA) + DATEDIF(DOA, PF, "y") ,
					MONTH(DOA), 
					DAY(DOA)
				) [B] <= PF, 12, 0 [C]
			)
		)) , "m"
	) +
	IF (
		OR(
			EDATE(FD, DATEDIF(FD, EDATE(DOA,
				IF(
					DATEDIF(DOA, PF, "m") < 60, 
					60 , 
					60 + 12 * (DATEDIF(DOA, PF, "y") - 5) + IF(
						DATE(
							YEAR(DOA) + DATEDIF(DOA, PF, "y"),
							MONTH(DOA),
							DAY(DOA)
						) <= PF, 12, 0
					)
				)), "m")
			) <
			EDATE(DOA, 
				IF(
					DATEDIF(DOA, PF, "m") < 60,
					60,
					60 + 12 * (DATEDIF(DOA, PF, "y") - 5) + IF (
						DATE(
							YEAR(DOA) + DATEDIF(DOA, PF, "y"),
							MONTH(DOA),
							DAY(DOA)
						) <= PF, 12, 0
					)
				)
			),
			MOD(
				DATEDIF(FD, 
					EDATE(DOA, 
						IF(
							DATEDIF(DOA, PF, "m") < 60,
							60,
							60 + 12 * (DATEDIF(DOA, PF, "y") - 5) + IF (
								DATE(
									YEAR(DOA) + DATEDIF(DOA, PF, "y"),
									MONTH(DOA),
									DAY(DOA)
								) <= PF, 12, 0
							)
						)
					), "m"
				), TM
			) <> 0),
			TM - MOD(
				DATEDIF(FD, 
					EDATE(DOA, 
						IF(
							DATEDIF(DOA, PF, "m") < 60,
							60,
							60 + 12 * (DATEDIF(DOA, PF, "y") - 5) + IF (
								DATE(
									YEAR(DOA) + DATEDIF(DOA, PF, "y"),
									MONTH(DOA),
									DAY(DOA)
								) <= PF, 12, 0
							)
						)
					), "m"
				), TM
			)
		)
	) + CC
```


```
Formula 001 [No Date]

= LET(
doa_pf_date, IF(DATEDIF(B2, N2, "m") < 60, 60, 60 + (12 * (DATEDIF(B2, N2, "y") - 5)) + (IF(EDATE(B2, DATEDIF(B2, N2, "m")) <= N2, 12, 0))),
fd_doa_date, DATEDIF(C2, EDATE(B2, doa_pf_date), "m"),
fd_doa_date + IF(OR(EDATE(C2, fd_doa_date) < EDATE(B2, doa_pf_date), MOD(fd_doa_date, E2) <> 0), E2 - MOD(fd_doa_date, E2))
)
```

```
Formula 002 [No Date]

= LET(
funding_moth_diff, DATEDIF(B2, N2, "m"),
funding_year_diff, DATEDIF(B2, N2, "y"),
doa_funding_periods, DATEDIF(C2, EDATE(B2, IF(funding_moth_diff < 60, 60, 60 + 12 * (funding_year_diff - 5) + IF(DATE(YEAR(B2) + funding_year_diff, MONTH(B2), DAY(B2)) <= N2, 12, 0))), "m"),
periods_to_funding, (E2 - MOD(doa_funding_periods, E2)), 
periods, (doa_funding_periods + periods_to_funding),
FV(D2, periods, 0, I2) + H2)
```

### Unknown

Seguimiento de **Patient Progress Sheet (PPS)** aproximadamente 2 a 3 semanas.
Seguimiento de Funding de Paola, calendario actualizado

Casos terminados, Casos activos...

```
- Arreglar v24-11-10 (version nueva), Linea 2.
- Lista de transición en I's y buscar donde se usa I's.

- (Q001, Payoff 5 Years) ["Term Bucket", "DOA", "x < 5 Years"]

Numero de clientes y totales activos (Payoff Date = TODAY() "Activo") "Funding v3" 
Activas del 24, 23, 22, ... 
(Morado) := Revision 

(Si no es compuesto, se agrega al final)

CF + AF := CC Final Interés Compuesto

CF := Client Funding
AF := Application Fee
CC := Closing Cost
Rate := Rate
Bucket := Bucket

1500 CF - 150 CC - 150 AF - 1650 
2017 := 2022 (5Y) -> 2024 PD -> 84;

0.0399^60 * (-1650) =

$23507.64
$4830.95
$8531.55
$7109.63
$8626.08

Cobro de aniversario se realiza en diciembre.
241120
Separar calculo de interes
Actualizar version 7, usar formulas viejes de v6...
Cambiar died "de"...

---------------------------------------------------------------------

DOA: 2017 04 28
PF: 2024 11 12

- [ A ]: 7 años
- [ B ]: 2024 11 12
- [ C ]: 2024 04 28 <= 2017 11 12 := 12
- [ D ]: 12 * 2 := 24

> 12 * (7-5)

------------------------------------------------

( 1 + R) := 3.99% -> [+1 (Razon para agregar 1% a la tasa de interes)].

- [v1.1] -> 60 + 12 * (DATEDIF(DOA, PF, "y" - 5))
- [v1.2] -> DATE(YEAR(DOA) + DATEDIF(DOA, PF, "y"), MONTH(DOA), DAY(DOA))

- [v2.1] -> DATEDIF(DOA, PF, "y") 
- [v2.2] -> EDATE(DOA, DATEDIF(DOA, PF, 'm'))

---------------------------------------------------

- IF(DATEDIF(B2, O2, "m") < 60, 60, 60 + 12 * (DATEDIF(B2, O2, "y") - 5) + IF(DATE(YEAR(B2) + DATEDIF(B2, O2, "y"), MONTH(B2), DAY(B2)) <= O2, 12, 0))
- IF(DATEDIF(B2, O2, "m") < 60, 60, 60 + 12 * (DATEDIF(B2, O2, "y") - 5) + IF(DATE(YEAR(B2) + DATEDIF(B2, O2, "y"), MONTH(B2), DAY(B2)) <= O2, 12, 0))

----------------------------------------------------

=-(FV(D2, INT(DATEDIF(C2, O2, "m")), 0, -I2) + H2) @TODAY

=-(FV((1+D2), R2, 0, -I2) + H2) @5Y

-----------------------------------------------------------
=LET(
doa_pf_date, IF(DATEDIF(B2, O2, "m") < 60, 60, 60 + (12 * (DATEDIF(B2, O2, "y") - 5)) + (IF(EDATE(B2, DATEDIF(B2, O2, "m")) <= O2, 12, 0))),
fd_doa_date, DATEDIF(C2, EDATE(B2, doa_pf_date), "m"),
fd_doa_date + IF(OR(EDATE(C2, fd_doa_date) < EDATE(B2, doa_pf_date), MOD(fd_doa_date, E2) <> 0), E2 - MOD(fd_doa_date, E2))
)

```
