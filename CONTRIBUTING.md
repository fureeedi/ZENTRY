## Motivos para su aplicación:
1. Facil manejo     
2. Facilidad de comprensión para nuevos colaborades.
3. Organización 
4. Buenas prácticas para la elaboración de nuevos commits

## Mensajes de confirmación:

- `<type> (<scope>): <tema>`

- `<body>`

- `<footer> (se cierran los requerimientos, issues, hotfixes, feature, release)`

**EJEMPLO:**
-feat(users): permitir registrar usuario con Google

Se añadió la autenticación por OAuth2 con Google. 
También se actualizó la base de datos para incluir el campo google_id.

Closes #1024

## ASUNTO DE MENSAJE
Describir claramente qué se hizo.
Debe ser una frase breve que diga qué cambio realizaste, sin contar los detalles técnicos.

✅ Usar modo imperativo.
Como si estuvieras dando una orden o instrucción, por ejemplo:

“agregar validación de correo”

“actualizar dependencias”

“corregir error en formulario”

“eliminar logs innecesarios”

➜ No se escribe en pasado (“se agregó”) ni en presente continuo (“agregando”).

✅ No terminar con punto.
Es una línea corta, sin signos al final.

✅ Ser breve (máximo 70–80 caracteres).
Lo ideal es que se entienda sin necesidad de ver el cuerpo del mensaje.

| **Tipo**     | **Descripción**                                                                                                                             | **Ejemplo de uso**                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **feat**     | Se usa cuando se **añade una nueva funcionalidad** al proyecto.                                                                             | `feat(login): agregar autenticación con Google`        |
| **fix**      | Se utiliza cuando se **corrige un error** o bug en el código.                                                                               | `fix(api): corregir error en el endpoint /users`       |
| **docs**     | Para **cambios en la documentación** (README, comentarios, guías, etc.).                                                                    | `docs(readme): actualizar pasos de instalación`        |
| **style**    | Cambios **que no afectan la lógica**, solo el formato o estilo del código (espacios, sangrías, comas, etc.).                                | `style(css): ajustar márgenes del formulario`          |
| **refactor** | Cambios en el código que **no corrigen errores ni agregan funciones nuevas**, pero **mejoran su estructura o legibilidad**.                 | `refactor(auth): simplificar validación de sesión`     |
| **test**     | Para **añadir o modificar pruebas** unitarias, de integración o e2e.                                                                        | `test(user): añadir pruebas unitarias para registro`   |
| **chore**    | Cambios **menores o de mantenimiento** que no afectan directamente al código de producción (configuración, tareas del build, dependencias). | `chore(deps): actualizar versión de express`           |
| **perf**     | Mejoras relacionadas con el **rendimiento o eficiencia** del sistema.                                                                       | `perf(db): optimizar consulta de usuarios`             |
| **build**    | Cambios que afectan el **sistema de compilación o dependencias** del proyecto.                                                              | `build(npm): agregar script para despliegue`           |
| **ci**       | Cambios en la **configuración del entorno de integración continua (CI/CD)**.                                                                | `ci(github): agregar workflow de pruebas automáticas`  |
| **revert**   | Cuando se **revierte un commit anterior**.                                                                                                  | `revert: eliminar cambios introducidos en feat(login)` |
| **hotfix**   | Se usa para **correcciones urgentes en producción**.                                                                                        | `hotfix(api): resolver error crítico en producción`    |
| **release**  | Para marcar o documentar una **nueva versión del proyecto**.                                                                                | `release: versión 1.2.0`                               |

### SCOPE: sirve para indicar que parte del proyecto ha sido afectada

| **Scope**       | **Descripción**                                                |
| --------------- | -------------------------------------------------------------- |
| **api**         | Cambios en los endpoints o lógica del backend.                 |
| **auth**        | Modificaciones relacionadas con autenticación o autorización.  |
| **db**          | Cambios en la base de datos: modelos, migraciones o consultas. |
| **ui**          | Cambios en la interfaz de usuario o componentes visuales.      |
| **ux**          | Ajustes de experiencia de usuario.                             |
| **config**      | Cambios en archivos de configuración o variables de entorno.   |
| **deps**        | Instalación o actualización de dependencias.                   |
| **docs**        | Cambios en documentación o guías.                              |
| **test**        | Cambios en pruebas unitarias o de integración.                 |
| **build**       | Modificaciones en scripts de compilación o despliegue.         |
| **ci**          | Configuración de integración continua.                         |
| **styles**      | Cambios visuales (CSS, colores, fuentes, etc.).                |
| **utils**       | Cambios en funciones auxiliares o helpers.                     |
| **core**        | Cambios en la arquitectura o núcleo de la aplicación.          |
| **security**    | Correcciones o mejoras de seguridad.                           |
| **feature**     | Cambios o agregados de módulos grandes o completos.            |
| **performance** | Mejoras de rendimiento o eficiencia.                           |


## Cuerpo del mensaje:
Descripcion breve y concisa con informacion de utilidad que ayude a determinar de que trata el cambio para no dejar lugar a dudas.Por lo general, describir como se resolvio sin entrar en detalles tecnicos.

Footer:
Los issues cerrados deben ir enumerados en una linea separada del pie de pagina con la palabra clave Closes. Adicionalmente en caso de ser necesario agregar un co-autor se debera agregar en el footer.

Ejemplo:

co-authored-by: Jose Andres <correo@hola.co>.

Closes #3030, #1010, #2020.

## Semantica de versionamiento:
Se utilizará Versionamiento Semantico 2.0.0-rc.2

### Motivos para su aplicación:
- Versionamiento de complejidad baja.
- Lenguaje sencillo y entendible para nuevos colaboradores.
- Llevar orden en el desarrollo del proyecto permitiendo un control sobre el estado del mismo.

### Versionamiento:
Se han de aplicar las siguientes restricciones y normas al versionado del proyecto:

se usara los digitos en orden MAJOR.MINOR.PATCH donde estos son enteros (no negativos).


Tener en cuenta:

Por lo general estos cambios pueden resultar en incompatibilidad con algunas funciones de sus versiones anteriores.


**Ejemplo:**

zentry 1.0.1