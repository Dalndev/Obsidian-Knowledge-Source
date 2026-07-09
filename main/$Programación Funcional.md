> Programación que enfatiza el uso de funciones y datos inmutables.

**Funciones Puras**. 

> Una función es pura si, para la misma entrada, siempre devuelve la misma salida sin **efectos secundarios** (*no modifica variables globales, imprime en consola, no escribe en BD*).

**Inmutabilidad**.

> Los datos no se cambian. En caso de modificar un objeto o arreglo se realia una copia aplicando el cambio a realizar

**Funciones de Primera Clase y Orden Superior**

> Las funciones se tratan como cualquier variable. Pueden ser pasadas como argumentos a otras funciones o ser devueltas eg. map, filter, reduce.

**Transparencia Referencial**.

> Permite reemplazar la llamada a una función por el valor resultante sin que el programa cambie el comportamiento

**Composición de Funciones**.

> Proceso de combinar dos o más funciones para producir un nueva

**Consideraciones**.

- Optimización de Llamada de Cola (Tail Call Optimization)
- Recursividad. La implementación de la recursion se la realiza mediante llamadas a la misma función.

Temas Relacionados.

- Currying y Aplicación Parcial, permite transformar funciones de multiples argumentos en una serie de funciones de un solo argumentos
- Recursividad, solución de problemas sin la utilización de while o for
- Declaratividad vs Imperatividad, implementar código que indique "que" hacer y no "como" hacerlo.
- Functors, Objetos sobre los que se mapea una función
- Monads, Estructuras que encapsulan lógica y efecto (Maybe o Either) para manejo de errores.
- Leyes Algebraicas, Implementa reglas asociativas e identidad de funciones.
- Lenguajes funcionales, Haskell, Elm, Elixir para consolidar conocimiento. 