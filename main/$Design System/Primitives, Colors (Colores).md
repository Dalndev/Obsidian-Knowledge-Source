---
tags:
  - design-system
---
## Tokens (Primitives)

Definiciones de los colores implementados en el sistema web, para gestionar la identidad del producto a nivel granular.

**Colors (Raw)**.

Colores generales implementados en el sistema, no poseen propósito 
u objetivo en el sistema. Pueden ser combinados para resaltar secciones o componentes.
- (#ffffff) White
- (#000000) Black

**Colors (Neutral)**.

> (#6D6D6D) Gray, Fuscous "Escaña de Grises"

Permiten otorgar las siguientes propiedades al sistema.

1. **Jerarquía de Texto**. Utiliza escalas de grises para comunicar importancia sin implementar tamaño ni peso adicional.
2. **Superficies y Capas**. Otorgan profundidad visual sin la necesidad de implementar sombras.
3. **Bordes y Separadores**. Grises con poca opacidad, permite separar contenido.
4. **Estados de componentes**. Permiten denotar estados de inactivo/no disponible mediante disabled, loading.

**Colors (Brand)**.

> (#5b3ee9) Primary, Purple Heart

Identidad visual del producto, permite darle una esencia al sistema, mediante las siguientes propiedades.

1. **Acción Primaria**. Marca el elemento más importante con el que el usuario debe interactuar en cualquier pantalla.
2. **Indicadores de Estado (Activo & Seleccionado)**.Distingue el elemento seleccionado en un conjunto. 
3. **Focus Ring (Accesibilidad)**. Permite identificar el elemento actualmente seleccionado.
4. **Énfasis y jerarquía visual**. Permite elevar la jerarquía perceptual de los elementos.
5. **Superficies de fondo suaves (tints)**. Permiten identificar acciones secundarias en el sistema.

**Colors (Actions)**.

Colores como lenguaje visual universal, entendido por los usuario.

- (#0ABF80) Success, Eucalyptus. Confirma que una acción se completo correctamente en el sistema, sin requerir acción del usuario.
  
- (#F97607) Warn, Orange. Advierte al usuario que se necesita atención en un acción.
   
- (#F54B3E) Error, Punch. Indica un fallo o estado de error en el sistema. eg. Validación fallida, Error al guardar, etc.
  
- (-) Info. Contexto neutro donde se ejecuto una acción en el sistema, que no tiene urgencia o consecuencia. eg. Banner informativo.