# Cloudex

App web (móvil primero) para fotografiar nubes y dibujar encima la forma que ves
("un dragón con sombrero"). Una IA con visión dice qué tipo de nube es y si se
reconoce tu forma. Tú pones la parte creativa; la IA, la técnica.

**Estado:** v0.1 en construcción — hito 1 (base del proyecto). Proyecto de portfolio.

## Cómo arrancar

Requisitos: [Node.js](https://nodejs.org) 22 o superior.

```bash
npm install
npm run dev
```

Se abre en <http://localhost:5173>.

### Probarlo desde el móvil

Con el PC y el móvil en la misma wifi, `npm run dev` enseña también una línea
`Network: http://192.168.x.x:5173`. Escribe esa dirección en el navegador del móvil.

> La cámara del móvil exige HTTPS en direcciones que no sean `localhost`. Hasta el
> hito 2 no hace falta; en ese hito se explicará cómo probarla.

### Comandos

| Comando          | Qué hace                                                     |
| ---------------- | ------------------------------------------------------------ |
| `npm run dev`    | Arranca la web en modo desarrollo                            |
| `npm run build`  | Comprueba tipos y genera la versión de producción en `dist/` |
| `npm run lint`   | Revisa el código con oxlint                                  |
| `npm run format` | Da formato al código con Prettier                            |

## Estructura

```
src/
  config/       nombre de la app, límites y otras constantes
  pantallas/    una por pantalla (login, nueva foto, editor, resultado, colección)
  componentes/  piezas reutilizables
  lib/          lógica sin interfaz (trazo, imagen, proveedores de IA)
prompts/        instrucciones del modelo de IA, ajustables sin tocar código
supabase/       base de datos y Edge Functions (a partir del hito 4)
docs/           documento de diseño y decisiones técnicas
```

## Claves y gasto

- No hay claves en el repo. Copia `.env.example` a `.env` y rellénalo.
- La web **nunca** habla con la IA: todo pasa por la Edge Function `analizar`.
- **Recordatorio:** al usar un proveedor de IA de pago, poner a mano un **tope de gasto
  mensual** en la consola del proveedor. La app limita a 10 análisis al día por usuario,
  pero el tope de la cuenta es la red de seguridad.

## Documentación

- [`docs/cloudex/cloudex.md`](docs/cloudex/cloudex.md): la idea, las fases y el coste.
- [`docs/decisiones.md`](docs/decisiones.md): decisiones técnicas y por qué.
- La documentación completa vive en el vault de Obsidian (carpeta `Cloudex/`).
