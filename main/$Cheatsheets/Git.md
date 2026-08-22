# Git Cheatsheet — Básico a Avanzado

## 1. Configuración inicial

```bash
# Configurar nombre
git config --global user.name "Tu Nombre"

# Configurar correo
git config --global user.email "tu@email.com"

# Ver configuración
git config --list

# Ver una propiedad específica
git config user.name
git config user.email

# Definir editor por defecto
git config --global core.editor "code --wait"

# Definir rama principal por defecto
git config --global init.defaultBranch main
```

## 2. Crear o clonar repositorios

### Inicializar repositorio

```bash
git init
```

Inicializar indicando rama principal:

```bash
git init -b main
```

### Clonar repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

Clonar con otro nombre:

```bash
git clone https://github.com/usuario/repositorio.git proyecto
```

Clonar una rama específica:

```bash
git clone -b develop https://github.com/usuario/repositorio.git
```

Clonado superficial:

```bash
git clone --depth 1 https://github.com/usuario/repositorio.git
```

## 3. Estado del repositorio

```bash
git status
```

Versión resumida:

```bash
git status -s
```

Ejemplo:

```text
 M archivo.txt
A  nuevo.txt
?? temporal.txt
```

Donde:

```text
M   Modified
A   Added
D   Deleted
R   Renamed
??  Untracked
```

## 4. Staging Area

Agregar archivo:

```bash
git add archivo.txt
```

Agregar varios archivos:

```bash
git add archivo1.txt archivo2.txt
```

Agregar todos los cambios:

```bash
git add .
```

Agregar cambios del repositorio completo:

```bash
git add -A
```

Agregar únicamente archivos ya rastreados:

```bash
git add -u
```

Agregar cambios interactivamente:

```bash
git add -p
```

Quitar del staging sin eliminar el archivo:

```bash
git restore --staged archivo.txt
```

Alternativa antigua:

```bash
git reset HEAD archivo.txt
```

## 5. Commits

Crear commit:

```bash
git commit -m "feat: agregar autenticación"
```

Agregar cambios rastreados y crear commit:

```bash
git commit -am "fix: corregir validación"
```

Modificar el último commit:

```bash
git commit --amend
```

Modificar solamente el mensaje:

```bash
git commit --amend -m "nuevo mensaje"
```

Agregar archivos olvidados al último commit:

```bash
git add archivo.txt
git commit --amend --no-edit
```

## 6. Ver historial

```bash
git log
```

Historial compacto:

```bash
git log --oneline
```

Con gráfico:

```bash
git log --oneline --graph --decorate --all
```

Mostrar últimos 5 commits:

```bash
git log -5
```

Historial de un archivo:

```bash
git log -- archivo.txt
```

Mostrar cambios incluidos:

```bash
git log -p
```

Buscar por autor:

```bash
git log --author="Juan"
```

Buscar commits por texto:

```bash
git log --grep="authentication"
```

## 7. Inspeccionar commits

Mostrar información de un commit:

```bash
git show <commit>
```

Ejemplo:

```bash
git show a3f5c91
```

Mostrar último commit:

```bash
git show HEAD
```

Commit anterior:

```bash
git show HEAD~1
```

Dos commits atrás:

```bash
git show HEAD~2
```

## 8. Diferencias

Cambios no agregados al staging:

```bash
git diff
```

Cambios que están en staging:

```bash
git diff --staged
```

También:

```bash
git diff --cached
```

Comparar dos commits:

```bash
git diff commit1 commit2
```

Comparar ramas:

```bash
git diff main develop
```

Comparar archivo específico:

```bash
git diff -- archivo.txt
```

## 9. Ramas

Listar ramas locales:

```bash
git branch
```

Listar locales y remotas:

```bash
git branch -a
```

Crear rama:

```bash
git branch feature/login
```

Cambiar de rama:

```bash
git switch feature/login
```

Comando tradicional:

```bash
git checkout feature/login
```

Crear y cambiar:

```bash
git switch -c feature/login
```

Equivalente:

```bash
git checkout -b feature/login
```

Eliminar rama:

```bash
git branch -d feature/login
```

Forzar eliminación:

```bash
git branch -D feature/login
```

Renombrar rama actual:

```bash
git branch -m nuevo-nombre
```

## 10. Merge

Cambiar a rama destino:

```bash
git switch main
```

Fusionar:

```bash
git merge feature/login
```

Merge creando explícitamente commit:

```bash
git merge --no-ff feature/login
```

Cancelar merge conflictivo:

```bash
git merge --abort
```

## 11. Resolver conflictos

Git puede insertar:

```text
<<<<<<< HEAD
Código de main
=======
Código de feature
>>>>>>> feature/login
```

Después de corregir manualmente:

```bash
git add archivo-conflictivo.txt
git commit
```

Ver archivos en conflicto:

```bash
git status
```

## 12. Rebase

Rebase simple:

```bash
git switch feature/login
git rebase main
```

En caso de conflicto:

```bash
git add archivo.txt
git rebase --continue
```

Cancelar:

```bash
git rebase --abort
```

Omitir commit conflictivo:

```bash
git rebase --skip
```

## 13. Rebase interactivo

Editar últimos 5 commits:

```bash
git rebase -i HEAD~5
```

Opciones comunes:

```text
pick    mantener commit
reword  cambiar mensaje
edit    modificar commit
squash  combinar con commit anterior
fixup   combinar descartando mensaje
drop    eliminar commit
```

Ejemplo:

```text
pick   abc123 feat: login
squash def456 fix login
fixup  ghi789 typo
```

## 14. Remotos

Ver remotos:

```bash
git remote
```

Ver detalles:

```bash
git remote -v
```

Agregar remoto:

```bash
git remote add origin https://github.com/user/repo.git
```

Cambiar URL:

```bash
git remote set-url origin https://github.com/user/nuevo.git
```

Eliminar remoto:

```bash
git remote remove origin
```

## 15. Push

Subir rama:

```bash
git push origin main
```

Primera publicación configurando upstream:

```bash
git push -u origin main
```

Luego basta:

```bash
git push
```

Subir tags:

```bash
git push --tags
```

Eliminar rama remota:

```bash
git push origin --delete feature/login
```

## 16. Fetch

Descargar información del remoto sin modificar tu rama:

```bash
git fetch
```

Remoto específico:

```bash
git fetch origin
```

Eliminar referencias remotas obsoletas:

```bash
git fetch --prune
```

Todos los remotos:

```bash
git fetch --all
```

## 17. Pull

Descargar y fusionar:

```bash
git pull
```

Equivale aproximadamente a:

```bash
git fetch
git merge
```

Pull utilizando rebase:

```bash
git pull --rebase
```

Configurar rebase por defecto:

```bash
git config --global pull.rebase true
```

## 18. Restaurar archivos

Descartar cambios locales:

```bash
git restore archivo.txt
```

Restaurar todos:

```bash
git restore .
```

Restaurar archivo desde otro commit:

```bash
git restore --source=<commit> archivo.txt
```

Ejemplo:

```bash
git restore --source=HEAD~2 config.json
```

## 19. Reset

### Soft

Mueve HEAD pero conserva staging:

```bash
git reset --soft HEAD~1
```

### Mixed

Mueve HEAD y limpia staging, conserva archivos:

```bash
git reset HEAD~1
```

Equivalente:

```bash
git reset --mixed HEAD~1
```

### Hard

Elimina commit y cambios locales:

```bash
git reset --hard HEAD~1
```

> `--hard` puede provocar pérdida permanente de cambios no guardados.

## 20. Revert

Crear un nuevo commit que revierte otro:

```bash
git revert <commit>
```

Ejemplo:

```bash
git revert a31bc42
```

Es preferible a `reset` cuando el commit ya fue publicado.

## 21. Checkout de commits

Moverse temporalmente a un commit:

```bash
git switch --detach <commit>
```

Ejemplo:

```bash
git switch --detach a31bc42
```

Volver:

```bash
git switch main
```

## 22. Stash

Guardar cambios temporalmente:

```bash
git stash
```

Con descripción:

```bash
git stash push -m "WIP login"
```

Incluir archivos no rastreados:

```bash
git stash -u
```

Listar:

```bash
git stash list
```

Aplicar último stash:

```bash
git stash apply
```

Aplicar uno específico:

```bash
git stash apply stash@{2}
```

Aplicar y eliminar:

```bash
git stash pop
```

Eliminar stash:

```bash
git stash drop stash@{0}
```

Eliminar todos:

```bash
git stash clear
```

