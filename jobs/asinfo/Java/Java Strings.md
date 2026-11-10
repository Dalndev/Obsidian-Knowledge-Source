---
tags:
  - techreview
  - review
  - java
---
>**String Pool**. Mecanismo mediante el cual se reutilizan los objetos String que poseen el mismo contenido cuando se usan literales.

`String` objeto de la clase `java.lang.String` que representa una secuencia de caracteres que tiene las siguientes caracteristicas.
- **Inmutable**. Contenido no se puede modificar posterior a su creacion
- **Final**. Su clase no se puede heredar.
- `CharSequence`. Implementacion que permite trabajar con secuencias de caracteres.

eg.
```JAVA
String name = "Contoso"
```

**Consideraciones**.
- El operador `==` compara las referencias de memoria
- El metodo `.equals()` compara el contenido de los strings

**Metodos**.
- `length()` recupera la longitud en unidades UTF-16
- `chartAt(i)` obtiene un `char` en una posicion definida.
- `substring(a,b)` extrae un fragmento de texto en los indices definidos.
- `contains(s)` Busca una secuencia basado en la entrada definida 
- `indexOf(s)` Busca la primera posicion de un caracter dado
- `lastIndexOf(s)` Busca la ultima posicion de un caracter dado
- `startsWith(s)` Comprueba si existe un texto dado en el inicio de la cadena
- `endsWith(s)` Comprueba si existe un texto dado al final de la cadena
- `toUpperCase()` Convierte a mayusculas la cadena
- `toLowerCase()` Convierte en minuscula la cedena
- `trim()` Elimina espacios en blanco a los extremos de la cadena
- `strip()` Elimina espacios Unicode a los extremos de la cadena
- `replace(a,b)` Reemplaza texto por los caracteres dados
- `replaceAll(r,s)` Reemplaza texto mediante REGEX
- `split(regex)` Divide una cadena de texto
- `isEmpty()` Comprueba si la longitud de la cadena es cero
- `isBlank()` Comprueba si existe caracteres vacios o espacios en la cadena
- `repeat(n)` Repite una cadena de texto
- `concat(s)` ...
- `format()` ...
- `join()` ...

**StringBuilder**. Permite crear objetos String donde sus secuencia de caracteres son mutables mediante los metodos que expone.

**StringJoiner**. ...