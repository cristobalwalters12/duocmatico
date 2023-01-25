# Como contribuir

- [Reporte de errores](#reporte-de-errores)
- [Discusiones sobre el desarrollo](#discusiones-sobre-el-desarrollo)
- [A que rama contribuir?](#a-que-rama-contribuir)
- [Estilo del codigo](#estilo-del-codigo)

## Reporte de errores

Cualquier error encontrado dentro de Duocmatico, debes dirigirte a la seccion de [issues][issues] y crear una para bugs. Recuerda que el titulo debe ser claro y proveer dentro del reporte la mayor cantidad de informacion posible. La meta del reporte de errores es hacerle la vida mas facil a ti - y a otras persona - para replicar el error y poder desarrollar una solucion.

## Discusiones sobre el desarrollo

Puedes proponer nuevas funcionalidades o mejoras a las que ya existen en Duocmatico dentro de las mismas [issues][issues]. Tenemos un template listo para que puedas dejar tus ideas!

Rodrigo suele estar revisando esto bien seguido (le llegan las notificaciones al correo)

## A que rama contribuir?

**Todos** los arreglos de bugs deben ser subidos a la ultima version estable (`1.x`). Arreglos y soluciones de bugs nunca se deben enviar a la rama `master` a no ser que se este arreglando algun error de las caracteristicas que esten por ser publicadas en una version superior a la actual.

Funcionalidades secundarias (`Minor features`) que sean totalmente compatibles se deben enviar a la rama con la version estable actual. (`1.x`)

Nuevas funcionalidades (`Major features`) o funciones que tengan cambios importantes (`Breaking changes`) siempre se deben enviar a la rama `master`.

Lo mismo aplica para la documentacion.

## Estilo del codigo

Esto es algo bien ambiguo. Se agradece seguir el estandar para JS. Algunos ejemplos de esto son:

- [Estandar de w3 shcool][w3school-standar]
- [Estandar de VUE][vue-standar]

> Personalmente yo ([@BaaltRodrigo][founder]) no suelo seguir los estandares _al pie de la letra_. Si tienes que salirte un poco del estandar para poder hacer mas leible el codigo, hazlo.

[issues]: https://github.com/BaaltRodrigo/duocmatico/issues
[w3school-standar]: https://www.w3schools.com/js/js_conventions.asp
[vue-standar]: https://v2.vuejs.org/v2/style-guide/
[founder]: https://github.com/BaaltRodrigo
