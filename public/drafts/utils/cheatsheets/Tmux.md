# tmux Cheatsheet — Básico a Avanzado

> **Prefijo por defecto:** `Ctrl+b`  
> En este cheatsheet, `Prefix` significa: presiona `Ctrl+b`, suelta las teclas y luego presiona el siguiente comando.

## 1. Conceptos fundamentales

La jerarquía de tmux es:

```text
tmux Server
│
├── Session
│   ├── Window
│   │   ├── Pane
│   │   └── Pane
│   └── Window
│
└── Session
    └── Window
        └── Pane
```

| Concepto | Descripción |
|---|---|
| **Server** | Proceso principal de tmux |
| **Session** | Entorno de trabajo persistente |
| **Window** | Similar a una pestaña |
| **Pane** | División de una ventana |
| **Client** | Terminal conectada a una sesión |

## 2. Iniciar tmux

```bash
tmux
tmux new -s desarrollo
tmux new-session -s desarrollo
tmux new-session -d -s desarrollo
tmux new-session -s desarrollo -n editor
tmux new-session -s desarrollo 'nvim .'
```

## 3. Prefijo

```text
Ctrl+b
```

Ejemplos:

```text
Prefix c
Prefix ?
```

## 4. Salir vs desconectarse

Desconectarse sin cerrar:

```text
Prefix d
```

También:

```bash
tmux detach
```

Cerrar el pane actual:

```bash
exit
```

## 5. Listar sesiones

```bash
tmux ls
tmux list-sessions
```

## 6. Conectarse a una sesión

```bash
tmux attach
tmux a
tmux attach -t desarrollo
tmux a -t desarrollo
```

## 7. Crear o conectarse automáticamente

```bash
tmux new -As desarrollo
```

Si la sesión existe se conecta; si no existe, la crea.

## 8. Cambiar entre sesiones

```text
Prefix s
Prefix (
Prefix )
```

Desde shell:

```bash
tmux switch-client -t desarrollo
```

## 9. Renombrar sesión

```text
Prefix $
```

Desde shell:

```bash
tmux rename-session -t viejo nuevo
```

## 10. Eliminar sesiones

```bash
tmux kill-session -t desarrollo
tmux kill-session -a -t desarrollo
tmux kill-server
```

> `kill-server` termina todas las sesiones, ventanas y panes del servidor tmux.

## 11. Windows

```text
Prefix c     crear window
Prefix w     listar/seleccionar windows
Prefix n     siguiente
Prefix p     anterior
Prefix l     última utilizada
Prefix 0-9   ir por número
```

## 12. Renombrar Window

```text
Prefix ,
```

```bash
tmux rename-window -t desarrollo:1 backend
```

## 13. Crear Window desde CLI

```bash
tmux new-window
tmux new-window -n backend
tmux new-window -t desarrollo -n backend
tmux new-window -t desarrollo -n logs 'docker compose logs -f'
```

## 14. Cerrar Window

```text
Prefix &
```

```bash
tmux kill-window -t desarrollo:2
```

## 15. Panes

Split horizontal:

```text
Prefix "
```

Split vertical:

```text
Prefix %
```

## 16. Crear panes desde CLI

```bash
tmux split-window -h
tmux split-window -v
tmux split-window -h 'htop'
tmux split-window -t desarrollo:backend -h
```

## 17. Navegar entre panes

```text
Prefix ↑
Prefix ↓
Prefix ←
Prefix →
Prefix ;
Prefix q
```

## 18. Cambiar tamaño de panes

```text
Prefix Ctrl+↑
Prefix Ctrl+↓
Prefix Ctrl+←
Prefix Ctrl+→
```

```bash
tmux resize-pane -L 5
tmux resize-pane -R 5
tmux resize-pane -U 5
tmux resize-pane -D 5
```

## 19. Maximizar un pane

```text
Prefix z
```

Presiona de nuevo `Prefix z` para restaurarlo.

## 20. Cerrar Pane

```text
Prefix x
```

```bash
tmux kill-pane
tmux kill-pane -t desarrollo:1.2
```

## 21. Layouts

```text
Prefix Space
```

Layouts:

```text
even-horizontal
even-vertical
main-horizontal
main-vertical
tiled
```

