`Hashmap` es una implementacion de la interfaz `Map` donde existe una relacion de clave valor que indica que cada clave tiene asignado un valor donde cada clave puede ser utilizada para recuperar el valor almacenado.

```Plain
Key -> Value
```

**Declaracion & Inicializacion**.
```JAVA
Map<String, Integer> ages = new HashMap<>();
```

**Iteracion**.

```JAVA
for(String key : productsByName.keySet()) {
    Product product = productsByName.get(key);
}
```

```JAVA
for(Map.Entry<String, Product> entry : productsByName.entrySet()) {
    Product product =  entry.getValue();
    String key = entry.getKey();
}
```

```JAVA
productsByName.forEach( 
(key, product) -> {
    System.out.println("Key: " + key + " Product:" + product.getDescription());

});
```

**Modificacion**.

```JAVA
scores.replace("Ana", 95);
scores.replace("Pedro", 80); // No inserta Pedro
```

```JAVA
scores.replaceAll((name, score) -> score + 10);
```

```JAVA
frequency.merge("Java", 1, Integer::sum);
frequency.merge("Java", 1, Integer::sum);
frequency.merge("Python", 1, Integer::sum);

// {Java=2, Python=1}
```

**Calculo**.

```JAVA
productsByName.compute("E-Bike", (k,v) -> {
    if(v != null) {
        return v.addTagsOfOtherProduct(eBike2);
    } else {
        return eBike2;
    }
});
```

**Caracteristicas**.
- Las claves son unicas
- Permite una clave null y multiples valores null
- No garantiza orden de iteracion
- Es necesario mecanismos de sincronizacion para modificaciones recurrentes.

**Metodos**.
- `put(key, value)` Inserta o actualiza un par clave-valor
- `get(key)` Obtiene el valor asociado a una clave
- `getOrDefault(key, defaultValue)` Obtiene un valor o devuelve uno predeterminado
- `containsKey(key)` Comprueba si existe una clave
- `containsValue(value)` Comprueba si existe un valor
- `remove(key)` Elimina una entrada por clave
- `remove(key, value)` Elimina si coinciden clave y valor
- `replace(key, value)` Reemplaza el valor de una clave existente
- `replace(key, oldValue, newValue)` Reemplaza condicionalmente
- `replaceAll(function)` Modifica todos los valores
- `putIfAbsent(key, value)` Inserta si no existe un valor no nulo asociado
- `putAll(map)` Incorpora  entradas de otro mapa
- `computeIfAbsent()` Calcula un valor si falta o es null
- `computeIfPresent()` Calcula un nuevo valor si existe uno no nulo
- `compute()` Calcula un nuevo valor para una clave
- `merge()` Combina un valor con el existente
- `keySet()` Obtiene un vista de las claves
- `values()` Obtiene un vista de los valores
- `entrySet()` Obtiene una vista de las entradas
- `forEach()` Recorre claves y valores
- `size()` Devuelve el numero de entradas
- `isEmpty()` Comprueba si esta vacio
- `clear()` Elimina todas las entradas
- `clone()` Crea una copia del HashMap
- `of()` Metodo estatico para inicializar un Map `Map.of("Maria", 92)`