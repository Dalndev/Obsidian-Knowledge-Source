---
tags:
  - develop
  - ia
---
Un **embedding** la **relación** de textos, imágenes, video u otro tipo de información con el objetivo de realizar las siguientes acciones:
- *Búsqueda*
- *Recomendaciones*
- *Clasificación*
- *Clustering*

## Human Language
---
La comunicación entre humanos se realizar mediante la semántica y léxico de las palabras, con el objetivo de transmitir una idea.

## Structured and Unstructured
---
Las *vector databases* tratan la metainformación asociada con embeddings como NoSQL (**Información no estructurada**)
La información estructurada o no estructurada puede ser almacenada y asociada a un embedding la cual servirá como *índice de búsqueda*.
- En la información estructurada cada dato tiene su campo correspondiente
- En la información no estructurada la información es almacenada en un campo `json` o `jsonb`

Ambos enfoques tienen su caso de uso, por ejemplo cuando se usa *información estructura* tiene como objetivo aplicar **búsqueda predictiva**. Mientras que la información no estructurada se aplica cuando se busca tener información interactiva.