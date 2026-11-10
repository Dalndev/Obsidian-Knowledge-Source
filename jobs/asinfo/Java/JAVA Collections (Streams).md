`Stream` interfaz que permite procesar secuencias de elementos mediante operaciones funcionales como filtrar, transformar, agrupar y calcular.

Eg. 
```JAVA
List<Integer> numbers = List.of(1, 2, 3, 4, 5);

List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .toList();

System.out.println(result);
// [4, 8]
```

**Operaciones**.

- Intermedias. Devuelve un stream y es aplicada por operaciones como `filter()`, `map()`, `sorted()`
- Terminales. Producen el resultado finalizando el pipeline como `collect()`, `count()`, `reduce()`

**Metodos Intermedios**.
- `filter()` Filtra elemento mediante una condicion
- `map()` Transforma cada elemento
- `flatMap()` Transforma y aplana flujos anidados
- `mapMulti()` Produce cero o varios elementos por entrada
- `distinct()` Elimina duplicados en base a `equals()`
- `sorted()` Ordena los elementos
- `peek()` Ejecuta una accion para observar elementos
- `limit()` Limita el numero de elementos
- `skip()` Omite los primeros elementos
- `takeWhile()` Toma elementos mientras se cumple una condicion
- `dropWhile()` Descarta elementos mientra se cumple una condicion
- `mapToInt()` Convierte a `IntStream`
- `mapToLong()` Convierte a `LongStream`
- `mapToDouble()` Convierte a `DoubleStream`
- `parallel()` Solicita un Stream paralelo
- `sequential()` Solicita un Stream secuencial
- `unordered()` Indica que no se requiere orden de encuentro
- `onClose()` Registra una accion para cuando se cierra el Stream

**Metodos Terminales**.
- `forEach()` Ejecuta una accion por elemento
- `forEachOrdered()` Respeta el orden de encuentro
- `toList()` Recopila elementos en una lista no modificable
- `toArray()` Convierte el flujo en un arreglo
- `collect()` Acumula resultados en Coleccion o estructuras
- `reduce()` Reduce elementos a un resultado
- `count()` Cuenta elementos
- `min()` Obtiene el minimo
- `max()` Obtiene el maximo
- `findFirst()` Obtiene el primer elemento
- `findAny()` Obtiene algun elemento
- `anyMatch()` Comprueba si alguno cumple una condicion
- `allMatch()` Comprueba si todos cumplen una condicion
- `noneMatch()` Comprueba si ninguno cumple una condicion

**Metodos Adicionales**.
- `iterator()`
- `spliterator()`
- `isParallel()`
- `close()`

**Metodos estaticos**.
- `of()`
- `empty()`
- `ofNullable()`
- `generate()` Metodo estatico para generar un stream definido un tamano maximo `limit()`
- `iterate()` Metodo alternatico para generar un stream donde se define el 1er elmento del stream
- `concat()`
- `builder()` Metodo estatico para crear una instancia de `Stream<Object>`

eg.
```JAVA
List<String> list = Arrays.asList("abc1", "abc2", "abc3");
long size = list.stream().skip(1)
  .map(element -> element.substring(0, 3)).sorted().count();
```

```JAVA
int reducedParams = Stream.of(1, 2, 3)
  .reduce(10, (a, b) -> a + b, (a, b) -> {
     log.info("combiner was called");
     return a + b;
  });
```

```JAVA
List<String> collectorCollection = 
  productList.stream().map(Product::getName).collect(Collectors.toList());
```