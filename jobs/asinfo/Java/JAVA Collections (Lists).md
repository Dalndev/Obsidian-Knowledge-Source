`Lists` es una interfaz permiten manipular mas de un objeto del mismo tipo a la vez y el contenido de la lista en base a la forma de inicializacion, grarantizando un orden en los elementos. Es implementada por `ArrayList` & `LinkedList`.

**Declaracion**.

```JAVA
List<String> languages;
```

**Inicializacion**.

```JAVA
List<Integer> numbers = new ArrayList<>(); // := Modificable mediante metodos

List<String> languages = List.of("Java", "Python") // := No modificable

List<Integer> nums = Arrays.asList(new int[]{0, 1, 2, 3, 4, 5})
```

**Metodos**.

- `add(index, element)` Agrega un elemento
- `addAll(index, collection)` Inserta varios elementos en una posicion
- `get(index)` Obtiene un elemento por indice
- `set(index)` Reemplaza un elemento
- `remove(index)` Elimina por indice
- `remove(object)` Elimina la primera aparicion de un valor
- `removeAll(collection)` Elimina los elementos presentes en otra coleccion
- `removeIf(predicate)` Elimina elementos segun una condicion
- `retainAll(collection)` Conserva elementos presentes en otra coleccion
- `clear()` Elimina todos los elementos
- `size()` Devuelve la cantidad de elementos
- `isEmpty()` Comprueba si esta vacia
- `contains(object)` Comprueba si contiene un elemento
- `containsAll(collection)` Comprueba si contiene todos los elementos 
- `indexOf(object)` Obtiene el indice de la primera aparicion
- `subList()` Obtiene una vista de una seccion de la lista
- `sort()` Ordena los elementos
- `replaceAll(operator)` Transforma los elementos
- `forEach(action)` Ejecuta una accion por elemento
- `iterator()` Obtiene un iterador
- `listIterator()` Obtiene un iterador bidireccional
- `toArray()` Convierte la lista en un arreglo
- `stream()` Obtiene un Stream secuencial
- `getFirst()` Obtiene el primer elemento
- `getLast()` Obtiene el ultimo elemento
- `addFirst(element)` Inserta al principio
- `addLast(element)` Inserta al final
- `removeFirst()` Elimina el primero
- `remove(Last)` Elimina el ultimo
- `reversed()` Obtiene un vista con orden inverso
- `of()` Metodo estatico para crear una lista no modificable
- `copyOf` Metodo estatico para crear una lista a partir de una coleccion