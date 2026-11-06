// Un solo sitio para lo que puede cambiar: el nombre es provisional (Iñigo
// lo confirmó el 6-11-2026) y el límite diario debe ser configurable.

export const NOMBRE_APP = 'Cloudex'
export const LEMA_APP = 'Fotografía nubes y descubre qué ves en ellas'

// Debe coincidir con LIMITE_DIARIO de la Edge Function (el servidor manda;
// este valor solo sirve para enseñar "te quedan X" en la interfaz).
export const LIMITE_DIARIO_POR_DEFECTO = 10

// Zona horaria con la que se cuenta el "día" del límite diario.
export const ZONA_HORARIA = 'Europe/Madrid'
