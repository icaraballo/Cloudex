# Cloudex — instrucciones para Claude Code

App web móvil para fotografiar nubes, dibujar la forma que ves y que una IA la analice.
Proyecto de portfolio: código limpio, bien organizado y fácil de enseñar.

## Dónde está la documentación

El vault de Obsidian `Vault_Proyectos/Cloudex/` es la fuente de verdad (en este PC:
`C:\Users\Pocope\proyectos\Vault_Proyectos\Cloudex\`). Empieza por `Cloudex.md`
(puerta de entrada) y `Tareas/CX-Instrucciones.md` (estado, reglas y pendientes).

## Reglas que hay que respetar siempre

- **La web nunca habla con la IA ni contiene claves.** Todo pasa por la Edge Function `analizar`.
- **Nada de claves en el repo.** `.env` está en `.gitignore`; el ejemplo es `.env.example`.
- **Nunca se lee ni se guarda el GPS ni el EXIF.** La foto se re-codifica en un canvas en el cliente.
  La ubicación y el momento del día son campos opcionales que escribe el usuario.
- **RLS desde el primer día.** Cada usuario solo lee y escribe lo suyo, también en Storage.
- **Toda la interfaz en castellano.** Código: nombres en castellano para el dominio
  (`foto`, `trazo`, `analisis`) y en inglés solo lo técnico estándar (`handler`, `props`).
- **Pregunta antes de decisiones de producto o de añadir dependencias grandes.**
- El proveedor de IA por defecto en desarrollo es `mock` (coste cero).
- Registra las decisiones técnicas en `docs/decisiones.md`.
- Un commit (o varios) por hito. Al cerrar el hito, di cómo probarlo desde el móvil.

## Comandos

`npm run dev` · `npm run build` · `npm run lint` · `npm run format`

## Antes de dar un hito por cerrado

`npm run lint`, `npm run format:check` y `npm run build` sin errores.
