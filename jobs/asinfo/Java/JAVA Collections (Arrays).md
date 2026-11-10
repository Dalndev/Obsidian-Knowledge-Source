`Arrays` es un objeto que puede manejar un numero fijo de elementos de un mismo tipo de dato, los cuales pueden ser primitivos `int, char, boolean` u objetos `String`, pueden implementar interfaces como `CharSequence`.

- El tamano es definido en la creacion y no es modificable
- Todos sus elementos deben ser del mismo tipo de dato
- Puede almacenar valores duplicados
- Un arreglo puede ser de tipo uni-dimensional, dos-dimensiones o multi-dimensional.
- En caso de declarar e inicializar un arreglo sin datos se asignan datos por defectos en base al tipo de dato eg. `Numeric := 0`
- Un arreglo declarado con un `Superclass` o `Interface` puede almacenar objetos.
  `CharSequence` permite almacenar `String` o `StringBuilder`

**Declaracion**.
```JAVA
int[] numbers;
String fruits[];
```

**Inicializacion**.
```JAVA
String names[] = new String[6]
int[] numbers = new int[] {43, 55, 99}
String[] stringArray = {"one", null, "two"}
```

**Modificacion**.
```JAVA
int nums[5]

nums[0] = 10
```

**Consideraciones**.
- El operador `==` compara las referencias de memoria
- El metodo `.equals()` compara el contenido del arreglo

**Metodos**.
- `sort()` Ordena elementos de un arreglo
- `binarySearch()` Busca un elemento en un arreglo ordenado
- `equals()` Compara el contenido de dos arreglos
- `deepEquals()` Compara arreglos multidimensionales o anidades
- `compare()` Compara arreglos lexicograficamente
- `compareUnsigned()` Compara arreglos numericos con interpretacion sin signo
- `mismatch()` Encuentra el primer indice diferente
- `copyOf()` Copia un arreglo con una longitud determinada
- `copyOfRange()` Copia una seccion de un arreglo
- `fill()` Rellena posicion con un valor
- `setAll()` Asigna valores utilizando una funcion lambda
- `parallelPrefix()` Realiza operaciones acumulativas
- `toString()` Representa un arreglo como String
- `deepToString()` Representa arreglos anidados
- `hashCode()` Calcula el hash del contenido del arreglo
- `deepHashCode()` Calcula el hash de arreglos anidados
- `asList()` Crea una lista de tamano fijo respaldada por un arreglo
- `stream()` Convierte un arreglo en un Stream
- `spliterator()` Obtiene un Spliterator para recorrer sus elementos
- `clone()` ...
- `asList()` Metodo estatico para crear una Lista en base al array actual