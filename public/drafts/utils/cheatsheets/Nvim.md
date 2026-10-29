# Neovim Cheatsheet — Básico a Avanzado

## 1. Transición entre modos

Volver al modo Normal desde cualquier modo:

```text
<Esc>
Ctrl + [
```

Entrar al modo Insert:

```text
i    insertar antes del cursor
I    insertar al inicio de la línea (primer carácter no vacío)
a    insertar después del cursor (append)
A    insertar al final de la línea
o    abrir una nueva línea debajo del cursor
O    abrir una nueva línea encima del cursor
```

Entrar al modo Visual:

```text
v         selección por carácter
V         selección por línea completa
Ctrl + v  selección de bloque rectangular/vertical
```

Otros modos:

```text
:    Command (Cmdline): abrir línea de comandos
R    Replace: sobrescribir caracteres existentes
```

## 2. Movimiento y navegación

### Movimientos básicos

```text
h    mover a la izquierda
j    mover hacia abajo
k    mover hacia arriba
l    mover a la derecha
```

### Movimiento por palabras y párrafos

```text
w    avanzar al inicio de la siguiente palabra
W    avanzar a la siguiente palabra (ignorando signos de puntuación)
b    retroceder al inicio de la palabra anterior
B    retroceder a la palabra anterior (ignorando signos de puntuación)
e    avanzar al final de la palabra actual
E    avanzar al final de la palabra (ignorando signos de puntuación)
{    saltar al párrafo anterior (bloque de líneas en blanco)
}    saltar al párrafo siguiente
```

### Movimiento dentro de la línea

```text
0         ir al inicio absoluto de la línea (columna 0)
^         ir al primer carácter no vacío de la línea
$         ir al final de la línea
f{char}   saltar hacia adelante hasta el carácter {char}
F{char}   saltar hacia atrás hasta el carácter {char}
t{char}   saltar hasta justo antes del carácter {char}
;         repetir el último salto f/F/t
,         repetir el último salto f/F/t en dirección opuesta
```

### Saltos verticales y archivo completo

```text
gg          ir a la primera línea del archivo
G           ir a la última línea del archivo
Ctrl + u    desplazar media pantalla hacia arriba
Ctrl + d    desplazar media pantalla hacia abajo
Ctrl + b    desplazar pantalla completa hacia arriba (Page Up)
Ctrl + f    desplazar pantalla completa hacia abajo (Page Down)
```

Saltar a una línea específica:

```text
:{número}
{número}G
```

Mover el cursor según la posición en pantalla:

```text
H    parte superior de la pantalla (High)
M    centro de la pantalla (Middle)
L    parte inferior de la pantalla (Low)
```

## 3. Edición, copia y borrado

### Operaciones fundamentales

```text
u          deshacer (Undo)
Ctrl + r   rehacer (Redo)
.          repetir la última acción de edición
x          borrar el carácter bajo el cursor
r{char}    reemplazar el carácter bajo el cursor por {char} sin entrar a Insert
~          alternar entre mayúscula/minúscula del carácter bajo el cursor
```

### Yank (copiar), delete (cortar) y paste (pegar)

```text
yy          copiar la línea completa
y{motion}   copiar según el movimiento
dd          cortar/borrar la línea completa
d{motion}   cortar según el movimiento
D           borrar desde el cursor hasta el final de la línea (d$)
p           pegar después del cursor o en la línea inferior
P           pegar antes del cursor o en la línea superior
```

Ejemplos de movimientos combinados:

```text
yw    copia una palabra
d$    borra hasta el final de la línea
```

### Change (borrar y entrar en modo Insert)

```text
cc o S       cambiar toda la línea actual
cw           cambiar la palabra actual
C            cambiar desde el cursor hasta el final de la línea
ciw          Change Inside Word: cambia la palabra donde esté el cursor
ci" / ci'    cambiar todo el contenido dentro de comillas
ci( o cib    cambiar todo el contenido dentro de paréntesis
ci{ o ciB    cambiar todo el contenido dentro de llaves
di" / di(    borrar dentro de comillas/paréntesis sin entrar a Insert
```

