# 🚀 Neovim (NVIM) Master Cheatsheet

---

## 🔀 1. Transición entre Modos

| Atajo                | Modo Destino          | Acción                                                     |
| :------------------- | :-------------------- | :--------------------------------------------------------- |
| `<Esc>` o `Ctrl + [` | **Normal**            | Salir del modo actual y volver a Normal.                   |
| `i`                  | **Insert**            | Insertar antes del cursor.                                 |
| `I`                  | **Insert**            | Insertar al inicio de la línea (primer carácter no vacío). |
| `a`                  | **Insert**            | Insertar después del cursor (append).                      |
| `A`                  | **Insert**            | Insertar al final de la línea.                             |
| `o`                  | **Insert**            | Abrir una nueva línea debajo del cursor.                   |
| `O`                  | **Insert**            | Abrir una nueva línea encima del cursor.                   |
| `v`                  | **Visual**            | Selección por carácter.                                    |
| `V`                  | **Visual Line**       | Selección por línea completa.                              |
| `Ctrl + v`           | **Visual Block**      | Selección de bloque rectangular/vertical.                  |
| `:`                  | **Command (Cmdline)** | Abrir línea de comandos.                                   |
| `R`                  | **Replace**           | Sobrescribir caracteres existentes.                        |

---

## 🧭 2. Modo Normal: Movimiento y Navegación

### Movimientos Básicos
* `h`: Mover a la izquierda
* `j`: Mover hacia abajo
* `k`: Mover hacia arriba
* `l`: Mover a la derecha

### Movimiento por Palabras y Párrafos
* `w`: Avanzar al inicio de la siguiente palabra.
* `W`: Avanzar a la siguiente palabra (ignorando signos de puntuación).
* `b`: Retroceder al inicio de la palabra anterior.
* `B`: Retroceder a la palabra anterior (ignorando signos de puntuación).
* `e`: Avanzar al final de la palabra actual.
* `E`: Avanzar al final de la palabra (ignorando signos de puntuación).
* `{`: Saltar al párrafo anterior (bloque de líneas en blanco).
* `}`: Saltar al párrafo siguiente.

### Movimiento dentro de la Línea
* `0`: Ir al inicio absoluto de la línea (columna 0).
* `^`: Ir al primer carácter no vacío de la línea.
* `$`: Ir al final de la línea.
* `f{char}`: Saltar hacia adelante hasta el carácter `{char}`.
* `F{char}`: Saltar hacia atrás hasta el carácter `{char}`.
* `t{char}`: Saltar hasta justo antes del carácter `{char}`.
* `;`: Repetir el último salto `f`/`F`/`t`.
* `,`: Repetir el último salto `f`/`F`/`t` en dirección opuesta.

### Saltos Verticales y Archivo Completo
* `gg`: Ir a la primera línea del archivo.
* `G`: Ir a la última línea del archivo.
* `:{número}` o `{número}G`: Saltar a la línea específica `{número}`.
* `H`: Mover cursor a la parte superior de la pantalla (*High*).
* `M`: Mover cursor al centro de la pantalla (*Middle*).
* `L`: Mover cursor a la parte inferior de la pantalla (*Low*).
* `Ctrl + u`: Desplazar media pantalla hacia arriba.
* `Ctrl + d`: Desplazar media pantalla hacia abajo.
* `Ctrl + b`: Desplazar pantalla completa hacia arriba (*Page Up*).
* `Ctrl + f`: Desplazar pantalla completa hacia abajo (*Page Down*).

---

## ✂️ 3. Modo Normal: Edición, Copia y Borrado

### Operaciones Fundamentales
* `u`: Deshacer (*Undo*).
* `Ctrl + r`: Rehacer (*Redo*).
* `.`: Repetir la última acción de edición.
* `x`: Borrar el carácter bajo el cursor.
* `r{char}`: Reemplazar el carácter bajo el cursor por `{char}` sin entrar a Insert.
* `~`: Alternar entre mayúscula/minúscula del carácter bajo el cursor.

### Yank (Copiar), Delete (Cortar) y Paste (Pegar)
* `yy`: Copiar la línea completa.
* `y{motion}`: Copiar según el movimiento (ej. `yw` copia una palabra).
* `dd`: Cortar/Borrar la línea completa.
* `d{motion}`: Cortar según el movimiento (ej. `d$` borra hasta el final).
* `D`: Borrar desde el cursor hasta el final de la línea (`d$`).
* `p`: Pegar después del cursor o en la línea inferior.
* `P`: Pegar antes del cursor o en la línea superior.