```bash
tmux select-layout tiled
```

## 22. Rotar panes

```text
Prefix Ctrl+o
Prefix {
Prefix }
```

## 23. Convertir pane en Window

```text
Prefix !
```

```bash
tmux break-pane
```

## 24. Mover panes entre windows

```bash
tmux join-pane -s desarrollo:1.0 -t desarrollo:2.0
tmux join-pane -h -s desarrollo:1.0 -t desarrollo:2.0
tmux join-pane -v -s desarrollo:1.0 -t desarrollo:2.0
```

## 25. Targets

Formato:

```text
session:window.pane
```

Ejemplo:

```text
desarrollo:backend.1
```

## 26. Listar panes

```bash
tmux list-panes
tmux list-panes -a
tmux list-panes -a -F '#S:#I.#P #{pane_current_command}'
```

## 27. Listar windows

```bash
tmux list-windows
tmux list-windows -t desarrollo
tmux list-windows -a
```

## 28. Command Mode

```text
Prefix :
```

Ejemplo:

```text
new-window -n backend
```

## 29. Copy Mode

```text
Prefix [
```

Salir:

```text
q
```

## 30. Copy Mode con estilo Vim

En `~/.tmux.conf`:

```tmux
setw -g mode-keys vi
```

Navegación:

```text
h j k l
Ctrl+u
Ctrl+d
g
G
```

## 31. Buscar en Copy Mode

```text
/   buscar hacia adelante
?   buscar hacia atrás
n   siguiente coincidencia
N   anterior
```

## 32. Copiar texto

```text
Prefix [
Space
Enter
Prefix ]
```

## 33. Buffers

```bash
tmux list-buffers
tmux show-buffer
tmux save-buffer archivo.txt
tmux load-buffer archivo.txt
tmux paste-buffer
tmux delete-buffer
```

## 34. Scroll

```text
Prefix [
↑ ↓
PageUp
PageDown
Ctrl+u
Ctrl+d
```

## 35. Configuración

Archivo principal:

```text
~/.tmux.conf
```

Recargar:

```bash
tmux source-file ~/.tmux.conf
```

## 36. Recargar configuración con atajo

```tmux
bind r source-file ~/.tmux.conf \; display-message "tmux.conf recargado"
```

## 37. Cambiar prefijo a Ctrl+a

```tmux
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix
```

## 38. Numeración desde 1

```tmux
set -g base-index 1
setw -g pane-base-index 1
```

## 39. Renumerar windows automáticamente

```tmux
set -g renumber-windows on
```

## 40. Mouse

```tmux
set -g mouse on
```

## 41. Historial

```tmux
set -g history-limit 100000
```

## 42. Escape time

```tmux
set -sg escape-time 10
```

o:

```tmux
set -sg escape-time 0
```

## 43. True Color

```tmux
set -g default-terminal "tmux-256color"
set -as terminal-features ",xterm-256color:RGB"
```

## 44. Variables de formato

```text
#S   session name
#I   window index
#W   window name
#P   pane index
#H   hostname
```

```bash
tmux display-message '#S:#I.#P'
```

## 45. Formatos avanzados

```text
#{session_name}
#{window_index}
#{window_name}
#{pane_index}
#{pane_current_command}
#{pane_current_path}
#{client_width}
#{client_height}
```

## 46. Status bar

```tmux
set -g status-position bottom
set -g status-left '#S'
set -g status-right '#H %H:%M'
set -g status off
set -g status on
```

## 47. Ejecutar comandos en panes

```bash
tmux send-keys -t desarrollo:backend.0 'npm run dev' Enter
```

## 48. Enviar teclas

```bash
tmux send-keys -t desarrollo:1.0 C-c
tmux send-keys -t desarrollo:1.0 'clear' Enter
```

## 49. Capturar contenido de un pane

```bash
tmux capture-pane -p
tmux capture-pane -p > salida.txt
tmux capture-pane -t desarrollo:backend.0 -p
tmux capture-pane -S - -p
```

## 50. Crear workspace automáticamente

```bash
tmux new-session -d -s proyecto -n editor
tmux send-keys -t proyecto:editor 'nvim .' Enter

tmux new-window -t proyecto -n server
tmux send-keys -t proyecto:server 'npm run dev' Enter

tmux new-window -t proyecto -n docker
tmux send-keys -t proyecto:docker 'docker compose up' Enter

tmux attach -t proyecto
```