## 4. Modo Visual y selección

Iniciar modo visual carácter, línea o bloque:

```text
v
V
Ctrl + v
```

Operaciones sobre la selección:

```text
o    mover el cursor al otro extremo de la selección activa
y    copiar la selección
d    cortar/borrar la selección
x    cortar/borrar la selección
c    reemplazar la selección (entra a modo Insert)
>    indentar la selección a la derecha
<    des-indentar la selección a la izquierda
u    convertir la selección a minúsculas
U    convertir la selección a mayúsculas
```

### Edición multilínea en Visual Block

Presionar `Ctrl + v` y seleccionar verticalmente las líneas deseadas:

```text
Ctrl + v
j o k
```

Insertar al inicio de todas las líneas:

```text
Shift + i
```

Escribir el texto deseado y salir:

```text
<Esc>
```

El texto se duplicará en todas las líneas seleccionadas.

## 5. Modo Insert

```text
Ctrl + h              borrar carácter anterior (Backspace)
Ctrl + w              borrar palabra anterior
Ctrl + u              borrar toda la línea escrita hasta el cursor
Ctrl + t              indentar la línea actual
Ctrl + d              des-indentar la línea actual
Ctrl + n / Ctrl + p   autocompletado local (siguiente/anterior coincidencia)
Ctrl + o              ejecutar un único comando de modo Normal sin salir de Insert
```

## 6. Modo Comando / Ex

### Gestión de archivos y salida

Guardar archivo:

```vim
:w
```

Guardar como otro nombre:

```vim
:w {nombre}
```

Salir de la ventana actual:

```vim
:q
```

Forzar salida descartando cambios sin guardar:

```vim
:q!
```

Guardar cambios y salir:

```vim
:wq
:x
ZZ
```

Abrir o crear un nuevo archivo en el búfer actual:

```vim
:e {ruta}
```

### Búsqueda y reemplazo

Buscar patrón hacia adelante:

```vim
/{patron}
```

Buscar patrón hacia atrás:

```vim
?{patron}
```

Navegar entre coincidencias:

```text
n    siguiente coincidencia
N    coincidencia anterior
```

Limpiar el resaltado visual de la búsqueda activa:

```vim
:noh
```

Reemplazar todas las apariciones en el archivo:

```vim
:%s/viejo/nuevo/g
```

Reemplazar pidiendo confirmación interactiva:

```vim
:%s/viejo/nuevo/gc
```

## 7. Splits, tabs y buffers

### Splits (ventanas)

Dividir ventana horizontalmente:

```vim
:split
:sp
```

Equivalente:

```text
Ctrl + w s
```

Dividir ventana verticalmente:

```vim
:vsplit
:vsp
```

Equivalente:

```text
Ctrl + w v
```

Gestión de ventanas:

```text
Ctrl + w h/j/k/l   mover foco entre ventanas (izquierda/abajo/arriba/derecha)
Ctrl + w c         cerrar la ventana activa
Ctrl + w =         igualar el tamaño de todas las ventanas abiertas
```

### Buffers

Listar todos los búferes cargados en memoria:

```vim
:ls
:buffers
```

Ir al siguiente búfer:

```vim
:bnext
:bn
```

Ir al búfer anterior:

```vim
:bprev
:bp
```

Descargar/cerrar el búfer actual:

```vim
:bd
```

### Tabs

Crear una nueva pestaña:

```vim
:tabnew
```

Ir a la siguiente pestaña:

```vim
:tabnext
```

Atajo:

```text
gt
```

Ir a la pestaña anterior:

```vim
:tabprev
```

Atajo:

```text
gT
```

## 8. Terminal integrado

Abrir una terminal integrada dentro de Neovim:

```vim
:terminal
:term
```

Salir del modo terminal e interactuar con el búfer como texto normal:

```text
Ctrl + \ Ctrl + n
```