Crear rama desde stash:

```bash
git stash branch feature/test stash@{0}
```

## 23. Tags

Crear tag:

```bash
git tag v1.0.0
```

Tag anotado:

```bash
git tag -a v1.0.0 -m "Release 1.0.0"
```

Listar:

```bash
git tag
```

Ver tag:

```bash
git show v1.0.0
```

Subir tag:

```bash
git push origin v1.0.0
```

Subir todos:

```bash
git push origin --tags
```

Eliminar tag local:

```bash
git tag -d v1.0.0
```

Eliminar remoto:

```bash
git push origin --delete v1.0.0
```

## 24. Cherry-pick

Aplicar un commit de otra rama:

```bash
git cherry-pick <commit>
```

Ejemplo:

```bash
git cherry-pick 8a342fd
```

Varios commits:

```bash
git cherry-pick commit1 commit2
```

Continuar tras conflicto:

```bash
git cherry-pick --continue
```

Cancelar:

```bash
git cherry-pick --abort
```

## 25. Git Blame

Ver quién modificó cada línea:

```bash
git blame archivo.txt
```

Rango específico:

```bash
git blame -L 20,40 archivo.txt
```

## 26. Git Bisect

Permite encontrar qué commit introdujo un bug mediante búsqueda binaria.

Iniciar:

```bash
git bisect start
```

Marcar commit actual como malo:

```bash
git bisect bad
```

Indicar un commit conocido como bueno:

```bash
git bisect good <commit>
```

Durante la búsqueda:

```bash
git bisect good
```

o:

```bash
git bisect bad
```

Finalizar:

```bash
git bisect reset
```

## 27. Reflog

Mostrar movimientos de `HEAD`:

```bash
git reflog
```

Ejemplo:

```text
abc123 HEAD@{0}: reset: moving to HEAD~2
def456 HEAD@{1}: commit: feature login
```

Recuperar commit eliminado accidentalmente:

```bash
git reset --hard def456
```

`reflog` es especialmente útil después de:

```bash
git reset --hard
git rebase
git branch -D
```

## 28. Limpiar archivos no rastreados

Mostrar qué se eliminaría:

```bash
git clean -n
```

Eliminar archivos no rastreados:

```bash
git clean -f
```

Eliminar archivos y directorios:

```bash
git clean -fd
```

Incluir archivos ignorados:

```bash
git clean -fdx
```

> `git clean -fdx` es destructivo.

## 29. Git Ignore

Ejemplo `.gitignore`:

```gitignore
node_modules/
.env
dist/
build/
*.log
.DS_Store
coverage/
```

Ver por qué un archivo está ignorado:

```bash
git check-ignore -v archivo.txt
```

Si un archivo ya estaba siendo rastreado:

```bash
git rm --cached archivo.txt
```

Para directorios:

```bash
git rm -r --cached node_modules
```

## 30. Git RM

Eliminar archivo y registrarlo:

```bash
git rm archivo.txt
```

Eliminar solo del repositorio pero mantenerlo localmente:

```bash
git rm --cached archivo.txt
```

## 31. Git MV

Renombrar archivo:

```bash
git mv viejo.txt nuevo.txt
```

Mover archivo:

```bash
git mv archivo.txt carpeta/
```

## 32. Comparar ramas y commits

Commits que existen en `feature` pero no en `main`:

```bash
git log main..feature
```

Commits diferentes entre ambas ramas:

```bash
git log main...feature
```

Cambios entre ambas:

```bash
git diff main..feature
```

## 33. Encontrar ramas que contienen un commit

```bash
git branch --contains <commit>
```

También remotas:

```bash
git branch -a --contains <commit>
```

## 34. Tracking branches

Ver tracking:

```bash
git branch -vv
```

Configurar upstream:

```bash
git branch --set-upstream-to=origin/main main
```

Publicar nueva rama:

```bash
git push -u origin feature/login
```

## 35. Prune

Eliminar referencias a ramas remotas que ya no existen:

```bash
git fetch --prune
```

También:

```bash
git remote prune origin
```

## 36. Worktree

Permite tener varias ramas abiertas simultáneamente en carpetas diferentes.

Crear:

```bash
git worktree add ../proyecto-feature feature/login
```

Crear nueva rama:

```bash
git worktree add -b feature/payments ../payments main
```

Listar:

```bash
git worktree list
```

Eliminar:

```bash
git worktree remove ../payments
```

## 37. Sparse Checkout

Descargar/trabajar solo con una parte de un repositorio grande:

```bash
git sparse-checkout init --cone
```

Seleccionar directorios:

```bash
git sparse-checkout set frontend shared
```

Desactivar:

```bash
git sparse-checkout disable
```

## 38. Submodules

Agregar:

```bash
git submodule add https://github.com/user/library.git libs/library
```

Inicializar:

```bash
git submodule init
```

Actualizar:

```bash
git submodule update
```

Clonar incluyendo submodules:

```bash
git clone --recurse-submodules URL
```

Actualizar recursivamente:

```bash
git submodule update --init --recursive
```

## 39. Firmar commits

Con GPG:

```bash
git commit -S -m "feat: secure commit"
```

Configurar firma automática:

```bash
git config --global commit.gpgsign true
```

Ver firmas:

```bash
git log --show-signature
```

## 40. Alias útiles

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
```

Alias para historial:

```bash
git config --global alias.lg "log --oneline --graph --decorate --all"
```

Después:

```bash
git lg
```

## 41. Buscar contenido

Buscar texto en archivos versionados:

```bash
git grep "TODO"
```

Con número de línea:

```bash
git grep -n "TODO"
```

En un commit:

```bash
git grep "TODO" HEAD~5
```

## 42. Buscar cuándo cambió algo

Buscar commits que agregaron o eliminaron una cadena:

```bash
git log -S "nombreFuncion"
```

Con diff:

```bash
git log -S "nombreFuncion" -p
```

Buscar por expresión regular en cambios:

```bash
git log -G "regex"
```

## 43. Mostrar objetos internos

Ver tipo de objeto:

```bash
git cat-file -t <hash>
```

Mostrar contenido:

```bash
git cat-file -p <hash>
```

## 44. Mantenimiento del repositorio

Optimizar:

```bash
git gc
```

Optimización agresiva:

```bash
git gc --aggressive
```

Verificar integridad:

```bash
git fsck
```

Contar objetos:

```bash
git count-objects -v
```

## 45. Force Push

```bash
git push --force
```

Preferible:

```bash
git push --force-with-lease
```

`--force-with-lease` evita sobrescribir cambios remotos inesperados.

Especialmente útil después de:

```bash
git rebase
git commit --amend
```

sobre una rama ya publicada.

## 46. Estrategias de integración

### Merge

```bash
git switch main
git merge feature
```

Produce:

```text
A---B---C-------M
         \     /
          D---E
```

### Rebase

```bash
git switch feature
git rebase main
```

Produce:

```text
A---B---C---D'---E'
```

### Squash merge

```bash
git switch main
git merge --squash feature
git commit
```

Produce un único commit con todos los cambios de la feature.

## 47. Flujo típico para una feature

```bash
git switch main
git pull --rebase
git switch -c feature/login

# desarrollar...

