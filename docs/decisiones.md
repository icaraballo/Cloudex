# Decisiones técnicas

Cada decisión, con su fecha y el porqué. Las de producto las toma Iñigo.

## 6-11-2026 · Hito 1

**Vite + React + TypeScript, en la raíz del repo.** Es lo que pide el brief y encaja con
Capacitor (la web ya es una app de una sola página). No hay un subdirectorio `app/` porque el
repo solo tiene una aplicación; `supabase/` y `docs/` conviven con ella en la raíz.

**oxlint en vez de ESLint.** La plantilla actual de Vite ya trae oxlint (mucho más rápido) y
no hay motivo para sustituirlo. Prettier se añade aparte para el formato.

**Nombre centralizado en `src/config/app.ts`.** Aunque Iñigo confirmó «Cloudex» el 6-11-2026,
un solo sitio facilita renombrar y guardar constantes como el límite diario.

**Esquema `cloudex` en Postgres.** Este Supabase podría acabar compartido con los juegos y la
app de comida; un esquema propio evita mezclar tablas. Nombres de tablas y columnas en castellano.

**Sin EXIF ni hora de la foto.** El EXIF se borra entero al re-codificar en un canvas. En lugar
de `hecha_en`, el usuario puede rellenar dos campos opcionales: `ubicacion_texto` (texto libre)
y `momento_dia` (amanecer, mañana, mediodía, tarde, atardecer, anochecer, noche).

**El límite diario cuenta también los rechazos.** Los «no es cielo» no se guardan, así que el
límite se lleva en una tabla aparte (`uso_diario`) y no contando filas de `analisis`.

**`es_vigente` en `analisis`.** Permite reanalizar una foto con otro modelo y quedarse con el
resultado que se muestra, sin migrar más adelante.

**Supabase local diferido.** Docker no está instalado en el PC de desarrollo; se instala antes
del hito 4. Los hitos 1 a 3 no lo necesitan.

## Dependencias previstas (aprobadas por Iñigo, aún sin instalar)

| Paquete                 | Para qué                          | Hito |
| ----------------------- | --------------------------------- | ---- |
| `@supabase/supabase-js` | Hablar con Supabase               | 4    |
| `zod`                   | Validar la respuesta de la IA     | 3    |
| `react-router`          | Navegar entre las cinco pantallas | 2    |

Nada de librerías de dibujo ni de interfaz: el editor va con `<canvas>` propio. `exifr` queda
descartada: ya no se lee ningún dato de la foto.