### Change (Cambiar = Borrar y entrar en Modo Insert)
* `cc` o `S`: Cambiar toda la línea actual.
* `cw`: Cambiar la palabra actual.
* `C`: Cambiar desde el cursor hasta el final de la línea.
* `ciw`: *Change Inside Word* (cambia la palabra completa donde esté el cursor).
* `ci"` / `ci'`: Cambiar todo el contenido dentro de comillas.
* `ci(` o `cib`: Cambiar todo el contenido dentro de paréntesis.
* `ci{` o `ciB`: Cambiar todo el contenido dentro de llaves.
* `di"` / `di(`: Borrar dentro de comillas/paréntesis sin entrar a Insert.

---

## 👁️ 4. Modo Visual y Selección

* `v` / `V` / `Ctrl + v`: Iniciar modo visual carácter, línea o bloque.
* `o`: Mover el cursor al otro extremo de la selección activa.
* `y`: Copiar la selección.
* `d` o `x`: Cortar/Borrar la selección.
* `c`: Reemplazar la selección (entra a modo Insert).
* `>`: Indentar la selección a la derecha.
* `<`: Des-indentar la selección a la izquierda.
* `u`: Convertir la selección a minúsculas.
* `U`: Convertir la selección a mayúsculas.

### Edición Multilínea en Visual Block (`Ctrl + v`)
1. Presionar `Ctrl + v` y seleccionar verticalmente las líneas deseadas (`j` o `k`).
2. Presionar `Shift + i` (`I`) para insertar al inicio de todas las líneas.
3. Escribir el texto deseado.
4. Presionar `<Esc>`: el texto se duplicará en todas las líneas seleccionadas.

---

## ⌨️ 5. Modo Insert: Atajos Útiles

* `Ctrl + h`: Borrar carácter anterior (*Backspace*).
* `Ctrl + w`: Borrar palabra anterior.
* `Ctrl + u`: Borrar toda la línea escrita hasta el cursor.
* `Ctrl + t`: Indentar la línea actual.
* `Ctrl + d`: Des-indentar la línea actual.
* `Ctrl + n` / `Ctrl + p`: Autocompletado local (siguiente/anterior coincidencia).
* `Ctrl + o`: Ejecutar un único comando de Modo Normal sin salir del Modo Insert.

---

## 💬 6. Modo Comando / Ex (`:`)

### Gestión de Archivos y Salida
* `:w`: Guardar archivo.
* `:w {nombre}`: Guardar como `{nombre}`.
* `:q`: Salir de la ventana actual.
* `:q!`: Forzar salida descartando cambios sin guardar.
* `:wq` o `:x` o `ZZ`: Guardar cambios y salir.
* `:e {ruta}`: Abrir o crear un nuevo archivo en el búfer actual.

### Búsqueda y Reemplazo
* `/{patron}`: Buscar patrón hacia adelante.
* `?{patron}`: Buscar patrón hacia atrás.
* `n`: Siguiente coincidencia.
* `N`: Coincidencia anterior.
* `:noh`: Limpiar el resaltado visual de la búsqueda activa (*No Highlight*).
* `:%s/viejo/nuevo/g`: Reemplazar todas las apariciones de "viejo" por "nuevo" en el archivo.
* `:%s/viejo/nuevo/gc`: Reemplazar todas las apariciones pidiendo confirmación interactiva.

---

## 🪟 7. Ventanas Divididas (Splits), Tabs y Buffers

### Splits (Ventanas)
* `:split` o `:sp`: Dividir ventana horizontalmente (`Ctrl + w s`).
* `:vsplit` o `:vsp`: Dividir ventana verticalmente (`Ctrl + w v`).
* `Ctrl + w h/j/k/l`: Mover foco entre ventanas divididas (izquierda/abajo/arriba/derecha).
* `Ctrl + w c`: Cerrar la ventana activa.
* `Ctrl + w =`: Igualar el tamaño de todas las ventanas abiertas.

### Buffers y Tabs
* `:ls` o `:buffers`: Listar todos los búferes cargados en memoria.
* `:bnext` o `:bn`: Ir al siguiente búfer.
* `:bprev` o `:bp`: Ir al búfer anterior.
* `:bd`: Descargar/Cerrar el búfer actual (*Buffer Delete*).
* `:tabnew`: Crear una nueva pestaña.
* `:tabnext` / `gt`: Ir a la siguiente pestaña.
* `:tabprev` / `gT`: Ir a la pestaña anterior.

---

## 🖥️ 8. Modo Terminal Integrado

* `:terminal` o `:term`: Abrir una terminal integrada dentro de Neovim.
* `Ctrl + \ Ctrl + n`: Salir del modo terminal e interactuar con el búfer como texto normal.