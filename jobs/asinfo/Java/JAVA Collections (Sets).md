`Set` interfaz implmentada por `HashSet`, `TreeSet`, `LinkedHashSet` que representa una coleccion de elementos unicos lo que permite eliminar duplicados, identificar elmentos repetidos y realizar operaciones de conjuntos.

**Declaracion & Inicializacion**.

```JAVA
Set<Integer> numbers = new HashSet<>();

numbers.add(10)
```

**Metodos**.
- `add(elemento)` Agrega un elemento si no existe
- `addAll(collection)` Agrega todos los elementos de otra coleccion
- `remove(object)` Elimina un elemento
- `removeAll(collection)` Elimina elementos presentes en otra coleccion
- `retainAll(collection)` Conserva elementos compartidos
- `removeIf(predicate)` Elimina elementos que cumplen una condicion
- `contains(object)` Comprueba si existe un elemento
- `containsAll(collection)` Comprueba si contiene todos los elementos de otra coleccion
- `size()` Devuelve la cantidad de elementos
- `isEmpty()` Comprueba si esta vacio
- `clear()` Elimina todos los elementos
- `iterator()`Permite recorrer los elentos
- `forEach(action)` Ejecuta una accion por elemento
- `toArray()` Convierte el Set en un Array
- `stream()` Obtiene un Stream secuencial
- `parallelStream()` Obtiene un Stream paralelo
- `spliterator()` Obtiene un Spliterator
- `equals(object)` Compara conjuntos por contenido
- `hashCode()` Calcula el hash del conjunto
- `of()` Crea un conjunto no modificable
- `copyOf()` Crea un conjunto desde otra coleccion

**Operacion de Conjuntos**.

**Union**.Combina todo los elementos de ambos conjuntos, eliminando duplicados `addAll(b)`

**Interseccion** Conserva unicamente los elementos presentes en ambos conjuntos `retainAll(b)`

**Diferencia** Obtiene los elementos de **a** que no pertenecen a **b** `removeAll(b)`