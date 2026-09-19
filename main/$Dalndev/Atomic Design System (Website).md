---
aliases:
  - v0.0.0
tags:
  - dalndev
  - ui
  - website
  - design-system
---
**Modificadores**. Son aquellas propiedades que una vez presentes alteran las propiedades visuales del componente.

**Atomic Design**. Metodologia de trabajo para el desarrollo de Design Systems robustos, basado en un orden y jerarquia dado por el **principio quimico de la composición de la materia**.

> ***Desgin Tokens**. Son los atomos en un sistema de diseño UI, especificamente son las entidades que almancenan los atributos visuales. Son utilizados como valores hard-codeados y organizados para mantener el sistema visual consistente y escalable*

**Enlaces de Interes**.
- [Atomic Design methodology for building design systems](https://blog.kamathrohan.com/atomic-design-methodology-for-building-design-systems-f912cf714f53)
## Primitivos
---
**Colors**.
- Primario (Brand). Verde, `#3C8C38` 
- ~~Secundario. ***Necesario identificar la identidad visual de la marca***~~
- Neutrales. Escala de Grises Neutrales

**Sizes.**
- ...
  
**Typography**.
- ...
## Componentes (Atomos)
---
> **Atomos**. Elementos bases del sistema de diseño que no pueden ser descompuestos o alterados para evitar alterar la consistencia visual

**Button (Botón).**
- State (Estado). Default, Hover, Disabled
- \*Variants (Variantes). Primary, Secundary
- \*Size (Tamaño). Default

**Cards (Tarjeta).**
- State (Estado). Default, Hover, Disabled

**Inputs (Entrada).**
- State (Estado). Default, Invalid, Disabled, Focus

**Progress Bar (Barra de Progreso).**
- Sin modificadores
  
**Slider**
- 

## Heros (Moleculas)

> **Moleculas**. Combinación de multiples atomos que se unen para crear un elemento mas complejo en el sistema.
## Table (Organismo)

> **Organismo**. Combinación de multiples moleculas que