`Iterator` interfaz que permite recorrer secuencialmento elementos de collecion como `List`, `Set` `Queue`

**Metodos**.
- `hasNext()` Comprueba si existen mas elementos
- `next()` Devuelve el siguiente elmento y avanza
- `remove()` Elimina el ultimo elemento devuelto por `next()`
- `forEachRemaining(Consumer)` Ejecuta una accion sobre los elementos restantes

eg.

```JAVA
List<String> names = List.of("Ana", "Luis", "Pedro");

Iterator<String> iterator = names.iterator();

while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

**ListIterator**.
- `hasPrevious()`
- `nextIndex()`
- `previousIndex()`
- `set(element)`
- `add(element)`