## 51. Crear panes automáticamente

```bash
tmux new-session -d -s proyecto
tmux split-window -h -t proyecto
tmux split-window -v -t proyecto
tmux select-layout -t proyecto tiled
tmux attach -t proyecto
```

## 52. Ejecutar comandos sin entrar a tmux

```bash
tmux new-session -d -s server
tmux send-keys -t server 'npm run dev' Enter
tmux capture-pane -t server -p
```

## 53. Variables de entorno

```bash
tmux set-environment -g NODE_ENV development
tmux show-environment
tmux show-environment NODE_ENV
tmux set-environment -gu NODE_ENV
```

## 54. Hooks

```tmux
set-hook -g after-new-window 'display-message "Nueva window creada"'
```

## 55. Comandos condicionales

```tmux
if-shell 'command -v nvim'   'display-message "Neovim instalado"'   'display-message "Neovim no encontrado"'
```

## 56. Bindings personalizados

```tmux
bind-key v split-window -h
bind-key s split-window -v
```

## 57. Splits manteniendo directorio actual

```tmux
bind '"' split-window -v -c "#{pane_current_path}"
bind '%' split-window -h -c "#{pane_current_path}"
```

## 58. Crear Window manteniendo directorio

```tmux
bind c new-window -c "#{pane_current_path}"
```

## 59. Navegación estilo Vim

```tmux
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

## 60. Resize estilo Vim

```tmux
bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5
```

## 61. Sincronizar panes

```bash
tmux setw synchronize-panes on
tmux setw synchronize-panes off
```

> Úsalo con precaución: los comandos se envían a todos los panes de la window.

## 62. Mostrar mensajes

```bash
tmux display-message "Deploy completado"
tmux display-message '#{session_name}'
```

## 63. Wait-for

```bash
tmux wait-for nombre
tmux wait-for -S nombre
```

## 64. Sockets

```bash
tmux -L desarrollo new-session
tmux -L desarrollo ls
```

## 65. Socket personalizado

```bash
tmux -S /tmp/mi-tmux.sock new-session
tmux -S /tmp/mi-tmux.sock attach
```

## 66. SSH + tmux

```bash
ssh usuario@servidor
tmux new -s trabajo
```

Reconectar:

```bash
ssh usuario@servidor
tmux attach -t trabajo
```

## 67. SSH + auto attach

```bash
ssh -t usuario@servidor 'tmux new -As trabajo'
```

## 68. Script de desarrollo

```bash
#!/usr/bin/env bash

SESSION="proyecto"

tmux new-session -d -s "$SESSION" -n editor
tmux send-keys -t "$SESSION:editor" 'nvim .' Enter

tmux new-window -t "$SESSION" -n server
tmux send-keys -t "$SESSION:server" 'npm run dev' Enter

tmux new-window -t "$SESSION" -n docker
tmux send-keys -t "$SESSION:docker" 'docker compose up' Enter

tmux select-window -t "$SESSION:editor"
tmux attach -t "$SESSION"
```

## 69. Evitar duplicar sesiones en scripts

```bash
if ! tmux has-session -t proyecto 2>/dev/null; then
    tmux new-session -d -s proyecto
fi

tmux attach -t proyecto
```

## 70. Targets útiles

```text
session
session:window
session:window.pane
```

Ejemplos:

```bash
tmux select-window -t dev:backend
tmux select-pane -t dev:backend.1
tmux kill-pane -t dev:backend.1
```

## 71. IDs internos

```text
$1    session
@2    window
%3    pane
```

```bash
tmux display-message '#{session_id}'
tmux display-message '#{window_id}'
tmux display-message '#{pane_id}'
```

## 72. Inspeccionar opciones

```bash
tmux show-options -g
tmux show-window-options -g
tmux show-option -g history-limit
```

## 73. Configurar opciones desde CLI

```bash
tmux set-option -g mouse on
tmux set -g mouse on
tmux set-window-option -g mode-keys vi
tmux setw -g mode-keys vi
```

## 74. Plugins — TPM

```tmux
set -g @plugin 'tmux-plugins/tpm'
run '~/.tmux/plugins/tpm/tpm'
```

## 75. Plugins populares

```text
tmux-plugins/tpm
tmux-plugins/tmux-sensible
tmux-plugins/tmux-resurrect
tmux-plugins/tmux-continuum
```

## 76. Configuración práctica para desarrollo

```tmux
set -g mouse on
set -g base-index 1
setw -g pane-base-index 1
set -g renumber-windows on
set -g history-limit 100000
setw -g mode-keys vi
set -sg escape-time 10
set -g default-terminal "tmux-256color"

