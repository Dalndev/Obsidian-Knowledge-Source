---
tags:
  - clean-arch
  - architecture
  - develop
---
> *Regla. Únicamente las capas mas externas pueden dependen de las carpas mas internas.*
> 1. La capa del dominio necesita ser **independiente**.
> 2. La capa de aplicación **depende del dominio**.
> 3. Las capas externas pueden tener dependencia de cualquier otra capa

---
![[Pasted image 20260526201831.png]]

---

Un gestion ineficiente de las dependencias en el proyecto puede resultar en un código complicado y confuso, lo que presenta.
1. Dependencias circulares (A -> B, B -> C := A -> C)
2. Baja integración de **test**, es necesario simular todo el sistema para testar una parte del mismo.
3. Alto acoplamiento, genera una frágil interacción entre modulo.