git add .
git commit -m "feat(auth): add login"
git push -u origin feature/login
```

Luego se crea el Pull Request.

Después del merge:

```bash
git switch main
git pull
git branch -d feature/login
```

## 48. Actualizar una feature con main

Opción con rebase:

```bash
git fetch origin
git switch feature/login
git rebase origin/main
```

Si la rama ya estaba publicada:

```bash
git push --force-with-lease
```

Opción con merge:

```bash
git fetch origin
git switch feature/login
git merge origin/main
```

## 49. Deshacer escenarios comunes

### Modifiqué un archivo y quiero descartarlo

```bash
git restore archivo.txt
```

### Hice `git add` por error

```bash
git restore --staged archivo.txt
```

### Quiero deshacer el último commit pero conservar los cambios

```bash
git reset --soft HEAD~1
```

### Quiero quitar el último commit y sacar cambios del staging

```bash
git reset HEAD~1
```

### Quiero destruir completamente el último commit y sus cambios

```bash
git reset --hard HEAD~1
```

### El commit ya está publicado

```bash
git revert <commit>
```

### Borré un commit accidentalmente

```bash
git reflog
```

Luego:

```bash
git reset --hard <commit-recuperado>
```

## 50. Comandos avanzados de recuperación

Encontrar objetos perdidos:

```bash
git fsck --lost-found
```

Buscar commits recientes aunque ya no pertenezcan a una rama:

```bash
git reflog --all
```

Restaurar una rama borrada:

```bash
git branch feature-recuperada <commit>
```

## 51. Commit ranges

Últimos 3 commits:

```text
HEAD~3..HEAD
```

Commits en `feature` que no existen en `main`:

```text
main..feature
```

Commits exclusivos de ambas ramas:

```text
main...feature
```

Ejemplo:

```bash
git log --oneline main..feature
```

## 52. Referencias importantes

```text
HEAD
```

Commit actual.

```text
HEAD~1
```

Padre del commit actual.

```text
HEAD~3
```

Tres commits atrás.

```text
HEAD^
```

Primer padre.

```text
HEAD^2
```

Segundo padre de un merge commit.

## 53. Inspección avanzada

Mostrar árbol de un commit:

```bash
git ls-tree HEAD
```

Recursivamente:

```bash
git ls-tree -r HEAD
```

Mostrar archivos rastreados:

```bash
git ls-files
```

Mostrar archivos ignorados:

```bash
git ls-files --ignored --exclude-standard --others
```

## 54. Git Archive

Crear ZIP del proyecto versionado:

```bash
git archive --format=zip HEAD > proyecto.zip
```

De una rama:

```bash
git archive --format=zip main > proyecto.zip
```

## 55. Sincronización avanzada

Actualizar referencias remotas:

```bash
git fetch --all --prune
```

Ver diferencias antes del pull:

```bash
git log HEAD..origin/main --oneline
```

Ver cambios locales que todavía no están en remoto:

```bash
git log origin/main..HEAD --oneline
```

## 56. Comandos especialmente útiles en equipos

```bash
git status
git fetch --prune
git pull --rebase
git branch -vv
git log --oneline --graph --decorate --all
git diff
git stash
git reflog
git rebase -i HEAD~N
git push --force-with-lease
```

## 57. Conventional Commits

Formato recomendado:

```text
<tipo>(<scope>): <descripción>
```

Ejemplos:

```bash
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): handle null response"
git commit -m "refactor(users): simplify repository"
git commit -m "docs(readme): add installation guide"
git commit -m "test(auth): add login tests"
git commit -m "chore(deps): update dependencies"
```

Tipos frecuentes:

```text
feat      nueva funcionalidad
fix       corrección
docs      documentación
style     formato
refactor  refactorización
test      pruebas
chore     mantenimiento
perf      rendimiento
build     build
ci        CI/CD
revert    revertir cambios
```

## 58. Regla rápida: reset vs revert vs restore

| Objetivo | Comando |
|---|---|
| Descartar cambios de un archivo | `git restore archivo` |
| Sacar archivo del staging | `git restore --staged archivo` |
| Deshacer commit local | `git reset` |
| Deshacer commit publicado | `git revert` |
| Recuperar commit perdido | `git reflog` |

## 59. Regla rápida: fetch vs pull

```text
git fetch
```

Descarga información del remoto, pero **no modifica tu rama actual**.

```text
git pull
```

Descarga información y la integra en tu rama.

Conceptualmente:

```text
git pull ≈ git fetch + git merge
```

o usando rebase:

```text
git pull --rebase ≈ git fetch + git rebase
```

## 60. Los 20 comandos que conviene memorizar

```bash
git init
git clone URL
git status
git add .
git commit -m "mensaje"
git log --oneline
git diff
git branch
git switch rama
git switch -c rama
git merge rama
git rebase main
git fetch
git pull --rebase
git push
git stash
git restore archivo
git revert commit
git reflog
git cherry-pick commit
```

## Mapa mental

```text
Working Directory
       │
       │ git add
       ▼
  Staging Area
       │
       │ git commit
       ▼
Local Repository
       │
       │ git push
       ▼
Remote Repository
```

Y en sentido contrario:

```text
Remote Repository
       │
       │ git fetch / git pull
       ▼
Local Repository
       │
       │ checkout / switch / restore
       ▼
Working Directory
```

## Comandos de emergencia

Cuando algo salió mal, antes de hacer operaciones destructivas:

```bash
git status
git log --oneline --graph --all
git reflog
```

Si vas a ejecutar alguno de estos:

```bash
git reset --hard
git clean -fd
git clean -fdx
git push --force
```

verifica primero qué cambios puedes perder.
