Un usuario es un objeto del directorio de la organización que representa una identidad humana donde existen varios tipos de usuarios.
- **Internal User**. Tipo de usuario que tiene definida su identidad dentro de la organización principal.
- **Internal Guest**. Tipo de usuario que tiene definida su identidad en la organización principal pero posee permisos de invitado (**Guest**). Implementación Legacy 
- **External User**. Tipo de usuario que tiene definida su identidad en una organización externa, pero posee un acceso Member a los recursos de la organización. Normalmente es implementado en una organización Multitenant.
- **External Guest**. Tipo de usuario que tiene definida su identidad en un proveedor externo y posee un acceso de tipo Guest a los recursos de la organización. Se caracteriza por tener un identifica similar al siguiente `contoso_gmail.com#EXT#@contoso.onmicrosoft.com`

**Propiedades Generales**.

**Object ID**. Es el GUID identificador generado por los servicios para recuperar el objeto dentro del tenant.
**User Type**. Indica la relación (Member o Guest) que el usuario tiene con el tenant.
**UPN**. Es el nombre de inicio de sesión definido para usuario para el acceso a recursos de la organización.

**Estados Operativos**.

- `Activa`. Estado que indica que un usuario puede autenticarse si cumple las políticas.
- `Bloqueada`. Estado que indica que un usuario no puede acceder a la organización
- `Sin Licencia`. Estado que indica que el usuario existe pero no tiene habilitado determinados servicios.
- `Invitación Pendiente`. Estado que indica que un usuario externo fue creado en la organización pero no redimido.
- `Invitación Aceptada`. Estado que indica que un usuario externo se encuentra vinculado al tenat de destino.
- Sincronizada.
- `Fuera de alcance`. Estado que indica que una cuenta no cumple con las reglas de aprovisionamiento.
- `Eliminada lógicamente`. Estado que inicia que una cuenta eliminada es recuperable durante 30 días.
- `Eliminada permanentemente`. Estado que indica que la cuenta no es recuperable.