bind c new-window -c "#{pane_current_path}"
bind '"' split-window -v -c "#{pane_current_path}"
bind '%' split-window -h -c "#{pane_current_path}"

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5

bind r source-file ~/.tmux.conf \; display-message "tmux.conf recargado"
```

## 77. Comandos de diagnóstico

```bash
tmux -V
tmux ls
tmux list-clients
tmux show-options -g
tmux list-keys
```

## 78. Listar bindings

```bash
tmux list-keys
tmux list-keys -T prefix
tmux list-keys | grep split
```

Dentro de tmux:

```text
Prefix ?
```

## 79. Información útil para scripting

```bash
tmux display-message -p '#S'
tmux display-message -p '#I'
tmux display-message -p '#P'
tmux display-message -p '#{pane_current_path}'
tmux display-message -p '#{pane_current_command}'
```

## 80. Comandos que conviene memorizar

| Acción | Atajo |
|---|---|
| Ayuda | `Prefix ?` |
| Crear window | `Prefix c` |
| Siguiente window | `Prefix n` |
| Window anterior | `Prefix p` |
| Seleccionar window | `Prefix w` |
| Renombrar window | `Prefix ,` |
| Split vertical | `Prefix %` |
| Split horizontal | `Prefix "` |
| Navegar panes | `Prefix + flechas` |
| Mostrar panes | `Prefix q` |
| Maximizar pane | `Prefix z` |
| Cerrar pane | `Prefix x` |
| Copy Mode | `Prefix [` |
| Pegar buffer | `Prefix ]` |
| Detach | `Prefix d` |
| Sesiones | `Prefix s` |
| Command Mode | `Prefix :` |

## 81. Comandos CLI que conviene memorizar

```bash
tmux
tmux new -s dev
tmux new -As dev
tmux ls
tmux a
tmux a -t dev
tmux kill-session -t dev
tmux new-window
tmux split-window -h
tmux split-window -v
tmux list-panes
tmux send-keys -t dev:1.0 'npm run dev' Enter
tmux capture-pane -t dev:1.0 -p
tmux source-file ~/.tmux.conf
```

## 82. Mapa mental rápido

```text
                   tmux
                     │
             ┌───────┴───────┐
             │               │
          Session A       Session B
             │
       ┌─────┴─────┐
       │           │
    Window 1    Window 2
       │
   ┌───┴───┐
   │       │
 Pane 1  Pane 2
```

```text
Session = Workspace
Window  = Tab
Pane    = Split
```

## 83. Flujo típico de desarrollo

```bash
tmux new -s proyecto
```

Crear y renombrar windows:

```text
Prefix ,
Prefix c
Prefix ,
```

Ejecutar aplicaciones:

```bash
npm run dev
docker compose up
```

Desconectarte:

```text
Prefix d
```

Regresar:

```bash
tmux a -t proyecto
```

## 84. Flujo típico en servidor

```bash
ssh user@server
tmux new -As server
docker compose logs -f
```

Desconectarse:

```text
Prefix d
```

Reconectar:

```bash
ssh user@server
tmux a -t server
```

## 85. Regla rápida de supervivencia

```text
Ctrl+b c     crear window
Ctrl+b %     dividir verticalmente
Ctrl+b "     dividir horizontalmente
Ctrl+b ↑↓←→  cambiar pane
Ctrl+b z     maximizar pane
Ctrl+b d     desconectarse
Ctrl+b s     seleccionar sesión
Ctrl+b w     seleccionar window
Ctrl+b [     scroll/copy mode
Ctrl+b ?     ayuda
```

Desde shell:

```bash
tmux new -s dev
tmux new -As dev
tmux ls
tmux a -t dev
tmux kill-session -t dev
```
