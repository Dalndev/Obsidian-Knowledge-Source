---
tags:
  - uml
  - machine-states
  - develop
---
## Descripción
- Los Diagrama de maquinas de estado UML, permiten modelar el comportamiento de un objeto/sistema en respuesta a eventos o cambios.
	- Permite planificar y/o comprender el **flujo de trabajo del sistema y procesos de toma de decisiones**.
	- Útiles para modelar sistemas complejos en el que involucren estados, toma de decisiones o interacciones entre estados.
	- Existen dos tipos de estados de maquinas, **comportamiento** y **protocolo**

### Maquinas de estado de comportamiento
- Utilizados para modelar sistemas con comportamiento complejos. Donde el comportamiento del sistema se **modela como una serie de varios estados, transiciones y eventos posibles**.
  *eg. Semáforos; Eventos como que se acabe el tiempo del temporizador o que un coche se acerque al cruce*
	- Los estados representan diferentes condiciones en el que sistema puede encontrarse.
	- Las transiciones representan eventos que obligan al sistema a cambiar de estado.
### Maquinas de estado de protocolo
- Utilizados para modelar sistemas que operan según un protocolo o conjunto de reglas específicos, en donde el comportamiento es condicionado por conjunto restricciones en las transiciones entre estados.
  *eg. Protocolo de comunicación; Estados podrían incluir "inactivo", "transmitiendo" y "recibiendo". Donde existen reglas para transmitir datos, como la comprobación de errores y el control de flujo.*
	- Los estados representan diferentes condiciones en el que sistema puede encontrarse.
	- Las restricciones representan las reglas que rigen las transiciones entre los estados.
## Componentes
- **Estados**. Representa los diferentes estados o condiciones en el que se encuentra un sistema.
	- **Estados simples**. Se refieren a un solo estado o condición.
	- **Estados compuestos**. Representan un grupo de estados o condiciones.
- **Transiciones**. Muestra los caminos entre los diferentes estados.
	- **Transiciones simples**. Representa una ruta directa entre dos estados.
	- **Transiciones compuestas**. Representan una ruta compleja en la que involucran multiples estados.
- **Eventos**. Representa los diversos desencadenantes (triggers) para la transición de estados.
	- **Eventos internos**. Son aquellos que se activan dentro del sistema, pero *no desencadena un cambio de estado, sino una actividad*.
	- **Eventos Externos**. Son aquellas fuentes externas que activan los eventos del sistema, *provocando el cambio de estado*.
	  
![[Pasted image 20250521164441.png]]

- **Acciones**. Son acciones que suceden cuando un evento provoca un cambio de estados.
## Cambio de Estado
- La transición del estado inicial al primer estado real, no es necesario, añadir información adicional.
- Un trigger debe cumplir con las siguientes condiciones, las cuales pueden ser anotadas dentro del mismo estado para simplificar la representación.
	- **entry**. El evento se activa automáticamente cuando se desencadena un estado.
	- **exit**. El evento se desencadena cuando se abandona un estado.
	- **do**. El evento se desencadena una y otra vez si no se cambia de estado.

### Pseudoestados
- **Estado inicial**. Sin transición entrante y con una transición saliente que revela cual es el estado al principio de la secuencia.
- **Estado final**. Sin transición saliente, es el fin de la secuencia de comportamiento.
- **Bifurcación**. División en varios estados paralelos.
- **Sincronización**. Sincronización de varios estados paralelos.
- **Union**. Nodo de union de varias transiciones en serie.
- **Elección**. Nodo desde el cual puede iniciarse diversas transiciones sobre la base de una decision previa.
- **Punto de entrada**. Síntesis de transición similares que entran en un estado compuesto
- **Punto de salida**. Síntesis de transiciones similares que se originan en un estado compuesto.
- **Historial superficial**. Almacenamiento del ultimo sub-estado activo de un estado compuesto.
- **Historial profundo**. Almacenamiento del ultimo sub-estado activo de todos los niveles jerárquicos de un estado compuesto

## Diagramas complejos
- Es posible incluir sub-estados que detallen el estado y posible comportamiento en el esquema dependiendo de la complejidad del proceso.
- **Estado compuesto**. Permite definir un estado en profundidad.
- **Estado de sub-máquina**. Incluye un estado **subordinado**, que permite que los sub-estados pueden ejecutarse independientemente el uno del otro así como estar relacionados entre sí.
## Notaciones y símbolos en maquinas de estados UML
1. **Notación de estado**. Representa los estados en los que el sistema puede encontrarse.
	1. **Estado inicial**. Representado con un circulo relleno.
	2. **Estado**. Representado con un rectángulo que contiene el nombre del estado.
	3. **Estado final**. Representado con un circulo con un punto en su interior, adjunto a un estado.
2. **Notación de transición**. Representa el movimiento entre estados. Es representado con una línea que conecta los dos estados.
	1. **Disparador**. El disparador (trigger) de la transición se escribe junto a la línea.
	2. **Guardias**. Son las restricciones adicionales que se le puede adjuntar a una transición.
3. **Notación de pseudoestado**. Representa un punto de decision, entrada o salida, el cual es representado con un pequeño círculo o un rombo con una letra en su interior. 
   Ayuda a modelar transiciones complejas que involucran múltiples condiciones.
4. **Notación de estado compuesto**. Estado que contiene sub-estados, los cuales son representados con rectángulos con menor tamaño.
## Diseño
1. Identificación de estados y transiciones.
2. Definición de eventos y acciones.
3. Organización de los elementos del diagrama.

## Consideraciones
- Una transición externa provoca un cambio de estado.
- Una transición interna desencadena una actividad, mas no un cambio de estado.
- Si no se indica un trigger, significa que el evento siempre se esta ejecutando.
- Si no se indica un evento, significa que el evento ocurre de manera automática, tan pronto finalicen las actividades en los estados anteriores.

![[Pasted image 20250521164907.png]]

![[Pasted image 20250521164911.png]]


**Referencias**.
- [Diagramas de máquinas de estado UML](https://miro.com/es/diagrama/que-es-diagrama-maquina-estados-uml/)
- [Diagrama de estado UML](https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/diagrama-de-estado-uml/)
- [Tutorial de diagrama de máquina de estados](https://www.lucidchart.com/pages/es/diagrama-de-maquina-de-estados)